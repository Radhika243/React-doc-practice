import {Provider} from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./components/store";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      Hello
      <CakeContainer />
      <HookCakeContainer />
      <IceCreamContainer />
      <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
