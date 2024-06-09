import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';




// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return <h1>My favorite color is {color}!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);


// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

//   return <h1>I have rendered {count} times!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);


// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 user={user} />
//     </>
//   );
// }

// function Component4({ user }) {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 user={user} />
//     </>
//   );
// }

// function Component5({ user }) {
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component4 />);

// function Helo() {
//     // const user = "helo"


//     return (
//         <>
//             <h1>Trang chủ</h1>
//             <nav>
//                 <ul>
//                     <li >Hàngmới về {user} </li>
//                     <li>Hàng bán chạy </li>
//                     <li>Hàng sale</li>
//                 </ul>
//             </nav>

//         </>

//     )
// }
// function App() {
// 	return React.createElement(
// 		"div",
// 		{className: "app"},
// 		React.createElement("h1", {}, "Hello, World!")
// 	)
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Helo />)
// root.render(<App/>)

// const App = () => {
//     const randomAge = Math.floor(Math.random() * 10);
//     const imgsrc = "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg";
    
//     return (
//         <div>
//             <p>
//                 Hello, Mind X. Random Age {randomAge} years old
//             </p>
//             <img src={imgsrc} alt="sky" />
//         </div>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// const weekday = [
// 	"Sunday",
//     "Monday",
// 	"Tuesday",
// 	"Wednesday",
// 	"Thursday",
// 	"Friday",
// 	"Saturday"
// ];

// const App = () => {
//     return (
//         <>
//             <div>Today is {weekday[new Date().getDay()]}</div>
//            <div className="App">
// 			Hello, world!
//             </div>
//             <div style={{backgroundColor: 'yellow', fontSize: 18}}>Hello, World!</div>

//         </>

//     )
    
// }

    // const App = () => {
    //     const x = 1;
    //     const y = 5;
    //     return (
    //         <div>
    //         <Sum a= {x } b = {y}/>
    //         </div>

    //     )
    // }
    //     const Sum = (props) => {
    //         console.log(props);
    //         return <div>The Value is :{props.a + props.b}</div>
    //     }

// // Thành phần con
// const ChildComponent = (props) => {
//     return (
//         <div>
//             <p>Tên: {props.name}</p>
//             <p>Tuổi: {props.age}</p>
//         </div>
//     );
// }

// // Thành phần cha
// const ParentComponent = () => {
//     const name = "John";
//     const age = 25;

//     return (
//         <div>
//             <h2>Thông tin người dùng</h2>
//             <ChildComponent name={name} age={age} />
//         </div>
//     );
// }


    // Thành phần con
// const ChildComponent = (props) => {
//     return (
//         <ul>
//              {
//             props.items.map((item , index) => (
//                 <li key={index}>{item}</li>
//             ))}
//          </ul>
     
//     );
// }

// // Thành phần cha
// const ParentComponent = () => {
//     const data = ["Một", "Hai", "Ba", "Bốn"];


//     return (
//         <div>
//             <h2>Danh sách các số</h2>
//             <ChildComponent items = {data}/>
//         </div>
//     );
// }




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ParentComponent />);


// const App = () => {
//     return (
//         <>
            
// 		{/* <div>
//             <NameCard className="name-card" id="alice" />
            
//         </div> */}
//         <nav>
//                 <ul >
//                     <li><NameCard className="li_card"/></li>
//                 </ul>
//         </nav>
//         </>
// 	)
// }

// const NameCard = (props) => {
// 	return (
//     <>
//             {/* <div className={props.className}>
// 			<div id={props.id}>Name: Alice</div>
//             </div> */}
//             <nav>
//                 <ul >
//                     <li className={props.className}>HElo</li>
//                     <li className={props.className}>HElo</li>
//                     <li className={props.className}>HElo</li>
//                 </ul>
//             </nav>
//     </>

        
// 	)
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)



// const Cart = () => {
// 	return (
//         <h1>Helo</h1>
// 	)
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Cart />)

// const App = () => {
	
// 	const onClick = () => {
// 		console.log("Click me");
// 	}
	
