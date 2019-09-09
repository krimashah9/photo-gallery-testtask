import React from "react";
import {Modal} from "semantic-ui-react";

const InfoModal = (props) => {
  const {open, toggleModal, header, content, size, actionButton} = props
  return (<Modal size={size} open={open} onClose={toggleModal} closeIcon>
    <Modal.Header>{header}</Modal.Header>
    <Modal.Content>
      {content}
    </Modal.Content>
    <Modal.Actions>
      {actionButton}
    </Modal.Actions>
  </Modal>)
}
export default InfoModal