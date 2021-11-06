"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2353],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},888:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},l="Terminology",c={unversionedId:"about/terminology",id:"about/terminology",isDocsHomePage:!1,title:"Terminology",description:"Non-fungible tokens",source:"@site/docs/about/terminology.md",sourceDirName:"about",slug:"/about/terminology",permalink:"/about/terminology",editUrl:"https://github.com/metaplex/docs/tree/main/docs/about/terminology.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"History",permalink:"/about/history"}},u=[{value:"Non-fungible tokens",id:"non-fungible-tokens",children:[{value:"<strong>Master Edition</strong>",id:"master-edition",children:[]},{value:"<strong>Print</strong>",id:"print",children:[]},{value:"Normal NFT",id:"normal-nft",children:[]}]},{value:"Royalties",id:"royalties",children:[]},{value:"Storefronts",id:"storefronts",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terminology"},"Terminology"),(0,a.kt)("h2",{id:"non-fungible-tokens"},"Non-fungible tokens"),(0,a.kt)("p",null,"Metaplex's non-fungible-token standard is a part of the Solana Program Library (SPL), and can be characterized as a unique token with a fixed supply of 1 and 0 decimals. We extended the basic definition of an NFT on Solana to include additional metadata such as URI as defined in ERC-721 on Ethereum."),(0,a.kt)("p",null,"Below are the types of NFTs that can be created using the Metaplex protocol."),(0,a.kt)("h3",{id:"master-edition"},(0,a.kt)("strong",{parentName:"h3"},"Master Edition")),(0,a.kt)("p",null,"A master edition token, when minted, represents both a non-fungible token on Solana and metadata that allows creators to control the provenance of prints created from the master edition."),(0,a.kt)("p",null,"Rights to create prints are tokenized itself, and the owner of the master edition can distribute tokens that allow users to create prints from master editions. Additionally, the creator can set the max supply of the master edition just like a regular mint on Solana, with the main difference being that each print is a numbered edition created from it."),(0,a.kt)("p",null,"A notable and desirable effect of master editions is that as prints are sold, the artwork will still remain visible in the artist's wallet as a master edition, while the prints appear in the purchaser's wallets."),(0,a.kt)("h3",{id:"print"},(0,a.kt)("strong",{parentName:"h3"},"Print")),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"print")," represents a copy of an NFT, and is created from a Master Edition. Each print has an edition number associated with it."),(0,a.kt)("p",null,"Usually, prints are created as a part of an auction that has happened on Metaplex, but they could also be created by the creator manually."),(0,a.kt)("p",null,"For limited auctions, each print number is awarded based on the bid placement."),(0,a.kt)("p",null,"Prints can be created during ",(0,a.kt)("a",{parentName:"p",href:"#open-edition"},"Open Edition")," or ",(0,a.kt)("a",{parentName:"p",href:"#limited-edition"},"Limited Edition")," auction."),(0,a.kt)("h3",{id:"normal-nft"},"Normal NFT"),(0,a.kt)("p",null,"A normal NFT (like a Master Edition) when minted represents a non-fungible token on Solana and metadata, but lacks rights to print."),(0,a.kt)("p",null,"An example of a normal NFT would be an artwork that is a one-of-a-kind that, once sold, is no longer within the artist's own wallet, but is in the purchaser's wallet."),(0,a.kt)("h2",{id:"royalties"},"Royalties"),(0,a.kt)("p",null,"Metaplex can seamlessly create on-chain artist splits that remove the awkwardness out of collaboration."),(0,a.kt)("p",null,"Tag each collaborator, set custom percentages, and you\u2019re off to the races. Each NFT can also be minted with configurable royalty payments that are then sent automatically back to the original creators whenever an artwork is resold on a Metaplex marketplace in the future."),(0,a.kt)("h2",{id:"storefronts"},"Storefronts"),(0,a.kt)("p",null,"Metaplex's off-chain component allows creators to launch a custom storefront, similar to Shopify or WordPress. This open-source project provides a graphical interface to the on-chain Metaplex program, for creators, buyers, and curators of NFTs. The design and layout of storefronts can be customized to suit the needs of the entity creating it, either as a permanent storefront or an auction hub for a specific auction or collection."),(0,a.kt)("p",null,"All identification on the Storefront is based on wallet addresses. Creators and store admins sign through their wallets, and users place bids from connected wallets. Custom storefronts allow creators to create unique experiences per auction. Additionally, the Metaplex Foundation is working on multiple partnerships that will enable building immersive storefronts using VR/AR."))}p.isMDXComponent=!0}}]);