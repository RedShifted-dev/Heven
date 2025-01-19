const wrapper = document.querySelector('.wrapper');

import { Submit } from "../services/submit.js";

export function validEmail(email) {
    // const gmailRegex = /^[a-zA-Z0-9._%+-]+@iiserb\.ac\.in$/;
    // const gmailRegex24 = /^[a-zA-Z._%+-]+24@iiserb\.ac\.in$/;
    // if (!gmailRegex.test(email))
    //     alert("Enter IISER-B Email ID");

    // else {
    //     if (!gmailRegex24.test(email))
    //         alert("Only for 24 Batch");

    //     else {
    //         // Submit(email, password);
    //     }
    // }

    const varifiEmailType = async () => {
        try{
                // Call the server-side function
                const verifyEmailType = firebase.functions().httpsCallable("verifyEmailType");
                const response = await verifyEmailType({ email });
                alert(response.data.message); // Success message
            } catch (error) {
                console.error("Error verifying email:", error.message);
                alert(error.message); // Error message 
        }
    }
}
