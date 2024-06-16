import React from 'react';
import Card from '../Card/Card';
import Title from '../Title/Title';

export default function MainProjectCard({projectDetails}) {

    return (
        <Card>
            <section>
                <Title variant="3">Main Project</Title>
                <p>{projectDetails}</p>
            </section>
        </Card>
    )

}