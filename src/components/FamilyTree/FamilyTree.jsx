// import React from 'react';

import Grandpa from "./Grandpa";
import "./FamilyTree.css";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext = createContext("");
// eslint-disable-next-line react-refresh/only-export-components
export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const [money,setMoney] = useState(0)
  const asset = "diamond";
  const newAsset = "gold";
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <h4>Total Family Money: {money}</h4>
      <MoneyContext value={[money,setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;

/***
 * 1. Create a context using createContext with a default value
 * make sure you export it on the other file where you want to use
 */
