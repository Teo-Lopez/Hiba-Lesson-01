import { useContext } from "react";
import UserContext from "./context/userContext";

export const UserProfile = () => {
  //Paso 3 del useContext, donde necesites el valor del contexto llama a useContext
  //pasandole el contexto y te devolvera su valor
  const currentUser = useContext(UserContext);
  console.log(currentUser);
  return <h1>Nombre: {currentUser.name}</h1>;
};
