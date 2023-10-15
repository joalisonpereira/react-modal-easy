import { useState } from 'react';
import { Modal } from '../lib/Modal';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Close' : 'Open'}
      </button>
      <Modal
        animation='scale'
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      >
        <div style={{ background: 'white', padding: 20, borderRadius: 6 }}>
          <Modal.Title>Hello Modal</Modal.Title>
          <form>
            <input placeholder='Email' />
            <input placeholder='Password' />
            <button>Enviar</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default App;
