import React from 'react';
import './App.css';

// components
import Header from './components/Header';
import NavBar from './components/NavBar';
import TrackerForm from './components/TrackerForm';
import TrackerTable from './components/TrackerTable';

function App() {
  return (
    <div className='h-screen'>
      <Header />
      <main className='h-screen flex'>
        <NavBar />
        {/* <TrackerForm /> */}
        <TrackerTable />
      </main>
    </div>
  );
}

export default App;
