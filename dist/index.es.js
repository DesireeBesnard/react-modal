import e from"react";const t={position:"fixed",left:0,top:0,width:"100%",height:"100vh",backgroundColor:"rgba(255, 255, 255, 0.8)"},o=({onClick:o})=>e.createElement("div",{onClick:o,style:t}),n={width:"100%",position:"absolute",left:0,top:0},i={maxWidth:"500px",width:"100%",border:"1px solid #ddd",margin:"100px auto 0",zIndex:1,position:"relative",padding:"10px"},l={position:"absolute",right:"20px",top:"20px",background:"none",border:"none",fontWeight:"bold",fontSize:"20px",cursor:"pointer"},r=({children:t,show:r,handleCloseBtn:d})=>e.createElement(e.Fragment,null,r&&e.createElement("div",{style:n},e.createElement(o,{onClick:d}),e.createElement("div",{style:i},e.createElement("button",{onClick:d,style:l},"X"),t)));export{r as Modal};