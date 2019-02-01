import { dataListIconTemplate } from "./data-list-templates.js";
import { createHTMLTemplate } from "../mb-helper.js";

const iconTpl = createHTMLTemplate(dataListIconTemplate);

export class DataListIcon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(iconTpl.content.cloneNode(true));
    }
    connectedCallback() {
        const image = this.shadowRoot.querySelector("img");

        if (this.hasAttribute("src")) {
            const imageUrl = this.getAttribute("src");
            image.src = imageUrl;
        } else {
            image.remove();
            this._createPlaceholder();
        }
    }

    _createPlaceholder() {
        const placeholder = document.createElement("div");
        placeholder.setAttribute("class", "placeholder");
        this.shadowRoot.appendChild(placeholder);
    }
}