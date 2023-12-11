import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import Body from './Components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Error from './Components/Error'
import RestaurantMenu from './Components/RestaurantMenu'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Cart from './Components/Cart'
// import Grocery from './Components/Grocery'

const Grocery = lazy(() => import('./Components/Grocery'))

const AppLayout = () => {

  const [userName, setUserName] = useState()

  useEffect(() => {
    // make API call and send userName and password
    const data={
      name: "Siddhesh Shinde"
    }
    setUserName(data.name)

  }, [])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className='app'>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>

  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h3>Loading...</h3>}>
          <Grocery /> 
        </Suspense> 
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ]
  }, 
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <RouterProvider
    router={appRouter}
  />
)