import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Components/Home/Home'
import LogIN from './Components/LogIN/LogIN'
import SignUP from './Components/SignUP/SignUP'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux'
import { db } from './firebaseConfig'
import { setFirebaseData } from './Services/Actions/AuthAction'
import { collection, getDocs } from 'firebase/firestore'
import Cart from './Components/Cart/Cart'
import Order from './Components/Order/Order'
import ViewOrder from './Components/ViewOrder/ViewOrder'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, 'Data');
        const snapshot = await getDocs(colRef);
        let fetchedData = [];

        snapshot.forEach((doc) => {
          fetchedData.push({ ...doc.data(), id: doc.id });
        });

        dispatch(setFirebaseData(fetchedData));

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LogIN' element={<LogIN />} />
        <Route path='/SignUP' element={<SignUP />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/ViewOrder' element={<ViewOrder />} />
      </Routes>
    </>
  )
}

export default App
