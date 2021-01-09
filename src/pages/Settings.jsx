import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as playerActions from '../store/actions/players'
import playerSelectors from '../store/selectors/players'

import edit from '../assets/edit.svg'
import plus from '../assets/plus.svg'

import '../assets/sass/setup.sass'

const Settings = () => {
    const dispatch = useDispatch();
    const players = useSelector(playerSelectors.players)

    const handleClickAddPlayer = () => {
      dispatch(playerActions.addPlayer({
        name: `New player`,
        avatar: 'https://via.placeholder.com/150'
      }))
    }

    const handleClickDeletePlayer = (player) => {
      dispatch(playerActions.deletePlayer(player.id))
    } 

    return (
      <div className="setup-container">
        <div className="setup-title">Раздевалка</div>
        <div className="setup-description">Настройка пользователей</div>
        <div className="setup-players-list">
          {players.map((player) => (
            <div className="setup-players-list-item" key={player.id}>
              <img className="setup-players-list-item-photo" src={player.avatar} alt="" /> 
              <span className="setup-players-list-item-name">{player.name}</span>
              <img
                src={edit}
                alt="logo"
                className="setup-players-list-item-edit-button"
              />

              <button onClick={() => handleClickDeletePlayer(player)}>x</button>
            </div>
          ))}
        </div>

        <button className="setup-players-add-item" onClick={handleClickAddPlayer}>
          <img width="26px" height="26px" src={plus} alt="logo"></img>
          добавить игрока
        </button>
      </div>
    )
}

export default Settings