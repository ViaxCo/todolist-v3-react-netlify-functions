const today = new Date();
export const getDate = () => {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-US", options); //"en-US" can be replaced for undefined
};
export const getDay = () => {
  const options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", options); //"en-US" can be replaced for undefined
};
