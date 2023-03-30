import React, {useState} from 'react';
import styles from './MyInput.module.css'
const MyInput = (props) => {
    const [disabled, setDisabled] = useState(props.disabled);
    console.log(props.disabled)
    if (props.disabled == true)
    {

    }
    return (
        <input className={styles.searchInput} onChange={(event)=> props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}
               disabled={disabled}
        />
    );
};

export default MyInput;