import axios from 'axios';

class SwService {
_apiBaseUrlData="https://swapi.dev/api/";
_apiBaseUrlImg="https://starwars-visualguide.com/assets/img/";

getResource = async (urlData, urlImg) => {
    let response = null;
    try {
        let resData = await axios.get(urlData);
        let resImg = await axios.get(urlImg);
        console.log(await [resData, resImg]);
        response = [resData, resImg];
    } catch (error) {
        console.log(error);
        response = {
            errorMessage: error.message,
            status: error.response.status
        }
    }

    return response;
    // let resData = await axios.get(urlData);
    // let resImg = await axios.get(urlImg);
    // if (resData.status !== 200 || resImg.status !== 200) {
    //     return false
    // }
    // console.log(await [resData, resImg])
    // return await [resData, resImg];
}

getData = (id, category) => {
    console.log(category)
    let characters = null;
    if (category == "people") {characters = "characters"} else {characters = category}
    console.log(characters)
    return this.getResource(`${this._apiBaseUrlData}${category}/${id}/`, `${this._apiBaseUrlImg}${characters}/${id}.jpg`)
}
}
export default SwService;