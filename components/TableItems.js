class TableItem extends HTMLElement {
    constructor(textOne = "Test", textTwo = "Test", textThree = "Test") {
        super();
        this.textOne = textOne;
        this.textTwo = textTwo;
        this.textThree = textThree;

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
              <style>
                  .files-table__item {
                      display: grid;
                      grid-template-columns: 1fr 1fr 1fr;
                      border: 1px solid #d3d3d3;
                      border-bottom: none;
                      margin-right: 10px;
                      padding: 10px;
                  }

                  .link {
                    &:hover {
                        cursor: pointer;
                        text-decoration: underline;
                        color: blue;
                      }
                  }
  
                  .last {
                      text-align: right;
                  }
  
                  i {
                      display: inline-block;
                      width: 20px;
                      height: 20px;
                  }
              </style>
  
              <div class="files-table__item">
                  <span class="link" ><i data-lucide="folder"></i><span>${this.textOne}</span></span>
                  <span class="link" >${this.textTwo}</span>
                  <span class="last">${this.textThree}</span>
              </div>
          `;
    }

    connectedCallback() {
        lucide.createIcons(this.shadowRoot);
    }
}

customElements.define("table-item", TableItem);