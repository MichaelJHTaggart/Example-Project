import './App.css';
import Header from './components/Header';
import Routes from './Routes';
import React, { useState } from 'react';
import Footer from './components/Footer';


function App() {
  const [user, setUser] = useState()

  if (user) {
    return <div> {user.name} is logged in</div>
  }

  return (
    <div className="App">
      <Header />
      {Routes}
      <Footer />
    </div>
  );
}

export default App;