(("undefined"!=typeof global?global:self).webpackChunk_wp_vue_app=("undefined"!=typeof global?global:self).webpackChunk_wp_vue_app||[]).push([[6410],{15682:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>s});var r=e(66201),i=e.n(r),l=e(58366),n=e.n(l)()(i());n.push([t.id,'.Avatar-hovered-Iro{background:#fff;height:100%;left:0;opacity:.7;position:absolute;top:0;width:100%;z-index:3}.Avatar-todos-pLk{list-style:none;margin:0 0 5px;padding:0}.Avatar-todo-u_I:last-child{border-bottom-color:transparent}.Avatar-hideForever-cWt{cursor:pointer;font-size:11px;opacity:.8;text-decoration:underline}.Avatar-hideForever-cWt:hover{opacity:1}.Avatar-lastItem-SUX.Avatar-lastItem-SUX{border-bottom-style:none}.Avatar-avatar-G8t{-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:#e8e8e8;border-radius:50%;box-sizing:content-box !important;display:block;line-height:0;overflow:hidden;position:relative}.Avatar-avatar-G8t.focus-visible{outline:1px solid #0057ff;outline-offset:3px}.Avatar-horizontalStack-PWR .Avatar-avatar-G8t,.Avatar-verticalStack-m71 .Avatar-avatar-G8t{background-color:transparent;border-radius:0;overflow:visible}.Avatar-horizontalStack-PWR .Avatar-avatar-G8t{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;height:100%}.Avatar-disabled-KOS{cursor:default;pointer-events:none}.Avatar-hovered-Iro{background-color:#3c4e6e;display:block}.Avatar-avatarHover-z4f{position:relative}.Avatar-avatarHover-z4f:hover{-webkit-filter:brightness(80%);filter:brightness(80%);-webkit-transition:-webkit-filter .2s linear;transition:-webkit-filter .2s linear;transition:filter .2s linear;transition:filter .2s linear, -webkit-filter .2s linear}.Avatar-avatarImage-VBb{border-radius:50%;display:block;height:100%;width:100%}.Avatar-avatarImage-VBb[src=""]{opacity:0}.Avatar-avatar-G8t .Avatar-multipleAvatarImage-Q9b{background-color:#fff;border-radius:0;position:relative}.Avatar-pie-vQ0 .Avatar-avatar-G8t .Avatar-multipleAvatarImage-Q9b{float:left;width:50%}.Avatar-horizontalStack-PWR .Avatar-avatar-G8t .Avatar-multipleAvatarImage-Q9b,.Avatar-verticalStack-m71 .Avatar-avatar-G8t .Avatar-multipleAvatarImage-Q9b{border:2px solid #fff;border-radius:50%}.Avatar-horizontalStack-PWR .Avatar-avatar-G8t .Avatar-multipleAvatarImage-Q9b:nth-child(n+3),.Avatar-verticalStack-m71 .Avatar-avatar-G8t .Avatar-multipleAvatarImage-Q9b:nth-child(n+3){display:none}.Avatar-horizontalStack-PWR .Avatar-avatar-G8t .Avatar-multipleAvatarImage-Q9b{height:29px;width:29px}.Avatar-horizontalStack-PWR .Avatar-avatar-G8t .Avatar-multipleAvatarImage-Q9b:nth-child(n+2){margin-left:-12.5px}.Avatar-verticalStack-m71 .Avatar-avatar-G8t .Avatar-multipleAvatarImage-Q9b{height:85%;width:85%}.Avatar-verticalStack-m71 .Avatar-avatar-G8t .Avatar-multipleAvatarImage-Q9b:first-child{bottom:0;position:absolute;right:0}.Avatar-extraCount-KlT{-webkit-box-align:center;align-items:center;background:#dee8ff;border-radius:50%;display:none;font-size:10px;font-weight:bold;height:25px;-webkit-box-pack:center;justify-content:center;width:25px}.Avatar-verticalStack-m71 .Avatar-extraCount-KlT{background:#191919;bottom:0;color:#fff;left:0;position:absolute}.Avatar-verticalStack-m71 .Avatar-extraCount-KlT,.Avatar-horizontalStack-PWR .Avatar-extraCount-KlT{display:-webkit-box;display:flex}',""]),n.locals={hovered:"Avatar-hovered-Iro",todos:"Avatar-todos-pLk",todo:"Avatar-todo-u_I",hideForever:"Avatar-hideForever-cWt",lastItem:"Avatar-lastItem-SUX",avatar:"Avatar-avatar-G8t",horizontalStack:"Avatar-horizontalStack-PWR",verticalStack:"Avatar-verticalStack-m71",disabled:"Avatar-disabled-KOS",avatarHover:"Avatar-avatarHover-z4f",avatarImage:"Avatar-avatarImage-VBb",multipleAvatarImage:"Avatar-multipleAvatarImage-Q9b",pie:"Avatar-pie-vQ0",extraCount:"Avatar-extraCount-KlT"};const s=n},49678:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>s});var r=e(66201),i=e.n(r),l=e(58366),n=e.n(l)()(i());n.push([t.id,".AvatarImage-avatarImage-PUL{border-radius:inherit;display:block;width:100%}",""]),n.locals={avatarImage:"AvatarImage-avatarImage-PUL"};const s=n},33538:(t,a,e)=>{"use strict";e.d(a,{Ik:()=>n,sY:()=>s,S5:()=>o,j0:()=>u,Qb:()=>v,$E:()=>c,jN:()=>d,Th:()=>p,oY:()=>h,ri:()=>g});var r=e(30411),i=/^size_/;function l(t){var a;return"string"==typeof t?t:null!==(a=null==t?void 0:t.url)&&void 0!==a?a:""}function n(t){var a={};if(!Array.isArray(t))return a;for(var e=0,r=t;e<r.length;e++){var i=r[e];"string"==typeof i.url&&(a["size_"+i.size]={url:i.url})}return a}function s(t){var a=t?t.split(".").pop():null;return!!a&&"gif"===a.toLowerCase()}function o(t){var a=(0,r.__assign)({},t);return Object.keys(a).forEach((function(t){var e=a[t];i.test(t)&&(null==e?void 0:e.url)&&(a[t.replace(i,"")]=e.url)})),a.max_808&&(a[808]=a.max_808),Object.keys(a).filter((function(t){return-1===t.indexOf("_opt")})).filter((function(t){return!isNaN(Number(t))&&a[t].length>1})).map((function(t){return a[t]+" "+t+"w"})).join(", ")}function u(t){var a=(0,r.__assign)({},t);return Object.keys(a).forEach((function(t){var e=a[t];i.test(t)&&(null==e?void 0:e.url)&&(a[t.replace(i,"")]=e.url)})),a.max_808_opt&&(a["808_opt"]=a.max_808_opt),Object.keys(a).filter((function(t){return-1!==t.indexOf("_opt")})).filter((function(t){return!isNaN(Number(t.split("_opt")[0]))&&a[t].length>1})).map((function(t){return a[t]+" "+t.split("_opt")[0]+"w"})).join(", ")}function v(t){var a=t.images,e=t.upperLimit,l=(0,r.__assign)({},a);return Object.keys(l).forEach((function(t){var a,e=l[t];i.test(t)&&e&&"string"!=typeof e&&(l[t.replace(i,"")]=null!==(a=null==e?void 0:e.url)&&void 0!==a?a:"")})),Object.keys(l).filter((function(t){return"string"==typeof l[t]})).map((function(t){var a="disp"===t||"original"===t?808:Number(t);if(!(e&&a>e||isNaN(Number(a))))return l[t]+" "+a+"w"})).filter((function(t){return!!t})).join(", ")}function c(t){var a=t.images,e=t.upperLimit;return Object.keys(a).filter((function(t){return-1!==t.indexOf("_still")})).map((function(t){var r=-1!==t.indexOf("max_"),i=t.replace(/^size_/,""),n=r?i.replace(/max_|_still|/g,""):i.split("_")[0],s=l(a[t]),o=e&&Number(n)>e;if(""!==s&&!o)return isNaN(Number(n))?void 0:s+" "+n+"w"})).filter((function(t){return!!t})).join(", ")}function d(t){var a=t.images,e=t.upperLimit;return Object.keys(a).filter((function(t){return-1!==t.indexOf("max_")&&-1===t.indexOf("_still")})).map((function(t){var r=t.replace(/^size_|max_/g,""),i=l(a[t]),n=e&&Number(r)>e;if(""!==i&&!n)return i+" "+r+"w"})).filter((function(t){return!!t})).join(", ")}function f(t,a){return t.map((function(t){var e;if(!a||0===a.length)return null;var r=null!==(e=a[t])&&void 0!==e?e:a["size_"+t];if(!r)return null;var i=r.width;return r.url+" "+i+"w"})).filter((function(t){return null!==t})).join(", ")}function p(t){return f(["disp","max_1200","1400_opt_1","fs","2800_opt_1"],t)}function h(t){return f(["max_158","max_316","max_632"],t)}function g(t){return f(["158_still","316_still","632_still"],t)}},26410:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>d});var r=e(38114),i=e(60459),l=e(24252),n=e(14856),s=e(82927);const o=r.default.defineComponent({name:"Avatar",components:{AvatarImage:l.Z},props:{owners:{type:Array,default:function(){return[]}},images:{type:Object},src:{type:String},src2x:{type:String},profileUrl:{type:String,default:""},size:{type:Number,default:35},context:{type:String,default:""},isDisabled:{type:Boolean,default:!1},shouldHaveMiniProfile:{type:Boolean,default:!0},isHovered:{type:Boolean,default:!1},shouldTriggerFollow:{type:Boolean,default:!1},followeeId:{type:Number},isFollowing:{type:Boolean},avatarStyle:{type:String,default:"pie",validator:function(t){return["pie","horizontalStack","verticalStack"].includes(t)}},multipleAvatarStyle:{type:String}},beforeCreate:function(){this.$options.components&&(this.$options.components.Miniprofile=e(61811).Z)},computed:{hasLink:function(){return!this.isDisabled&&!!this.profileUrl},hasMultipleOwner:function(){return this.owners.length>1},entityType:function(){return this.hasMultipleOwner?"project":"user"},avatarUrl:function(){if(this.owners.length>0)return!this.hasMultipleOwner&&this.owners[0].url},wrapperStyle:function(){return{height:this.size+"px",width:this.size+"px",minHeight:this.size+"px",minWidth:this.size+"px"}},hasGqlData:function(){var t,a,e;if(Array.isArray(this.owners)&&0!==this.owners.length){var r=null!==(a=this.owners[0].images)&&void 0!==a?a:{};e=Object.values(r)[0]}else e=Object.values(null!==(t=this.images)&&void 0!==t?t:{})[0];return"object"==typeof e},ownersAdapted:function(){return this.hasGqlData?this.owners:Array.isArray(this.owners)?this.owners.map(s.ZP):[]},imagesAdapted:function(){return this.hasGqlData?this.images:(0,s.F5)(this.images)}},methods:{errorHandler:function(){var t=this.$store&&this.$store.state.user&&this.$store.state.user.loggedInUser&&this.$store.state.user.loggedInUser.url||"";this.profileUrl.length&&t===this.profileUrl&&i.default.info("avatarfail","avatar_failed",{username:this.$store.state.user.loggedInUser.username})},clickHandler:function(t){if(this.isDisabled)return t.preventDefault(),void t.stopPropagation();n.default.custom("avatar",this.context+" - avatar click"),this.$emit("avatarClicked",t)}}});var u=e(42200),v=e.n(u);var c=(0,e(54868).default)(o,(function(){var t,a,e,r,i=this,l=i.$createElement,n=i._self._c||l;return n("div",{class:i.$style[i.avatarStyle]},[Boolean(i.owners.length)&&i.shouldHaveMiniProfile&&!i.hasMultipleOwner?n("div",[n("Miniprofile",{attrs:{userId:i.ownersAdapted[0].id},scopedSlots:i._u([{key:"miniprofileActivator",fn:function(){var t;return[n("a",{class:[i.$style.avatar,i.$style.avatarHover,(t={},t[i.$style.disabled]=i.isDisabled,t)],style:"pie"===i.avatarStyle||"verticalStack"===i.avatarStyle?i.wrapperStyle:null,attrs:{target:"_blank",href:i.avatarUrl,"data-followee":i.followeeId,"data-entity":i.entityType,"data-following":i.isFollowing,"data-source":"avatar"},on:{click:i.clickHandler}},[i.isHovered?n("span",{ref:"blocking",class:i.$style.hovered}):i._e(),n("div",{style:{height:i.size+"px",width:i.size+"px",minHeight:i.size+"px",minWidth:i.size+"px"}},[n("AvatarImage",{class:[i.$style.avatarImage,"e2e-Miniprofile-Avatar"],attrs:{images:i.ownersAdapted[0].images,alt:i.$translate("alt_avatar_multiple_users","user's avatar"),avatarSize:i.size,"data-id":i.ownersAdapted[0].id},on:{"~error":function(t){return i.errorHandler(t)}}})],1)])]},proxy:!0}],null,!1,3031504423)})],1):Boolean(i.owners.length)?n("a",{class:[i.$style.avatar,i.$style.avatarHover,(t={},t[i.$style.disabled]=i.isDisabled,t),(a={},a["js-action-follow"]=i.shouldTriggerFollow&&i.hasMultipleOwner,a)],style:"pie"===i.avatarStyle||"verticalStack"===i.avatarStyle?i.wrapperStyle:null,attrs:{target:"_blank",href:i.avatarUrl,"data-followee":i.followeeId,"data-entity":i.entityType,"data-following":i.isFollowing,"data-source":"avatar"},on:{click:i.clickHandler}},[i.isHovered?n("span",{ref:"blocking",class:i.$style.hovered}):i._l(i.ownersAdapted,(function(t,a){return n("AvatarImage",{key:a,class:[[i.hasMultipleOwner?[i.$style.multipleAvatarImage,i.multipleAvatarStyle]:i.$style.avatarImage]],style:"pie"!==i.avatarStyle?{zIndex:i.owners.length-a}:null,attrs:{images:t.images,alt:i.$translate("alt_avatar_multiple_users","user's avatar"),avatarSize:i.size,"data-id":t.id},on:{"~error":function(t){return i.errorHandler(t)}}})})),i.owners.length>2?n("span",{class:i.$style.extraCount,style:{zIndex:i.owners.length}},[i._v("+"+i._s(i.owners.length-2))]):i._e()],2):n("a",{ref:"link",class:[i.$style.avatar,(e={},e[i.$style.avatarHover]=i.hasLink,e),(r={},r[i.$style.disabled]=i.isDisabled,r)],style:"pie"===i.avatarStyle?i.wrapperStyle:null,attrs:{target:i.hasLink?"_blank":null,href:i.hasLink?i.profileUrl:null},on:{click:i.clickHandler}},[i.isHovered?n("span",{ref:"blocking",class:i.$style.hovered}):i._e(),n("AvatarImage",{class:i.$style.avatarImage,style:{height:i.size+"px",width:i.size+"px"},attrs:{images:i.imagesAdapted,alt:i.$translate("alt_avatar_single_user","user's avatar"),src1x:i.src,src2x:i.src2x,avatarSize:i.size},on:{"~error":function(t){return i.errorHandler(t)}}})],1)])}),[],!1,(function(t){this.$style=v().locals||v()}),null,null);const d=c.exports},24252:(t,a,e)=>{"use strict";e.d(a,{Z:()=>u});var r,i=e(38114),l=e(33538);!function(t){t.ImageEl="qa-AvatarImage-image-el"}(r||(r={}));const n=i.default.defineComponent({props:{images:{type:Object},src1x:{type:String},src2x:{type:String},avatarSize:{type:Number,default:115},alt:{type:String,default:"User's avatar"}},computed:{altText:function(){return this.alt||this.$translate("avatar_image_default_alt_text","User's avatar")},src:function(){var t,a=this;if(this.src1x)return this.src1x;if(this.images){if(this.images.size_115)return null===(t=this.images.size_115)||void 0===t?void 0:t.url;var e="",r=0;return Object.keys(this.images).forEach((function(t){var i,l,n=Number(t.replace(/^size_/,""));(null===(i=a.images[t])||void 0===i?void 0:i.url)&&n>r&&(r=n,e=null===(l=a.images[t])||void 0===l?void 0:l.url)})),e}},srcset:function(){return this.src1x&&this.src2x?this.src1x+" 1x, "+this.src2x+" 2x":(0,l.S5)(this.images)}},data:function(){return{testIds:r}}});var s=e(91219),o=e.n(s);const u=(0,e(54868).default)(n,(function(){var t=this,a=t.$createElement;return(t._self._c||a)("img",{key:t.src,class:t.$style.avatarImage,attrs:{src:t.src,alt:t.altText,srcset:t.srcset,loading:"lazy",sizes:t.avatarSize+"px",draggable:"false"},on:{error:function(a){return t.$emit("error",a)},dragstart:function(t){t.preventDefault()}}})}),[],!1,(function(t){this.$style=o().locals||o()}),null,null).exports},42200:(t,a,e)=>{var r=e(15682);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,e(55087).default)("4c4b0d7f",r,!0,{})},91219:(t,a,e)=>{var r=e(49678);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,e(55087).default)("0a084936",r,!0,{})}}]);
//# sourceMappingURL=app.6410.327282cc468ba9138f97.js.map