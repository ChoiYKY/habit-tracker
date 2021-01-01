import React, { memo, useRef } from 'react';

const Add = ({ onAdd }) => {
  const handleAdd = (name) => {
    onAdd(name);
  };

  const inputRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && handleAdd(name);
    inputRef.current.value = '';
  };

  return (
    <form className="add-container" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-btn">Add</button>
    </form>
  );
};

export default Add;
