import axios from 'axios';

export default axios.create({
    baseURL:'https://2e6c-66-112-241-148.ngrok-free.app/',
    //https://2e6c-66-112-241-148.ngrok-free.app/
    headers: {"ngrok-skip-browser-warning": "true"} 
});