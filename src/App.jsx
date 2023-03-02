import React, { Component } from 'react';
import Form from './components/form';
import Result from './components/result';
import './sass/App.scss';

class App extends Component {

    state = {
        value: "",
        city: "",
        icon: "",
        country: "",
        temperature: "",
        description: "",
        lowTemp: "",
        highTemp: "",
        feels: "",
        humidity: "",
        error: false
    }

    handleInputChange = e => {
        this.setState({
            value: e.target.value
        })
    }
  
    clear = () => {
        this.setState({ value: "" });
    }

    handleCitySubmit = e => {
        const APIKey = 'YOUR_API_KEY';
        e.preventDefault();
        this.clear();

        const API =
            `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error("Didn't found")
            })
            .then(response => response.json())
            .then(data => {
            this.setState(state => ({
                error: false,
                city: data.name,
                icon: data.weather[0].icon,
                country: data.sys.country,
                temperature: data.main.temp,
                description: data.weather[0].description,
                lowTemp: data.main.temp_min,
                highTemp: data.main.temp_max,
                feels: data.main.feels_like,
                humidity: data.main.humidity,  
                }))
            })
            .catch(err => {
              this.setState(prevState => ({
                  error: true,
                  city: prevState.value,
                }))
            })
        }

    render() {
        return (
          <div className="App text-center">
              <Form
                  value={this.state.value}
                  change={this.handleInputChange}
                  submit={this.handleCitySubmit}
              />
              <Result weather={this.state} />
          </div>
        );
      }
  }

export default App;
