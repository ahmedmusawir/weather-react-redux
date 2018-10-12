import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export class SearchBar extends Component {
  // static propTypes = {
  //   searchText: PropTypes.string.isRequired,
  // };

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <div className="mt-5 mb-5">
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            type="text"
            onChange={this.onInputChange}
            placeholder="Get a five-day forecast in your favourite cities"
            className="form-control search-bar"
            value={this.state.term}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Click Me
            </button>
          </span>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
};
// null is being sent instead of mapStateToProps, cuz this component doesn't need one.
// And mapDispatchToProps always goes in as the second argument
export default connect(
  null,
  mapDispatchToProps,
)(SearchBar);
