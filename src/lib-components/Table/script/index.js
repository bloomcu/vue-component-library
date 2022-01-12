// File#: _1_table

import Util from "@/helpers/Util";
export default function TableScript() {
    // Usage: codyhouse.co/license
    (function () {
      function initTable(table) {
        checkTableLayour(table); // switch from a collapsed to an expanded layout
        Util.addClass(table, 'table--loaded'); // show table
    
        // custom event emitted when window is resized
        table.addEventListener('update-table', function (event) {
          checkTableLayour(table);
        });
      }
    
      function checkTableLayour(table) {
        const layout = getComputedStyle(table, ':before')
          .getPropertyValue('content')
          .replace(/\'|"/g, '');
        Util.toggleClass(table, tableExpandedLayoutClass, layout != 'collapsed');
      }
    
      const tables = document.getElementsByClassName('js-table');
        var tableExpandedLayoutClass = 'table--expanded';
      if (tables.length > 0) {
        let j = 0;
        for (let i = 0; i < tables.length; i++) {
          const beforeContent = getComputedStyle(
            tables[i],
            ':before'
          ).getPropertyValue('content');
          if (beforeContent && beforeContent != '' && beforeContent != 'none') {
            (function (i) {
              initTable(tables[i]);
            })(i);
            j = j + 1;
          } else {
            Util.addClass(tables[i], 'table--loaded');
          }
        }
    
        if (j > 0) {
          let resizingId = false;
            const customEvent = new CustomEvent('update-table');
          window.addEventListener('resize', function (event) {
            clearTimeout(resizingId);
            resizingId = setTimeout(doneResizing, 300);
          });
    
          function doneResizing() {
            for (let i = 0; i < tables.length; i++) {
              (function (i) {
                tables[i].dispatchEvent(customEvent);
              })(i);
            }
          }
    
          window.requestAnimationFrame // init table layout
            ? window.requestAnimationFrame(doneResizing)
            : doneResizing();
        }
      }
    })();
}
