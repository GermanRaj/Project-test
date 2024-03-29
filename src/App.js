import './App.css';
import './App.css';

import Product from './components/Product';

function App() {

  const users = [
    {
      id: 1,
      firstname: 'Oleg',
      lastname: 'Petrov',
      age: 30
    },
    {
      id: 2,
      firstname: 'Ivan',
      lastname: 'Demidov',
      age: 45
    },
    {
      id: 3,
      firstname: 'Olga',
      lastname: 'Sidorova',
      age: 14
    },
    {
      id: 4,
      firstname: 'Irina',
      lastname: 'Sokolova',
      age: 33
    },
    {
      id: 5,
      firstname: 'Boris',
      lastname: 'Ushanov',
      age: 23
    },
    {
      id: 6,
      firstname: 'Anna',
      lastname: 'Petrova',
      age: 22
    }
  ]

  const products = [
    {
      id: 1,
      title: 'Apple',
      description:'pretti',
      price: 47,
      discount: 55 
    },
    {
      id: 2,
      title: 'Banana',
      description:'pretti',
      price: 47,
      discount: 48 
    },
    {
      id: 3,
      title: 'Peach',
      description:'pretti',
      price: 47,
      discount: 35 
    },
    {
      id: 4,
      title: 'Orange',
      description:'pretti',
      price: 47,
      discount: 35 
    }
  ]

  return (
    <div>
      <h1>Header</h1>
      {/* {
        users.map(el => <User firstname={el.firstname} lastname={el.lastname} age={el.age} key={el.id} />)
      } */}

      {
        products.map(el => <Product key={el.id} title={el.title} description={el.description} price={el.price} discount={el.discount} />)
      }
    </div>
  );
}

export default App;
