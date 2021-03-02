// import { useState } from 'react';
import styles from './styles/PhoneBook.module.css'


const Filter = ({ filterList, handleCnange }) => {
    return (
        <label className={styles.findField}>
            Find contacts by name: <input type="text" name="" value={filterList} onChange={handleCnange} className={styles.findInput} />
        </label>
    )
}

export default Filter;

 // функции для первой версии фильтра
    //const [value, setValue] = useState('');
    // const heandleInputValue = event => {
    //     const tapValue = event.currentTarget.value;
    //     setValue(tapValue);
    //     console.log('tap', tapValue)
    //     console.log('valueState', value)
    //     onCnange(value);
    // }