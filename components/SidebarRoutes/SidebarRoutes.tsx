"use client"
import React from "react";
import { dataGeneralSidebar, dataSettignsSidebar } from "./SidebarRoutes.data";
import SidebarItem from "../SidebarItem/SidebarItem";

export default function SidebarRoutes() {
  return (
    <div className="px-2">
      <div className="flex flex-col gap-y-4">
        <div className="bg-slate-300/30 rounded-2xl flex flex-col items-center ">
          {
            dataGeneralSidebar.map((item) => (
              <SidebarItem key={item.name} name={item.name} icon={item.icon} href={item.href}/>
            ))
          }
        </div>
        <div className="bg-slate-300/30 rounded-2xl flex flex-col items-center ">
          {
            dataSettignsSidebar.map((item) => (
              <SidebarItem key={item.name} name={item.name} icon={item.icon} href={item.href}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
