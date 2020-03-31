import React, { useContext, useEffect } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        { transactions.map(({ _id, text, amount }) => (
          <Transaction _id={_id} key={_id} text={text} amount={amount} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
