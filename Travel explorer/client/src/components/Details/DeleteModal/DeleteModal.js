import { useContext } from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { TipContext } from '../../../contexts/tipContext';

export const DeleteModal = ({ tipId }) => {
    const { onTipDeleteClose,
            onTipDeleteSumit,
            showDeleteModal } = useContext(TipContext);

    return (
        <Modal show={showDeleteModal}>
            <Modal.Header closeButton onHide={onTipDeleteClose}>
                <Modal.Title>Delete tip</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onTipDeleteSumit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Are you sure you want to delete this tip?</Form.Label>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => onTipDeleteSumit(e, tipId)}>
                        Yes, delete!
                    </Button> {" "}
                    <Button variant="secondary" onClick={onTipDeleteClose}>No.</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};
