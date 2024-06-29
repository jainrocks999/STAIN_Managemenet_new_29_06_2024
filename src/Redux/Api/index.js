import axios from 'axios';
import Constants from '../Constants';

export default class Api {
  static fetchDataByPOST = async (url, data) => {
    try {
      const response = await axios({
        method: 'POST',
        headers: {
          'content-type': 'multipart/form-data',
          Accept: 'multipart/form-data',
        },
        url: Constants.MainUrl + url,
        data,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static fetchDataByPOSTValue = async (url) => {
    try {
      const response = await axios({
        method: 'POST',
        // headers: {
        //   'content-type': 'multipart/form-data',
        //   Accept: 'multipart/form-data',
        // },
        url: Constants.MainUrl + url,
        //data,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  static fetchDataByGETValue = async (url) => {
    try {
      const response = await axios({
        method: 'GET',
        // headers: {
        //   'content-type': 'multipart/form-data',
        //   Accept: 'multipart/form-data',
        // },
        url: Constants.MainUrl + url,
        //data,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static fetchDataByGET = async (url) => {
    try {
      const response = await axios({
        method: 'GET',
        headers: {
          'content-type': 'multipart/form-data',
          Accept: 'multipart/form-data',
        },
        url: Constants.MainUrl + url,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // static fetchDataByGET1 = async (url) => {
  //   try {
  //     const response = await axios({
  //       method: 'GET',
  //       headers: {
  //         Accept: 'v1/stain/case_studies',
  //       },
  //       url: Constants.MainUrl + url,
  //     });
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // static fetchDataByGET2 = async (url) => {
  //   try {
  //     const response = await axios({
  //       method: 'GET',
  //       headers: {
  //         Cookie: 'PHPSESSID=21831dacdf8699fb5e2dccace8e6334d',
  //         Accept: 'v1/stain/video_gallery',
  //       },
  //       url: Constants.MainUrl + url,
  //     });
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // static fetchDataByGET3 = async (url) => {
  //   try {
  //     const response = await axios({
  //       method: 'GET',
  //       headers: {
  //         Cookie: 'PHPSESSID=f1a8e52d4fa0931dd1793fef74a30c78',
  //         Accept: 'v1/stain/about_app',
  //       },
  //       url: Constants.MainUrl + url,
  //     });
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };
}
