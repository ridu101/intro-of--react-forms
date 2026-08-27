// import React from 'react';

import { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const Spacial = ({asset,name}) => {

    const newAsset = useContext(AssetContext);
    // console.log(newAsset)
    return (
        <div>
            <h3 >Spacial: {name}</h3>
            <h3 asset={asset}>Asset:{asset}</h3>
            <h3>New Asset: {newAsset}</h3>
        </div>
    );
};

export default Spacial;