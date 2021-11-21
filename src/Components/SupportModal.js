import React, { useState } from "react";
import Modal from "react-modal";
import "../index.css";

import cross from "../assets/cross.svg";
import eth from "../assets/eth.svg";

Modal.setAppElement("#root");
function SupportModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  function close() {
    setIsOpen(false);
  }
  return (
    <div>
      <button
        onClick={toggleModal}
        className="bg-gray-800 text-white hover:bg-gray-700 hover:text-white md:py-2 py-3 mt-6 flex justify-center rounded-md text-lg md:text-sm font-medium w-48 md:w-32"
      >
        Support
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Add New Article"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="flex flex-col mb-12 w-full md:w-auto">
          <div className="flex flex-row justify-between">
            <p className="text-2xl">Support</p>
            <button>
              <img src={cross} alt="cross" onClick={close} />
            </button>
          </div>
          <div className="flex flex-row w-92 md:w-full w-66 border-2 rounded-full border-black h-12 mt-12 md:px-3 items-center">
            <img className="h-8 md:w-8 mr-4 font-bold" src={eth} alt="eth" />
            <p>ETH</p>
            <input
              placeholder="Enter Amount"
              className=" px-4 md:px-12 md:ml-4 border-l-2 h-11 text-lg outline-none w-36 md:w-auto"
              autoFocus
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-12">
            <button
              href="#"
              className=" bg-gray-800 text-white hover:bg-gray-700 hover:text-white py-2 mt-6 flex justify-center rounded-md text-sm font-medium w-32 md:w-44"
            >
              Make Payment
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SupportModal;
