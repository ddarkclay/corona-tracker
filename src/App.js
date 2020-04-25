import React from 'react';
import styles from './App.module.css'

// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api'

import CoronaImage from './images/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        
        this.setState({ data: fetchedData })
    }
    
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country })
    }
    render() {
        // const { data } = this.state.data
        return (
            <div className={styles.container}>
                <img className={styles.image} src={CoronaImage} alt="img" />
                <Cards data={this.state.data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={this.state.data} country={this.state.country} />
            </div>
        )
    }
}

export default App;