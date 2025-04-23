import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
            <Link to="/" className="hover:underline">Home</Link>
            </nav>
        </header>
    )
}