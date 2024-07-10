import Welcomeall from"./components/default"
import Header from "./components/Header";
import Welcome from "./components/class components";
import Function1 from "./components/function1";
import LifecycleDemo from "./components/lifecycle";
import Button from "./components/state";
import Example from "./components/useeffect";
import Greeting from "./components/ifcondition";
function App() {
  const userIsLoggedIn = false;
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
         
    <div>
      <Greeting isLoggedIn={userIsLoggedIn} />
    </div>
  );
}
         </div>

    
  );
}

export default App;
