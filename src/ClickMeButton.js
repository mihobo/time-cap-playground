import React from 'react';
import Button from 'react-bootstrap/Button';

export class ClickMeButton extends React.Component {
    onSubmit = () => {
        console.log('Thanks for clicking me!');
    }

    render() {
        return (
            <Button variant="outline-warning" onClick={this.onSubmit} type="submit">
                SAVE ME
            </Button>
        )
    }
}
