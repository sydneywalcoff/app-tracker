import React, { useState } from 'react';
import './App.css';

// components
import Header from './components/Header';
import NavBar from './components/NavBar';
import TrackerForm from './components/TrackerForm';
import TrackerTable from './components/TrackerTable';

interface TitleProps {
  name: String
}

function App() {
  const pageTitles = [
    { name: 'track new job.' },
    { name: 'job tracker.' },
    { name: 'stats.' }
  ];

  const [currentTitle, setCurrentTitle] = useState(pageTitles[0]);
  const currentPage = ({ name }: TitleProps) => {
    switch(name) {
      case 'track new job.':
        return <TrackerForm />
      case 'job tracker.':
        return <TrackerTable />
      default:
        break;
    }
  }

  return (
    <div className='h-screen'>
      <Header />
      <section className='h-screen flex'>
        <NavBar 
          pageTitles = {pageTitles}
          setCurrentTitle={setCurrentTitle}
        />
        {currentPage(currentTitle)}
      </section>
    </div>
  );
}

export default App;
