import React from 'react';
import {useDispatch} from 'react-redux';

import styles from './Item.scss';
import { copyToClipboard } from '../../utils/copytoclipboard';

function Item({item, key}) {

    const dispatch = useDispatch();

    function handleCopy() {
        copyToClipboard(item.details);
        dispatch({type: 'SHOW_TOOLTIP', payload: {text: 'Copied', timeout: '1000'}});
    }

    return (
        <div className={styles['container']}>
            <div className={styles['wrapper']}>
                <div className={styles['title']}>
                    {item.title}
                </div>
                <div className={styles['details']}>
                    {item.details}
                </div>
                <div className={styles['date']}>
                    {item.date}
                </div>
                <div className={styles['buttonwrapper']}>
                    <div className={styles['button']+' '+styles['copy']} onClick={handleCopy}>
                        copy
                    </div>
                    <div className={styles['button']+' '+styles['edit']}>
                        edit
                    </div>
                    <div className={styles['button']+' '+styles['delete']}>
                        delete
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Item;