"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5285],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},47737:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],l={sidebar_label:"FAQ",sidebar_position:3},s="AuctionHouse FAQ",c={unversionedId:"auction-house/faq",id:"auction-house/faq",title:"AuctionHouse FAQ",description:"* Can I get fees when NFTs get sold-on my Auction House?",source:"@site/docs/auction-house/faq.md",sourceDirName:"auction-house",slug:"/auction-house/faq",permalink:"/auction-house/faq",editUrl:"https://github.com/metaplex/docs/tree/main/docs/auction-house/faq.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"FAQ",sidebar_position:3},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/auction-house/getting_started"},next:{title:"CLI",permalink:"/auction-house/cli"}},u=[],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"auctionhouse-faq"},"AuctionHouse FAQ"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can I get fees when NFTs get sold-on my Auction House?\nYes, An AuctionHouse may be configured to take ",(0,r.kt)("inlineCode",{parentName:"li"},"seller fee basis points"),". This is part of the create and update command; see the CLI use it.")),(0,r.kt)("p",null,"Fees are paid to Creators,Then the Auction house and the seller gets the remainder of the sale. This is easy to calculate on your UI by taking the NFT royalties, Sale price, Auction House fee and displaying to the buyer what their total gains will be."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does the AuctionHouse restrict the user from selling their NFT on another Non-AuctionHouse marketplace?\nNo, the AuctionHouse cannot stop users from sending their NFT even if they have a for-sale listing. If this happens, the ",(0,r.kt)("inlineCode",{parentName:"li"},"execute_sale")," operation will fail and the buyer can get their finds back by canceling their bid.\nMarketplaces creating a AuctionHouse experience will need to track the Buy/Sell trade state accounts and watch the TokenAccounts of sellers so they can automatically cancel the listing and bids on that NFTs.")),(0,r.kt)("p",null,"Specifically Marketplaces should currently store:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Trade Stade Account Keys"),(0,r.kt)("li",{parentName:"ol"},"Trade State Token Size and Price parts of the seed"),(0,r.kt)("li",{parentName:"ol"},"Token Account Keys that are stored in the trade state")),(0,r.kt)("p",null,"Specifically Marketplaces need to track these two events on Token Accounts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ownership has changed from the original Seller of the NFT"),(0,r.kt)("li",{parentName:"ol"},"Token Account Amount has changed to 0")),(0,r.kt)("p",null,"If these events happen the AuctionHouse Authority can call instructions to cancel the bids and listings without the seller or buyer needing to be present."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can people view the settings of my AuctionHouse\nYes anyone can and should be able to verofy the settings of your AuctionHouse especially the ",(0,r.kt)("inlineCode",{parentName:"li"},"Can Change Sale Price")," parameter.\nThis can be done on the cli with the ",(0,r.kt)("inlineCode",{parentName:"li"},"show"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can the AuctionHouse change the sale price on my NFT\nYes but only in a certain scenario. These things need to happen in order for a Auction House to be able to use this feature.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The AuctionHouse instance must have ",(0,r.kt)("inlineCode",{parentName:"li"},"Can Change Sale Price")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ol"},"You as the NFT seller must list your NFT for sale at a price of 0. ",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Don't worry not even the Auction House can sell it for 0 unless you sign the transaction with your key.")))),(0,r.kt)("li",{parentName:"ol"},"The AuctionHouse now can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," priced trade state you made in #2 to create new ",(0,r.kt)("inlineCode",{parentName:"li"},"sale")," listings at different prices.")))}h.isMDXComponent=!0}}]);