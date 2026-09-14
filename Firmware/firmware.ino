// This is demo firmware for ruby home automtion project
// It might have bugs. but will fix it once I received the hardware
// Also I will integrate the Home assistant, Rainmaker, kme soon!
// Thank you so much for understanding.!
// I check the realtime server connectvity and other thing runing on stand alone esp32

// Credits
// This project mostly used the example code given for esp32 
// thanks to https://randomnerdtutorials.com for fire base guide

#define ENABLE_USER_AUTH
#define ENABLE_DATABASE


#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <FirebaseClient.h>
#include "DHT.h"
#include <IRremoteESP8266.h>
#include <IRrecv.h>
#include <IRsend.h>
#include <IRutils.h>


// lights controls
#define relay1 33
#define relay2 25
#define relay3 26
#define relay4 27

// Fan control
#define relay5 13
#define relay6 21
#define relay7 22

// SW Input
#define SW1 16
#define SW2 17
#define SW3 5
#define SW4 18
#define SW5 32

// indicator
#define Ruby 12

// IR reciver
#define IRI 34

// IR Blaster
#define IR 4

IRrecv irrecv(IRI);
IRsend irsend(IR);
decode_results results;

uint32_t savedIRCodes[4] = {0, 0, 0, 0};
int lastUsedSwitch = 1;

int brightness = 0;
int fadeAmount = 5;
unsigned long lastFadeTime = 0;


#define BOOT_BTN 0

#define DHT_PIN 14
#define DHTTYPE DHT11
DHT dht(DHT_PIN, DHTTYPE);


const char *ssid = "LAPTOP 4429";
const char *password = "5}042Gx9";
const char *DATABASE_URL = "https://ruby-homeautomation-default-rtdb.firebaseio.com";
unsigned long lastSensorSendTime = 0;
const unsigned long sensorInterval = 10000;

void processData(AsyncResult &aResult);

NoAuth no_auth;
FirebaseApp app;
WiFiClientSecure ssl_client;
using AsyncClient = AsyncClientClass;
AsyncClient aClient(ssl_client);
RealtimeDatabase Database;


// The value after bootup
int lastSW1 = LOW, lastSW2 = LOW, lastSW3 = LOW, lastSW4 = LOW;
int currentFanSpeed = 0;
int lastFanSpeed = -1;

// Variables to send to the database
int intValue = 0;
String stringValue = "";


void setup(){
pinMode (relay1, OUTPUT);
pinMode (relay2, OUTPUT);
pinMode (relay3, OUTPUT);
pinMode (relay4, OUTPUT);
pinMode (relay5, OUTPUT);
pinMode (relay6, OUTPUT);
pinMode (relay7, OUTPUT);
pinMode (Ruby, OUTPUT);
pinMode (IR, OUTPUT);
pinMode (SW1, INPUT_PULLUP);
pinMode (SW2, INPUT_PULLUP);
pinMode (SW3, INPUT_PULLUP);
pinMode (SW4, INPUT_PULLUP);
pinMode(DHT_PIN, INPUT);
pinMode (IRI, INPUT);

Serial.begin(115200);
dht.begin();

WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected!");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());



  ssl_client.setInsecure();
  ssl_client.setConnectionTimeout(1000);
  ssl_client.setHandshakeTimeout(5);
  


 initializeApp(aClient, app, getAuth(no_auth), processData, "authTask");
  app.getApp<RealtimeDatabase>(Database);
  Database.url(DATABASE_URL);

pinMode(BOOT_BTN, INPUT_PULLUP);
irrecv.enableIRIn();
irsend.begin();

}

