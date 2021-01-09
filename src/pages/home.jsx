import React from "react";
import "../assets/sass/home.sass";
import logo from "../assets/logo.svg"
import Button from "../components/Button"

const Home = () => {
    return (
    <div className="home-container">
      <img src={logo} alt="logo" width="100%" className="home-logo" />
      <div className="home-name">Угадай слово+</div>
      <div className="home-description">
        Игра угадай слово - это следующая итерация знаменитой игры «Крокодил», где Вам необходимо объяснить слово используя слова начинающиеся с одной случайной буквы.
      </div>
      <Button path="settings" text="Ок, погнали"/>
    </div>
    )
}

export default Home
