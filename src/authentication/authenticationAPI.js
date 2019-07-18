import axios from "axios";

const config = {
  token_api: "/token",
  client_id: "",
  client_secret: ""
};

class AuthenticationAPI {
  static login = async credentials => {
    const data = `grant_type=password&username=${
      credentials.username
    }&password=${credentials.password}&client_id=${
      config.client_id
    }&client_secret=${config.client_secret}`;

    const response = await axios.post(config.token_api, data);
    if (response && response.response && response.response.status == 500) {
      return response.response.data;
    }
    return response && response.data;
  };
}

export default AuthenticationAPI;
