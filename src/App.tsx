import { useState } from 'react';
import { Modal } from '../lib/Modal';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
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
      {new Array(30).fill(null).map((_, index) => (
        <p className='mt-10' key={index}>
          <b>{index}</b> - Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Cumque dicta illum consectetur accusantium suscipit deleniti
          natus ipsum, maiores magnam magni quae ad sint eum dignissimos
          cupiditate, perspiciatis quam id. Ratione. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cumque dicta illum consectetur
          accusantium suscipit deleniti natus ipsum, maiores magnam magni quae
          ad sint eum dignissimos cupiditate, perspiciatis quam id. Ratione.
        </p>
      ))}
    </div>
  );
}

export default App;
