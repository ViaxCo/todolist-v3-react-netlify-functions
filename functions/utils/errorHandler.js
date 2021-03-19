module.exports = error => {
  console.log(error.message);
  return {
    statusCode: 500,
    body: JSON.stringify({
      success: false,
      error: "Server Error",
    }),
  };
};
