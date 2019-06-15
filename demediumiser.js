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
  "metabar",
  "s-upgradeMembershipAction",
  " u-bottom0",
  "surface-scrollOverlay",
  "js-postShareWidget"
];
getItemGroupsByClassNames(undesirableClassNames).forEach(deleteHtmlItems);
