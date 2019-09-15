import React from 'react';
import { connect } from 'react-redux';
import { editQuote, viewQuote, addQuote } from "../../redux/actions";

import './Quotes.scss';

const Quote = ({ quote, editQuote, viewQuote }) => (
  <div className="quote">
    <span className="quote__body" onClick={() => viewQuote(quote.id)}>{quote.body}</span>
    <span className="quote__actions">
      <button type="button" className="quote-action quote-action__edit">Edit</button>
      <button type="button" className="quote-action quote-action__delete">Delete</button>
    </span>
  </div>
);

export default connect(null, { editQuote, viewQuote, addQuote })(Quote);
