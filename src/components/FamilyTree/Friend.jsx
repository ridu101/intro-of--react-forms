// import React from 'react';

import { useContext } from "react";
import { MoneyContext } from "./FamilyTree";

const Friend = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Aziz</h3>
            <button onClick={() => setMoney(money+5000)}>Add Money 5000</button>
        </div>
    );
};

export default Friend;