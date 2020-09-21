import React, { Component } from 'react';
import 'materialize-css';
import { Card,CardTitle } from "react-materialize";
import Icon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import "./keynote.css";
class CardKeynote extends Component {
    render() {
        return (
            <Card
                className="cardDesign"
                closeIcon={<CloseIcon className="float-right card-title my-2 z-10 closeButton" />}
                header={<CardTitle className="keynoteCardImage" image={this.props.src} reveal waves="light" />}
                reveal={<p>{this.props.description}</p>}
                revealIcon={<Icon className="float-right activator my-2 z-10 expandButton " />}
                title={this.props.title}
            >
                <p>
                    {this.props.designation}
                </p>
            </Card>
        );
    }
}

export default CardKeynote;