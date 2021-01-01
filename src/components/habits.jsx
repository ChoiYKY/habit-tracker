import React from 'react';
import Habit from './habit';

const Habits = ({ habits, onIncrement, onDecrement, onDelete, onReset }) => {
  const handleIncrement = (habit) => {
    onIncrement(habit);
  };

  const handleDecrement = (habit) => {
    onDecrement(habit);
  };

  const handleDelete = (habit) => {
    onDelete(habit);
  };

  const handleReset = () => {
    onReset();
  };

  return (
    <>
      <ul className="habits-container">
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          ></Habit>
        ))}
      </ul>
      <button className="reset-btn" onClick={handleReset}>
        Reset All
      </button>
    </>
  );
};

export default Habits;
