const formatList = (arr, locale, type, style) =>
  new Intl.ListFormat(locale, { type, style }).format(arr);

  export {formatList}