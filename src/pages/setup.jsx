import React, {useState} from 'react'
import {connect} from 'react-redux'
import edit from '../assets/edit.svg'
import plus from '../assets/plus.svg'

const Setup = (props) => {
    const {initialPlayers} = props
    //const [players, setPlayers] = useState(initialPlayers)
    const players = ["Мужчина", "Женщина"];

    return (
        <div className="setup-container">
      <div className="setup-title">Раздевалка</div>
      <div className="setup-description">Настройка пользователей</div>
      <div className="setup-players-list">
        {players.map((player) => (
          <div className="setup-players-list-item">
            <div className="setup-players-list-item-photo"></div>
            <div className="setup-players-list-item-name">{player}</div>
            <img
              src={edit}
              alt="logo"
              className="setup-players-list-item-edit-button"
            ></img>
          </div>
        ))}
      </div>

      <div className="setup-players-add-item">
        <img width="26px" height="26px" src={plus} alt="logo"></img>
        добавить игрока
      </div>
    </div>
    )
}

const mapStateToProps = state => ({
    initialPlayers: state.players
})

export default connect(mapStateToProps)(Setup)