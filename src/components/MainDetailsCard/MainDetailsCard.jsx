import React from 'react';
import styles from './MainDetailsCard.module.scss';
import Card from '../Card/Card';
import Title from '../Title/Title';
import MAIN_DETAILS_HEADINGS from '../../enums/mainDetailsHeadings';

export default function MainDetailsCard({mainDetails}) {

    return (
        <Card>
            <section>
                {Object.entries(mainDetails).map(([key, val]) => (
                    <div className={styles.single_item}>
                        <Title>{MAIN_DETAILS_HEADINGS[key]}: </Title>
                        <p>{val}</p>
                    </div>
                ))}
            </section>
        </Card>
    )
    
}