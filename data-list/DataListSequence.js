import { dataListSequenceTemplate } from "./data-list-templates.js";
import { createHTMLTemplate } from "../core/mb-helper.js";

const sequenceTpl = createHTMLTemplate(dataListSequenceTemplate);

export class DataListSequence extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(sequenceTpl.content.cloneNode(true));
    }
}