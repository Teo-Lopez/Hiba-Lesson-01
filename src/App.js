import "./App.css";
import { UserProfile } from "./UserProfile";
import UserContext from "./context/userContext";
import UseEffectExamples from "./UseEffectExamples";
import UseStateExamples from "./UseStateExamples";
function App() {
  return (
    //Paso 2 envolver la aplicacion en ese contexto y darle un valor de inicio
    <UserContext.Provider value={{ name: "Hiba", gender: "female" }}>
      <div className="App">
        <UseStateExamples />
        <UseEffectExamples />
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
