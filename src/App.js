import { Component } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import SobreNos from "./components/SobreNos";
import PaginaMentorias from "./paginaMentorias";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PaginaMentorias />
      </div>
    );
  }
}

export default App;