// 	return <button onClick={onClick}>Click me</button>
// }

// const App = () => {
//     const onClickMe = () => {
//         console.log("click me")
      
//     }
//     return <button onClick={onClickMe()}>click me</button>
// }

// const App = () => {
// 	return <button onClick={() => { console.log("Hello") }}>Click me</button>
// }

// const App = () => {
// 	console.log('App')
// 	return (
// 		<div>
// 			<A />
// 		</div>
// 	)
// }

// const A = () => {
// 	console.log('A')
// 	return (
// 		<div>
// 			<B />
//     </div>
// 	)
// }

// const B = () => {
// 	console.log('B')
// 	return (
// 		<div>
// 			Hello React
// 		</div>
// 	)
// }

// ReactDOM.render(<App/>, document.getElementById('root'))


// const App = () => {
//     console.log("App")
//     return (
//         <div>
//             <A />
//         </div>
//     )
// }
// const A = () => {
//     return(
//         <div>
//             <B />
//         </div >
//     )
// }
// const B = () => {
//     return (
//         <div>
//             Helo react
//         </div>
//     )
// }

// const App = () => {
	
// 	let count = 5;

// 	const handleClick = () => {
// 		count = count + 1;
// 		console.log("count: ", count)
// 	}

// 	return (
// 		<div>
// 			<span>{count}</span>
// 			<button onClick={handleClick}>Increase</button>
// 		</div>
// 	)
// }

// const App = () => {
//   // Using useState to create a state variable 'count' with initial value 5
//     //   const [count, setCount] = useState(5);
    
//     let count = 0;
//   // Event handler to increase the count when the button is clicked
//   const handleClick = () => {
//     // Using setCount to update the state and trigger a re-render
//       // setCount(count + 1);
    
//       count = count + 1;
//     console.log("count: ", count);
//   }

//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={handleClick}>Increase</button>
//     </div>
//   );
// }


// const App = () => {
// 	const countState = useState(10000)
// 	const count = countState[0]
// 	const setCount = countState[1]

// 	const onIncreaseClick = () => {
// 		setCount(count * 200000000000)
// 	}

// 	return (
// 		<div>
// 			<span>{count}</span>
// 			<button onClick={onIncreaseClick}>Increase</button>
// 		</div>
// 	)
// }

// const App = () => {
// 	return (
// 		<div>
// 			<Counter />
// 			<Counter />
// 			<Counter />
// 		</div>
// 	)
// }

// const Counter = () => {
// 	const [count, setCount] = useState(0)

// 	const onIncrease = () => {
// 		setCount(count + 1)
// 	}

// 	return (
// 		<div>
// 			<div>{count}</div>
// 			<button onClick={onIncrease}>Increase</button>
// 		</div>
// 	)
// }

//  su kien click theo class
// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>Bạn đã bấm {this.state.count} lần</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Bấm vào tôi
//         </button>
//       </div>
//     );
//   }
// }

// const DashboardReact = () => {
//   const [data, setData] = useState({
//     users: 100,
//     orders: 25,
//     revenue: 100000,
//   });

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <div>
//         <p>Users: {data.users}</p>
//         <p>Orders: {data.orders}</p>
//         <p>Revenue: ${data.revenue}</p>
//       </div>
//     </div>
//   );
// };

// const DashboardReact = () => {
//   const [data, setData] = useState({
//     users: 0,
//     orders: 0,
//     revenue: 20 ,
//   });

//   useEffect(() => {
//     // Fetch data from your API endpoint
//     fetch('https://api.example.com/dashboard')
//       .then(response => response.json())
//       .then(apiData => {
//         // Update state with the data received from the API
//         setData({
//           users: apiData.users,
//           orders: apiData.orders,
//           revenue: apiData.revenue,
//         });
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // The empty dependency array ensures this effect runs only once on component mount

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <div>
//         <p>Users: {data.users}</p>
//         <p>Orders: {data.orders}</p>
//         <p>Revenue: ${data.revenue}</p>
//       </div>
//     </div>
//   );
// };

// // DashboardReact.jsx

