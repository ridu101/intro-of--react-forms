// import React from 'react';

import Grandpa from "./Grandpa";
import './FamilyTree.css'
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext = createContext('');

const FamilyTree = () => {

    const asset = 'diamond'
    const newAsset = 'gold'
    return (
        <div className="family-tree">
            <h2>Family Tree</h2>
            <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>
            
        </div>
    );
};

export default FamilyTree;