import axios, { AxiosResponse } from "axios";

const backEndUrl: string = `${process.env.REACT_APP_BACKEND_URL}`;


export const getCompanyData = (token: string,selectedCompany:string): Promise<AxiosResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      let headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      let response = await axios.get(`${backEndUrl}/api/user/company-date/${selectedCompany}`,{
        headers,
      });
      return resolve(response.data);
    } catch (err) {
      console.log(err);
      return reject(err);
    }
  });
};
