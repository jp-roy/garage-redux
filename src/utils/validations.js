export function required(value) {
  return value ? undefined : 'Required'
};

export function format(value) {
  return value && /[A-Z\d]+/.test(value) ?
  undefined : "Only caps or digits bougre d'âne"
};




