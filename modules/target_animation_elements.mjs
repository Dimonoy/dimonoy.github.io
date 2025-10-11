const hiddenElementsToShow = [
  ...document.querySelectorAll("header > *"),
  ...document.querySelectorAll("main > *"),
  document.querySelector("footer.footer"),
];

export default hiddenElementsToShow;
