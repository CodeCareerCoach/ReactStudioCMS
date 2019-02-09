import axios from "axios";

export const methods = {
  GET: "get",
  POST: "post"
};

export const sendRequest = (method, route, body) => {
  return axios({
    method: method,
    url: route,
    data: body
  });
};

export default {
  methods: methods,
  sendRequest: sendRequest
};
