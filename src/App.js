import { Navbar } from './components/Navbar';
import { About } from './components/About';
import SignupPage from './components/Signup';
import { Contact } from './components/Contact';
import { Feedback } from './components/Feedback';
import { LoginPage } from './components/Login';
import Leafy from './components/Leafy';
import Marrow from './components/Marrow';
import Root from './components/Root';
import Juicy from './components/Juicy';
import Exotic from './components/Exotic';
import Seasonal from './components/Seasonal';
import Cart from './components/Cart';
import Success from './components/success';
import { Cancel } from './components/cancel';
import { AdminHome } from './components/Admin/AdminHome';
import AdminProductForm from './components/Admin/AdminProductForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminEdit from './components/Admin/AdminEdit';
import Frgtpswd from './components/Forgotpswd';
import Rstpswd from './components/Resetpswd';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    console.log(cart);
    const existingItem = cart.find((item) => item._id === product._id);
    console.log(existingItem);
    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  const updateQuantity = (productId, amount) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        item.quantity += amount;
      }
      return item;
    }).filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };


  //for admin edit product form
  const [productdata, setpdata] = useState([])
  const editproduct = (product,) => {
    setpdata({ ...product });
  };
  useEffect(() => {
    // This useEffect will run every time productdata changes
    console.log(productdata);
  }, [productdata]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar addToCart={addToCart}/>}>
        </Route>
        <Route exact path="/admin" element={<AdminHome editproduct={editproduct} />}>
        </Route>
        <Route exact path="/admin/add-product" element={<AdminProductForm />}>
        </Route>
        <Route exact path="/admin/product-edit" element={<AdminEdit productdata={productdata} />}>
        </Route>
        <Route exact path="/about" element={<About />}>
        </Route>
        <Route path="/signup" element={<SignupPage />}>
        </Route>
        <Route path="/forgot-password" element={<Frgtpswd />}>
        </Route>
        <Route path="/reset-password/:id/:token" element={<Rstpswd />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} total={calculateTotal()}/>}>
        </Route>
        <Route path="/feedback" element={<Feedback />}>
        </Route>
        <Route path="/login" element={<LoginPage />}>
        </Route>
        <Route path="/leafy" element={<Leafy addToCart={addToCart} />}>
        </Route>
        <Route path="/success" element={<Success />}>
        </Route>
        <Route path="/cancel" element={<Cancel />}>
        </Route>
        <Route path="/marrow" element={<Marrow addToCart={addToCart}/>}>
        </Route>
        <Route path="/root" element={<Root addToCart={addToCart}/>}>
        </Route>
        <Route path="/juicy fruits" element={<Juicy addToCart={addToCart}/>}>
        </Route>
        <Route path="/exotic fruits" element={<Exotic addToCart={addToCart} />}>
        </Route>
        <Route path="/seasonal fruits" element={<Seasonal addToCart={addToCart}/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;