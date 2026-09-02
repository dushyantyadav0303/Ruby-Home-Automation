//  Really thanks to https://firebase.google.com/docs
// Firebase well Define docs make my works easy fr

import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, setPersistence, browserLocalPersistence, browserSessionPersistence, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

let Login = true;

const startupVideo = document.getElementById("startup-video");
const staticLogo = document.getElementById("Ruby");
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("login-message");
const wrapper = document.querySelector(".wrapper");
const typingSound = document.getElementById('Typing-sound-effect');
const backToLoginBtn = document.getElementById("backToLogin");
const sword = document.getElementById("sword");
const goToRegisterLink = document.getElementById("goToRegister");
const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("register-message");
const forgotPasswordLink = document.getElementById("forgotPassword");


onAuthStateChanged(auth, function(user) {
    if (user && user.emailVerified) {
        console.log("Already logged in as:", user.email);
        window.location.href = "home.html";
    }
});


// demo id / pass for reviewer 
// const correctEmail = "Nathan@gmail.com";
// const correctPassword = "NotaRomba";

startupVideo.addEventListener("ended", function() {
    startupVideo.style.display = "none";    
        staticLogo.style.display = "block";     
});



function checkLogin() {
    if (Login) {
        console.log("Sign in first");
        
         registerForm.style.display = "none";
        loginForm.style.display = "flex";
        document.querySelector('.video-animation').classList.add('login-animation');
        
        setTimeout(function() {
        document.querySelector('.opps-text p').classList.add('start-typing');
        document.querySelector('.signin-text p').classList.add('start-typing');
        wrapper.classList.add('show-login');
        setTimeout(function () {
        typingSound.currentTime = 0;
        typingSound.play();
        }, 800);
        }, 500);
    } 
    else {
         console.log("opps pls signin");   
  }
}

setTimeout(checkLogin, 3000);




loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("remember").checked;

    const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;

    setPersistence(auth, persistenceType)
        .then(function() {
            return signInWithEmailAndPassword(auth, email, password);
        })

.then(function(userCredential) {
    const user = userCredential.user;

    if (!user.emailVerified) {
        message.textContent = "Please verify your email before logging in. Check your inbox!";
        message.style.color = "orange";
        return;
    }

    message.textContent = "Login successful!";
    message.style.color = "lime";

    setTimeout(function() {
        window.location.href = "home.html";
    }, 1000);
})

    .catch(function(error) {
            console.error(error.code, error.message);

            if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
                message.textContent = "wait waht, Incorrect email or password!!!";
            } else if (error.code === "auth/invalid-email") {
                message.textContent = "uhh, That doesn't look like a valid email.";
            } else if (error.code === "auth/too-many-requests") {
                message.textContent = "Fahhh, Too many attempts. Try again later.";
            } else {
                message.textContent = "ahhh, Something went wrong. Try again.";
            }
            message.style.color = "red";
        });
});
     togglePassword.addEventListener("click", function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text"
            togglePassword.src = "assets/visible.png";
        } else {
            passwordInput.type = "password"
            togglePassword.src = "assets/closed-eyes.png";
        }

});

forgotPasswordLink.addEventListener("click", function(event) {
    event.preventDefault();

    const resetEmail = document.getElementById("email").value;

    if (!resetEmail) {
        message.textContent = "Type your email above first, then click 'Forgot password?'";
        message.style.color = "orange";
        return;
    }

    sendPasswordResetEmail(auth, resetEmail)
        .then(function() {
            message.textContent = "Password reset link sent! Check your inbox.";
            message.style.color = "lime";
        })
 .catch(function(error) {
            console.error(error.code, error.message);

            if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
                message.textContent = "wait waht, Incorrect email or password!!!";
            } else if (error.code === "auth/invalid-email") {
                message.textContent = "uhh, That doesn't look like a valid email.";
            } else if (error.code === "auth/too-many-requests") {
                message.textContent = "Fahhh, Too many attempts. Try again later.";
            } else {
                message.textContent = "ahhh, Something went wrong. Try again.";
            }
            message.style.color = "red";
        });
});



registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const regEmail = document.getElementById("reg-email").value;
    const newPassword = document.getElementById("new-password").value;
    const checkPassword = document.getElementById("check-password").value;

    if (newPassword !== checkPassword) {
        registerMessage.textContent = "huh? Passwords don't match!";
        registerMessage.style.color = "red";
        return;
    }

    let newUser;
    createUserWithEmailAndPassword(auth, regEmail, newPassword)
    .then(function(userCredential) {
        newUser = userCredential.user;
        return sendEmailVerification(newUser);
    })
    .then(function() {
        return setDoc(doc(db, "users", newUser.uid), {
            name: name,
            email: regEmail,
            createdAt: new Date()
        });
    })
    .then(function() {
        registerMessage.textContent = "yoo, Account created! Check your email to verify before logging in.";
        registerMessage.style.color = "lime";
    })
.catch(function(error) {
            console.error(error.code, error.message);

            if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
                message.textContent = "wait waht, Incorrect email or password!!!";
            } else if (error.code === "auth/invalid-email") {
                message.textContent = "uhh, That doesn't look like a valid email.";
            } else if (error.code === "auth/too-many-requests") {
                message.textContent = "Fahhh, Too many attempts. Try again later.";
            } else {
                message.textContent = "ahhh, Something went wrong. Try again.";
            }
            message.style.color = "red";
        });
});







goToRegisterLink.addEventListener("click", function(event) {
    event.preventDefault();
    wrapper.style.opacity = "0"; 


  document.querySelector('.video-animation').classList.remove('login-animation');
  document.querySelector('.video-animation').classList.add('register-animation');
        
    setTimeout(function() {
        sword.classList.add("spin");
    }, 1000);

    setTimeout(function() {
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
    }, 2000);
    
setTimeout(function() {
         document.querySelector('.video-animation').classList.remove('register-animation');
         document.querySelector('.video-animation').classList.add('login-animation');
        sword.classList.remove("spin");
          wrapper.style.opacity = "1";
}, 2200);

});


backToLoginBtn.addEventListener("click", function(event) {
    event.preventDefault();
    wrapper.style.opacity = "0";


    document.querySelector('.video-animation').classList.remove('login-animation');
    document.querySelector('.video-animation').classList.add('register-animation');

    setTimeout(function() {
        sword.classList.add("spin");
    }, 1000);



    setTimeout(function() {
         registerForm.style.display = "none";
        loginForm.style.display = "flex";
    }, 2000);

setTimeout(function() {
            sword.classList.remove("spin");
         document.querySelector('.video-animation').classList.remove('register-animation');
         document.querySelector('.video-animation').classList.add('login-animation');
          wrapper.style.opacity = "1";
}, 2200);

})

