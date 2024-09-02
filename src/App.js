import React from 'react';
import Form from './components/Form';
import ToDoList from './component/ToDoList';
import EventCountdownTimer from './componentt/EventCountdownTimer';
import Calculator from './componnent/Calculator';

const App = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-5">Submission Form</h1>
      <Form />
      <ToDoList />
      <EventCountdownTimer/>
      <Calculator/>
      
    </div>
  );
};

export default App;