// const UserRefLec = () => {
//     const [count, setCount] =useState(0)
//     const countRef = userRef(0);

//     const onClick = () => {
//         countRef.current++
//         setCount(count + 1);
//         console.log(countRef)
//     };
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={onClick}>click</button>
//         </div>
//     )
// }

// const App = () => {
//     const [input, setInput] = useState("")
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         console.log(input)
//         setInput("  ")
//     }
//     const handleInputChange = (event) => {
//         setInput(event.target.value)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={input} onChange={handleInputChange} />
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// const App = () => {
	
// 	const [input, setInput] = useState("")
	
// 	const handleSubmit = (event) => {
// 		event.preventDefault()
// 		console.log(input)
// 		setInput("")
// 	}

// 	const handleInputChange = (event) => {
// 		setInput(event.target.value)
// 	}

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<input type="text" value={input} onChange={handleInputChange} />
// 			<button type="submit">Submit</button>
// 		</form>
// 	)
// }

// const App = () => {
// 	const [alice, setAlice] = useState({name: "Alice", age: 10})
// 	const [bob, setBob] = useState({name: "Bob", age: 10})

// 	const increaseAliceAge = () => {
// 		setAlice({
// 			...alice,
// 			age: alice.age + 1,
// 		})
// 	}

// 	const increaseBobAge = () => {
// 		setBob({
// 			...bob,
// 			age: bob.age + 1,
// 		})
	
// 	}

// 	return (
		
// 		<div>
// 			<NameCard
// 				name={alice.name}
// 				age={alice.age}
// 				onIncreaseAge={increaseAliceAge}
// 			/>
// 			<NameCard
// 				name={bob.name}
// 				age={alice.age}
// 				onIncreaseAge={increaseBobAge}
// 			/>
         
// 		</div>
// 	)
// }

// const NameCard = (props) => {
// 	return (
// 		<div>
// 			<div>Hello, my name is {props.name}. I'm {props.age} years old</div>
// 			<button onClick={props.onIncreaseAge}>Increase age</button>
// 		</div>
// 	)
// }

// const App = () => {
// 	const [input, setInput] = useState("")
	
// 	const handleSubmit = (event) => {
// 		event.preventDefault()
// 		console.log(input)
	
// 	}
// 	const handleChange = (event) => {
// 		setInput(event.target.value)
// 	}

// 	return (
// 		<>
// 			<form onSubmit={handleSubmit}>
// 				<input type="text" value={input} onChange={handleChange} />
				
// 			<button type="submit"  onChange={handleChange}>click me</button>
// 			</form>
	
// 		</>
// 	)
	
// }
// const App = () => {
// 	const [input, setInput] = useState("")
// 	const Submit = (event) => {
// 		event.preventDefault()
// 		console.log(input)
// 	}
// 	const handCheck = (event) => {
// 		setInput(event.target.value)
// 	}
// 	return (
// 		<form onSubmit={Submit}>
// 			<input type="password" value={input} onChange={handCheck} />
// 			<button type='submit' >click</button>
// 		</form>

// 	)
// 	}


// const MyForm = () => {
//   // Sử dụng một state duy nhất để lưu trữ giá trị của tất cả các input
//   const [formValues, setFormValues] = useState({
//     name: '',
//     email: '',
//     gender: 'male',
//     hobbies: [],
//     message: '',
//   });

//   // Hàm xử lý khi giá trị của bất kỳ input nào thay đổi
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     // Xử lý giá trị cho các loại input khác nhau
//     const newValue = type === 'checkbox' ? (checked ? [...formValues[name], value] : formValues[name].filter(item => item !== value))
//       : type === 'radio' ? value
//       : value;

//     setFormValues({
//       ...formValues,
//       [name]: newValue,
//     });
//   };

//   // Hàm xử lý khi form được submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In ra giá trị của form khi submit
//     console.log(formValues);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formValues.name} onChange={handleInputChange} />
//       </label>

//       <label>
//         Email:
//         <input type="email" name="email" value={formValues.email} onChange={handleInputChange} />
//       </label>

