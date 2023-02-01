import React from "react";
import Title from "./Title";
import { playerList } from "../data";

//-------------------------------------
const Players = () => {
  return (
    <React.Fragment>
      <section className="section" id="players">
        {/* Title Component*/}
        <Title title="featured" subTitle="players" />

        <div className="section-center featured-center">
          {playerList.map((eachPlayer) => {
            const {
              player_id,
              avatar,
              name,
              location,
              status,
              league,
              followers,
            } = eachPlayer;

            return (
              <article key={player_id} className="player-card">
                <div className="player-img-container">
                  <img src={avatar} className="player-img" alt="" />
                </div>
                <div className="player-info">
                  <div className="player-title">
                    <h4>{name}</h4>
                  </div>
                  <br />
                  <div className="player-footer">
                    <p>{location}</p>
                    <p>{status}</p>
                    <p>{league}</p>
                    <p>{followers} followers</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Players;
