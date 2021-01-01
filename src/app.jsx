import React, { useState } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import Add from './components/add';
import './app.css';

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'a', count: 0 },
    { id: 2, name: 'b', count: 0 },
    { id: 3, name: 'c', count: 0 },
  ]);

  const handleIncrement = (habit) => {
    setHabits(
      habits.map((h) => (h.id === habit.id ? { ...h, count: h.count + 1 } : h)),
    );
  };

  const handleDecrement = (habit) => {
    setHabits(
      habits.map((h) =>
        h.id === habit.id
          ? { ...h, count: h.count - 1 >= 0 ? h.count - 1 : 0 }
          : h,
      ),
    );
  };

  const handleDelete = (habit) => {
    setHabits(habits.filter((h) => h.id !== habit.id));
  };

  const handleAdd = (name) => {
    const newHabits = [...habits, { id: Date.now(), name, count: 0 }];
    setHabits(newHabits);
  };

  const handleReset = () => {
    setHabits(habits.map((h) => (h.count !== 0 ? { ...h, count: 0 } : h)));
  };

  return (
    <>
      <Navbar totalCount={habits.filter((habit) => habit.count !== 0).length} />
      <Add onAdd={handleAdd} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onReset={handleReset}
      />
    </>
  );
}

export default App;
