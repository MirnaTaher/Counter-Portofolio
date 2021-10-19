import "./App.css";
import Counter from "./Components/Counter/Counter";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Home/Home";
import Product from "./Components/Shop/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/counter" component={Counter} />
            <Route path="/shop" component={Shop} exact />
            <Route path="/shop/:id" component={Product}/>
          </Switch>
        </div>
      </Router>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
