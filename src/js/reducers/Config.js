function config(state = [], action) {
  switch (action.type) {
    case "SET_CONFIG":
      return {
        images: action.config.images
      };
    default:
      return state;
  }
  return state;
}

export default config;