import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { provider } from "../config/regester.js";
import { auth } from "../config/regester.js";

//login button
document.getElementById("btn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user.email);
            if (user) {
                console.log("half done");
                if (!user.email.endsWith("23@iiserb.ac.in")) {
                    alert("Only for IISERB 24 Batch!");
                    user.delete().then(() => {
                    }).catch((error) => {
                        console.error("Error deleting user:", error);
                    });
                    firebase.auth().signOut();
                }
            }
            window.location.href = "./main.html";
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
});
