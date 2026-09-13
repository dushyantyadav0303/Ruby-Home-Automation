import { auth, db, rtdb } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

onAuthStateChanged(auth, function(user) {
    if (!user || !user.emailVerified) {
        window.location.href = "index.html";
        return;
    }

    document.body.style.visibility = "visible";
    loadProfileData(user);
    showPageFromHash();
    device_data();
});

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
    const profileNameEl = document.getElementById("profileName");
    const profileEmailEl = document.getElementById("profileEmail");
    const avatarInitialEl = document.getElementById("avatarInitial");
    const rowName = document.getElementById("rowName");
    const rowEmail = document.getElementById("rowEmail");
    const rowJoined = document.getElementById("rowJoined");

    if (profileEmailEl) profileEmailEl.textContent = user.email;
    if (rowEmail) rowEmail.textContent = user.email;

    getDoc(doc(db, "users", user.uid)).then(function(docSnap) {
        if (docSnap.exists()) {
            const data = docSnap.data();

            if (profileNameEl) profileNameEl.textContent = data.name;
            if (rowName) rowName.textContent = data.name;
            if (avatarInitialEl) avatarInitialEl.textContent = data.name.charAt(0).toUpperCase();

            if (data.createdAt && rowJoined) {
                const date = data.createdAt.toDate();
                rowJoined.textContent = date.toLocaleDateString();
            }
        } else {

            if (profileNameEl) profileNameEl.textContent = user.email;
            if (avatarInitialEl) avatarInitialEl.textContent = user.email.charAt(0).toUpperCase();
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
    }, 10000); 
}


const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        signOut(auth).then(function() {
            window.location.href = "index.html";
        });
    });
}
