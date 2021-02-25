import axios from "axios";

class UserInfoService {
  getUserInfo() {
    let api =
      "https://startoff-main.herokuapp.com/client/registrations/get-user/" +
      JSON.parse(localStorage.getItem("user")).id;
    let token = JSON.parse(localStorage.getItem("user")).jwt;
    return axios.get(api, { headers: { Authorization: `Bearer ${token}` } });
  }
}

export default new UserInfoService();
