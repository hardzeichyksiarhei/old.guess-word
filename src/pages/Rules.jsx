import React from "react";

import ButtonLink from "../components/ButtonLink"

const Rules = () => {
  return (
    <div className="rules-page">
      <h2 className="rules-page__game-name">Guess Word</h2>
      <img className="rules-page__app-logo" src="./img/app-logo.png" alt="Guess Word"/>
      <div className="rules-page__title">Угадай слово+</div>
      <div className="rules-page__description">
        <p>
            Игра «Угадай слово» - это следующая итерация знаменитой игры «Крокодил», где Вам <strong>необходимо объяснить слово используя слова начинающиеся с одной случайной буквы</strong>.
        </p>
        <p>
            <strong>1 игра (матч) это 10 попыток для каждого игрока.</strong>
        </p>
        <p>
            <strong>Время</strong> ответа каждого игрока <strong>подсчитывается</strong> и используется в расчете итогового места.
        </p>
        <p>
            Побеждает тот, кто объяснит <strong>большее количество слов за меньшее время</strong>.
        </p>
      </div>
      {/* нужна функция назад */}
      <ButtonLink linkTo="/settings" type="primary" shape="round" block>Понятно</ButtonLink>
    </div>
  );
};

export default Rules;
