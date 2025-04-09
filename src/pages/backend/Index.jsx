import { useState } from "react";
import Nav from "../Nav";
import Common from './Common';
import Django from './Django';
import Express from './Express';
import Laravel from './Laravel';

export default function Index() {
  const list = [
    'Common',
    'Express',
    'Laravel',
  ];
  // 'Django',
  
  const [selectedItem , setSelectedItem] = useState('Common');

  return (
    <>
      <Nav list={list} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

      { selectedItem === "Common" &&  <Common /> }
      { selectedItem === "Django" &&  <Django /> }
      { selectedItem === "Express" &&  <Express /> }
      { selectedItem === "Laravel" &&  <Laravel /> }

    </>
  )
}