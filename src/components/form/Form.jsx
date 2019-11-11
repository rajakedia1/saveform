import React, { useState } from "react";

import styles from './Form.scss';
import { database } from '../../api/firebaseUtil';

function Form() {

    const [initialTitle, setInitialTitle] = useState('');
    const [initialDetails, setInitialDetails] = useState('');
    const [err, setErr] = useState(false);

    function handleTitle(e) {
        setInitialTitle(e.target.value);
    }

    function handleDetails(e) {
        setInitialDetails(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        database.push({
            date: new Date().toString(),
            details: initialDetails,
            id: Math.floor(Math.random() * 1000000),
            title: initialTitle
        }, (error) => {
            if(error) {
                setErr(true);
            } else {
                setErr(false);
                setInitialTitle("");
                setInitialDetails("");
            }
        });
        
    }

    return (
        <div className={styles['container']}>
            <input className={styles['input-text']} name="title" placeholder="Add title" value={initialTitle} onChange={handleTitle} />
            <textarea className={styles['input-textarea']} name="value" placeholder="Added Value" value={initialDetails} onChange={handleDetails} />
            <button className={styles['input-button']} name="button" onClick={handleSubmit} >Add</button>
            {err ? <div className={styles['error']}>Data not saved! Some error</div> : ""}
        </div>
    );
}

export default Form;