/*!
https://github.com/iki-inc/fitting
undefined

Version: 0.0.1
License: MIT

© 2022 IKI Inc.
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Fitting=t()}(this,(function(){"use strict";return{cover:(e,t,i)=>{const h=Math.max(e.width/t.width,e.height/t.height),n=i?.scaleX??i?.scale??1,o=i?.scaleY??i?.scale??1,d=t.width*n*h,f=t.height*o*h;return{width:d,height:f,x:-(d-e.width)/2,y:-(f-e.height)/2}}}}));
