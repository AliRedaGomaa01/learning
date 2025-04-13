import { useState } from "react";
import Nav from "../Nav";
import Common from "./Common";
import CommonMobile from "./mobile/Common";
import CommonWeb from "./web/Common";
import React from './web/React';
import Next from './web/Next';
import Vue from './web/Vue';
import Angular from './web/Angular';
import Flutter from './mobile/Flutter';
import ReactNative from './mobile/ReactNative';
import Laravel from './web/Laravel';

export default function Index() {
  const list = [
    'Common',
    'Common Web',
    'React',
    'Next',
    'Vue',
    'Angular',
    'Laravel',
    'Common Mobile',
    'Flutter',
    'React Native',
  ];
  
  const [selectedItem , setSelectedItem] = useState('Common');

  return (
    <>
      <Nav list={list} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

      { selectedItem === "Common" &&  <Common /> }
      { selectedItem === "Common Mobile" &&  <CommonMobile /> }
      { selectedItem === "Common Web" &&  <CommonWeb /> }
      { selectedItem === "React" &&  <React /> }
      { selectedItem === "Next" &&  <Next /> }
      { selectedItem === "Vue" &&  <Vue /> }
      { selectedItem === "Angular" &&  <Angular /> }
      { selectedItem === "Laravel" &&  <Laravel /> }
      { selectedItem === "Flutter" &&  <Flutter /> }
      { selectedItem === "React Native" &&  <ReactNative /> }

    </>
  )
}