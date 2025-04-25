import React from "react";
import Product1 from "./Product1";
import Announcements from "./Announcement"


function Home() {
  return (
    <div>
      <div style={{margin:"20px"}}>
       <Announcements/>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Product1 />
        {/* <Product2/>
     <Product3/>
     <Product4/>
     <Product5/> */}
      </div>

    </div>
  )
}

export default Home;