//       <label>
//         Gender:
//         <select name="gender" value={formValues.gender} onChange={handleInputChange}>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </label>

//       <label>
//         Hobbies:
//         <input type="checkbox" name="hobbies" value="reading" checked={formValues.hobbies.includes('reading')} onChange={handleInputChange} /> Reading
//         <input type="checkbox" name="hobbies" value="coding" checked={formValues.hobbies.includes('coding')} onChange={handleInputChange} /> Coding
//         <input type="checkbox" name="hobbies" value="traveling" checked={formValues.hobbies.includes('traveling')} onChange={handleInputChange} /> Traveling
//       </label>

//       <label>
//         Message:
//         <textarea name="message" value={formValues.message} onChange={handleInputChange} />
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// const App = () => {
// 	const [people, setPeople] = useState([
// 		{name : "Mind x",age: 10} , {name :"React"}
// 	])
// 	return (
// 		<NameCard
// 			name={people[1].name}
// 			age={people[0].age}
// 		/>
// 		)
// }
// 	const NameCard = (props) => {
// 		return <div> Helo , my name {props.name}. I am  {props.age}</div>
// 	}
	
// const App = () => {
// 	return (
// 		<div>
// 		<ProductList />
// 		<Cart />
// 		</div>

// 	)

// }
// const ProductList = () => {
// 	const [products, setProducts] = useState([
// 		{name : "ti_vi"}
// 	])
// 	return (
// 		<div>
// 			<h1>Sản phẩm : {products[0].name}</h1>
// 		</div>
// 	)
// }
// const Cart = () => {
// 	const [CartItems, setCartItems] = useState([
// 	 {price : 20 + "$"}
// 	])
// 	return (
// 		<p>
// 			Giá : {CartItems[0].price}
// 		</p>
// 	)

// }

// const App = () => {
// 	const [products, setProducts] = useState([
// 		{name: "ti_vi"}
// 	]);

// 	const [cartItems, setCartItems] = useState([
// 		{price: 20 + "$"}
// 	]);

// 	return (
// 		<div>
// 			<ProductList products={products} />
// 			<Cart cartItems={cartItems} />
// 		</div>
// 	)
// }

// const ProductList = ({ products }) => {
// 	return (
// 		<div>
// 			<h1>Sản phẩm : {products[0].name}</h1>
// 		</div>
// 	)
// }

// const Cart = ({ cartItems }) => {
// 	return (
// 		<p>
// 			Giá : {cartItems[0].price}
// 		</p>
// 	)
// }

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "ti_vi", price: 15 },
	  { id: 2, name: "laptop", price: 800 },
	 { id: 3, name: "laptop2", price: 900 },
    // Add more products as needed
  ]);

  const [cartItems, setCartItems] = useState([
    { productId: 1, quantity: 1, price: 15 },
    // Existing cart items
  ]);
const addToCart = (product) => {
  const existingItemIndex = cartItems.findIndex(item => item.productId === product.id);

  if (existingItemIndex !== -1) {
    // If the product is already in the cart, update the quantity and total price
    setCartItems((prev) => {
      const updatedCart = [...prev];
      updatedCart[existingItemIndex].quantity += 1;
      updatedCart[existingItemIndex].totalPrice = updatedCart[existingItemIndex].quantity *product.price;
      return updatedCart;
    });
  } else {
    // If the product is not in the cart, add a new item
    setCartItems((prev) => [
      ...prev,
      {
        productId: product.id,
        quantity: 1,
        price: product.price,
        totalPrice: product.price, // Initial total price for the new item
      },
    ]);
  }
};



  return (
    <div>
      <ProductList products={products} onAddToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div>
      <h1>Sản phẩm:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}$
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cart = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div>
      <h1>Giỏ hàng:</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            Product ID: {item.productId}, Quantity: {item.quantity}, Price: {item.price}$
          </li>
        ))}
      </ul>
      <p>Total: {calculateTotal()}$</p>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<DashboardReact />)
// root.render(<UserRefLec />)
// root.render(<MyForm  />)
root.render(<App />)
