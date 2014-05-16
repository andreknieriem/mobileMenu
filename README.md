mobileMenu
==========

jQuery Plugin for Make a HTML-Select Menu from an UL-Menu

## How to use
Simple use it this way:
```javascript
$('.menu').mobileMenu();
```

## Options
Option | Description | Default
------ | ----------- | -------
className: | The Classname the new generated Select gets. | mobileMenu
selectId: | The Id the new generated Select gets. | mobileMenu
depthSign | The sign for the current depth of the menuitem. | -
target | Where should the Select get rendered | $(this).parent()
minDepth | where to start the Menu | 0
maxDepth | where to stop the Menu | 10000

## License
Released under the MIT License. See the bundled LICENSE file for details.