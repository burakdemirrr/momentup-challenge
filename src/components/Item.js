import { XIcon } from '@heroicons/react/outline';
import React from 'react'
import Modal from 'react-modal';


Modal.setAppElement('#root');
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
const Item = ({ item }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      border: "1px solid ",
      transform: 'translate(-50%, -50%)',

    },
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(e) {
    e.stopPropagation();
    setIsOpen(false);
    console.log(modalIsOpen)
  }
  return (
    <div className="w-64 p-2 flex  flex-col items-center my-4 " onClick={openModal}
      style={{ backgroundColor: `${item.color}`, color: item.color.includes('White') ? 'black' : 'white' }}
    >
      <div className='text-center  cursor-pointer'>
        <img className='w-48 max-w-64 object-contain' src={`./images/${item.image_name}.png`} alt="" />
        <p className='text-[1.2rem] my-4'>{item.name}</p>
        <div className='flex justify-between items-center'>
          <div className='flex space-x-1 items-center'>
            <p className='text-[1rem]'>{item.price}</p>
            <p className='text-[0.83rem]'>{item.currency}</p>
          </div>
          <p >{item.category}</p>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        style={customStyles}
      >
        <XIcon className=' cursor-pointer w-6 float-right' onClick={closeModal} />
        <div className='flex justify-center  space-x-4 p-10 '>
          <img className='w-80 object-contain ' src={`./images/${item.image_name}.png`} alt="" />
          <div className='mt-3'>
            <p className='text-3xl'>{item.name}</p>
            <p className='mt-[5px] text-[12px] text-gray-600'>#{item.id}</p>

            <p className='mt-[5px] text-xl'>${item.price}</p>
            <button className='mt-[260px] w-36 h-10 rounded-lg  border-white bg-black text-white '>Add To Cart</button>
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default Item