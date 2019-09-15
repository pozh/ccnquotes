import React from 'react';
import { connect } from 'react-redux';
import Quote from "./Quote";

import './Quotes.scss';

const QuoteList = ({ quotes, selectedQuote }) => (
    <div className={selectedQuote ? 'list list-selected' : 'list'}>
      <div className="list__container">
        {quotes && quotes.length
            ? quotes.map(quote => {
              return <Quote key={`quote-${quote.id}`} quote={quote} />;
            })
            : "No quotes yet"}
      </div>
    </div>
);

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
    selectedQuote: state.selectedQuote
  };
}

export default connect(mapStateToProps)(QuoteList);
