import './App.css';
import Home from './componests/Home/Home';
import Header from './componests/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './componests/OrderReview/OrderReview';
import Grandpa from './componests/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/orderReview' element={<OrderReview></OrderReview>}></Route>
          <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
     </Routes>
    </div>
  );
}

export default App;
