function isUrlValid(value) {
  const res = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/.test(
    value
  );
  return res;
}

export { isUrlValid };
