(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-31","df-1"],{"1c36":function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(e("af03"));function r(a){return a&&a.__esModule?a:{default:a}}var i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Hz. İsa'dan öncə","Anno Domini"]},d={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ci kvartal","2ci kvartal","3cü kvartal","4cü kvartal"]},o={narrow:["Y","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","İyun","İyul","Avq","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},u={narrow:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],short:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],abbreviated:["Baz","Baz.e","Çər.a","Çər","Cüm.a","Cüm","Şə"],wide:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},g={narrow:{am:"am",pm:"pm",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},m={narrow:{am:"a",pm:"p",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},c={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};function l(a){if(0===a)return a+"-ıncı";var n=a%10,e=a%100-n,t=a>=100?100:null;return c[n]||c[e]||c[t]}function f(a,n){var e=Number(a),t=l(e);return e+t}var v={ordinalNumber:f,era:(0,t.default)({values:i,defaultWidth:"wide"}),quarter:(0,t.default)({values:d,defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,t.default)({values:o,defaultWidth:"wide"}),day:(0,t.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:g,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})},h=v;n.default=h,a.exports=n.default},af03:function(a,n,e){"use strict";function t(a){return function(n,e){var t,r=e||{},i=r.context?String(r.context):"standalone";if("formatting"===i&&a.formattingValues){var d=a.defaultFormattingWidth||a.defaultWidth,o=r.width?String(r.width):d;t=a.formattingValues[o]||a.formattingValues[d]}else{var u=a.defaultWidth,g=r.width?String(r.width):a.defaultWidth;t=a.values[g]||a.values[u]}var m=a.argumentCallback?a.argumentCallback(n):n;return t[m]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=t,a.exports=n.default}}]);
//# sourceMappingURL=df-31.cf0936bc.js.map