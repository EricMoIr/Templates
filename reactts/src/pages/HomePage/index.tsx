import React, { useRef } from "react";
import Form from "react-bootstrap/Form";

import { history } from "utils/history";
import Button from "components/Button";
import { actions as gameActions } from "model/game";

function HomePage() {
    const sizeRef = useRef(null);
    function handleSubmit() {
        gameActions.initGame(sizeRef.current.value);
        history.push("/game");
    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>Size</Form.Label>
                <Form.Control ref={sizeRef} required type="number" name="size" defaultValue={5} />
            </Form.Group>
            <Form.Group>
                <Button label="Play!" onClick={handleSubmit} type="submit" />
            </Form.Group>
        </Form>
    );
}

export default HomePage;
