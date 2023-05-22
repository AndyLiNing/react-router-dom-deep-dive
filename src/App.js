import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home.component';
import VanList from './pages/vans/van-list.component';
import Van from './pages/vans/van.component';
import Layout from './components/layout-component';
import Dashboard from './pages/host/dashboard.component';
import Review from './pages/host/review.component';
import Income from './pages/host/income.component';

function App() {
  return (
    <BrowserRouter >

      <Routes>
          <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/van-list' element={<VanList/>}/>
              <Route path='/van/:id' element={<Van/>}/>
              <Route path='/host' element={<Dashboard/>}>
                  <Route path='/host/income' element={<Income/>}/>
                  <Route path='/host/review' element={<Review/>}/>
              </Route>
          </Route>s
      </Routes>
    </BrowserRouter>
  );
}

export default App;
