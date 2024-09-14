import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({char}) => {
  const { state, dispatch } = useContextGlobal();
  const isFav = state.favs.find((fav) => fav.id === char.id);

  const addFav = ()=>{
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: char });
  }
  
  return (
    <div className="card" > 
      <img src="public\images\doctor.jpg" alt="" />
      <Link to={'/Detail/'+ char.id}>
      <h5>
        {char.name}
        <br />
        {char.username}
      </h5>
      </Link>
        <button onClick={addFav} className="favButton">{isFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;
