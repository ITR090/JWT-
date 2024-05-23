const email_validation = {
  required: {
    value: true,
    message: "Email is required",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email not valid!",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
};


export default email_validation