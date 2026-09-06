import './App.css'
import { Suspense } from 'react';
// import Users from './Users'
// import Posts from './Posts';
// import Batter from './Batter';
// import Counter from './Counter';
// import Cart from './Cart'
import Todos from './Todos';


// const usersDataPromise = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const data = await res.json();
//   return data;
// }

const postDataPromise = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}

function App() {

  // const handleClick = () => {
  //   alert('Button is clicked');
  // }

  // const addItemToCart = (id) => {
  //   alert(`Buying Product ${id}`)
  // }

  return (
    <>

      <Todos></Todos>

      {/* <Suspense fallback = {<p>Loading posts data...</p>}>
        <Posts postDataPromise = {postDataPromise()}></Posts>
      </Suspense> */}
      
        {/* <Suspense fallback={<p>Loading...</p>}>
          <Users usersDataPromise={usersDataPromise()}></Users>
        </Suspense> */}


        {/* <Counter></Counter>
      <Batter></Batter> */}
        {/* <Cart></Cart> */}

        {/* <button onClick={handleClick}>Click me</button>
      <button onClick={() => addItemToCart(10)}>Buy Product</button> */}

   
    </>
  )
}

export default App
