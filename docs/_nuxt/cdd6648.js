(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{292:function(e,t,r){var content=r(300);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(61).default)("2f481c5c",content,!0,{sourceMap:!1})},299:function(e,t,r){"use strict";r(292)},300:function(e,t,r){(t=r(60)(!1)).push([e.i,".item[data-v-e9e431aa]{width:248px;height:320px;border-radius:20px;transition:box-shadow .3s;overflow:hidden}.item.mentee[data-v-e9e431aa]{background-color:#32475b}.item.mentor[data-v-e9e431aa]{background-color:#17aa90}.item.mentee[data-v-e9e431aa]:hover,.item.mentor[data-v-e9e431aa]:hover{box-shadow:16px 16px 16px rgba(11,11,11,.2)}.social-media[data-v-e9e431aa]{display:flex;justify-content:center;margin:0 0 15px 20px}.github[data-v-e9e431aa],.linkedin[data-v-e9e431aa],.twitter[data-v-e9e431aa]{width:30px;height:36px;margin-right:20px}.social-media-icon[data-v-e9e431aa]{width:20px;height:20px;margin-top:8px}.twitter[data-v-e9e431aa]{background-color:#22acf3}.github[data-v-e9e431aa]{background-color:#282e36}.linkedin[data-v-e9e431aa]{background-color:#0e76a8}.profile-photo[data-v-e9e431aa]{margin:0 10px 10px 0}.non-image[data-v-e9e431aa],.profile-photo img[data-v-e9e431aa]{border-radius:100%;width:120px;height:120px;border:2px solid #fff}.non-image[data-v-e9e431aa]{background-image:url(https://findmentor.network/dummy.png);background-repeat:no-repeat,repeat;background-position:50%;background-size:cover}.name[data-v-e9e431aa]{color:#fff}.mentee .interests[data-v-e9e431aa]{color:#a4a4a4}.mentor .interests[data-v-e9e431aa]{color:#d6d5d5}.interests[data-v-e9e431aa],.name[data-v-e9e431aa],.profile-photo[data-v-e9e431aa]{display:flex;justify-content:center;align-items:center}@media (max-width:626px){.item[data-v-e9e431aa]{width:300px;height:350px}.github[data-v-e9e431aa],.linkedin[data-v-e9e431aa],.twitter[data-v-e9e431aa]{width:40px;height:46px;margin-right:20px}.social-media-icon[data-v-e9e431aa]{width:30px;height:30px;margin-top:8px;font-size:25px}}",""]),e.exports=t},303:function(e,t,r){"use strict";r.r(t);r(6),r(154);var n={name:"Card",props:["person","personType"],methods:{getProfilePicture:function(e){var t=e.match(/github.com\/([\w\d-]+)(.+)?/);return t?"https://avatars.githubusercontent.com/".concat(t[1]):""}}},o=(r(299),r(52)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.person?r("div",{class:"item "+e.personType,attrs:{itemscope:"",itemtype:"https://schema.org/Person"}},[r("div",{staticClass:"social-media"},[e.person.twitter_handle.length?r("div",{staticClass:"twitter"},[r("a",{attrs:{href:e.person.twitter_handle,target:"_blank",title:e.person.name+" twitter",itemprop:"sameAs"}},[r("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","twitter"],color:"white"}})],1)]):e._e(),e._v(" "),e.person.github.length?r("div",{staticClass:"github"},[r("a",{attrs:{href:e.person.github,target:"_blank",title:e.person.name+" github",itemprop:"sameAs"}},[r("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","github"],color:"white"}})],1)]):e._e(),e._v(" "),e.person.linkedin.length?r("div",{staticClass:"linkedin"},[r("a",{attrs:{href:e.person.linkedin,target:"_blank",title:e.person.name+" linkedin",itemprop:"sameAs"}},[r("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","linkedin"],color:"white"}})],1)]):e._e()]),e._v(" "),r("NuxtLink",{attrs:{to:"/peer/"+e.person.slug,itemprop:"url"}},[r("div",{staticClass:"profile-photo"},[e.person.github.length?r("img",{attrs:{src:e.getProfilePicture(e.person.github),alt:"mentee-profile-picture",itemprop:"image",loading:"lazy"}}):e._e(),e._v(" "),e.person.github.length?e._e():r("div",{staticClass:"non-image"})]),e._v(" "),r("div",{staticClass:"name"},[e._v("\n      "+e._s(e.person.name)+"\n    ")])]),e._v(" "),r("div",{staticClass:"interests",attrs:{itemprop:"seeks"}},[e._v("\n    "+e._s(e.person.interests)+"\n  ")])],1):e._e()}),[],!1,null,"e9e431aa",null);t.default=component.exports},331:function(e,t,r){var content=r(376);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(61).default)("65e2901a",content,!0,{sourceMap:!1})},375:function(e,t,r){"use strict";r(331)},376:function(e,t,r){(t=r(60)(!1)).push([e.i,"*{box-sizing:border-box}.filter{width:40%;font-size:14px;padding:12px 20px 12px 40px;border:1px solid #ddd;margin-bottom:12px;margin-left:35px}.persons{list-style-type:none;width:100%;display:flex;justify-content:center;flex-wrap:wrap;padding-left:0}.mentor-item{width:248px;height:320px;background-color:#17aa90;border-radius:20px;transition:box-shadow .3s;border:1px solid #ccc;overflow:hidden}.mentor-item:hover{box-shadow:16px 16px 16px rgba(11,11,11,.2)}.person{width:250px;height:250px;text-align:center;margin:30px 7.5px 0}.name{font-size:26px}.interestContent{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}",""]),e.exports=t},726:function(e,t,r){"use strict";r.r(t);r(6),r(114);var n=r(23),o=(r(51),r(20)),c={fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("persons").where({mentor:{$in:["Mentor","İkisi de"]}}).limit(e.postList.mentor.limit).skip(e.postList.mentor.skip).fetch();case 2:e.postList.mentor.items=t.sent;case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{search:{keyword:null,isFilled:!1},search2:{keyword:null,isFilled:!1},postList:{mentor:{items:[],limit:16,skip:0}}}},methods:{loadMoreMentors:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.postList.mentor.skip+=t.postList.mentor.limit,r.next=3,t.$content("persons").where({mentor:{$in:["Mentor","İkisi de"]}}).limit(t.postList.mentor.limit).skip(t.postList.mentor.skip).fetch();case 3:c=r.sent,(o=t.postList.mentor.items).push.apply(o,Object(n.a)(c)),e.loaded(),c.length<=0&&e.complete();case 7:case"end":return r.stop()}}),r)})))()},searchMentor:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.search2.keyword="",t.next=3,e.$content("persons").where({mentor:{$in:["Mentor","İkisi de"]}}).search(e.search.keyword).fetch();case 3:r=t.sent,e.search.keyword.length>0?(e.search.isFilled=!0,e.postList.mentor.items=r):(e.postList.mentor.skip=0,e.$fetch(),e.search.isFilled=!1);case 5:case"end":return t.stop()}}),t)})))()},searchTopic:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.search.keyword="",t.next=3,e.$content("persons").where({interests:{$contains:e.search2.keyword},mentor:{$in:["Mentor","İkisi de"]}}).fetch();case 3:r=t.sent,e.search2.keyword.length>0?(e.search2.isFilled=!0,e.postList.mentor.items=r):(e.postList.mentor.skip=0,e.$fetch(),e.search2.isFilled=!1);case 5:case"end":return t.stop()}}),t)})))()}}},l=(r(375),r(52)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Mentors")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.search.keyword,expression:"search.keyword"}],staticClass:"filter",attrs:{placeholder:"Search in Mentors"},domProps:{value:e.search.keyword},on:{input:[function(t){t.target.composing||e.$set(e.search,"keyword",t.target.value)},e.searchMentor]}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.search2.keyword,expression:"search2.keyword"}],staticClass:"filter",attrs:{placeholder:"Search in Topics"},domProps:{value:e.search2.keyword},on:{input:[function(t){t.target.composing||e.$set(e.search2,"keyword",t.target.value)},e.searchTopic]}}),e._v(" "),r("ul",{staticClass:"persons"},[e.postList.mentor.items.length<=0?r("h5",[e._v("\n      No results...\n    ")]):e._l(e.postList.mentor.items,(function(e,t){return r("Card",{key:t,staticClass:"person",attrs:{person:e,"person-type":"mentor"}})}))],2),e._v(" "),r("client-only",[e.postList.mentor.items.length>=e.postList.mentor.limit&&!e.search.isFilled?r("infinite-loading",{on:{infinite:e.loadMoreMentors}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Card:r(303).default})}}]);