import axios from 'axios';

export const UserLogin = async (uid_id,uid_pass) => {
    console.log(uid_id,uid_pass)
    const url = `http://localhost:8002/api/UserLogin`
    return axios.post(url, {uid_id,uid_pass}).then(response => response.data).catch(error => console.log(error));
}

export const ProfileDetails = async (uid_id) => {
    console.log(uid_id)
    const url = `http://localhost:8002/api/profiledetails`
    return axios.post(url, {uid_id}).then(response => response.data).catch(error => console.log(error));
}

export const rmsReports = async (reportType,custId) => {
    console.log(reportType,custId)
    const url = `http://localhost:8002/api/reports`
    return axios.post(url, {reportType,custId}).then(response => response.data).catch(error => console.log(error));
}

export const rmsRequest = async (request_type,location,noof_files,request_date,request_time,file_name,retrival_type,delivery_type,noof_pages,onsite,activity,remark,entry_by) => {
    console.log(request_type,location,noof_files,request_date,request_time,file_name,retrival_type,delivery_type,noof_pages,onsite,activity,remark,entry_by)
    const url = `http://localhost:8002/api/request`
    return axios.post(url, {request_type,location,noof_files,request_date,request_time,file_name,retrival_type,delivery_type,noof_pages,onsite,activity,remark,entry_by}).then(response => response.data).catch(error => console.log(error));
}