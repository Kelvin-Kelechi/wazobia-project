import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap');

 body{
    font-family: 'Montserrat';
 }

  label{
    width: 100px;
    height: 17px;
    font-family: 'Montserrat',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #1A1A1A;
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor:pointer;
  }
  
input{
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px;
    gap: 252px;

    width: 320px;
    height: 40px;
    padding:10px;
    background: #FFFFFF;
    border: 1px solid #E1E1E1;
    border-radius: 4px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
}
::placeholder{
    color:#CACACA;
    
}
input[type='password']{
  font-family:verdana;
  letter-spacing:0.125em;
}
input[type='text']{
  font-family:verdana;
  letter-spacing:0.125em;
}
input[type='email']{
  font-family:verdana;
  letter-spacing:0.125em;
}

button:disabled{
  position: absolute;
  width: 656px;
  height: 48px;
  left: 32px;
   
  border: none;
  background: #B7BCC3
 
  border-radius: 4px;
}
 
button:enabled{
  position: absolute;
  width: 656px;
  height: 48px;
  left: 32px;
  
  border: none;
  
  background: #555658;
  border-radius: 4px;
}
 
textarea{
    box-sizing: border-box;

    position: absolute;
    width: 452px;
    height: 92px;
    left: 0px;
    top: 26px;
    
    /* grey 5 */
    
    border: 1px solid #EFEFF0;
  border-radius: 4px;
}
  a{
    text-decoration:none;
    color:blue;
  }
   ul{
    position: absolute;
    
    top: 65%;
   }
`;
export default GlobalStyled;
