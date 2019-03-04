export function createHTMLTemplate(tpl) {
    const newTpl = document.createElement("template");
    newTpl.innerHTML = tpl;
    return newTpl;
}