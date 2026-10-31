// components/portfoliocard.js
import Header from "./header";
import Avatar from "./Avatar";
import PersonalInfo from "./personalinfo";
import Bio from "./Bio";
import photo1 from "./garima.png";
import photo2 from "./garima2.png";
import { useState } from "react";

import './portfolio.css';
function PortfolioCard() {
    const biotext = "Passionate Web developer with curiosity of learning and building new things. Currently pursuing B.tech in Computer Science & Engineering";
const [likes, setLikes] = useState(0);
const skills = ["HTML", "CSS", "Python", "C++"];
const [darkMode, setDarkMode] = useState(false);
const photos = [photo1, photo2];
const [photoIndex, setPhotoIndex] = useState(0);
    return (
        <div className={`portfolio-card ${darkMode ? "dark-theme" : "light-theme"}`}>
    <Header/>
    <button
    className="theme-button"
    onClick={() => setDarkMode(!darkMode)}
>
    {darkMode ? "Change into Light Mode" : "Change into Dark Mode"}
</button>
    <div className="card-content">
       <Avatar image={photos[photoIndex]} />
       <button
    className="photo-button"
    onClick={() => setPhotoIndex((photoIndex + 1) % photos.length)}
>
     Change Photo
</button>
       <PersonalInfo
    name="Garima"
    role="Web Developer"
    location="Bareilly, UP"
    email="garima123@email.com"
/>
        <Bio biotext={biotext} skills={skills} />
        <button
    className="alert-button"
    onClick={() => alert("Hello! Thanks for visiting my portfolio.")}
>
    Say Hello
</button>
       <div className="like-section">
    <button
        className="like-button"
        onClick={() => setLikes(likes + 1)}
    >
        Likes <span className="like-count">{likes}</span>
    </button>
</div>
    </div>
    </div>
    );
}

export default PortfolioCard
