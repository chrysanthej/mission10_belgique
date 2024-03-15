import React from 'react';
import './App.css';
import Heading from './Heading';
import BowlersTable from './BowlersTable';

function App() {
  return (
    <div className="App">
      <Heading title="Bowling Page" />
      <BowlersTable />
    </div>
  );
}
export default App;
