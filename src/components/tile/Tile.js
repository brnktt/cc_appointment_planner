import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile tile-title">{name}</p>
      {Object.values(description).map((desc) => {
        return (
          <p className="tile">{desc}</p>
        )
      })}
    </div>
  );
};
