// Console version
const deleteHtmlItem = item => item.parentNode.removeChild(item);
const deleteHtmlItems = items => {
  // Old-fashioned for loop to iterate over an HTMLCollection
  for (let i = 0; i < items.length; i++) {
    deleteHtmlItem(items[i]);
  }
};
const getItemGroupsByClassNames = classNames =>
  classNames.map(className => document.getElementsByClassName(className));
const undesirableClassNames = [
  "metabar" /* 
  "s-upgradeMembershipAction",
  "u-bottom0",
  "postShowScreen",
  "surface-scrollOverlay",
  "js-postShareWidget",
  "u-overflowHidden" */
];
getItemGroupsByClassNames(undesirableClassNames).forEach(deleteHtmlItems);

// Bookmarklet version
javascript: (function() {
  for (let x of [
    "metabar",
    "s-upgradeMembershipAction",
    "u-bottom0",
    "postShowScreen",
    "surface-scrollOverlay",
    "js-postShareWidget",
    "u-overflowHidden"
  ]) {
    var elements = document.getElementsByClassName(x);
    for (let i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.parentNode.removeChild(element);
    }
  }
})();
