import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home.component';
import VanList from './pages/vans/van-list.component';
import Van from './pages/vans/van.component';
import Layout from './components/layout-component';
import Dashboard from './pages/host/dashboard.component';
import Review from './pages/host/review.component';
import Income from './pages/host/income.component';
import HostLayout from './pages/host/host-layout.component';

function App() {
  return (
    <BrowserRouter >

      <Routes>
          <Route element={<Layout/>}>
              <Route index element={<Home/>}/>

              <Route path='van-list' element={<VanList/>}/>

              <Route path='van/:id' element={<Van/>}/>

              <Route path='host' element={<HostLayout/>}>
                  <Route index element={<Dashboard/>}/>
                  <Route path='income' element={<Income/>}/>
                  <Route path='review' element={<Review/>}/>
              </Route>

          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
