/*! showdown-target-blank 11-06-2015 */
//
//  Target blank extension
//  [somelink](https://some.url.com/some/path) -> <a target="_blank" href="..." >somelink</a>
//

(function () {
  'use strict';

  var targetblank = function () {
    return [
      {
        regex:   '<a(.*)a>',
        replace: function (match, content) {
          return '<a target="_blank"' + content + 'a>';
        }
      }
    ];
  };

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) {
    window.Showdown.extensions.targetblank = targetblank;
  }
  // Server-side export
  if (typeof module !== 'undefined') {
    module.exports = targetblank;
  }

}());
