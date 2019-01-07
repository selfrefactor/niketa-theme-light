parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"7boC":[function(require,module,exports) {
module.exports={multi:["Afterglow","BoxUK","Cake","Github","Grunge","Humble","KoralGreen","Mellow","Zeus-Sublime-Text","azure","bold"],multiLight:["BoxUK","Github"],base2:["cave-light","lake-light","space-dark"],base16:["atelierlakeside-light","default-light","harmonic16-light","ocean-dark","solarized-light","tomorrow-dark"],rainglow:["absent","jumper-light","kiwi-light","tetra-light"],others:{nature:"https://github.com/wavebeem/vscode-theme-unoduetre/blob/master/themes/nature.json",subliminal:"https://github.com/swashata/vscode-beautiful-ui/blob/master/themes/Tomorrow%20Subliminal-color-theme.json",mister:"https://github.com/swashata/vscode-beautiful-ui/blob/master/themes/Ayu%20Light-color-theme.json",sea:"https://github.com/swashata/vscode-beautiful-ui/blob/master/themes/Ocean%20Light-color-theme.json",nebula:"https://github.com/eating-coleslaw/vscode-nebula-theme/blob/master/themes/Nebula-color-theme.json",plastic:"https://github.com/will-stone/plastic/blob/master/themes/theme.json"}};
},{}],"1n6H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.multiThemeFetcher=m;var e=require("../data.json"),t=require("fs"),r=require("path"),s=require("string-fn");const i="/home/s/.vscode-insiders/extensions/arturoarevalo.multi-theme-0.0.2/themes",a=(0,r.resolve)(__dirname,"../themes");function m(){return e.multi.map(r=>{const m=`${(0,s.kebabCase)(r)}.tmTheme`;(0,t.copyFileSync)(`${i}/${r}.tmTheme`,`${a}/${m}`);const n=e.multiLight.includes(r)?"vs":"vs-dark";return{label:`Niketa${(0,s.pascalCase)(r)}`,uiTheme:n,path:`./themes/${m}`}})}
},{"../data.json":"7boC"}],"3tKG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.requestThemeJson=o,exports.schema=void 0;var e=require("rambdax"),r=s(require("request-promise"));function s(e){return e&&e.__esModule?e:{default:e}}const t={name:"string"};async function o(s,o){try{const a=await(0,r.default)(s),u=JSON.parse(a);if(!(0,e.pass)(u)(t)&&!o)throw new Error("no name");return!(0,e.pass)(u)(t)&&o&&(u.name=o),u}catch(n){return console.log(n,s),!1}}exports.schema=t;
},{}],"f3zU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toBase16Url=r;var e=require("rambdax");function r(r){return(0,e.glue)(`\n    https://raw.githubusercontent.com\n    riesinger\n    base16-vscode\n    master\n    themes\n    ${r}.json\n  `,"/")}
},{}],"MbtX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toBase2Url=t;var e=require("rambdax"),r=require("string-fn");function t(t){return(0,e.glue)(`\n    https://raw.githubusercontent.com\n    atelierbram\n    Base2Tone-VSCode-Themes\n    master\n    themes\n    Base2Tone_${(0,r.pascalCase)(t)}-color-theme.json\n  `,"/")}
},{}],"T6YI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toRainglowUrl=n;var e=require("rambdax");function n(n){return(0,e.glue)(`\n    https://raw.githubusercontent.com\n    rainglow\n    vscode\n    master\n    themes\n    ${n}.json\n  `,"/")}
},{}],"d7+b":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toRawUrl=r;var e=require("rambdax");const t="https://raw.githubusercontent.com/";function r(r){return(0,e.s)(),r.s((0,e.split)("/blob/")).s(([t,r])=>[(0,e.remove)("https://github.com/",t),r]).s((0,e.join)("/")).s((0,e.prepend)(t))}
},{}],"j3uo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.rabbitHole=b;var e=require("rambdax"),t=require("./multiThemeFetcher"),a=require("string-fn"),s=require("../data.json"),r=require("./requestThemeJson"),n=require("./toBase16Url"),i=require("./toBase2Url"),o=require("./toRainglowUrl"),l=require("./toRawUrl"),h=require("fs-extra");function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){m(e,t,a[t])})}return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const c=`${process.cwd()}/package.json`,p="Niketa";async function b(){const m=await(0,e.mapAsync)(async e=>{return{data:await(0,r.requestThemeJson)((0,o.toRainglowUrl)(e)),name:(0,a.dotCase)(e)}})(s.rainglow),b=await(0,e.mapAsync)(async e=>{return{data:await(0,r.requestThemeJson)((0,n.toBase16Url)(e)),name:(0,a.dotCase)(e)}})(s.base16),k=[...m,...await(0,e.mapAsync)(async e=>{return{data:await(0,r.requestThemeJson)((0,i.toBase2Url)(e)),name:(0,a.dotCase)(e)}})(s.base2),...b,...await(0,e.mapAsync)(async([e,t])=>{return{data:await(0,r.requestThemeJson)((0,l.toRawUrl)(t),e),name:(0,a.dotCase)(e)}})(Object.entries(s.others))].map(e=>{const t="light"===e.data.type?"vs":"vs-dark",s=(0,a.pascalCase)(`${p}.${e.name}`),r=u({},e.data,{name:s}),n=`./imported/${(0,a.camelCase)(e.name)}.json`;return(0,h.writeJsonSync)(n,r,{spaces:2}),{label:s,uiTheme:t,path:n}}),y=(0,h.readJsonSync)(c),T=[...d(),...k,...(0,t.multiThemeFetcher)()],v=(0,e.change)(y,"contributes",{themes:T});return(0,h.writeJsonSync)(c,v,{spaces:2}),v.contributes.themes}function d(){return[{label:"NiketaLight",uiTheme:"vs",path:"./themes/niketa-light.json"},{label:"NiketaYellow",uiTheme:"vs",path:"./themes/niketa-yellow.json"},{label:"NiketaGruvboxHard",uiTheme:"vs",path:"./themes/light-hard.tmTheme"},{label:"NiketaGruvboxLight",uiTheme:"vs",path:"./themes/light-soft.tmTheme"},{label:"NiketaNinetiesBlue",uiTheme:"vs-dark",path:"./themes/nineties-blue.json"},{label:"NiketaNineties",uiTheme:"vs",path:"./themes/niketa-nineties.json"},{label:"NiketaPopLight",uiTheme:"vs",path:"./themes/niketa-pop-light.json"},{label:"NiketaArgon",uiTheme:"vs-dark",path:"./themes/argon.json"},{label:"NiketaOasis",uiTheme:"vs-dark",path:"./themes/oasis.json"},{label:"NiketaPlus",uiTheme:"vs-dark",path:"./themes/plus.json"},{label:"NiketaPrettier",uiTheme:"vs-dark",path:"./themes/prettier.json"},{label:"NiketaAnt",uiTheme:"vs-dark",path:"./themes/ant.json"},{label:"NiketaBee",uiTheme:"vs-dark",path:"./themes/bee.json"}]}
},{"./multiThemeFetcher":"1n6H","../data.json":"7boC","./requestThemeJson":"3tKG","./toBase16Url":"f3zU","./toBase2Url":"MbtX","./toRainglowUrl":"T6YI","./toRawUrl":"d7+b"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./_modules/rabbitHole");(0,e.rabbitHole)();
},{"./_modules/rabbitHole":"j3uo"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map