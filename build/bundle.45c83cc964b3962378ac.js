webpackJsonp([1],[,,function(n,e,t){"use strict";t(3),t(4),t(5)},function(n,e){},function(n,e,t){"use strict";function u(n){return n&&n.__esModule?n:{default:n}}function c(n){a.append(f.default.render(d,n)),console.log(a)}var o=t(0),i=u(o),l=t(1),f=u(l),a=(0,i.default)(".income__list"),d=a.html();i.default.ajax({type:"GET",url:"/income",success:function(n){i.default.each(n,function(n,e){c(e)})}})},function(n,e,t){"use strict";var u=document.createElement("button");u.innerText="Click me",u.onclick=function(){t.e(0).then(t.bind(null,7)).then(function(n){n.default()})},document.body.appendChild(u)}],[2]);