import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { CardPeople } from "../component/cardpeople.jsx";
import { CardPlanets } from "../component/cardplanets.jsx";

export const Home = ({ isLoggedIn, handleLogout }) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople();
        actions.getPlanets();
        actions.getInfo();
    }, [actions]);

    return (
        <div className="home">
            <h2 className="tittles text-primary ms-5">Characters</h2>
            <div className="cards d-flex mx-4" style={{ overflowX: "scroll" }}>
                {store.peoples.map((people) => (
                    <div className="text m-3" key={people.uid}>
                        <CardPeople people={people} name={people.name} />
                    </div>
                ))}
            </div>

            <h2 className="tittles text-primary mt-3 ms-5">Planets</h2>
            <div className="cards d-flex mx-4" style={{ overflowX: "scroll" }}>
                {store.planets.map((planet) => (
                    <div className="text m-3" key={planet.uid}>
                        <CardPlanets planets={planet} name={planet.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};
