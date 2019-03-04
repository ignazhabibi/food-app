import { dataListHeaderTemplate } from "./data-list-templates.js";
import { createHTMLTemplate } from "../core/mb-helper.js";

const headerTpl = createHTMLTemplate(dataListHeaderTemplate);

export class DataListHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(headerTpl.content.cloneNode(true));
    }
}
