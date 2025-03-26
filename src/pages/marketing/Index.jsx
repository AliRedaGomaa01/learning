import { useState } from "react";
import Nav from "../Nav";
import Common from './Common';
import CMS from './CMS';
import SEO from './SEO';

export default function Index() {
  const list = [
    'Common',
    'CMS',
    'SEO',
  ];
  
  const [selectedItem , setSelectedItem] = useState('Common');

  return (
    <>
      <Nav list={list} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

      { selectedItem === "Common" &&  <Common /> }
      { selectedItem === "CMS" &&  <CMS /> }
      { selectedItem === "SEO" &&  <SEO /> }

    </>
  )
}