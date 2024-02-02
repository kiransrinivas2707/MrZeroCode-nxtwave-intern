import React from "react";
import type { Config } from "./block-config";
import { css } from "@emotion/react";

const Block: React.FC<{ config: Config }> = ({ config }) => {
  const {color1,icon1,text1,borderColor1,color2,icon2,text2,borderColor2,color3,icon3,text3,borderColor3} = config
  

 const iconColor1 = config.color1 === "#000000" ? "#ffffff" : borderColor1
  const spanColor1 = config.color1 === "#000000" ? "#ffffff" : "#000000"
  const iconColor2 = config.color2 === "#000000" ? "#ffffff" : borderColor2
  const spanColor2 = config.color2 === "#000000" ? "#ffffff" : "#000000"
  const iconColor3 = config.color3 === "#000000" ? "#ffffff" : borderColor3
  const spanColor3 = config.color3 === "#000000" ? "#ffffff" : "#000000"
  return (
    <div css={css({display:"flex", flexDirection:"column", justifyContent:"center" ,alignItems:"center", height:"100vh"})}>
    <div
      css={css({ display: "flex", backgroundColor: color1, color: "white",width:"70%",marginBottom:"20px",borderRadius:"10px",border:`3px solid ${borderColor1}`})}
    >
      <span
        css={css({ padding: "1rem", fontSize: "4rem",color:iconColor1 })}
        className="material-icons-outlined"
      >
        {icon1}
      </span>
      <div
        css={css({
          display: "flex",
          alignItems: "center",
          fontSize: "30px",
          fontFamily:"sans-serif",
          fontWeight :600,
          flex: 1,
          padding: "1rem",
          textAlign: "center",
          color:spanColor1
        })}
      >
        <span>{text1}</span>
      </div>
    </div>
    <div
      css={css({ display: "flex", backgroundColor: color2, color: "white",width:"70%",marginBottom:"20px",borderRadius:"10px",border:`3px solid ${borderColor2}`})}
    >
      <span
        css={css({ padding: "1rem", fontSize: "4rem",color:iconColor2 })}
        className="material-icons-outlined"
      >
        {icon2}
      </span>
      <div
        css={css({
          display: "flex",
          alignItems: "center",
          fontSize: "30px",
          fontFamily:"sans-serif",
          fontWeight :600,
          flex: 1,
          padding: "1rem",
          textAlign: "center",
          color:spanColor2
        })}
      >
        <span>{text2}</span>
      </div>
    </div>
    <div
      css={css({ display: "flex", backgroundColor: color3, color: "white",width:"70%",marginBottom:"20px",borderRadius:"10px",border:`3px solid ${borderColor3}`})}
    >
      <span
        css={css({ padding: "1rem", fontSize: "4rem",color:iconColor3 })}
        className="material-icons-outlined"
      >
        {icon3}
      </span>
      <div
        css={css({
          display: "flex",
          alignItems: "center",
          fontSize: "30px",
          fontFamily:"sans-serif",
          fontWeight :600,
          flex: 1,
          padding: "1rem",
          textAlign: "center",
          color:spanColor3
        })}
      >
        <span>{text3}</span>
      </div>
    </div>
    </div>
  );
};

export default Block;
