export const VALIDATE = {
  text: (value) => /^(?=(?:.*[a-zA-Z]){3,})[a-zA-Z\s]{3,20}$/.test(value),
  email: (value) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
  textarea: (value) => /^[a-z0-9.,():;&! -?]{5,}$/i.test(value),
};
