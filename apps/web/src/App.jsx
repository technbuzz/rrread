import React from 'react'
import { createRoot } from 'react-dom/client'
import { BookItem } from './BookItem';

const App = () => {
  return (
    <div>
      <header className='shadow-md p-4'>
        <h1>RRRead</h1>
      </header>
      <BookItem />
    </div>
  );
};

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