void loop(){
  app.loop();



if (digitalRead(SW1) == LOW){
  digitalWrite(relay1, HIGH);
  if (app.ready()) Database.set<int>(aClient, "/Appliances/relay1", 1, processData, "Set_Relay1");
  } else {
    digitalWrite(relay1, LOW);
  }

if (digitalRead(SW2) == LOW){
  digitalWrite(relay2, HIGH);
  if (app.ready()) Database.set<int>(aClient, "/Appliances/relay2", 1, processData, "Set_Relay2");
   } else {
  digitalWrite(relay2, LOW);
   }

if (digitalRead(SW3) == LOW){
  digitalWrite(relay3, HIGH);
   } else {
    digitalWrite(relay3, LOW);
if (app.ready()) Database.set<int>(aClient, "/Appliances/relay3", 0, processData, "Set_Relay3");
   }

if (digitalRead(SW4) == LOW){
  digitalWrite(relay4, HIGH);
if (app.ready()) Database.set<int>(aClient, "/Appliances/relay4", 1, processData, "Set_Relay4");
   } else {
    digitalWrite(relay4, LOW);
   }






int SW_value = analogRead(SW5);
int detectedSpeed = 0;

if (SW_value > 3500) {
  digitalWrite(relay5, LOW);
  digitalWrite(relay6, LOW);
  digitalWrite(relay7, LOW);
  detectedSpeed = 0;
} else if (SW_value > 2500) {
  digitalWrite(relay5, HIGH);
  digitalWrite(relay6, LOW);
  digitalWrite(relay7, LOW);
  detectedSpeed = 1;
   } else if (SW_value > 1500) {
  digitalWrite(relay5, LOW);
  digitalWrite(relay6, HIGH);
  digitalWrite(relay7, LOW);
  detectedSpeed = 2;
 } else {
  digitalWrite(relay5, LOW);
  digitalWrite(relay6, LOW);
  digitalWrite(relay7, HIGH);
  detectedSpeed = 3;
 }

if (detectedSpeed != lastFanSpeed) {
    lastFanSpeed = detectedSpeed;
    if (app.ready()) Database.set<int>(aClient, "/Appliances/fan", detectedSpeed, processData, "Set_Fan");
  }


if (app.ready()) {
    unsigned long currentTime = millis();
    if (currentTime - lastSensorSendTime >= sensorInterval) {
      lastSensorSendTime = currentTime;

      float h = dht.readHumidity();
      float t = dht.readTemperature();
if (!isnan(h) && !isnan(t)) {
        Database.set<float>(aClient, "/sensor/temperature", t, processData, "RTDB_Temp");
        Database.set<float>(aClient, "/sensor/humidity", h, processData, "RTDB_Humid");

if (digitalRead(BOOT_BTN) == LOW) {
  analogWrite(Ruby, 255);
  unsigned long startWait = millis();
  bool captured = false;
  while (millis() - startWait < 5000) {
    if (irrecv.decode(&results)) {
      if (results.value != 0 && results.value != 0xFFFFFFFF) {
        savedIRCodes[lastUsedSwitch - 1] = results.value;
        captured = true;
        irrecv.resume();
        break;
      }
      irrecv.resume();
    }
    delay(10);
  }
  if (captured) blinkRuby(4);
  else analogWrite(Ruby, 0);
         }


if (irrecv.decode(&results)) {
  uint32_t code = results.value;
  if (code != 0 && code != 0xFFFFFFFF) {
    for (int i = 0; i < 4; i++) {
      if (savedIRCodes[i] != 0 && code == savedIRCodes[i]) {
        int targetRelay = (i == 0) ? relay1 : (i == 1) ? relay2 : (i == 2) ? relay3 : relay4;
        int newState = !digitalRead(targetRelay);
        digitalWrite(targetRelay, newState);
        blinkRuby(1);
        if (app.ready()) Database.set<int>(aClient, ("/Appliances/relay" + String(i + 1)).c_str(), newState, processData, "IR_Set");
        break;
      }
    }
  }


  irrecv.resume();
}


      }
    }
  }
}

void processData(AsyncResult &aResult) {
 if (aResult.isError()) {
    Firebase.printf("Error task: %s, msg: %s, code: %d\n", aResult.uid().c_str(), aResult.error().message().c_str(), aResult.error().code());
  }

  if (aResult.available()) {
    Firebase.printf("Task completed: %s\n", aResult.uid().c_str());
  }
}


void handleRubyBreathing() {
  unsigned long currentMillis = millis();
  if (currentMillis - lastFadeTime >= 20) {
    lastFadeTime = currentMillis;
    analogWrite(Ruby, brightness);
    brightness += fadeAmount;
    if (brightness <= 0 || brightness >= 255) fadeAmount = -fadeAmount;
  }
}

void blinkRuby(int times) {
  for (int i = 0; i < times; i++) {
    analogWrite(Ruby, 255); delay(100);
    analogWrite(Ruby, 0); delay(100);
  }
}



/*
It is Your Duty to begin creating your own Amazing Project using the ruby While Taking Firmware as Reference,
And explore & learn more about the board's capabilities.
 Happy hacking!
If you're experiencing an issue that is not covered in this guide, please open a GitHub Issue.
*/
