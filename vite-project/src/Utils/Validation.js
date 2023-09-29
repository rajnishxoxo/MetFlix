function validateFormDetail(email, password) {
  let isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPassWordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); //   let validName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

  if (!isEmailValid) return "Email not valid";

  if (!isPassWordValid) return "Password is Not Valid";
}

export default validateFormDetail;
