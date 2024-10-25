import React from "react";
import Card from "../Card/Card";
import Title from "../Title/Title";

export default function MoreCompanyDetails({ otherDetails }) {
  return (
    <Card>
      <section>
        <Title variant="3">More Details</Title>

        <ul>
          {Object.values(otherDetails).map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </section>
    </Card>
  );
}
