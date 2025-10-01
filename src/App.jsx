import { Suspense, useState } from "react"
import Container from "./componenst/container"
import Footer from "./componenst/Footer"
import Navbar from "./componenst/Navbar"
import Toggle_btns from "./componenst/toggle_btns"
import IssuesManagement from "./componenst/IssuesManagement"

 const faceissues=async()=>{
    const result=await fetch("/data.json")
    return result.json()
  }

function App() {
  const facepromise=faceissues()
  return (
    <>
      <Navbar></Navbar>

        <Suspense fallback={"Loading......"}>
          <IssuesManagement facepromise={facepromise}></IssuesManagement>
        </Suspense>
   
      <Footer></Footer>
    </>
  )
}

export default App
