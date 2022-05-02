/*!
https://github.com/iki-inc/fitting
undefined

Version: 0.0.1
License: MIT

© 2022 IKI Inc.
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Fitting=e()}(this,(function(){"use strict";const t=(t,e,i)=>{switch(i){case"top center":case"center":case"bottom center":return(t-e)/2;case"top right":case"middle right":case"bottom right":return t-e;default:return 0}},e=(t,e,i)=>{switch(i){case"middle left":case"center":case"middle right":return(t-e)/2;case"bottom left":case"bottom center":case"bottom right":return t-e;default:return 0}};return{cover:(t,e,i)=>{const h=Math.max(t.width/e.width,t.height/e.height),n=i?.scaleX??i?.scale??1,c=i?.scaleY??i?.scale??1,o=e.width*n*h,r=e.height*c*h,s=(o-t.width)/2,d=(r-t.height)/2;return{width:o,height:r,x:0===s?s:-s,y:0===d?d:-d}},contain:(i,h,n="top left",c=1)=>{const o=Math.min(i.width/h.width,i.height/h.height),r=h.width*c*o,s=h.height*c*o;return{width:r,height:s,x:t(i.width,r,n),y:e(i.height,s,n)}}}}));
