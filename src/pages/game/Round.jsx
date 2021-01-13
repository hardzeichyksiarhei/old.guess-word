import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Button } from "antd";
import ReactStopwatch from "react-stopwatch";

import ButtonLink from "../../components/ButtonLink";

import * as playerActions from "../../store/actions/players";
import * as gameActions from "../../store/actions/game";
import gameSelectors from "../../store/selectors/game";

import { generateLetter } from "../../helpers";

let time = 0;

const GameRound = () => {
  const letter = generateLetter();

  const dispatch = useDispatch();

  const player = useSelector(gameSelectors.player);
  const word = useSelector(gameSelectors.word);

  const handleClickGuess = () => {
    const payload = {
      score: 1, // Calculate
      time: player.time + time,
      weight: player.weight + word.weight
    }
    dispatch(gameActions.updatePlayer(payload))
    dispatch(playerActions.updatePlayer(player.id, payload))
  };

  const handleClickNotGuess = () => {
    const payload = {
      score: 1, // Calculate
      time: player.time + time,
      weight: player.weight + word.weight
    }
    dispatch(gameActions.updatePlayer(payload))
    dispatch(playerActions.updatePlayer(player.id, payload))
  };

  return (
    <div className="game-round-page">
      <Row justify="space-between" align="center">
        <Col span={12}>
          <div className="page-title">Передайте слово</div>
        </Col>
        <Col span={7}>
          <ButtonLink
            className="text-uppercase btn-secondary"
            linkTo="/rules"
            type="primary"
            shape="round"
            size="small"
          >
            {player?.name}
          </ButtonLink>
        </Col>
      </Row>

      <div className="page-description">
        Объясните слово использую предложеннуя букву
      </div>

      <div className="game-round-page__content text-center py-1">
        <div className="">
          <p>Ваше слово</p>
        </div>
        <div>
          <h1 className="game-round-page__content-word">{word?.value}</h1>
        </div>
        <div className="">
          <p>Ваша буква</p>
        </div>
        <div>
          <h1 className="game-round-page__content-letter">{letter}</h1>
        </div>
        <ReactStopwatch
          seconds={0}
          minutes={0}
          hours={0}
          onChange={({ hours, minutes, seconds }) => {
            console.log(minutes);
            time = seconds + minutes * 60 + hours * 3600
          }}
          render={({ formatted }) => {
            return (<h1>{formatted}</h1>);
          }}
        />
        { player?.time }
      </div>

      <Button
        className="mt-2 text-uppercase"
        onClick={handleClickGuess}
        type="primary"
        shape="round"
        block
      >
        Угадали
      </Button>

      <Button
        className="mt-2 text-black text-uppercase"
        onClick={handleClickNotGuess}
        type="link"
        shape="round"
        block
      >
        Не угадали
      </Button>
    </div>
  );
};

export default GameRound;
