import React from 'react';
import Card from '../Card/Card';
import Title from '../Title/Title';

export default function MoreCompanyDetails({otherDetails}) {

    return (
        <Card>
            <Title variant="3">More Details</Title>
            <ul>
                {Object.values(otherDetails).map((detail) => (
                    <li >
                        {detail}
                    </li>
                ))}
            </ul>
        </Card>
    )

}