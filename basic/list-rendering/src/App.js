import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Profile from './components/Profile';
import TodoList from './components/DateFormat';
import PackingList from './components/PackingList';
import Recipes from './components/List Rendering/Recipes';
import CopyRight from './components/inspiration/CopyRight';
import InspirationalQuote from './components/inspiration/InspirationalQuote';
import FancyText from './components/inspiration/FancyText';
import App1 from './components/MyComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Recipes /> */}
       {/* <FancyText title text="Get inspired quote" />
       <InspirationalQuote>
       <CopyRight year={2024}/>
       </InspirationalQuote> */}
       <App1 />
        {/* <PackingList />
        <ShoppingList />
        <h2>Amazing nature photo</h2>
        <Profile pic="https://th.bing.com/th/id/R.be080585c0da64067404b23530a814ce?rik=vjGDbB2xFyn9Sw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg&ehk=W21nAe%2fQYSWkLQF83VxX2RflaJ7eKm%2fm0J4pW85PpjU%3d&risl=&pid=ImgRaw&r=0"/>

        <Profile pic="https://th.bing.com/th/id/OIP.C-yfkJTnVYEckvH54iLLjgHaE5?rs=1&pid=ImgDetMain" />

        <TodoList /> */}
      </header>
    </div>
  );
}

export default App;
