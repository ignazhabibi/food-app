import { dataListTemplate } from "./data-list-templates.js";
import { createHTMLTemplate } from "../core/mb-helper.js";

const listTpl = createHTMLTemplate(dataListTemplate);

export class DataList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(listTpl.content.cloneNode(true));
    }
}