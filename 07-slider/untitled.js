const hello = {
  user: {
   
  // empty string
    subscribe:'' ,
    link: '', // empty string
  },
};
function getUser() {
  const {
    user: {
      id = 1,
      name = 'Devtools Tech',
      subscribe = true,
      link = 'https://bit.ly/devtools-yt',
    } = {},
  } = hello;

  return {
    userId: id,
    name,
    subscribe,
    link,
  };
}
console.log(getUser())