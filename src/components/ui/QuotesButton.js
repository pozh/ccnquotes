import React from 'react';

import './QuotesButton.scss';

const QuotesButton = ({kind, clickHandler}) => {
  return (
      <button type="button" onClick={clickHandler} className={kind ? kind : 'btn'}/>
  );
};

export default QuotesButton;
