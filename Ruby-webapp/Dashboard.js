import { auth, db, rtdb } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { doc, getDoc, updateDoc, collection } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

onAuthStateChanged(auth, function(user) {
    if (!user || !user.emailVerified) {
        window.location.href = "index.html";
        return;
    }

    document.body.style.visibility = "visible";
    loadProfileData(user);
    showPageFromHash();
});

device_data();


function showPageFromHash() {
    const video = document.getElementById("device-video");
    const hash = window.location.hash || "#home";
    const pageId = hash.replace("#", "");
    const targetPage = document.getElementById(pageId);
    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });



   if (video) {
     if (pageId === "devices") {
            video.currentTime = 0;
            video.play();
    } else {
            video.pause();
        }
    }


    if (targetPage) {
        targetPage.classList.add("active");
    }

    document.querySelectorAll(".menu, .menu-d").forEach(function(link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === hash) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("hashchange", showPageFromHash);

function loadProfileData(user) {
    const nameInput = document.getElementById("name-input");
    const emailDisplay = document.getElementById("email-display");
    const pfpImg = document.getElementById("pfp-img");
    const pfpInt = document.getElementById("pfp-int");

    if (emailDisplay) emailDisplay.textContent = user.email;

    getDoc(doc(db, "users", user.uid)).then(function(docSnap) {
        if (docSnap.exists()) {
            const data = docSnap.data();
            if (nameInput && data.name) nameInput.value = data.name;


if (data.photoURL) {
                if (pfpImg) {
                    pfpImg.src = data.photoURL;
                    pfpImg.style.display = "block";
                }
                if (pfpInt) pfpInt.style.display = "none";
            }
            const deviceKeyDisplay = document.getElementById("device-key-display");
            const deviceKeyAlert = document.getElementById("deviceKeyAlert");
            const genKeyBtn = document.getElementById("gen-key-btn");

            if (data.deviceKey) {
                if (deviceKeyDisplay) {
                    deviceKeyDisplay.textContent = data.deviceKey;
                    deviceKeyDisplay.classList.add("generated");
                }


                if (genKeyBtn) genKeyBtn.classList.add("generated"); 
                                if (deviceKeyAlert) deviceKeyAlert.style.display = "none";
            } else {
                if (deviceKeyDisplay) {
                    deviceKeyDisplay.textContent = "Not Generated";
                    deviceKeyDisplay.classList.remove("generated");
                }

                
                if (genKeyBtn) genKeyBtn.classList.remove("generated");
                if (deviceKeyAlert) deviceKeyAlert.style.display = "flex";
            }
        } 
        
        
        else {
            if (nameInput) nameInput.value = user.email.split("@")[0];
        }
    });
}

function device_data() {
    device_lost();
    const deviceRef = ref(rtdb, "device_data");


    onValue(deviceRef, (snapshot) => {
        const data = snapshot.val();

     if (data) {
 if (data.temperature !== undefined) {
                document.getElementById("temp").textContent = data.temperature + "°C";
            }
            if (data.humidity !== undefined) {
                document.getElementById("humidity").textContent = data.humidity + "%";
            }
            if (data.uptime !== undefined) {
                document.getElementById("uptime").textContent = data.uptime;
            }
            if (data.rssi !== undefined) {
    document.getElementById("wifiRssi").textContent = data.rssi + " dBm";
     }
            resetWatchdog();
        resetWatchdog();
        }
    });
}

function device_lost() {
      const statusEl = document.getElementById("deviceStatus");
     const rssiEl = document.getElementById("wifiRssi"); 
      if (statusEl) {
            statusEl.className = "status offline";
        statusEl.innerHTML = '<span class="status-dot"></span> Offline';
    }

    document.getElementById("temp").textContent = "-- °C";
    document.getElementById("humidity").textContent = "-- %";
    document.getElementById("uptime").textContent = "--";  
    if (rssiEl) rssiEl.textContent = "-- dBm"; 
}

let watchdogTimer = null;

function resetWatchdog() {
    const statusEl = document.getElementById("deviceStatus");
    if (statusEl && !statusEl.classList.contains("online")) {
        statusEl.className = "status online";
        statusEl.innerHTML = '<span class="status-dot"></span> Online';
    }

    if (watchdogTimer) {
        clearTimeout(watchdogTimer);
    }
    watchdogTimer = setTimeout(() => {
        device_lost();
    }, 1500); 
}


const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        signOut(auth).then(function() {
            window.location.href = "index.html";
        });
    });
}




const pfpInput = document.getElementById("pfp-input");
const pfpImg = document.getElementById("pfp-img");
const pfpInt = document.getElementById("pfp-int");

if (pfpInput) {
    pfpInput.addEventListener("change", function(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement("canvas");
                canvas.width = 120;
                canvas.height = 120;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, 120, 120);

                const optimizedImage = canvas.toDataURL("image/jpeg", 0.8);

                if (pfpImg) {
                    pfpImg.src = optimizedImage;
                    pfpImg.style.display = "block";
                }
                if (pfpInt) pfpInt.style.display = "none";

                if (auth.currentUser) {
                    updateDoc(doc(db, "users", auth.currentUser.uid), {
                        photoURL: optimizedImage
                    });
                }
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });
}



const editBtn = document.getElementById("edit-btn");
const profileWrap = document.getElementById("profile-wrap");
const nameInput = document.getElementById("name-input");

let isEditing = false;

if (editBtn) {
    editBtn.addEventListener("click", () => {
        isEditing = !isEditing;

        nameInput.disabled = !isEditing;
        if (profileWrap) profileWrap.classList.toggle("editing", isEditing);
        editBtn.classList.toggle("active", isEditing);

        if (isEditing) {
            nameInput.focus();
        } else {
            if (auth.currentUser && nameInput.value.trim() !== "") {
                updateDoc(doc(db, "users", auth.currentUser.uid), {
                    name: nameInput.value.trim()
                });
            }
        }
    });
}


genKeyBtn.addEventListener("click", function() {
        const newKey = doc(collection(db, "devices")).id; 

        if (auth.currentUser) {
            updateDoc(doc(db, "users", auth.currentUser.uid), {
                deviceKey: newKey
            }).then(() => {
                const deviceKeyDisplay = document.getElementById("device-key-display");
                const alertBanner = document.getElementById("deviceKeyAlert");
                
                if (deviceKeyDisplay) {
                    deviceKeyDisplay.textContent = newKey;
                    deviceKeyDisplay.classList.add("generated"); 
                }
                genKeyBtn.classList.add("generated");
                
                if (alertBanner) alertBanner.style.display = "none"; 
            });
        }
    });