// import { aLogin } from '../../hooks/axios';
import React from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
export const AuthContext = React.createContext();

function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({ capabilities: [] });
  const [token, setToken] = React.useState('');


  const login = async (username, password) => {
    let url = 'https://api-js401.herokuapp.com/signin';
    let auth = {
      username: username,
      password: password
    }
    let serverData = await axios.post(url, {}, {auth});
    let res = serverData.data;
  //  let res = await aLogin(username, password);
    // let url2 = 'https://api-js401.herokuapp.com/api/v1/todo';
     // let tododate =  await axios.get(url2);
    console.log('res',res);


    // let user = testUsers[username];
    if (res) {
      setToken(res.token);
      console.log(jwtDecode(res.token));
      setUser(jwtDecode(token));
      // console.log('50user', user);
      setIsLoggedIn(true);
    } else {
      console.error('Invalid Login');
    }
  }
  const logout = () => {
    setIsLoggedIn(false);
    setUser({ capabilities: [] });
  }
  const can = (capability) => {
    return user.capabilities.includes(capability);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, can }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;