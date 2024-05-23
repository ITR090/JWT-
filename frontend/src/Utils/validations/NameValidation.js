

const name_validation ={
    required: {
        value: true,
        message: 'Name is required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
      minLength:{
        value: 3,
        message: '3 characters min',
      },
      pattern:{
        value: /[A-Za-z0-9]+$/i,
        message: '3 characters min',
      }
}


export default name_validation