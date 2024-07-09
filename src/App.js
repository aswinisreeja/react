import Header from "./Header";
import Welcome from"./class components";
import LifecycleDemo from "./lifecycle";
function App() {
  return (
    <div >
      <LifecycleDemo/>
      <h1><Header/></h1>
      <h1><Welcome/></h1>
    </div>
    
  );
}

export default App;
