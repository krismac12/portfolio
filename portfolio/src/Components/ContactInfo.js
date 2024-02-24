import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    // Define contact details
    const reference = {
        name: 'Kristan Miguel Tolentino Macaraeg',
        position: 'Full Stack Developer',
        email: 'krismacw1@gmail.com',
        phone: '+61 0426420660',
    };

    // Function to toggle modal visibility
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <Button variant="primary" onClick={toggleModal}>Contact Info</Button>

            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{reference.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table responsive>
                        <tbody>
                            <tr>
                                <td><strong>Position:</strong></td>
                                <td>{reference.position}</td>
                            </tr>
                            <tr>
                                <td><strong>Email:</strong></td>
                                <td>{reference.email}</td>
                            </tr>
                            <tr>
                                <td><strong>Phone:</strong></td>
                                <td>{reference.phone}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="danger" onClick={toggleModal}>Close</Button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Contact;
