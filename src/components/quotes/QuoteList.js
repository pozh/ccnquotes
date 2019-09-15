import React from 'react';
import { connect } from 'react-redux';
import Quote from "./Quote";
import QuoteEditor from './QuoteEditor';
import QuotesButton from '../ui/QuotesButton';

import './Quotes.scss';

class QuoteList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      quote: {},
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.editQuote = this.editQuote.bind(this);
  }

  toggleForm = () => {
    this.setState(prevState => ({ quote: {}, showForm: !prevState.showForm }));
  };

  editQuote = (quote) => {
    this.toggleForm();
    this.setState({ quote: quote});
  };

  render() {
    const {quotes, selectedQuote} = this.props;
    return (
        <div className={selectedQuote ? 'list list-selected' : 'list'}>
          <div className="list__container">
            {quotes && quotes.length
                ? quotes.map(quote => {
                  return <Quote key={`quote-${quote.id}`} quote={quote} handleEditClick={this.editQuote}/>;
                })
                : "No quotes yet"}
          </div>
          { this.state.showForm && <QuoteEditor quote={this.state.quote} closeClickHandler={this.toggleForm}/> }
          { !this.state.showForm && (
            <div className="list__btn-add">
              <QuotesButton kind="btn-add" clickHandler={this.toggleForm}/>
            </div>
          ) }
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
    selectedQuote: state.selectedQuote
  };
}

export default connect(mapStateToProps)(QuoteList);
