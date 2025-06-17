const generatePass = () => {
  let password: string = '';
  const caracters = 'Aa@$#123456789abcdefghijFfGHIJKkLMNOPpZz!';
  const passwordLenght = 8;

  for (let i = 0; i < passwordLenght; i++) {
    password += caracters.charAt(Math.floor(Math.random() * caracters.length));
  }
  return password;
};
export default generatePass;
