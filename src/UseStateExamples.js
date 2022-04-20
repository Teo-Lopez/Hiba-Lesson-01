import { useState } from "react";

const UseStateExamples = () => {
  const [newColor, setButtonColor] = useState("red");

  setTimeout(() => {
    setButtonColor("blue");
  }, 2000);

  setTimeout(() => {
    setButtonColor("black");
  }, 3000);

  //Los setTimeouts no son de fiar porque se ejecutan cada vez que renderiza el componente
  //para lograr este efecto sería mejor usar useEffect. Verás que los colores se comportan de forma extraña.

  return (
    <div style={{ color: newColor }}>
      UseStateExamples
      <button
        onClick={() => setButtonColor("pink")}
        style={{ color: newColor }}
      >
        EL BOTON
      </button>
    </div>
  );
};

export default UseStateExamples;
