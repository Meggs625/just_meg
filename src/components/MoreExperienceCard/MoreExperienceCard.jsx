import React from "react";
import Card from "../Card/Card";
import Title from "../Title/Title";

export default function MoreExperienceCard({ otherExperience }) {
  return (
    <Card>
      <section>
        <Title variant="3">More Experience</Title>
        <ul>
          {otherExperience.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </section>
    </Card>
  );
}
