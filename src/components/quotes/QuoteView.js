import React from 'react';
import { connect } from 'react-redux';
import QuotesButton from '../ui/QuotesButton';
import { closeView } from "../../redux/actions";

import './Quotes.scss';

const QuoteView = ({ selectedQuote, closeView }) => {
  if (selectedQuote) return (
    <div className="quote-view quote-view_active">
      <div class="quote-view__close">
        <QuotesButton className="quote-view__btn-close" kind="btn-close" clickHandler={closeView} />
      </div>
      <h1 className="quote-view__body">{selectedQuote.body}</h1>
      <h2 className="quote-view__author">{selectedQuote.author}</h2>
      <a target="_blank" rel="noopener noreferrer" className="quote-view__link" href={selectedQuote.source}> </a>
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
