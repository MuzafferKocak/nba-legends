import React, { useState } from "react";



const PlayerCard = ({ name, img, statistics, search }) => {
  const [showImage, setShowImage] = useState(true);
//   console.log(showImage);

  const handleClick = () => setShowImage(!showImage);
console.log(search);
  return (
    <div className="">
      <div hidden={true} onClick={handleClick } className="player">
      {showImage ? (
        <img className="image" src={img} alt={name} />
      ) : (
        <ul className="info">
          {statistics.map((item, i) => (
            <li className="list" key={i}>
            🏀{item}
            </li>
          ))}
        </ul>
      )}

      <div className="name">
        <h3>{name}</h3>
      </div>
    </div>
    </div>
  );
};


export default PlayerCard;
