import React from 'react';
import { connect } from 'react-redux';
import QuotesButton from '../ui/QuotesButton';
import QuoteEditor from './QuotEditor';
import { addQuote } from "../../redux/actions";

import './Quotes.scss';

class AddQuote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm : false,
    }
  }

  toggleForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
  };

  render() {
    return (<div className={this.state.showForm ? 'add-quote add-quote_form' : 'add-quote'}>
      { this.state.showForm && <QuoteEditor closeForm={this.toggleForm}/> }
      { !this.state.showForm && (
          <div className="add-quote__launcher">
            <QuotesButton className="quote-view__btn-close" kind="btn-add" clickHandler={this.toggleForm}/>
          </div>
      )}
    </div>);
  }
}


function mapStateToProps (state) {
  return {
    quotes: state.quotes
  };
}

export default connect(mapStateToProps, { addQuote })(AddQuote);
