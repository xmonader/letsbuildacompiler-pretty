/*!
  Highlight.js v11.7.0 (git: 82688fad18)
  (c) 2006-2022 undefined and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";var e={exports:{}};function t(e){
return e instanceof Map?e.clear=e.delete=e.set=()=>{
throw Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=()=>{
throw Error("set is read-only")
}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((n=>{var i=e[n]
;"object"!=typeof i||Object.isFrozen(i)||t(i)})),e}
e.exports=t,e.exports.default=t;class n{constructor(e){
void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
ignoreMatch(){this.isMatchIgnored=!0}}function i(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function r(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}
const s=e=>!!e.scope||e.sublanguage&&e.language;class o{constructor(e,t){
this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
this.buffer+=i(e)}openNode(e){if(!s(e))return;let t=""
;t=e.sublanguage?"language-"+e.language:((e,{prefix:t})=>{if(e.includes(".")){
const n=e.split(".")
;return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")
}return`${t}${e}`})(e.scope,{prefix:this.classPrefix}),this.span(t)}
closeNode(e){s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}const a=(e={})=>{const t={children:[]}
;return Object.assign(t,e),t};class c{constructor(){
this.rootNode=a(),this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const t=a({scope:e})
;this.add(t),this.stack.push(t)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
c._collapse(e)})))}}class l extends c{constructor(e){super(),this.options=e}
addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}
addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root
;n.sublanguage=!0,n.language=t,this.add(n)}toHTML(){
return new o(this,this.options).value()}finalize(){return!0}}function g(e){
return e?"string"==typeof e?e:e.source:null}function d(e){return p("(?=",e,")")}
function u(e){return p("(?:",e,")*")}function h(e){return p("(?:",e,")?")}
function p(...e){return e.map((e=>g(e))).join("")}function f(...e){const t=(e=>{
const t=e[e.length-1]
;return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}
})(e);return"("+(t.capture?"":"?:")+e.map((e=>g(e))).join("|")+")"}
function b(e){return RegExp(e.toString()+"|").exec("").length-1}
const m=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
;function E(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n
;let i=g(e),r="";for(;i.length>0;){const e=m.exec(i);if(!e){r+=i;break}
r+=i.substring(0,e.index),
i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+(Number(e[1])+t):(r+=e[0],
"("===e[0]&&n++)}return r})).map((e=>`(${e})`)).join(t)}
const x="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",y="\\b\\d+(\\.\\d+)?",_="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",O="\\b(0b[01]+)",v={
begin:"\\\\[\\s\\S]",relevance:0},N={scope:"string",begin:"'",end:"'",
illegal:"\\n",contains:[v]},k={scope:"string",begin:'"',end:'"',illegal:"\\n",
contains:[v]},M=(e,t,n={})=>{const i=r({scope:"comment",begin:e,end:t,
contains:[]},n);i.contains.push({scope:"doctag",
begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
;const s=f("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
;return i.contains.push({begin:p(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i
},S=M("//","$"),R=M("/\\*","\\*/"),j=M("#","$");var A=Object.freeze({
__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:x,UNDERSCORE_IDENT_RE:w,
NUMBER_RE:y,C_NUMBER_RE:_,BINARY_NUMBER_RE:O,
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const t=/^#![ ]*\//
;return e.binary&&(e.begin=p(t,/.*\b/,e.binary,/\b.*/)),r({scope:"meta",begin:t,
end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},
BACKSLASH_ESCAPE:v,APOS_STRING_MODE:N,QUOTE_STRING_MODE:k,PHRASAL_WORDS_MODE:{
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},COMMENT:M,C_LINE_COMMENT_MODE:S,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:j,
NUMBER_MODE:{scope:"number",begin:y,relevance:0},C_NUMBER_MODE:{scope:"number",
begin:_,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:O,relevance:0},
REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,
end:/\/[gimuy]*/,illegal:/\n/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,
contains:[v]}]}]},TITLE_MODE:{scope:"title",begin:x,relevance:0},
UNDERSCORE_TITLE_MODE:{scope:"title",begin:w,relevance:0},METHOD_GUARD:{
begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function I(e,t){
"."===e.input[e.index-1]&&t.ignoreMatch()}function T(e,t){
void 0!==e.className&&(e.scope=e.className,delete e.className)}function L(e,t){
t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
e.__beforeBegin=I,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
void 0===e.relevance&&(e.relevance=0))}function B(e,t){
Array.isArray(e.illegal)&&(e.illegal=f(...e.illegal))}function D(e,t){
if(e.match){
if(e.begin||e.end)throw Error("begin & end are not supported with match")
;e.begin=e.match,delete e.match}}function H(e,t){
void 0===e.relevance&&(e.relevance=1)}const P=(e,t)=>{if(!e.beforeMatch)return
;if(e.starts)throw Error("beforeMatch cannot be used with starts")
;const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]
})),e.keywords=n.keywords,e.begin=p(n.beforeMatch,d(n.begin)),e.starts={
relevance:0,contains:[Object.assign(n,{endsParent:!0})]
},e.relevance=0,delete n.beforeMatch
},C=["of","and","for","in","not","or","if","then","parent","list","value"]
;function $(e,t,n="keyword"){const i=Object.create(null)
;return"string"==typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach((n=>{
Object.assign(i,$(e[n],t,n))})),i;function r(e,n){
t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|")
;i[n[0]]=[e,U(n[0],n[1])]}))}}function U(e,t){
return t?Number(t):(e=>C.includes(e.toLowerCase()))(e)?0:1}const z={},K=e=>{
console.error(e)},W=(e,...t)=>{console.log("WARN: "+e,...t)},X=(e,t)=>{
z[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),z[`${e}/${t}`]=!0)
},G=Error();function Z(e,t,{key:n}){let i=0;const r=e[n],s={},o={}
;for(let e=1;e<=t.length;e++)o[e+i]=r[e],s[e+i]=!0,i+=b(t[e-1])
;e[n]=o,e[n]._emit=s,e[n]._multi=!0}function F(e){(e=>{
e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
}),(e=>{if(Array.isArray(e.begin)){
if(e.skip||e.excludeBegin||e.returnBegin)throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
G
;if("object"!=typeof e.beginScope||null===e.beginScope)throw K("beginScope must be object"),
G;Z(e,e.begin,{key:"beginScope"}),e.begin=E(e.begin,{joinWith:""})}})(e),(e=>{
if(Array.isArray(e.end)){
if(e.skip||e.excludeEnd||e.returnEnd)throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
G
;if("object"!=typeof e.endScope||null===e.endScope)throw K("endScope must be object"),
G;Z(e,e.end,{key:"endScope"}),e.end=E(e.end,{joinWith:""})}})(e)}function V(e){
function t(t,n){
return RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))
}class n{constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,t){
t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
this.matchAt+=b(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=t(E(e,{joinWith:"|"
}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
;const t=this.matcherRe.exec(e);if(!t)return null
;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n]
;return t.splice(0,n),Object.assign(t,i)}}class i{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n
;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
;let n=t.exec(e)
;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
return n&&(this.regexIndex+=n.position+1,
this.regexIndex===this.count&&this.considerAll()),n}}
if(e.compilerExtensions||(e.compilerExtensions=[]),
e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return e.classNameAliases=r(e.classNameAliases||{}),function n(s,o){const a=s
;if(s.isCompiled)return a
;[T,D,F,P].forEach((e=>e(s,o))),e.compilerExtensions.forEach((e=>e(s,o))),
s.__beforeBegin=null,[L,B,H].forEach((e=>e(s,o))),s.isCompiled=!0;let c=null
;return"object"==typeof s.keywords&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),
c=s.keywords.$pattern,
delete s.keywords.$pattern),c=c||/\w+/,s.keywords&&(s.keywords=$(s.keywords,e.case_insensitive)),
a.keywordPatternRe=t(c,!0),
o&&(s.begin||(s.begin=/\B|\b/),a.beginRe=t(a.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),
s.end&&(a.endRe=t(a.end)),
a.terminatorEnd=g(a.end)||"",s.endsWithParent&&o.terminatorEnd&&(a.terminatorEnd+=(s.end?"|":"")+o.terminatorEnd)),
s.illegal&&(a.illegalRe=t(s.illegal)),
s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>r(e,{
variants:null},t)))),e.cachedVariants?e.cachedVariants:q(e)?r(e,{
starts:e.starts?r(e.starts):null
}):Object.isFrozen(e)?r(e):e))("self"===e?s:e)))),s.contains.forEach((e=>{n(e,a)
})),s.starts&&n(s.starts,o),a.matcher=(e=>{const t=new i
;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(a),a}(e)}function q(e){
return!!e&&(e.endsWithParent||q(e.starts))}class J extends Error{
constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}
const Y=i,Q=r,ee=Symbol("nomatch");var te=(t=>{
const i=Object.create(null),r=Object.create(null),s=[];let o=!0
;const a="Could not find the language '{}', did you forget to load/include a language module?",c={
disableAutodetect:!0,name:"Plain text",contains:[]};let g={
ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
cssSelector:"pre code",languages:null,__emitter:l};function b(e){
return g.noHighlightRe.test(e)}function m(e,t,n){let i="",r=""
;"object"==typeof t?(i=e,
n=t.ignoreIllegals,r=t.language):(X("10.7.0","highlight(lang, code, ...args) has been deprecated."),
X("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
r=e,i=t),void 0===n&&(n=!0);const s={code:i,language:r};k("before:highlight",s)
;const o=s.result?s.result:E(s.language,s.code,n)
;return o.code=s.code,k("after:highlight",o),o}function E(e,t,r,s){
const c=Object.create(null);function l(){if(!N.keywords)return void M.addText(S)
;let e=0;N.keywordPatternRe.lastIndex=0;let t=N.keywordPatternRe.exec(S),n=""
;for(;t;){n+=S.substring(e,t.index)
;const r=y.case_insensitive?t[0].toLowerCase():t[0],s=(i=r,N.keywords[i]);if(s){
const[e,i]=s
;if(M.addText(n),n="",c[r]=(c[r]||0)+1,c[r]<=7&&(R+=i),e.startsWith("_"))n+=t[0];else{
const n=y.classNameAliases[e]||e;M.addKeyword(t[0],n)}}else n+=t[0]
;e=N.keywordPatternRe.lastIndex,t=N.keywordPatternRe.exec(S)}var i
;n+=S.substring(e),M.addText(n)}function d(){null!=N.subLanguage?(()=>{
if(""===S)return;let e=null;if("string"==typeof N.subLanguage){
if(!i[N.subLanguage])return void M.addText(S)
;e=E(N.subLanguage,S,!0,k[N.subLanguage]),k[N.subLanguage]=e._top
}else e=x(S,N.subLanguage.length?N.subLanguage:null)
;N.relevance>0&&(R+=e.relevance),M.addSublanguage(e._emitter,e.language)
})():l(),S=""}function u(e,t){let n=1;const i=t.length-1;for(;n<=i;){
if(!e._emit[n]){n++;continue}const i=y.classNameAliases[e[n]]||e[n],r=t[n]
;i?M.addKeyword(r,i):(S=r,l(),S=""),n++}}function h(e,t){
return e.scope&&"string"==typeof e.scope&&M.openNode(y.classNameAliases[e.scope]||e.scope),
e.beginScope&&(e.beginScope._wrap?(M.addKeyword(S,y.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
S=""):e.beginScope._multi&&(u(e.beginScope,t),S="")),N=Object.create(e,{parent:{
value:N}}),N}function p(e,t,i){let r=((e,t)=>{const n=e&&e.exec(t)
;return n&&0===n.index})(e.endRe,i);if(r){if(e["on:end"]){const i=new n(e)
;e["on:end"](t,i),i.isMatchIgnored&&(r=!1)}if(r){
for(;e.endsParent&&e.parent;)e=e.parent;return e}}
if(e.endsWithParent)return p(e.parent,t,i)}function f(e){
return 0===N.matcher.regexIndex?(S+=e[0],1):(I=!0,0)}function b(e){
const n=e[0],i=t.substring(e.index),r=p(N,e,i);if(!r)return ee;const s=N
;N.endScope&&N.endScope._wrap?(d(),
M.addKeyword(n,N.endScope._wrap)):N.endScope&&N.endScope._multi?(d(),
u(N.endScope,e)):s.skip?S+=n:(s.returnEnd||s.excludeEnd||(S+=n),
d(),s.excludeEnd&&(S=n));do{
N.scope&&M.closeNode(),N.skip||N.subLanguage||(R+=N.relevance),N=N.parent
}while(N!==r.parent);return r.starts&&h(r.starts,e),s.returnEnd?0:n.length}
let m={};function w(i,s){const a=s&&s[0];if(S+=i,null==a)return d(),0
;if("begin"===m.type&&"end"===s.type&&m.index===s.index&&""===a){
if(S+=t.slice(s.index,s.index+1),!o){const t=Error(`0 width match regex (${e})`)
;throw t.languageName=e,t.badRule=m.rule,t}return 1}
if(m=s,"begin"===s.type)return(e=>{
const t=e[0],i=e.rule,r=new n(i),s=[i.__beforeBegin,i["on:begin"]]
;for(const n of s)if(n&&(n(e,r),r.isMatchIgnored))return f(t)
;return i.skip?S+=t:(i.excludeBegin&&(S+=t),
d(),i.returnBegin||i.excludeBegin||(S=t)),h(i,e),i.returnBegin?0:t.length})(s)
;if("illegal"===s.type&&!r){
const e=Error('Illegal lexeme "'+a+'" for mode "'+(N.scope||"<unnamed>")+'"')
;throw e.mode=N,e}if("end"===s.type){const e=b(s);if(e!==ee)return e}
if("illegal"===s.type&&""===a)return 1
;if(A>1e5&&A>3*s.index)throw Error("potential infinite loop, way more iterations than matches")
;return S+=a,a.length}const y=O(e)
;if(!y)throw K(a.replace("{}",e)),Error('Unknown language: "'+e+'"')
;const _=V(y);let v="",N=s||_;const k={},M=new g.__emitter(g);(()=>{const e=[]
;for(let t=N;t!==y;t=t.parent)t.scope&&e.unshift(t.scope)
;e.forEach((e=>M.openNode(e)))})();let S="",R=0,j=0,A=0,I=!1;try{
for(N.matcher.considerAll();;){
A++,I?I=!1:N.matcher.considerAll(),N.matcher.lastIndex=j
;const e=N.matcher.exec(t);if(!e)break;const n=w(t.substring(j,e.index),e)
;j=e.index+n}
return w(t.substring(j)),M.closeAllNodes(),M.finalize(),v=M.toHTML(),{
language:e,value:v,relevance:R,illegal:!1,_emitter:M,_top:N}}catch(n){
if(n.message&&n.message.includes("Illegal"))return{language:e,value:Y(t),
illegal:!0,relevance:0,_illegalBy:{message:n.message,index:j,
context:t.slice(j-100,j+100),mode:n.mode,resultSoFar:v},_emitter:M};if(o)return{
language:e,value:Y(t),illegal:!1,relevance:0,errorRaised:n,_emitter:M,_top:N}
;throw n}}function x(e,t){t=t||g.languages||Object.keys(i);const n=(e=>{
const t={value:Y(e),illegal:!1,relevance:0,_top:c,_emitter:new g.__emitter(g)}
;return t._emitter.addText(e),t})(e),r=t.filter(O).filter(N).map((t=>E(t,e,!1)))
;r.unshift(n);const s=r.sort(((e,t)=>{
if(e.relevance!==t.relevance)return t.relevance-e.relevance
;if(e.language&&t.language){if(O(e.language).supersetOf===t.language)return 1
;if(O(t.language).supersetOf===e.language)return-1}return 0})),[o,a]=s,l=o
;return l.secondBest=a,l}function w(e){let t=null;const n=(e=>{
let t=e.className+" ";t+=e.parentNode?e.parentNode.className:""
;const n=g.languageDetectRe.exec(t);if(n){const t=O(n[1])
;return t||(W(a.replace("{}",n[1])),
W("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}
return t.split(/\s+/).find((e=>b(e)||O(e)))})(e);if(b(n))return
;if(k("before:highlightElement",{el:e,language:n
}),e.children.length>0&&(g.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
console.warn("The element with unescaped HTML:"),
console.warn(e)),g.throwUnescapedHTML))throw new J("One of your code blocks includes unescaped HTML.",e.innerHTML)
;t=e;const i=t.textContent,s=n?m(i,{language:n,ignoreIllegals:!0}):x(i)
;e.innerHTML=s.value,((e,t,n)=>{const i=t&&r[t]||n
;e.classList.add("hljs"),e.classList.add("language-"+i)
})(e,n,s.language),e.result={language:s.language,re:s.relevance,
relevance:s.relevance},s.secondBest&&(e.secondBest={
language:s.secondBest.language,relevance:s.secondBest.relevance
}),k("after:highlightElement",{el:e,result:s,text:i})}let y=!1;function _(){
"loading"!==document.readyState?document.querySelectorAll(g.cssSelector).forEach(w):y=!0
}function O(e){return e=(e||"").toLowerCase(),i[e]||i[r[e]]}
function v(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
r[e.toLowerCase()]=t}))}function N(e){const t=O(e)
;return t&&!t.disableAutodetect}function k(e,t){const n=e;s.forEach((e=>{
e[n]&&e[n](t)}))}
"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
y&&_()}),!1),Object.assign(t,{highlight:m,highlightAuto:x,highlightAll:_,
highlightElement:w,
highlightBlock:e=>(X("10.7.0","highlightBlock will be removed entirely in v12.0"),
X("10.7.0","Please use highlightElement now."),w(e)),configure:e=>{g=Q(g,e)},
initHighlighting:()=>{
_(),X("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
initHighlightingOnLoad:()=>{
_(),X("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
},registerLanguage:(e,n)=>{let r=null;try{r=n(t)}catch(t){
if(K("Language definition for '{}' could not be registered.".replace("{}",e)),
!o)throw t;K(t),r=c}
r.name||(r.name=e),i[e]=r,r.rawDefinition=n.bind(null,t),r.aliases&&v(r.aliases,{
languageName:e})},unregisterLanguage:e=>{delete i[e]
;for(const t of Object.keys(r))r[t]===e&&delete r[t]},
listLanguages:()=>Object.keys(i),getLanguage:O,registerAliases:v,
autoDetection:N,inherit:Q,addPlugin:e=>{(e=>{
e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{
e["before:highlightBlock"](Object.assign({block:t.el},t))
}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{
e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),s.push(e)}
}),t.debugMode=()=>{o=!1},t.safeMode=()=>{o=!0
},t.versionString="11.7.0",t.regex={concat:p,lookahead:d,either:f,optional:h,
anyNumberOfTimes:u};for(const t in A)"object"==typeof A[t]&&e.exports(A[t])
;return Object.assign(t,A),t})({});return te}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);/*! `delphi` grammar compiled for Highlight.js 11.7.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const r=["exports","register","file","shl","array","record","property","for","mod","while","set","ally","label","uses","raise","not","stored","class","safecall","var","interface","or","private","static","exit","index","inherited","to","else","stdcall","override","shr","asm","far","resourcestring","finalization","packed","virtual","out","and","protected","library","do","xorwrite","goto","near","function","end","div","overload","object","unit","begin","string","on","inline","repeat","until","destructor","write","message","program","with","read","initialization","except","default","nil","if","case","cdecl","in","downto","threadvar","of","try","pascal","const","external","constructor","type","public","then","implementation","finally","published","procedure","absolute","reintroduce","operator","as","is","abstract","alias","assembler","bitpacked","break","continue","cppdecl","cvar","enumerator","experimental","platform","deprecated","unimplemented","dynamic","export","far16","forward","generic","helper","implements","interrupt","iochecks","local","name","nodefault","noreturn","nostackframe","oldfpccall","otherwise","saveregisters","softfloat","specialize","strict","unaligned","varargs"],a=[e.C_LINE_COMMENT_MODE,e.COMMENT(/\{/,/\}/,{
relevance:0}),e.COMMENT(/\(\*/,/\*\)/,{relevance:10})],t={className:"meta",
variants:[{begin:/\{\$/,end:/\}/},{begin:/\(\*\$/,end:/\*\)/}]},n={
className:"string",begin:/'/,end:/'/,contains:[{begin:/''/}]},i={
className:"string",begin:/(#\d+)+/},s={begin:e.IDENT_RE+"\\s*=\\s*class\\s*\\(",
returnBegin:!0,contains:[e.TITLE_MODE]},c={className:"function",
beginKeywords:"function constructor destructor procedure",end:/[:;]/,
keywords:"function constructor|10 destructor|10 procedure|10",
contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:r,
contains:[n,i,t].concat(a)},t].concat(a)};return{name:"Delphi",
aliases:["dpr","dfm","pas","pascal"],case_insensitive:!0,keywords:r,
illegal:/"|\$[G-Zg-z]|\/\*|<\/|\|/,contains:[n,i,e.NUMBER_MODE,{
className:"number",relevance:0,variants:[{begin:"\\$[0-9A-Fa-f]+"},{
begin:"&[0-7]+"},{begin:"%[01]+"}]},s,c,t].concat(a)}}})()
;hljs.registerLanguage("delphi",e)})();/*! `bnf` grammar compiled for Highlight.js 11.7.0 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Backus\u2013Naur Form",
contains:[{className:"attribute",begin:/</,end:/>/},{begin:/::=/,end:/$/,
contains:[{begin:/</,end:/>/
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
}]})})();hljs.registerLanguage("bnf",e)})();/*! `c` grammar compiled for Highlight.js 11.7.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,t=e.COMMENT("//","$",{
contains:[{begin:/\\\n/}]
}),s="[a-zA-Z_]\\w*::",a="(decltype\\(auto\\)|"+n.optional(s)+"[a-zA-Z_]\\w*"+n.optional("<[^<>]+>")+")",r={
className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{
match:/\batomic_[a-z]{3,6}\b/}]},i={className:"string",variants:[{
begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},l={
className:"number",variants:[{begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},o={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(i,{className:"string"}),{
className:"string",begin:/<.*?>/},t,e.C_BLOCK_COMMENT_MODE]},c={
className:"title",begin:n.optional(s)+e.IDENT_RE,relevance:0
},d=n.optional(s)+e.IDENT_RE+"\\s*\\(",u={
keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],
type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],
literal:"true false NULL",
built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
},g=[o,r,t,e.C_BLOCK_COMMENT_MODE,l,i],m={variants:[{begin:/=/,end:/;/},{
begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
keywords:u,contains:g.concat([{begin:/\(/,end:/\)/,keywords:u,
contains:g.concat(["self"]),relevance:0}]),relevance:0},p={
begin:"("+a+"[\\*&\\s]+)+"+d,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
keywords:u,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:"decltype\\(auto\\)",
keywords:u,relevance:0},{begin:d,returnBegin:!0,contains:[e.inherit(c,{
className:"title.function"})],relevance:0},{relevance:0,match:/,/},{
className:"params",begin:/\(/,end:/\)/,keywords:u,relevance:0,
contains:[t,e.C_BLOCK_COMMENT_MODE,i,l,r,{begin:/\(/,end:/\)/,keywords:u,
relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,i,l,r]}]
},r,t,e.C_BLOCK_COMMENT_MODE,o]};return{name:"C",aliases:["h"],keywords:u,
disableAutodetect:!0,illegal:"</",contains:[].concat(m,p,g,[o,{
begin:e.IDENT_RE+"::",keywords:u},{className:"class",
beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{
beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:o,
strings:i,keywords:u}}}})();hljs.registerLanguage("c",e)})();/*! `ada` grammar compiled for Highlight.js 11.7.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n="[A-Za-z](_?[A-Za-z0-9.])*",s="[]\\{\\}%#'\"",a=e.COMMENT("--","$"),r={
begin:"\\s+:\\s+",end:"\\s*(:=|;|\\)|=>|$)",illegal:s,contains:[{
beginKeywords:"loop for declare others",endsParent:!0},{className:"keyword",
beginKeywords:"not null constant access function procedure in out aliased exception"
},{className:"type",begin:n,endsParent:!0,relevance:0}]};return{name:"Ada",
case_insensitive:!0,keywords:{
keyword:["abort","else","new","return","abs","elsif","not","reverse","abstract","end","accept","entry","select","access","exception","of","separate","aliased","exit","or","some","all","others","subtype","and","for","out","synchronized","array","function","overriding","at","tagged","generic","package","task","begin","goto","pragma","terminate","body","private","then","if","procedure","type","case","in","protected","constant","interface","is","raise","use","declare","range","delay","limited","record","when","delta","loop","rem","while","digits","renames","with","do","mod","requeue","xor"],
literal:["True","False"]},contains:[a,{className:"string",begin:/"/,end:/"/,
contains:[{begin:/""/,relevance:0}]},{className:"string",begin:/'.'/},{
className:"number",
begin:"\\b(\\d(_|\\d)*#\\w+(\\.\\w+)?#([eE][-+]?\\d(_|\\d)*)?|\\d(_|\\d)*(\\.\\d(_|\\d)*)?([eE][-+]?\\d(_|\\d)*)?)",
relevance:0},{className:"symbol",begin:"'"+n},{className:"title",
begin:"(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?",
end:"(is|$)",keywords:"package body",excludeBegin:!0,excludeEnd:!0,illegal:s},{
begin:"(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+",
end:"(\\bis|\\bwith|\\brenames|\\)\\s*;)",
keywords:"overriding function procedure with is renames return",returnBegin:!0,
contains:[a,{className:"title",
begin:"(\\bwith\\s+)?\\b(function|procedure)\\s+",end:"(\\(|\\s+|$)",
excludeBegin:!0,excludeEnd:!0,illegal:s},r,{className:"type",
begin:"\\breturn\\s+",end:"(\\s+|;|$)",keywords:"return",excludeBegin:!0,
excludeEnd:!0,endsParent:!0,illegal:s}]},{className:"type",
begin:"\\b(sub)?type\\s+",end:"\\s+",keywords:"type",excludeBegin:!0,illegal:s
},r]}}})();hljs.registerLanguage("ada",e)})();/*! `fortran` grammar compiled for Highlight.js 11.7.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a={
variants:[e.COMMENT("!","$",{relevance:0}),e.COMMENT("^C[ ]","$",{relevance:0
}),e.COMMENT("^C$","$",{relevance:0})]
},t=/(_[a-z_\d]+)?/,i=/([de][+-]?\d+)?/,c={className:"number",variants:[{
begin:n.concat(/\b\d+/,/\.(\d*)/,i,t)},{begin:n.concat(/\b\d+/,i,t)},{
begin:n.concat(/\.\d+/,i,t)}],relevance:0},o={className:"function",
beginKeywords:"subroutine function program",illegal:"[${=\\n]",
contains:[e.UNDERSCORE_TITLE_MODE,{className:"params",begin:"\\(",end:"\\)"}]}
;return{name:"Fortran",case_insensitive:!0,aliases:["f90","f95"],keywords:{
keyword:["kind","do","concurrent","local","shared","while","private","call","intrinsic","where","elsewhere","type","endtype","endmodule","endselect","endinterface","end","enddo","endif","if","forall","endforall","only","contains","default","return","stop","then","block","endblock","endassociate","public","subroutine|10","function","program",".and.",".or.",".not.",".le.",".eq.",".ge.",".gt.",".lt.","goto","save","else","use","module","select","case","access","blank","direct","exist","file","fmt","form","formatted","iostat","name","named","nextrec","number","opened","rec","recl","sequential","status","unformatted","unit","continue","format","pause","cycle","exit","c_null_char","c_alert","c_backspace","c_form_feed","flush","wait","decimal","round","iomsg","synchronous","nopass","non_overridable","pass","protected","volatile","abstract","extends","import","non_intrinsic","value","deferred","generic","final","enumerator","class","associate","bind","enum","c_int","c_short","c_long","c_long_long","c_signed_char","c_size_t","c_int8_t","c_int16_t","c_int32_t","c_int64_t","c_int_least8_t","c_int_least16_t","c_int_least32_t","c_int_least64_t","c_int_fast8_t","c_int_fast16_t","c_int_fast32_t","c_int_fast64_t","c_intmax_t","C_intptr_t","c_float","c_double","c_long_double","c_float_complex","c_double_complex","c_long_double_complex","c_bool","c_char","c_null_ptr","c_null_funptr","c_new_line","c_carriage_return","c_horizontal_tab","c_vertical_tab","iso_c_binding","c_loc","c_funloc","c_associated","c_f_pointer","c_ptr","c_funptr","iso_fortran_env","character_storage_size","error_unit","file_storage_size","input_unit","iostat_end","iostat_eor","numeric_storage_size","output_unit","c_f_procpointer","ieee_arithmetic","ieee_support_underflow_control","ieee_get_underflow_mode","ieee_set_underflow_mode","newunit","contiguous","recursive","pad","position","action","delim","readwrite","eor","advance","nml","interface","procedure","namelist","include","sequence","elemental","pure","impure","integer","real","character","complex","logical","codimension","dimension","allocatable|10","parameter","external","implicit|10","none","double","precision","assign","intent","optional","pointer","target","in","out","common","equivalence","data"],
literal:[".False.",".True."],
built_in:["alog","alog10","amax0","amax1","amin0","amin1","amod","cabs","ccos","cexp","clog","csin","csqrt","dabs","dacos","dasin","datan","datan2","dcos","dcosh","ddim","dexp","dint","dlog","dlog10","dmax1","dmin1","dmod","dnint","dsign","dsin","dsinh","dsqrt","dtan","dtanh","float","iabs","idim","idint","idnint","ifix","isign","max0","max1","min0","min1","sngl","algama","cdabs","cdcos","cdexp","cdlog","cdsin","cdsqrt","cqabs","cqcos","cqexp","cqlog","cqsin","cqsqrt","dcmplx","dconjg","derf","derfc","dfloat","dgamma","dimag","dlgama","iqint","qabs","qacos","qasin","qatan","qatan2","qcmplx","qconjg","qcos","qcosh","qdim","qerf","qerfc","qexp","qgamma","qimag","qlgama","qlog","qlog10","qmax1","qmin1","qmod","qnint","qsign","qsin","qsinh","qsqrt","qtan","qtanh","abs","acos","aimag","aint","anint","asin","atan","atan2","char","cmplx","conjg","cos","cosh","exp","ichar","index","int","log","log10","max","min","nint","sign","sin","sinh","sqrt","tan","tanh","print","write","dim","lge","lgt","lle","llt","mod","nullify","allocate","deallocate","adjustl","adjustr","all","allocated","any","associated","bit_size","btest","ceiling","count","cshift","date_and_time","digits","dot_product","eoshift","epsilon","exponent","floor","fraction","huge","iand","ibclr","ibits","ibset","ieor","ior","ishft","ishftc","lbound","len_trim","matmul","maxexponent","maxloc","maxval","merge","minexponent","minloc","minval","modulo","mvbits","nearest","pack","present","product","radix","random_number","random_seed","range","repeat","reshape","rrspacing","scale","scan","selected_int_kind","selected_real_kind","set_exponent","shape","size","spacing","spread","sum","system_clock","tiny","transpose","trim","ubound","unpack","verify","achar","iachar","transfer","dble","entry","dprod","cpu_time","command_argument_count","get_command","get_command_argument","get_environment_variable","is_iostat_end","ieee_arithmetic","ieee_support_underflow_control","ieee_get_underflow_mode","ieee_set_underflow_mode","is_iostat_eor","move_alloc","new_line","selected_char_kind","same_type_as","extends_type_of","acosh","asinh","atanh","bessel_j0","bessel_j1","bessel_jn","bessel_y0","bessel_y1","bessel_yn","erf","erfc","erfc_scaled","gamma","log_gamma","hypot","norm2","atomic_define","atomic_ref","execute_command_line","leadz","trailz","storage_size","merge_bits","bge","bgt","ble","blt","dshiftl","dshiftr","findloc","iall","iany","iparity","image_index","lcobound","ucobound","maskl","maskr","num_images","parity","popcnt","poppar","shifta","shiftl","shiftr","this_image","sync","change","team","co_broadcast","co_max","co_min","co_sum","co_reduce"]
},illegal:/\/\*/,contains:[{className:"string",relevance:0,
variants:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},o,{begin:/^C\s*=(?!=)/,
relevance:0},a,c]}}})();hljs.registerLanguage("fortran",e)})();