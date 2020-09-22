import React from 'react';
import 'materialize-css';
import { Card, Row, Col, CardTitle } from "react-materialize";
export default function RecipeReviewCard(props) {
    return (
        <Card
            className="innercard"
            header={<CardTitle image={props.src}>{props.name}</CardTitle>}
        >
            {props.designation}
        </Card>
    );
}
