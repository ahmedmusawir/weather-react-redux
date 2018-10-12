import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import SearchBar from './containers/SearchBar';
import store from './store';
import WeatherList from './containers/WeatherList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'City Weather',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <Provider store={store}>
        <div className="App">
          <Header branding={name} />
          <section className="container">
            <SearchBar />
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <WeatherList />
              </div>
            </div>
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
