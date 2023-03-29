import React from 'react';
import './Planets.css';
import SwService from '../../services/sw-service'


class Planets extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        image: null,
        name: null,
        diameter: null,
        climate: null,
        population:null,
    }

SwService = new SwService();
getPlanetsData = () => {
    const id = Math.floor(Math.random() * (20 - 1) + 1);
    this.SwService.getData(id, this.props.category).then(res => {
        this.setState({
            id: id,
            image: res[1].request.responseURL,
            name: res[0].data.name,
            diameter: res[0].data.diameter,
            climate: res[0].data.climate,
            population: res[0].data.population,
        })
})}

componentDidMount() {
    this.getPlanetsData()
}

// https://internetdevels.ua/sites/default/files/public/blog_preview/404_page_cover.jpg
render() {
const {image, name, diameter, climate, population} = this.state;
return  <div className='planets_wrap'>
            {this.state.name ?
            <div className='planets_container'>
                <button className='planets_button' onClick={this.getPlanetsData}>NEXT</button>  
                <div className='planets_container_flex'>
                    <img className='planets_img' src={`${image}`} alt="image" />
                    <ul className='planets_data_list'>
                        <h3 className='planets_title'>{name}</h3>
                        <li className='planets_data_list_element'>Diameter: {diameter}</li>
                        <li className='planets_data_list_element'>Climate: {climate}</li>
                        <li className='planets_data_list_element'>Population: {population}</li>
                    </ul>
                </div> 
            </div>
            : "loading"}
        </div>
};
};

export default Planets;