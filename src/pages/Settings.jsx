import React from "react";

import ButtonLink from "../components/ButtonLink"

import PlayersList from "../components/players/PlayersList";

const Settings = () => {
  return (
    <div className="settings-page">
      <div className="page-title">Раздевалка</div>
      <div className="page-description">Настройка пользователей</div>
      <div className="page-content">
        <PlayersList />

        <ButtonLink
          className="mt-2 text-uppercase"
          linkTo="/categories"
          type="primary"
          shape="round"
          block
        >
          Далее
        </ButtonLink>
      </div>
    </div>
  );
};

export default Settings;
