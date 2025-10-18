import axios from 'axios';

export function UseAuthentication() {
  async function login(username, password) {
    const response = await axios.post('http://localhost:3000/login', { username, password }, {
      withCredentials: true,
    });
    return response.data;
  }

  async function logout() {
    // complete function here
  }

  return {
    login,
    logout,
  };
}