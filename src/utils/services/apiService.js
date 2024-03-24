import axios from 'axios';

const backEndUrl = process.env.REACT_APP_BACKEND_URL;

console.log(backEndUrl);

  export const getAllProjectsForUsers = (token,userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let header = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        let response = await axios.get(`${backEndUrl}/api/excel/projects/${userId}`, {
          headers: header,
        });
        return resolve(response.data);
      } catch (err) {
        return reject(err);
      }
    });
  };

  export const createProjectFolder = (token,data) =>{
    return new Promise(async (resolve, reject) => {
      try {
        let headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        let response = await axios.post(`${backEndUrl}/api/excel/project-folder`,data, {headers});
        return resolve(response.data);
      } catch (err) {
        return reject(err);
      }
    });
  }

  export const getCubitDataForProject = (token, projectId) =>{
    return new Promise(async (resolve, reject) => {
      try {
        let header = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        let response = await axios.get(`${backEndUrl}/api/excel/cubit-data/${projectId}`, {
          headers: header,
        });
        return resolve(response.data);
      } catch (err) {
        return reject(err);
      }
    });
  }

  export const createCubitData = (token,data) =>{
    return new Promise(async (resolve, reject) => {
      try {
        let headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        let response = await axios.post(`${backEndUrl}/api/excel/upload/cubit`,data, {headers});
        return resolve(response.data);
      } catch (err) {
        return reject(err);
      }
    });
  }