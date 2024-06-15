import React from 'react';
import styles from './WorkHistory.module.scss';
import workHistoryBtn from '../../dataFiles/workHistoryBtn';
import Button from '../../components/Button/Button';

export default function WorkHistory() {
    return (<section>
        <h1>What I've Done</h1>
        <section className={styles.btn_container}> 
            {workHistoryBtn.map((history) => (
                <Button key={history.id} onClick={() => console.log('cheers')}><img src={history.img}/></Button>
            ))}
        </section>
    </section>)
}