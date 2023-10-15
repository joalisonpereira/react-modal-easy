import { useState } from "react";
import { Modal } from "../lib/Modal";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <div style={{ width: 500, backgroundColor: "white" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          consequatur praesentium, aliquid ea magni quas, harum voluptate
          commodi error earum culpa ex quibusdam tenetur! Saepe quaerat amet id
          autem ratione!
        </div>
      </Modal>
      {new Array(30).fill(null).map((_, index) => (
        <p className="mt-10" key={index}>
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
