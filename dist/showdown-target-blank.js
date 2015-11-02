/*! showdown-target-blank 02-11-2015 */
//
//  Target blank extension
//  [somelink](https://some.url.com/some/path) -> <a target="_blank" href="..." >somelink</a>
//

(function () {
   'use strict';

   var targetblank = function () {
      return [
         {
            type:   'output',
            regex: '<a(.*?)>',
            replace: function (match, content) {
               return '<a target="_blank"' + content + '>';
            }
         }
      ];
   };

   // Client-side export
   if (typeof window !== 'undefined' && window.showdown && window.showdown.extensions) {
      window.showdown.extension("targetblank", targetblank);
   }
   // Server-side export
   if (typeof module !== 'undefined') {
      module.exports = targetblank;
   }

}());
