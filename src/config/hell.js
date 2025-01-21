const API_URL = 'https://hell-ashen.vercel.app';



// export async function validEmail(email) {
//     try {
//         const response = await fetch(`${API_URL}/api/validEmail`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email }),
//         });

//         // Check if the response is successful
//         if (response.ok) {
//             const data = await response.json();
//             console.log('Server Response:', data);
//         } else {
//             console.log('Error in response:', response.status);
//         }
//     } catch (error) {
//         console.log('Error:', error.message); // Error message
//     }
// }

export async function loginPoint(uid){
    try {
        const response = await fetch(`${API_URL}/api/loginPoint`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid }), //.............//
        });
    } catch (error) {
        console.log('Error:', error.message); // Error message
    }
}