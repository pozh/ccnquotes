import React from 'react';
import { connect } from 'react-redux';
import { closeView } from "../../redux/actions";

import './Quotes.scss';

const QuoteView = ({ selectedQuote, closeView }) => {
  if (selectedQuote) return (
    <div className="quote-view quote-view_active">
      <span className="btn-close" onClick={closeView} />
      <h1 className="quote-view__body">{selectedQuote.body}</h1>
      <h2 className="quote-view__author">{selectedQuote.author}</h2>
    </div>
  );
  return (<div className="quote-view"> </div>)
};

function mapStateToProps (state) {
  return {
    selectedQuote: state.selectedQuote
  };
}

export default connect(mapStateToProps, { closeView })(QuoteView);
