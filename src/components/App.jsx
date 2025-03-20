// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



// ==========================================

// function Product() {
//   return (
//     <div>
//       <h2>Cookies</h2>
// 	  <p>Price: 999 credits</p>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <div>
//       <h1>Products</h1>

//       <Product />
//       <Product />
//       <Product />
//     </div>
//   );
// };

// =================================================

// import Product from './Product';
// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product/>
//       <Product/>
//       <Product/>
//     </div>
//   )
// }


// import Product from './Product';

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product name="Tacos With Lime" />
//       <Product name="Fries and Burger" />
//     </div>
//   );
// }


// =============================================================


// import Product from "./Product";

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//         color = "ghfdhjsldh"
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//         color= "red"
//       />
//     </div>
//   );
// }


// const favBooks = [
//   { id : "id-1" , name : "JS для початківців" },
//   { id : "id-2" , name : "Основи React" },
//   { id : "id-3" , name : "Огляд маршрутизатора React" }
// ];

// const  BookList = ( { books } ) => {
//    return (
//      < ul >
//       {books.map((book) => {
//         return < li key={book.id} > {book.name} </ li > ;
//       })}
//     </ ul >
//   );
// };

// const  App = () => {
//    return (
//      <> 
// 	  < h1 > Книги тижня </ h1 > 
//       < BookList  books = {favBooks} /> 
//     </>
//   );
// };

// export default App;












// ======================================================

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn moregit comm
//       </p>
//     </>
//   )
// }

// export default App
