import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
      <section className='h-screen flex'>
        <NavBar />
        <Routes>
          <Route path="/" element={<TrackerForm/>} />
          <Route path="applied" element ={<TrackerTable/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
