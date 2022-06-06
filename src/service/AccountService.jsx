import axios from 'axios';

const BASE_URL = "http://localhost:5000";

class AccountService{
    getAccountbyCredentials(account){
        return axios.post(BASE_URL + "/getAccountbyCredentials", account);
    }
    getAccount(){
        return axios.get(BASE_URL + "/accounts");
    }

    saveAccount(account){
        return axios.post(BASE_URL + "/saveAccount",account)
    }
}

export default new AccountService();