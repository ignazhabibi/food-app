import { dataListItemTemplate } from "./data-list-templates.js";
import { createHTMLTemplate } from "../core/mb-helper.js";

const itemTpl = createHTMLTemplate(dataListItemTemplate);

export class DataListItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(itemTpl.content.cloneNode(true));
    }
}