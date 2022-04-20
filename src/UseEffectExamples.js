import { useState, useEffect } from "react";

const country = "ES";
const currentUser = "Hiba";
const UseEffectExamples = () => {
  const [color, setColor] = useState("red");
  //1. Ejemplo menos practico, se lanza siempre
  useEffect(() => {
    console.log("Me ejecuto cada vez que renderizo");
  }); // Se ejecuta en todo momento

  //2. Ejemplo mas practico, se lanza solo cuando el color cambia
  useEffect(() => {
    console.log("El color del boton a cambiado a " + color);
  }, [color]); // Se ejecuta solo cuando el color cambia, 'depende' de el

  //3. Muy comun, se lanza solo en el montaje, primera vez que se pinte.
  useEffect(() => {
    console.log("Me muestro solo cuando me monto");
  }, []); // Se ejecuta solo cuando el componente monta

  //Ejemplo mas 'realista'
  useEffect(() => {
    console.log(
      "aqui pediria las pelis a netflix en funcion del user y el pais"
    );
  }, [currentUser, country]); // El array de dependecias puede recibir tantas variables como necesite

  return <div>UseEffectExamples</div>;
};

export default UseEffectExamples;
