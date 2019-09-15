import React from 'react';
import { connect } from 'react-redux';
import { addQuote } from '../../redux/actions'
import QuotesButton from '../ui/QuotesButton';

import './Quotes.scss';

const QuoteEditor = ({closeClickHandler}) => {
  return (
    <div className="form-wrapper">
      <div className="form">
        <div className="form__close">
          <QuotesButton kind="btn-close" clickHandler={closeClickHandler}/>
        </div>
        <form onSubmit={()=>addQuote('')}>
          <div className="form__group">
            <label>Author</label>
            <input className="form__control" type="text"/>
          </div>
          <div className="form__group">
            <label>Source</label>
            <input className="form__control" type="text"/>
          </div>
          <div className="form__group">
            <label>Quote</label>
            <textarea  className="form__control form__text" cols="30" rows="50"></textarea>
          </div>
          <button className="form__submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default connect(null, { addQuote })(QuoteEditor)
