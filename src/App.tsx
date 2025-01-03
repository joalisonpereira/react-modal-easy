import { useState } from 'react';
import { Modal } from '../lib/Modal';

function App() {
  const [visible, setVisible] = useState(true);

  const onClose = () => setVisible(false);

  return (
    <div style={{ backgroundColor: 'red' }}>
      <Modal
        isVisible={visible}
        onClose={onClose}
        closeButton={
          <Modal.Close onClick={onClose} aria-label='Close'>
            Fechar
          </Modal.Close>
        }
      >
        <div style={{ backgroundColor: 'red' }}>
          <Modal.Title>Lorem Ipsum is simply</Modal.Title>
          <Modal.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Modal.Description>
        </div>
      </Modal>
    </div>
  );
}

export default App;
