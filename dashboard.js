import React from "react";
import { Link } from "react-router-dom";
import {
  Body,
  Nav,
  Col1,
  Col2,
  Col3,
  Mid,
  Part1,
  Part2,
  Footer,
  Content,
  Button,
} from "../css/navbarcss";

const navbar = () => {
  const si = {
    color: "maroon",
    border: "2px solid black",
    backgroundColor: "black",
    backgroundRadius: "60px",

  }


  return (
    <Body>
      <Nav>
        <Col1>
          <h1>WELCOME</h1>
        </Col1>

        <Col2></Col2>

        <Col3>
          <h> Home</h>
          <h>About</h>

          <Link to="/">
            <h4 style={si} >Sign IN</h4>
          </Link>
        </Col3>
      </Nav>

      <Mid>
        <Part1></Part1>
        <Part2>
          <h2>
            Innovative Custom Solutions for Big and Small Businesses
          </h2>


          <p>
            <b>Disruptive Technologies for Futuristic Solutions</b>
            Leverage the power of technologies that are causing disruption in your industry and be ready for the future.<br />
            <b>Technology Consulting for Digital Transformation</b>
            Rely on professional consulting before you take the leap of faith and head into digital transformation.<br />
          </p>
          <br />
          <br /><br />
          79.
          <h2>
            Innovative Custom Solutions for Big and Small Businesses
          </h2>
          <br />
          <br />

          <p>
            <b>Disruptive Technologies for Futuristic Solutions</b>
            Leverage the power of technologies that are causing disruption in your industry and be ready for the future.<br />
            <b>Technology Consulting for Digital Transformation</b>
            Rely on professional consulting before you take the leap of faith and head into digital transformation.<br />
          </p>
          <br />
          <br />
          <h2>
            Blockchain &
            Realworld Applications
          </h2>

          <p>Everything does begin with an idea. But, you need innovation and expertise to materialize it. We help you explore possibilities and transform ideas with our R&D services that not only help you scale your idea but also work for the greater good of the community, while preparing you for the ever competitive future.</p>


        </Part2>
      </Mid>

      <Footer>
        <Content>
          <h1>SERVICES </h1>
          <h4>SOCIAL MEDIA </h4>
          <h5>CONTACT US </h5>
       </Content>
      </Footer>
    </Body>
  );
};

export default navbar;
