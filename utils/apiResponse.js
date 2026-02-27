const successResponse = (message, data) => {
  return {
    success: true,
    message,
    data
  };
};

const errorResponse = (message) => {
  return {
    success: false,
    message
  };
};

module.exports = {
  successResponse,
  errorResponse
};