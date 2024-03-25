import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllCharacters(); 
    }, []);

    return (
        <>
            {store.characters.map((character) => {
                return (
                    <Card name={character.name} key={character.uid} />
                );
            })}
        </>
    );
};
 

/*  EXPLICACION
  {}: Encierra una expresión JavaScript dentro del JSX para ejecutar código dinámico.

  store.characters.map((character) => {...}): Itera sobre el array store.characters utilizando el método map(). 
  Por cada elemento character en el array, se ejecuta la función de retorno de map(). 
  Esta función recibe el character actual en cada iteración.

  <Card name={character.name} key={character.uid} />: 
  Dentro del bucle map(), se devuelve un componente Card para cada character. 
  Se pasan las propiedades name y key al componente Card. 
  name es el nombre del personaje y key es un identificador único que ayuda a React a identificar y optimizar la actualización de componentes.

  key={character.uid}: La propiedad key es requerida en elementos de lista en React para ayudar a React a identificar cada elemento de manera única. 
  En este caso, se usa character.uid como clave. 
  character.uid debe ser un identificador único para cada personaje. 
  Esto asegura un rendimiento óptimo al renderizar elementos de la lista.

  <>...</>: Esto se llama fragmento de React. 
  Permite devolver múltiples elementos de JSX sin necesidad de un contenedor adicional como un div. 
  Es útil cuando deseas devolver varios elementos sin introducir un elemento de contenedor adicional en el DOM.

En resumen, este código genera una lista de componentes Card basada en los datos de personajes almacenados en store.characters, 
pasando el nombre de cada personaje como una propiedad name y un identificador único como una propiedad key. */