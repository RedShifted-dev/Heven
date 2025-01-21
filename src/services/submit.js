import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { provider } from "../config/regester.js";
import { auth } from "../config/regester.js";
import { app } from "../config/regester.js";
import { loginPoint } from "../config/hell.js";


// Initialize Firestore
const db = getFirestore(app);


//login button
document.getElementById("btn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then(async (result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user.email);
            if (user) {
                // Check if user is existing or not
                const userRef = doc(db, "users", user.uid);
                const userSnap = await getDoc(userRef);

                if (userSnap.exists()) {
                    window.location.href = "./main.html";
                }
                else {
                    // Check if user is from IISERB 23 batch
                    if (!user.email.endsWith("23@iiserb.ac.in")) {
                        alert("Only for IISERB 23 Batch!");
                        user.delete().then(() => {
                        }).catch((error) => {
                            console.error("Error deleting user:", error);
                        });
                        firebase.auth().signOut();
                    }
                    else {
                        setDoc(doc(db, "users", user.uid), {
                            uid: user.uid,
                            userName: user.displayName,
                            email: user.email,
                        }).then(() => {
                            loginPoint(user.uid);
                            window.location.href = "./main.html";
                        });
                    }
                }
            }
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
});
