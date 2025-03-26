import { useState } from "react";
import Nav from "../Nav";
import Mobile from './Mobile';
import Web from './Web';

export default function Index() {
  const list = [
    'Web',
    'Mobile',
  ];
  
  const [selectedItem , setSelectedItem] = useState('Web');

  return (
    <>
      <Nav list={list} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

      { selectedItem === "Web" &&  <Web /> }
      { selectedItem === "Mobile" &&  <Mobile /> }

    </>
  )
}