!function(s){var t={};function e(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return s[l].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=s,e.c=t,e.d=function(s,t,l){e.o(s,t)||Object.defineProperty(s,t,{configurable:!1,enumerable:!0,get:l})},e.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(t,"a",t),t},e.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},e.p="",e(e.s=0)}([function(s,t,e){e(1),s.exports=e(2)},function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{lookup:["formRowClasses","wrapperClasses","wrapperLabelClasses","wrapperFieldClasses","labelClasses","fieldClasses","stack","half","third","forth","fifth","clear","removeBorder"],form:null,formDivs:[]}},mounted:function(){var s=this;void 0===this.field||this.$options.name.includes("index-")||this.$options.name.includes("detail-")||"panel-item"===this.$options.name||!this.$el.closest("form")||(this.form=this.$el.closest("form"),this.saveDivs(),this.row(),_.each(this.field,function(t,e){"function"==typeof s[e]&&_.includes(s.lookup,e)&&s[e](t)}))},methods:{saveDivs:function(){var s=this;this.form.childNodes.forEach(function(t,e){"DIV"===t.nodeName&&(t.setAttribute("id","form-row"),0!=e&&e+1!=s.form.childNodes.length||t.classList.add("w-full"),s.formDivs.push(t))})},clearChildNodes:function(s){var t=this;s.forEach(function(s){s.classList&&s.setAttribute("class",""),s.childNodes&&t.clearChildNodes(s.childNodes)})},loopClasses:function(s,t){s.split(" ").forEach(function(s){t.classList.add(s)})},stack:function(){this.$el.classList.add("flex-col"),this.$el.querySelectorAll("div")[0].classList.add("pb-1"),this.$el.querySelectorAll("div")[1].classList.add("pt-1")},row:function(){this.form.classList.add("flex","flex-wrap"),this.$el.closest("#form-row").getAttribute("data-set")&&this.$el.closest("#form-row").classList.add("w-full"),this.$el.closest("#form-row").setAttribute("data-set","true")},clearFormDivWidthClasses:function(s){var t=this;this.$el.closest("#form-row").classList.forEach(function(e){_.startsWith(e,"w-")&&e!==s&&t.$el.closest("#form-row").classList.remove(e)})},addFormDivClass:function(s){this.loopClasses(s,this.$el.closest("#form-row"))},half:function(){this.clearFormDivWidthClasses("w-1/2"),this.addFormDivClass("w-full md:w-1/2")},third:function(){this.clearFormDivWidthClasses("w-1/3"),this.addFormDivClass("w-full md:w-1/3")},forth:function(){this.clearFormDivWidthClasses("w-1/4"),this.addFormDivClass("w-full md:w-1/4")},fifth:function(){this.clearFormDivWidthClasses("w-1/5"),this.addFormDivClass("w-full md:w-1/5")},clear:function(){this.$el.setAttribute("class",""),this.clearChildNodes(this.$el.childNodes)},removeBorder:function(){this.$el.classList.remove("border-b")},formRowClasses:function(s){var t=this.$el.closest("#form-row");s.clear&&t.setAttribute("class",""),this.loopClasses(s.classes,t)},wrapperClasses:function(s){s.clear&&this.$el.setAttribute("class",""),this.loopClasses(s.classes,this.$el)},wrapperLabelClasses:function(s){var t=this.$el.querySelector("div");s.clear&&t.setAttribute("class",""),this.loopClasses(s.classes,t)},wrapperFieldClasses:function(s){var t=this.$el.querySelectorAll("div")[1];s.clear&&t.setAttribute("class",""),this.loopClasses(s.classes,t)},labelClasses:function(s){var t=this.$el.querySelector("div label");s.clear&&t.setAttribute("class",""),this.loopClasses(s.classes,t)},fieldClasses:function(s){var t=this.$el.querySelector("div input");s.clear&&t.setAttribute("class",""),this.loopClasses(s.classes,t)}}};Nova.booting(function(s,t,e){s.mixin(l)})},function(s,t){}]);