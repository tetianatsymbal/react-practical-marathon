import React from 'react';
import './Characters.css';
import SwService from '../../services/sw-service'


class Characters extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        image: null,
        name: null,
        gender: null,
        birthYear: null,
        eyeColor: null,
    }

SwService = new SwService();
getCharactersData = () => {
    const id = Math.floor(Math.random() * (80 - 1) + 1);
    this.SwService.getData(id, this.props.category).then(res => {
        this.setState({
            id: id,
            image: res[1].request.responseURL,
            name: res[0].data.name,
            gender: res[0].data.gender,
            birthYear: res[0].data.birth_year,
            eyeColor: res[0].data.eye_color,
        })
})}

componentDidMount() {
    this.getCharactersData();
}

render() {
const {image, name, gender, birthYear, eyeColor} =this.state;
return  <div className='infoPage_wrap'>
            {this.state.name ?
            <div className='infoPage_container'>
                <button className='infoPage_button' onClick={this.getCharactersData}>NEXT</button>  
                <div className='infoPage_container_flex'>
                    <img className='infoPage_img' src={`${image}`} alt="image" />
                    <ul className='infoPage_data_list'>
                        <h3 className='infoPage_title'>{name}</h3>
                        <li className='infoPage_data_list_element'>Gender: {gender}</li>
                        <li className='infoPage_data_list_element'>Birth Year: {birthYear}</li>
                        <li className='infoPage_data_list_element'>Eye Color: {eyeColor}</li>
                    </ul>
                </div> 
            </div>
            : "loading"}
        </div>
};
};

export default Characters;