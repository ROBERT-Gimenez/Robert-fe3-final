import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";


const Favs = () => {
  const { state } = useContextGlobal();
  return (
    <div className={'favs ' + (!state.theme ? "dark" : "white")}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? state.favs.map((fav , id) => (
            <Card key={id} char= {fav}/>
        )):""}      
        </div>
    </div>
  );
};

export default Favs;
