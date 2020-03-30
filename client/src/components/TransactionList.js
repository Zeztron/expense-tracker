import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        { transactions.map(({ id, text, amount }) => (
          <Transaction id={id} text={text} amount={amount} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
