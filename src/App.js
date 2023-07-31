
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Navbar from './components/Navbar'

import Home from './Home'


function App() {

  
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/market' element={<Coins />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
