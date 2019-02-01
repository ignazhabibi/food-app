import { DataListHeader } from "./DataListHeader.js";
import { DataListContent } from "./DataListContent.js";
import { DataListIcon } from "./DataListIcon.js";
import { DataListSequence } from "./DataListSequence.js";
import { DataListItem } from "./DataListItem.js";
import { DataList } from "./DataList.js";

window.customElements.define("data-list-header", DataListHeader);
window.customElements.define("data-list-content", DataListContent);
window.customElements.define("data-list-icon", DataListIcon);
window.customElements.define("data-list-sequence", DataListSequence);
window.customElements.define("data-list-item", DataListItem);
window.customElements.define("data-list", DataList);