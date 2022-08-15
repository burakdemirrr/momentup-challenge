import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import useAxios from './hooks/useAxios';
const LazyItem=React.lazy(()=>import('./components/Item'));
const LazyHeader=React.lazy(()=>import('./components/Header'));


function App() {
  const { response } = useAxios();
  const [selectone, setSelectOne] = useState("");
  const [selecttwo, setSelectTwo] = useState("");
  const [selectthree, setSelectThree] = useState("Order A-Z");
  const [sortedResponse, setSortedResponse] = useState([]);
  const options = response?.filter_options;
  const sortOptions = response.sort_options;

  //FİLTRELEME
  const filterResponsee = response && response?.products?.filter((item) => (
    item?.name.toLowerCase().includes(selectone.toLowerCase()) && item.color.includes(selecttwo)
  ))
  //SIRALAMA
  useEffect(() => {
    if (selectthree.includes("Order Z-A")) (
      setSortedResponse(filterResponsee?.sort((a, b) =>
        a.name > b.name ? -1 : 1))
    )
    else if (selectthree.includes("Order A-Z")) (
      setSortedResponse(filterResponsee?.sort((a, b) =>
        a.name > b.name ? 1 : -1))
    )

    else if (selectthree.includes("Highest price")) (
      setSortedResponse(filterResponsee?.sort((a, b) =>
        a.price > b.price ? -1 : 1))
    )
    else if (selectthree.includes("Lowest price")) (
      setSortedResponse(filterResponsee?.sort((a, b) =>
        a.price > b.price ? 1 : -1))
    )
  }, [selectthree, selectone, selecttwo, response])


  return (
    <div className="App">
      <Suspense fallback="..">
        <LazyHeader />
      </Suspense>

      {
        options &&
        <div className='text-center m-3 flex items-center justify-center space-x-3 md:space-x-0'>

          <div className='md:flex-1 flex-none space-x-3 md:space-x-9 ml-0 md:ml-36  '>
            <select className='w-[140px] text-center border-black border-2  py-2 ' value={selectone} onChange={(e) => setSelectOne(e.target.value)}>
              {
                options[0]?.values.map((item, id) => (
                  <option key={id} value={item}>{item}</option>
                ))
              }
            </select>

            <select className=' border-black border-2 w-[140px] text-center py-2' value={selecttwo} onChange={(e) => setSelectTwo(e.target.value)}>
              {
                options[1]?.values.map((item, id) => (
                  <option key={id} value={item}>{item}</option>
                ))
              }
            </select>
          </div>
          <select className=' border-black border-2 w-[140px] text-center py-2' value={selectthree} onChange={(e) => setSelectThree(e.target.value)}  >
            {
              sortOptions?.map((item) => (
                <option key={item.id} value={item.name} >{item.name}</option>
              ))
            }
          </select>
        </div>
      }

      <div className='flex items-center justify-center flex-wrap space-x-2'>
        {sortedResponse &&
          sortedResponse?.map((item) => (
            <Suspense fallback="..">
              <LazyItem key={item.id} item={item} />
            </Suspense>
          ))
        }</div>

      <h1 className='text-center text-xl m-4'>Toplam Ürün Sayısı:{response?.total_product_count}</h1>
    </div>
  );
}

export default App;
