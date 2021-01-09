import React from "react";

import ButtonLink from "../components/ButtonLink"

const Home = () => {
    return (
    <div className="welcome-page">
      <h2 className="welcome-page__game-name">Guess Word</h2>
      <img className="welcome-page__app-logo" src="./img/app-logo.png" alt="Guess Word"/>
      <div className="welcome-page__title">Угадай слово+</div>
      <div className="welcome-page__description">
        Игра угадай слово - это следующая итерация знаменитой игры «Крокодил», где Вам необходимо объяснить слово используя слова начинающиеся с одной случайной буквы.
      </div>
      <ButtonLink linkTo="/settings" type="primary" shape="round" block>Ок, погнали</ButtonLink>
    </div>
    )
}

export default Home
