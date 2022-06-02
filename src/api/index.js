import axios from 'axios';

export const UserLogin = async (uid_id,uid_pass) => {
    console.log(uid_id,uid_pass)
    const url = `http://localhost:8002/api/UserLogin`
    return axios.post(url, {uid_id,uid_pass}).then(response => response.data).catch(error => console.log(error));
}