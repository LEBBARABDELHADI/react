import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  color: purple;
`
const Link = styled.a`
  background-image: linear-gradient(crimson, orangered);
  background-size: 0 4px, 0 2px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  text-decoration: none;
  transition: background-size .5s linear;
    &:hover {
     background-size: 100% 2px, 100% 2px;
   }
`
const Parag = styled.blockquote`
  font-size: .9em;
  color: orangered;
  letter-spacing: .5em;
  font-family: 'Akaya Telivigala', cursive;
`
function App() {
  return (
    <>
      <Title>Le tatoué</Title>
      <Parag> Manger des tripes sans cidre, c'est comme aller à Dieppe sans voir la mer </Parag>
      <Link href="/">Hover Change</Link>
    </>
  );
}
export default App;
