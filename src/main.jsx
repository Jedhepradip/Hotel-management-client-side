// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './App/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Pages/Home.jsx'
import Card from './components/Pages/Card.jsx'
import About from './components/Pages/About.jsx'
import Contact from './components/Pages/Contact.jsx'
import RoomsAll from './components/Pages/RoomsAll.jsx'
import SignIn from './components/Pages/SignIn.jsx'
import ProfilePage from './components/Pages/ProfilePage.jsx'
import AddtoRooms from './components/Pages/AddtoRooms.jsx'
import Login from './components/Pages/Login.jsx'
import ForgetPassword from './components/Pages/ForgetPassword.jsx'
import PageNotFound from './components/Pages/PageNotFound.jsx'
import Createpassword from './components/Pages/Createpassword.jsx'
import Wishlist from './components/Pages/Wishlist.jsx'
import PaymentModal from './components/Pages/PaymentModal.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Card',
        element: <Card />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/RoomsAll/:id",
        element: <RoomsAll />
      },
      {
        path: "/SignIn",
        element: <SignIn />
      },
      {
        path: "/ProfilePage",
        element: <ProfilePage />
      },
      {
        path: "/AddtoRooms",
        element: <AddtoRooms />
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/ForgotPassword",
        element: <ForgetPassword />
      },
      {
        path: "/Createpassword/:Id",
        element: <Createpassword />
      },
      {
        path: "/Wishlist",
        element: <Wishlist />
      },
      {
        path: "/PaymentModal",
        element: <PaymentModal />
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
