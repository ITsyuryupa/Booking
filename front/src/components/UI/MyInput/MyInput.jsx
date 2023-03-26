import React from 'react';
import styles from './MyInput.module.css'
const MyInput = (props) => {
    return (
        <input className={styles.searchInput} onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>
    );
};

export default MyInput;