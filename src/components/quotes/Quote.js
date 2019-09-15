import React from 'react';
import { connect } from 'react-redux';
import { viewQuote, deleteQuote } from "../../redux/actions";

import './Quotes.scss';

const Quote = ({ quote, handleEditClick, viewQuote, deleteQuote }) => (
  <div className="quote">
    <span className="quote__body" onClick={() => viewQuote(quote.id)}>{quote.body}</span>
    <span className="quote__actions">
      <button type="button" className="quote-action quote-action__edit"
              onClick={() => handleEditClick(quote)}>Edit</button>
      <button type="button" className="quote-action quote-action__delete"
              onClick={() => deleteQuote(quote.id)}>Delete</button>
    </span>
  </div>
);

export default connect(null, { viewQuote, deleteQuote })(Quote);
