import logo from "./logo.svg";
import "./App.css";
import useWindowScrollPositions from "./hooks/useWindowScrollPositions";
import React from "react";
import { useState } from "react";




import {
  Button,
  
} from "@mui/material";


function App() {
  const { scrollX, scrollY } = useWindowScrollPositions();

  // const [anchorEl1, setAnchorEl1] = React.useState(null);
  // const [anchorEl2, setAnchorEl2] = React.useState(null);
  // const [openEl1, setOpenEl1] = React.useState(false);
  // const [openEl2,setOpenEl2] = useState(false)

  // const handleClick1 = (event) => {
  //   setAnchorEl1(anchorEl1 ? null : event.currentTarget);
  //   setOpenEl1(true);
  //   setOpenEl2(false)
  // };
  // const handleClick2 = (event) => {
  //   setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  //   setOpenEl2(true);
  //   setOpenEl1(false)
  // };

  return (
    <div className="App">

      
      <div style={{backgroundColor: 'yellow', height: '200px'}}></div>
      <header
        style={{
          backgroundColor: "green",
          height: "40px",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          display: scrollY > 200 ? "block" : "none",
          zIndex: '1'
        }}
      >
        Header
        <Button>dfgdfgdfgd</Button>
      </header>
      <div style={{ height: "3000px" }}>

      {/* <Button
      // onClick={handleClick1} 
      variant="contained" color="primary">
          Filter1
        </Button>
        <Popper 
        
        // open={openEl1} anchorEl={anchorEl1}
        
        >
          <Paper>
            <Typography>item</Typography>
          </Paper>
        </Popper>

        <Button
          // onClick={handleClick2}
          variant="contained"
          color="secondary"
        >
          Filter2
        </Button>
        <Popper 
        // open={openEl2} anchorEl={anchorEl2}
        >
          <Paper>
            <Typography>iteccccccm</Typography>
          </Paper>
        </Popper> */}
      </div>
    </div>
  );
}

export default App;
