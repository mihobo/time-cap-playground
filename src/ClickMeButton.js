import React from 'react';
import Button from 'react-bootstrap/Button';

export class ClickMeButton extends React.Component {
    onSubmit = () => {
        console.log('Thanks for clicking me!');
    }

    render() {
        return (
            <Button variant="primary" onClick={this.onSubmit} type="submit">
                Submit
            </Button>
        )
    }
}
