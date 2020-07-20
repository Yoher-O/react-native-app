export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const isEmpty = (text) => {
  const val = text ? text.length : 0;
  return val <= 0;
}

export const minLength = (min, text) => {
  const val = text ? text.length : 0;
  return val < min;
}

export const maxLength = (max, text) => {
  const val = text ? text.length : max + 1;
  return val >= max;
}

export const compareText = (text1, text2) => {
  return text1 !== text2;
}