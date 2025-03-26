import { useState } from "react";
import BasicsNav from "../Nav";
import WebBasics from "./WebBasics";
import Github from './Github';
import Theoretical from './Theoretical';
import Design from "./styling/Design";
import Css from "./styling/Css";
import Bootstrap from './styling/Bootstrap';
import Tailwind from './styling/Tailwind';
import Sass from './styling/Sass';
import OOP from './OOP';
import Javascript from './Javascript';
import Typescript from './Typescript';

export default function Index() {
  const list = [
    'Web Basics',
    'Github',
    'Theoretical',
    'Design',
    'Css', 
    'Bootstrap',
    'Tailwind',
    'Sass',
    'OOP',
    'Javascript',
    'Typescript',
  ];
  
  const [selectedItem , setSelectedItem] = useState('Web Basics');

  return (
    <>
      <BasicsNav list={list} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

      { selectedItem === "Web Basics" &&  <WebBasics /> }
      { selectedItem === "Github" &&  <Github /> }
      { selectedItem === "Theoretical" &&  <Theoretical /> }
      { selectedItem === "Design" &&  <Design /> }
      { selectedItem === "Css" &&  <Css /> }
      { selectedItem === "Bootstrap" &&  <Bootstrap /> }
      { selectedItem === "Tailwind" &&  <Tailwind /> }
      { selectedItem === "Sass" &&  <Sass /> }
      { selectedItem === "OOP" &&  <OOP /> }
      { selectedItem === "Javascript" &&  <Javascript /> }
      { selectedItem === "Typescript" &&  <Typescript /> }

    </>
  )
}