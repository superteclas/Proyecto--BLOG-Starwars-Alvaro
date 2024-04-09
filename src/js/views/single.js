import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
    const { store } = useContext(Context);
    const params = useParams();
    const characterDetails = store.character.details;

    if (!characterDetails) {
        return <h1>Character not found</h1>;
    }

    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-6">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} alt="luke" className="img-fluid custom-height" />
                </div>
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h3 className="display text-white">{characterDetails.name}</h3>
                        <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas eros eget volutpat imperdiet. Fusce non consectetur arcu. Vivamus vel ultrices mauris. Etiam lobortis, felis in porttitor rutrum, neque metus varius lacus, ac volutpat massa nisl nec justo. Quisque sed viverra erat, sed lacinia lorem. Pellentesque sed nisl quis arcu lacinia cursus. Fusce fermentum blandit consequat. Quisque vitae ante ac diam condimentum fermentum vitae ac arcu. Quisque cursus facilisis arcu eu feugiat. Nam fringilla lacus ultricies velit tristique mattis. Vestibulum quis enim sed magna luctus porta quis vel diam. Cras at orci vulputate, tincidunt nunc vel, faucibus neque. Aliquam sit amet aliquam magna. Fusce ac dolor turpis.</p>
                    </div>
                </div>
            </div>
            <div className="container text-center-footer" style={{ borderTop: "1px solid white" }}>
                <div className="row align-items-start mt-2">
                    <div className="col-md-2 footer-single">
                        <h6>Nombre</h6>
                        <p>{characterDetails.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Año Nacimiento</h6>
                        <p>{characterDetails.birth_year}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Genero</h6>
                        <p>{characterDetails.gender}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Estatura</h6>
                        <p>{characterDetails.height}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Color de Piel</h6>
                        <p>{characterDetails.skin_color}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Color de ojos</h6>
                        <p>{characterDetails.eye_color}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
