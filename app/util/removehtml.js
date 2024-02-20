const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function removeHtmlTagsAndAttributes(inputHtml) {
  const dom = new JSDOM(inputHtml);
  return dom.window.document.body.textContent
}

export { removeHtmlTagsAndAttributes };
