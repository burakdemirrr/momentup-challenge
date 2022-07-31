import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import useAxios from './hooks/useAxios';

function App() {
  const {response}=useAxios();
  const [selectone,setSelectOne]=useState("");
  const [selecttwo,setSelectTwo]=useState("");

  const options=response?.filter_options;

  const filteredResponse=response?.products?.filter(item=>
      item?.category?.includes(selectone) && item.color.includes(selecttwo)
  )
    return (
    <div className="App">
      <Header/>
      
{
  options &&
      <div>
      <select  value={selectone} onChange={(e)=>setSelectOne(e.target.value)}>
        { 
          options[0]?.values.map((item,id)=>(
            <option key={id} value={item}>{item}</option>
          ))
        }
      </select>

      <select  value={selecttwo} onChange={(e)=>setSelectTwo(e.target.value)}>
        { 
          options[1]?.values.map((item,id)=>(
            <option key={id} value={item}>{item}</option>
          ))
        }
      </select>
      </div>
}

      <div className='flex items-center justify-center flex-wrap space-x-2'>
      {
        filteredResponse?.map((item)=>(
          <Item key={item.id} item={item}/>
        ))
      }</div>

      <h1 className='text-center text-xl m-4'>Toplam Ürün Sayısı:{response?.total_product_count}</h1>
    </div>
  );
}

export default App;
