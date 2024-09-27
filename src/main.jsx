import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Signup from "./Signup/Signup.jsx"
import Login from "./Login/Login.jsx"
import AddHospital from "./AddHospital/AddHospital.jsx"
import IndexPage from "./Index/IndexPage.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Signup /> */}
    {/* <Login /> */}
    {/* <AddHospital /> */}
    <IndexPage/>
  </StrictMode>,
)
