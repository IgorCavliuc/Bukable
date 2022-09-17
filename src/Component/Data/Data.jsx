import React, { useState, useEffect } from "react";
import Filter from "../Filter/Filter";
import Persone from "../Persone/Persone";
import PersoneDetale from "../PersoneDetale/PersoneDetale";
import Search from "../Search/Search";
import "./Data.css";

function Data({ state }) {
  const [data, setData] = useState([]);
  const [activeDetale, setActiveDetale] = useState(false);

  const onViewDetale = (obj) => {
    setData(obj);
  };
  const openDetalePersone = () => {
    setActiveDetale(true);
  };
  const closeViewPersone = () => {
    setActiveDetale(!activeDetale);
  };

  return (
    <div className="data__container">
      <div className="persone" id="persone">
        <div className="search-filter">
          <Search />
          <Filter />
        </div>
        <div className="persone__content-block">
          {state.length ? (
            state.map((item) => (
              <Persone
                key={item.id}
                {...item}
                openDetalePersone={openDetalePersone}
                onClickDetale={onViewDetale}
              />
            ))
          ) : (
            <li className="collection-item">Пусто</li>
          )}{" "}
        </div>
      </div>
      <div className="persone__detale-block">
        <PersoneDetale
          {...data}
          setActiveDetale={setActiveDetale}
          closeViewPersone={closeViewPersone}
          activeDetale={activeDetale}
        />
      </div>
    </div>
  );
}

export default Data;
