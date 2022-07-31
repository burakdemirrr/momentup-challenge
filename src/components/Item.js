import React from 'react'
import Modal from 'react-modal';



// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
const Item = ({ item }) => {
  const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    
  },
};
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
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
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
      <div className='flex justify-center space-x-4'>
        <img className='w-80 object-contain'  src={`./images/${item.image_name}.png`} alt="" />
        <div>
          <p>{item.name}</p>
          <p>{item.id}</p>

          <p>{item.price}</p>

          <button>Add To Cart</button>
        </div>
      </div>
      </Modal>

    </div>
  )
}

export default Item