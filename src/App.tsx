import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import React, { useEffect } from "react"
import initAOS from "./utils/AOS"
import "./App.css"
import "./styles/bootstrap.min.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Booking from "./pages/Booking"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Menu from "./pages/Menu"
import Service from "./pages/Service"
import Team from "./pages/Team"
import Testimonial from "./pages/Testimonial"
import RootLayout from "./layout/RootLayout"

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="booking"
          element={<Booking />}
        />
        <Route
          path="contact"
          element={<Contact />}
        />
        <Route
          path="menu"
          element={<Menu />}
        />
        <Route
          path="service"
          element={<Service />}
        />
        <Route
          path="team"
          element={<Team />}
        />
        <Route
          path="testimonial"
          element={<Testimonial />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Route>
    ),
    {
      basename: "/Restaurant-react-vite-ts/", 
    }
  )

  useEffect(() => {
    initAOS()
  }, [])

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
