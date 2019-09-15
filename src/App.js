import React from 'react';
import QuoteList from './components/quotes/QuoteList';
import QuoteView from './components/quotes/QuoteView';
import AddQuote from './components/quotes/AddQuote';


function CCNQuotes() {
  return (
    <div className="ccnquotes">
      <QuoteList/>
      <QuoteView/>
      <AddQuote/>
    </div>
  )
}

export default CCNQuotes;
