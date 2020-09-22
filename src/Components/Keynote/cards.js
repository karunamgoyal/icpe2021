import React, { Component } from 'react';
import 'materialize-css';
import { Card, Row, Col, CardTitle } from "react-materialize";
import Icon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import "./keynote.css";
class CardKeynote extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Card
                className="cardDesign text-bold"
                header={<CardTitle className="keynoteCardImage" image={this.props.src} reveal waves="light" />}
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