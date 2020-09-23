import React, { Component } from 'react';
import 'materialize-css';
import { Card,CardTitle } from "react-materialize";
import "./keynote.css";
class CardKeynote extends Component {
    render() {
        return (
            <Card
                className="text-bold"
                header={<CardTitle image={this.props.src} />}
                title={this.props.title}
            >
                <p className="text-xl">
                    {this.props.designation}
                </p>
            </Card>
        );
    }
}

export default CardKeynote;