import React, { useState } from 'react';
import './Styles/itemList.css';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="item-list-container">
      <div className="header">
        <div className="logo">H</div>
        <h1>Item List Manager</h1>
      </div>
      
      <div className="content">
        <h2>Item List</h2>
        
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="item-input"
          />
          
          <button 
            onClick={handleAddItem}
            className="add-button"
          >
            Add Item
          </button>
        </div>

        <ul className="items-list">
          {items.map((item, index) => (
            <li key={index} className="item">
              <span>{item}</span>
              <button 
                onClick={() => handleDeleteItem(index)}
                className="delete-button"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemList;