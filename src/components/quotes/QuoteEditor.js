import React from 'react';
import { connect } from 'react-redux';
import { addQuote, editQuote } from '../../redux/actions'
import QuotesButton from '../ui/QuotesButton';

import './Quotes.scss';

class QuoteEditor extends React.Component {

  constructor (props) {
    super(props);
    this.state={
      quote: props.quote ? {...props.quote} : {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { target: { name, value } } = e;
    this.setState(prevState => ({ quote: {...prevState.quote, [name]: value }}));
  }

  handleSubmit(e) {
    const {closeClickHandler} = this.props;

    e.preventDefault();
    const { addQuote, editQuote } = this.props;
    if (this.state.quote.id) editQuote(this.state.quote);
    else addQuote(this.state.quote);
    this.setState({quote: {}});
    closeClickHandler();
  }

  render () {
    const {closeClickHandler} = this.props;
    return (
      <div className="form-wrapper">
        <div className="form">
          <div className="form__close">
            <QuotesButton kind="btn-close" clickHandler={closeClickHandler}/>
          </div>
          <form onSubmit={(event)=>this.handleSubmit(event)}>
            <div className="form__group">
              <label>Author</label>
              <input name="author" className="form__control"
                     type="text"
                     value={this.state.quote.author} onChange={this.handleChange}/>
            </div>
            <div className="form__group">
              <label>Source</label>
              <input name="source" className="form__control"
                     type="text"
                     value={this.state.quote.source} onChange={this.handleChange}/>
            </div>
            <div className="form__group">
              <label>Quote</label>
              <textarea name="body" className="form__control form__text" cols="30" rows="5"
                        onChange={this.handleChange} defaultValue={this.state.quote.body}/>
            </div>
            <button className="form__submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addQuote, editQuote })(QuoteEditor)
