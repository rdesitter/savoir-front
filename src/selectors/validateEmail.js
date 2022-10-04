/* eslint-disable no-useless-escape */
/**
 * Check is email is valid or not
 * @param {*} email string
 * @returns bool
 */
function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return (true);
  return (false);
}

export default validateEmail;
