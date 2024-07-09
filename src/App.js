import Welcomeall from "./default";
import Header from "./Header";
import Welcome from"./class components";
import Function1 from "./function1";
import LifecycleDemo from "./lifecycle";
import Button from "./state";
import Example from "./useeffect";
function App() {
  return (<div>
         <h1><LifecycleDemo/></h1>
        <Header/>
        <Welcome/>
        <Function1 name= "Alice"/>
        <Function1 name="bob"/>
        <Welcomeall name="Aswini"/>
        <Welcomeall />
        <h1><Example/></h1>
         <h1><Button/></h1>
         </div>
    
  );
}

export default App;
