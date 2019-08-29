// Console version
const deleteHtmlItem = item => (item.style.display = "none");
const deleteHtmlItems = items => {
  // Old-fashioned for loop to iterate over an HTMLCollection
  for (let i = 0; i < items.length; i++) {
    deleteHtmlItem(items[i]);
  }
};
const getItemGroupsByClassNames = classNames =>
  classNames.map(className => document.getElementsByClassName(className));
const undesirableClassNames = [
  "top-bar",
  "metabar",
  "s-upgradeMembershipAction",
  "u-bottom0",
  "surface-scrollOverlay",
  "js-postShareWidget",
  "branch-journeys-top"
];
getItemGroupsByClassNames(undesirableClassNames).forEach(deleteHtmlItems);

// Bookmarklet version
javascript: (function() {
  for (let x of [
    "top-bar",
    "metabar",
    "s-upgradeMembershipAction",
    " u-bottom0",
    "surface-scrollOverlay",
    "js-postShareWidget",
    "branch-journeys-top"
  ]) {
    var elements = document.getElementsByClassName(x);
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  }
})();
