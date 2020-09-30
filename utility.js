const apiContainer = document.querySelectorAll("#api-container");
const cityNotFound = document.getElementById("citynotfound");

export const showDangerText = () => {
  cityNotFound.style.display = "flex";
};

export const hideDangerText = () => {
  cityNotFound.style.display = "none";
};

export const hiddenContainer = () => {
  apiContainer.forEach((element) => {
    element.style.display = "none";
  });
};

export const showContainer = () => {
  apiContainer.forEach((element) => {
    element.style.display = "flex";
  });
};

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const checkIfUndefined = (value, string) => {
  if (typeof value === "undefined") {
    return string;
  } else {
    return value;
  }
};
