import React from "react";
import "../assets/sass/home.sass";
import logo from "../assets/logo.svg"
import {Button} from "../components/button"

const Home = () => {
    return (
    <div className="home-container">
      <img src={logo} alt="logo" width="100%" className="home-logo" />
      <div className="home-name">Угадай слово+</div>
      <div className="home-description">
        Игра для компаний Игра для компаний Игра для компаний Игра для компаний
        Игра для компаний Игра для компаний Игра для компаний Игра для компаний
        Игра для компаний_Игра для компаний Игра для компаний Игра для компани
      </div>
      <Button  text="Ок, погнали"/>
    </div>
    )
}

export default Home
