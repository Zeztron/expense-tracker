import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ id, amount, text }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";

  return (
    <li key={id} className={amount < 0 ? "minus" : "plus"}>
      {text} <span>{sign} ${Math.abs(amount)}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
    </li>
  );
};

export default Transaction;