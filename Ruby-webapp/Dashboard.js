import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

onAuthStateChanged(auth, function(user) {
    if (!user || !user.emailVerified) {
        window.location.href = "index.html";
        return;
    }

    document.body.style.visibility = "visible";
    loadProfileData(user);
    showPageFromHash();
});

function showPageFromHash() {
    const hash = window.location.hash || "#home";
    const pageId = hash.replace("#", "");
    const targetPage = document.getElementById(pageId);

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

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

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        signOut(auth).then(function() {
            window.location.href = "index.html";
        });
    });
}
