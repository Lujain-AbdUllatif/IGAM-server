// 409 conflict : the response is sent when a request conflicts with the current state of the server
const parametersError = () => {
  const error = new Error("Passed request body parameters error!");
  error.status = 409;
  return error;
};

module.exports = { parametersError };
