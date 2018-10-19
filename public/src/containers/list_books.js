import React, { Component } from 'react';

import { connect } from 'react-redux';

class ListBook extends Component {

renderList() {
  return  this.props.books.map((book) => {
    return (
      <li key={book.title} className="list-group-item">{book.title}</li>
    );
  });
}
  render () {

    return (
      <div>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(ListBook);
