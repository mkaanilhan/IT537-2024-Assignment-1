




document.addEventListener("DOMContentLoaded", () => {

  const el = document.querySelector(".files-table");
  info.forEach((item) => {
    el.appendChild(new TableItem(item.textOne, item.textTwo, item.textThree));
  });
  el.appendChild(new TableItem());

});