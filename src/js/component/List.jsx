import React, { useState, useEffect } from 'react';
import styles from './List.module.css';

const List = () => {
  const [inputValue, setinputValue] = useState('');
  const [items, setItems] = useState(['No tasks, add one']);

  const agregarItem = () => {
    if (items[0] == 'No tasks, add one' & inputValue !== ''){
        setItems(items.shift());
        setItems([inputValue])
    }
    if (inputValue !== '') {
      setItems([...items, inputValue]);
      setinputValue('')
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      agregarItem();
    }
  };

  const deleteValue = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    if (items.length == 0){
      setItems(['No tasks, add one'])
    }
  };

  useEffect(() => {
  if (items.length === 0) {
    setItems(['No tasks, add one']);
  }
  }, [items]);

  const deleteAllItems = () => {
    setItems([])
  }

  return (
    <div className={styles.generalDiv}>
        <h3><strong>Tasks</strong></h3>
        <div className={styles.firstDiv}>
            <input
            type='text'
            onKeyDown={(e) => handleKeyPress(e)}
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
            // placeholder='Task to add'
            />
            <button className={styles.btnAdd} onClick={agregarItem}>Add</button>

        </div>
        <ul className={styles.ul}>
          {items.map((value, index) => {
            return <li 
            key={index} 
            className={styles.li}>{value}
            <i 
            onClick={() => deleteValue(index)}
            class="fa-solid fa-rectangle-xmark mt-1"></i></li>;
          })}
        </ul>
        <div className={styles.deleteAll}>
          <button className={styles.btnDelete} onClick={deleteAllItems}>Delete all</button>
        </div>
    </div>
  );
};

export default List;



