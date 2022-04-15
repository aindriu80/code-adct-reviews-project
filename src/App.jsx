import { useState } from 'react';
import Review from './Review';

import './App.css';

function App() {
  return (
    <section className='App'>
      <main>
        <div className='container'>
          <div className='title'>
            <h2>Our Reviews</h2>
            <div className='underline'></div>
            <Review />
          </div>
        </div>
      </main>
    </section>
  );
}

export default App;
