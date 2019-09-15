import React from 'react';
import QuoteList from './components/quotes/QuoteList';
import QuoteView from './components/quotes/QuoteView';


function CCNQuotes() {
  return (
    <div className="ccnquotes">
      <QuoteList/>
      <QuoteView/>
    </div>
  )
}

export default CCNQuotes;
