import { useState } from "react";
import MainNav from "./Nav";
import BasicsIndex from './basics/Index';
import FrontendIndex from './frontend/Index';
import BackendIndex from './backend/Index';
import DatabaseIndex from './database/Index';
import DeploymentIndex from './deployment/Index';
import MarketingIndex from './marketing/Index';

export default function Home() {

  const mainList = [
    'Basics',
    'Frontend',
    'Backend', 
    'Database',
    'Deployment',
    'Marketing',
  ];
  
  const [selectedMainItem , setSelectedMainItem] = useState('Basics');

  return (
    <>
      <div className="min-h-screen min-w-screen box-border p-2 md:p-5 flex flex-col">
        <div className="border-8 border-black h-full w-full relative grow p-2 md:p-5 flex flex-col gap-5">
          <MainNav list={mainList} selectedItem={selectedMainItem} setSelectedItem={setSelectedMainItem} />

          {  selectedMainItem === "Basics" &&  <BasicsIndex /> }
          {  selectedMainItem === "Frontend" &&  <FrontendIndex /> }
          {  selectedMainItem === "Backend" &&  <BackendIndex /> }
          {  selectedMainItem === "Database" &&  <DatabaseIndex /> }
          {  selectedMainItem === "Deployment" &&  <DeploymentIndex /> }
          {  selectedMainItem === "Marketing" &&  <MarketingIndex /> }
        </div>
      </div>
    </>
  )
}