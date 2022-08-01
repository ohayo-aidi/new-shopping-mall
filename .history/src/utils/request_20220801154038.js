import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://www.fastmock.site/mock/8ee236b9be977eee65b73b9cd481d691/aiditest",
  timeout: 5000,
});

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
};
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          resolve(response.data); //返回的数据中 只要结果的data 其他可以不要
        },
        (err) => {
          reject(err);
        }
      );
  });
};
