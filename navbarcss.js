import styled from "styled-components";

const Body = styled.div`
  
  border-radius: 20px;
  height: 100px;


`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: 6fr auto 5fr;
`;

const Col1 = styled.div`

display:flex;
justify-content:center;
  border-radius: 30px;
  background-color:rgb(1,1,1);
  color: white;
  font-size: 40px;
  box-shadow:10px 10px 13px white;
`;

const Col2 = styled.div`
 
  
`;

const Col3 = styled.div`
display:flex;
width:100%;
justify-content:space-around;
font-size:45px;

`;

const Mid = styled.div`
display: grid;
grid-template-columns:auto auto ;

`;

const Part1 = styled.div`



`;


const Part2 = styled.div`
border-top-right-radius:25px;
height:550px;
width:1100px;
background-color:white;
/* box-shadow:10px 10px 3px white; */

padding:50px;
`;

const Footer = styled.div`
height:250px;
width:100%;
background-color:rgb(188,189,188);
box-shadow:10px 10px 11px white;
border-radius:8px;
border:1px solid white;

padding-top:20px;
`;

const Content= styled.div`
display:flex;

justify-content:start;
padding-top:20px;
padding-left:50px`;


const Button=styled.div`

height:0px;
width:100px;

color:white;

`;



export { Body, Nav, Col2, Col1, Col3,Mid,Part1,Part2,Footer,Content,Button};
