document.addEventListener("DOMContentLoaded", function () {
  class TableItem extends HTMLElement {
    constructor(textOne = "Test", textTwo = "Test", textThree = "Test") {
      super();
      this.textOne = textOne;
      this.textTwo = textTwo;
      this.textThree = textThree;

      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
  
                    <div class="files-table__item">

                        <span>  <i data-lucide="folder"></i> <span> ${this.textOne} </span>   </span>
                        <span> ${this.textTwo} </span>
                        <span> ${this.textThree} </span>
                    
                    <div/>
        `;

        connectedCallback() {
          this.shadowRoot.querySelector("i").setAttribute("data-lucide", this.icon);
        };
    }
  }

  customElements.define("table-item", TableItem);

  const el = document.querySelector(".files-table");
  info.forEach((item) => {
    el.appendChild(new TableItem(item.textOne, item.textTwo, item.textThree));
  });
  el.appendChild(new TableItem());
});
