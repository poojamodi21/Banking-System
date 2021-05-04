import Navbar from "./components/Navbar";
import styled from "styled-components";
import img1 from "./Images/bg.png";
import Home from "./components/Home"
import CustomerTable from "./components/CustomerTable";
import TransactionTable from "./components/TransactionTable";
import {Route,BrowserRouter} from "react-router-dom"
import Register from './components/register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Route exact path="/">
      <Home/>
      </Route>
     
     <Route path="/customers">
      <CustomerTable/>
     </Route>
     <Route path="/transactions">
      <TransactionTable/>
     </Route>
    <Route path="/register">
      <Register/>
     </Route>
     </BrowserRouter>
      
    </div>
  );
}

const ImageContainer = styled.div``;
const BackgroundImage = styled.div`
  img {
    height: 100vh;
    width: 100%;
    z-index: -10;
  }
`;


export default App;
