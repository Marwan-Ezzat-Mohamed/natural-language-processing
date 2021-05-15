function isUrlValid(value) {
  //got the regex from https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
  const res = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/.test(
    value
  );
  return res;
}

export { isUrlValid };
