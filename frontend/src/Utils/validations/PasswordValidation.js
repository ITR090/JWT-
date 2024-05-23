const password_validation = {
  required: {
    value: true,
    message: "Password is required",
  },
  minLength: {
    value: 8,
    message: "min 6 characters",
  },
  maxLength: {
    value: 30,
    message: "max 30 characters",
  },
};

export default password_validation
