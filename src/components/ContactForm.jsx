import React, { useState } from "react"

function ContactForm() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setResponse("le formulaire a été envoyé avec succès");
        setMessage("");
        setEmail("");
    }



return (

    <div>
        <form onSubmit={handleSubmit}>
            <label>
                adresse courriel:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                message:
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <br />
            <button type="submit">envoyer</button>

        </form>
        <p>{response}</p>
    </div >

)
}

export default ContactForm;