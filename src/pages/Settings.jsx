import React from "react";

import PlayersList from "../components/players/PlayersList";

import "../assets/sass/setup.sass";

const Settings = () => {
  return (
    <div className="setup-container">
      <div className="setup-title">Раздевалка</div>
      <div className="setup-description">Настройка пользователей</div>
      <PlayersList />
    </div>
  );
};

export default Settings;
