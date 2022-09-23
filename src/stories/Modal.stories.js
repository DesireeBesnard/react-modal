import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Modal } from "../components/Modal";

const stories = storiesOf('App', module)

stories.add('App', () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            <Modal show={showModal} handleCloseBtn={() => setShowModal(false)}>
                <h1>Hello</h1>
            </Modal>
        </>
    )
})