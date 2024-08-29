import logo from "../img/amrit-logo.png";
import { useState } from "react";

export default function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  function toggleSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <nav>
      <ul className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
        <li onClick={toggleSidebar}><a href="#"><svg className="icon" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="white"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul>
        <li className="center-text">{`{ <Amrit /> }`}</li>
        <li className="hideOnMobile"><a href="#">Home</a></li>
        <li className="hideOnMobile"><a href="#">Projects</a></li>
        <li className="hideOnMobile"><a href="#">Experience</a></li>
        <li className="hideOnMobile"><a href="#">Contact</a></li>
        <li className="mobile-only" onClick={toggleSidebar}><a href="#"><svg className="icon" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
      </ul>
    </nav>
  );
}