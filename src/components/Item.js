import React from 'react'
const Item = ({ item }) => {
  return (
    <div className="w-64 p-2 flex  flex-col items-center my-4"
      style={{ backgroundColor: `${item.color}`, color: item.color.includes('White') ? 'black' : 'white' }}
    >
      <div className='text-center  cursor-pointer'>
        <img className='w-48 max-w-48 object-contain' src={`./images/${item.image_name}.png`} alt="" />
        <p className='text-xl my-4'>{item.name}</p>
        <div className='flex justify-between items-center'>
          <div className='flex space-x-1 items-center'>
            <p className='text-sm'>{item.price}</p>
            <p >{item.currency}</p>
          </div>
          <p className='text-sm1  '>{item.category}</p>
        </div>
      </div>
    </div>
  )
}

export default Item