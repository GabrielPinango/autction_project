import Modal from 'react-bootstrap/Modal';

const ModalDialog = ({show, handleClose, formModal, title}) => {
    return  <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            {formModal}
        </Modal>
    </>;
}

export default ModalDialog;