interface Credentials {
    email: string;
    password: string;
}

export default function loginRequest(credentials: Credentials) {
    console.log(credentials);
    
    const response = fetch("http://localhost:5432/auth/signin", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });

    return response;
}