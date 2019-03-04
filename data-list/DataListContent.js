import { dataListContentTemplate } from "./data-list-templates.js";
import { createHTMLTemplate } from "../core/mb-helper.js";

const contentTpl = createHTMLTemplate(dataListContentTemplate);

export class DataListContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(contentTpl.content.cloneNode(true));
    }
}
