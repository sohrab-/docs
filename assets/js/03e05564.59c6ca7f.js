"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4073],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79297:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const a={description:"How the Uses field works."},i="Using NFTs",s={unversionedId:"programs/token-metadata/using-nfts",id:"programs/token-metadata/using-nfts",title:"Using NFTs",description:"How the Uses field works.",source:"@site/docs/01-programs/01-token-metadata/07-using-nfts.md",sourceDirName:"01-programs/01-token-metadata",slug:"/programs/token-metadata/using-nfts",permalink:"/programs/token-metadata/using-nfts",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/01-token-metadata/07-using-nfts.md",tags:[],version:"current",lastUpdatedAt:1683147496,formattedLastUpdatedAt:"May 3, 2023",sidebarPosition:7,frontMatter:{description:"How the Uses field works."},sidebar:"sidebar",previous:{title:"NFT Escrow",permalink:"/programs/token-metadata/nft-escrow"},next:{title:"Changelog",permalink:"/programs/token-metadata/changelog/"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"The Uses field",id:"the-uses-field",level:2},{value:"Delegating the Use Authority",id:"delegating-the-use-authority",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-nfts"},"Using NFTs"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,'To better support gaming applications, the Token Metadata program supports the concept of "token usage". That means, any token \u2014 fungible or not \u2014 can be loaded with a certain amount of uses that will decrease over time until it has no uses left.'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This feature has been added to the Token Metadata program in ",(0,o.kt)("a",{parentName:"p",href:"./changelog/v1.1"},"version 1.1"),".")),(0,o.kt)("h2",{id:"the-uses-field"},"The Uses field"),(0,o.kt)("p",null,"To support this feature, the Metadata account contains an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"Uses")," field. When this field is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", it means the token is not leveraging this feature. When this field is set, it contains further nested fields that define the token's usage. Namely, it contains the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Use Method"),': This field is an enum that defines a "token usage" strategy. It can be one of the following:',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Burn"),": This strategy allows a token to be used once and then burned forever."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Single"),": This strategy allows a single use but does not burn the token."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Multiple"),": This strategy allows a pre-defined amount of uses of the token."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Remaining"),": This field holds the number of uses remaining for the token."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Total"),": This field holds the number of uses initially available for the token.")),(0,o.kt)("p",null,"Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"Uses"),' field is set up, we may "use the token" by calling the following instruction:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./instructions#reduce-the-number-of-uses"},"Reduce the number of uses"))),(0,o.kt)("h2",{id:"delegating-the-use-authority"},"Delegating the Use Authority"),(0,o.kt)("p",null,'By default, only the owner of the NFT is allowed to reduce the number of uses of a token. However, it is possible to delegate this responsibility to other trusted authorities. These delegated "Use Authorities" can then reduce the number of uses via the instruction mentioned in the previous section.'),(0,o.kt)("p",null,"The following instructions enable us to approve and revoke a Use Authority:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./instructions#approve-a-new-use-authority"},"Approve a new Use Authority")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./instructions#revoke-an-existing-use-authority"},"Revoke an existing Use Authority"))),(0,o.kt)("p",null,"Note that this is very similar to the ",(0,o.kt)("a",{parentName:"p",href:"./certified-collections#delegating-the-collection-authority"},"Collection Authority system")," but the party who can approve and revoke authorities is the current token holder of the NFT, as opposed to the Update Authority for collections."))}c.isMDXComponent=!0}}]);