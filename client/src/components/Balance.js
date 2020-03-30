import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; 

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amountTotal = transactions.map(transaction => transaction.amount).reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${amountTotal}</h1>
    </>
  );
};

export default Balance;