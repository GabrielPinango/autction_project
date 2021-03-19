import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalDialog = ({show, handleClose, formModal}) => {
    return  <>
    <   Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {formModal}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Acept
                </Button>
            </Modal.Footer>
        </Modal>
    </>;
}

export default ModalDialog;