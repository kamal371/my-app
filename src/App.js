import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SignInSide from './components/SignInSide';
import Navbar from './components/Navbar'
import AdminLogin from './components/AdminLogin';
//import Box from '@mui/material/Box'; 

function App() {
  const [userName, setUserName] = useState('');
  return (
    <div>

        <Navbar/>
        <Routes>
          <Route path="/signin" element={<SignInSide setUserName={setUserName}/>} />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>

    </div>
  );
}

export default App;
