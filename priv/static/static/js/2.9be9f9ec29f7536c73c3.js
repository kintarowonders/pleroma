(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{576:function(t,e,i){var c=i(577);"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);(0,i(3).default)("cc6cdea4",c,!0,{})},577:function(t,e,i){(t.exports=i(2)(!1)).push([t.i,".sticker-picker{width:100%}.sticker-picker .contents{min-height:250px}.sticker-picker .contents .sticker-picker-content{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 4px}.sticker-picker .contents .sticker-picker-content .sticker{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;margin:4px;width:56px;height:56px}.sticker-picker .contents .sticker-picker-content .sticker img{height:100%}.sticker-picker .contents .sticker-picker-content .sticker img:hover{filter:drop-shadow(0 0 5px var(--link,#d8a070))}",""])},578:function(t,e,i){"use strict";i.r(e);var c=i(88),n={components:{TabSwitcher:i(51).a},data:function(){return{meta:{stickers:[]},path:""}},computed:{pack:function(){return this.$store.state.instance.stickers||[]}},methods:{clear:function(){this.meta={stickers:[]}},pick:function(t,e){var i=this,n=this.$store;fetch(t).then(function(t){t.blob().then(function(t){var a=new File([t],e,{mimetype:"image/png"}),s=new FormData;s.append("file",a),c.a.uploadMedia({store:n,formData:s}).then(function(t){i.$emit("uploaded",t),i.clear()},function(t){console.warn("Can't attach sticker"),console.warn(t),i.$emit("upload-failed","default")})})})}}},a=i(0);var s=function(t){i(576)},r=Object(a.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sticker-picker"},[i("tab-switcher",{staticClass:"tab-switcher",attrs:{"render-only-focused":!0,"scrollable-tabs":""}},t._l(t.pack,function(e){return i("div",{key:e.path,staticClass:"sticker-picker-content",attrs:{"image-tooltip":e.meta.title,image:e.path+e.meta.tabIcon}},t._l(e.meta.stickers,function(c){return i("div",{key:c,staticClass:"sticker",on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.pick(e.path+c,e.meta.title)}}},[i("img",{attrs:{src:e.path+c}})])}),0)}),0)],1)},[],!1,s,null,null);e.default=r.exports}}]);
//# sourceMappingURL=2.9be9f9ec29f7536c73c3.js.map