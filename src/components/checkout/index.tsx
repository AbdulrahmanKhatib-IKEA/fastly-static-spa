import React from "react";

import { useStore } from '../store/store';

import { Text } from '../../components/skapa';

const Checkout = () => {

    const amount = useStore((state) => state.amount);

    return(
        <div>
            <Text> {amount} </Text>
        </div>
    )
}

export default Checkout;