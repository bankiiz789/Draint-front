const validate = (schema) => (input) => {
  const { error } = schema.validate(input, { abortEarly: false });
  console.dir(error);
  if (error) {
    const result = error.detail.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validate;
