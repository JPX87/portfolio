import { useState, useEffect } from "react";

function Loader({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("load", (event) => {
            console.log("Loaded")
            setLoading(false)
        });

        window.addEventListener("load", (event) => {
            console.log("load\n");
        });

        document.addEventListener("readystatechange", (event) => {
            console.log(`readystate: ${document.readyState}\n`);
        });

        document.addEventListener("DOMContentLoaded", (event) => {
            console.log(`DOMContentLoaded\n`);
        });

    }, []);

    return (
        loading ? (
            <div>Chargement en cours...</div>
        ) : (
            children
        )
    );
}

export default Loader;
