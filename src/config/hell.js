export async function validEmail(email) {
    try {
        const response = await fetch('http://localhost:5000/api/validEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        // Check if the response is successful
        if (response.ok) {
            const data = await response.json();
            console.log('Server Response:', data);
        } else {
            console.log('Error in response:', response.status);
        }
    } catch (error) {
        console.log('Error:', error.message); // Error message
    }
}