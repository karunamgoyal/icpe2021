import React from 'react';
import 'materialize-css';
import { Card, CardTitle } from "react-materialize";
export default function RecipeReviewCard(props) {
    return (
        <Card
            className="innercard"
            header={<CardTitle image={props.src}></CardTitle>}
        >
            <div className="card-title-update">{props.name} <br/></div>
            {props.designation}<br/>
            {props.department}<br/>
            {props.institute}
        </Card>
    );
}
