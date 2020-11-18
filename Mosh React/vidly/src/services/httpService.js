import axios from "axios";
import logger from "./logService"
import {toast} from 'react-toastify';

//axios.defaults.baseURL=process.env.REACT_APP_API_URL;
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    logger.log( error);
    //alert("An unexpected error occurred.");
    //toast.error("An unexpected error occurred.")
    toast("An unexpected error occured")//acts as a function
  }
  return Promise.reject(error); //to pass control to our catch control, need to create a rejected Promise
});
function setJwt(jwt){
  axios.defaults.headers.common['x-auth-token']=jwt;
}
export default{
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete,
    setJwt
}