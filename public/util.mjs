export const refreshWarning = () => {
  window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = "";
  });
};
