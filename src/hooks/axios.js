import axios from 'axios';

export async function aLogin (username, password){
  let url = 'https://api-js401.herokuapp.com/signin';
  let auth = {
    username: username,
    password: password
  }
  let serverData = await axios.post(url, {}, {auth});
  let res = serverData.data;
  return res;
}