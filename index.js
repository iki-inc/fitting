/*!
https://github.com/iki-inc/fitting
undefined

Version: 0.0.1
License: MIT

© 2022 IKI Inc.
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Fitting=t()}(this,(function(){"use strict";return class{static cover(e,t,i){const c=Math.max(e.width/t.width,e.height/t.height),h=i?.scaleX??i?.scale??1,n=i?.scaleY??i?.scale??1,o=t.width*h*c,s=t.height*n*c;return{cw:o,ch:s,cx:-(o-e.width)/2,cy:-(s-e.height)/2}}}}));
