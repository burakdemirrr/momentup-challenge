import './App.css';
import Item from './components/Item';
import useAxios from './hooks/useAxios';

function App() {

  const {response}=useAxios();
  console.log(response)
  return (
    <div className="App">

      <h1 className='text-4xl'>Items</h1>
      <div className='flex items-center justify-center flex-wrap space-x-2'>
      {
        response?.products?.map((item)=>(
          <Item key={item.id} item={item}/>
        ))
      }</div>

      <h1>Toplam Ürün Sayısı:{response?.total_product_count}</h1>
    </div>
  );
}

export default App;
