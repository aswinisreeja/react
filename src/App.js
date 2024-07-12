import Welcomeall from"./components/default"
import Header from "./components/Header";
import Welcome from "./components/class components";
import Function1 from "./components/function1";
import LifecycleDemo from "./components/lifecycle";
import Button from "./components/state";
import Example from "./components/usestate";
import Greeting from "./components/ifcondition";
import Counter from "./components/event";
import Parent from "./components/Parent";
import Parents from "./components/Parentcomponent";
import Counters from "./components/useeffect";
import Contexts from "./components/usecontext";
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
         <h1><Counter/></h1>
         <h1><Parent/></h1>
         <h1><Parents/></h1>
        <h1><Contexts/></h1>
         <h1><Counters/></h1>
    <div>
      <Greeting isLoggedIn={userIsLoggedIn} />
    </div>

         </div>

    
  );
}

export default App;
