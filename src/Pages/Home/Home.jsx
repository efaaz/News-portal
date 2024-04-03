import React from 'react'
import Header from '../shared/Header/Header'
import Navbar from '../shared/Navbar/Navbar'
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav'
import RightSideNav from '../shared/RightSideNav/RightSideNav'

function Home() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">Main</div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  )
}

export default Home