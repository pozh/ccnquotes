import React from 'react';
import { connect } from 'react-redux';
import Quote from "./Quote";


const QuoteList = ({ quotes }) => (
    <div className="list">
      {quotes && quotes.length
          ? quotes.map(quote => {
            return <Quote key={`quote-${quote.id}`} quote={quote} />;
          })
          : "No quotes yet"}
    </div>
);

function mapStateToProps(state) {
  return {
    quotes: state.quotes
  };
}

export default connect(mapStateToProps)(QuoteList);
