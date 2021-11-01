/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalBody, ModalFooter,ModalHeader } from 'reactstrap';

export const ModalComponent = ({ modal, toggle, carModel }) => {
  // let carSpec = carModel.body.split(' ');
  // console.log("spec", carSpec);
return (
<div style={{ maxWidth: "100%" }}>
    <Modal isOpen={modal} toggle={toggle} size='xl'>
  
      <ModalHeader>{`Details of ${carModel.name}`}</ModalHeader>
      <ModalBody>
        <div style={{textAlign:"center"}}>
          <img src={ carModel.link } className="img-fluid" alt=''/>
        </div>
      </ModalBody>
      <ModalBody>
        <div>
        <p><strong> Production Year</strong> : {carModel.production}</p>
        </div>
      </ModalBody>
      <ModalBody>
        <div>
        <p><strong> Specifications</strong> : {carModel.body }</p>
        </div>
      </ModalBody>
      <ModalFooter>
              <Button color="secondary" onClick={toggle}>OK</Button>
      </ModalFooter>
  </Modal>
</div>
);
}

