import React from 'react';
import { connect } from 'react-redux';
import { editQuote, viewQuote, addQuote } from "../actions";

const Quote = ({ quote, editQuote, viewQuote }) => (
    <div className="quote" onClick={() => viewQuote(quote.id)}>
      {quote.body}
    </div>
);

export default connect(null, { editQuote, viewQuote, addQuote })(Quote);
