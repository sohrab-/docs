"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2013],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return h}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(i),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return i?n.createElement(f,o(o({ref:t},u),{},{components:i})):n.createElement(f,o({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},61176:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=i(83117),a=i(80102),r=(i(67294),i(3905)),o=["components"],l={sidebar_position:6},s="Auction Sale",c={unversionedId:"create-store/auction",id:"create-store/auction",title:"Auction Sale",description:"Metaplex currently supports four types of auctions that are all derived from English auctions. English auction, sometimes referred to an open auction, is the same type of auction that eBay uses. Participants of the auction can see the Price Floor (ie, the minimum bid that you are willing to sell your NFT).",source:"@site/docs/create-store/auction.md",sourceDirName:"create-store",slug:"/create-store/auction",permalink:"/create-store/auction",editUrl:"https://github.com/metaplex/docs/tree/main/docs/create-store/auction.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebar",previous:{title:"Sell NFTs",permalink:"/create-store/sell"},next:{title:"Deploy",permalink:"/create-store/deploy"}},u=[{value:"Open Edition",id:"open-edition",children:[{value:"Select which item to sell",id:"select-which-item-to-sell",children:[],level:4},{value:"Set the price",id:"set-the-price",children:[],level:4},{value:"Initial phase",id:"initial-phase",children:[],level:4},{value:"Ending phase",id:"ending-phase",children:[{value:"Gap Time",id:"gap-time",children:[],level:5},{value:"Tick Size",id:"tick-size",children:[],level:5}],level:4},{value:"Publish",id:"publish",children:[],level:4}],level:2},{value:"Limited Edition",id:"limited-edition",children:[],level:2},{value:"Single Item",id:"single-item",children:[],level:2},{value:"Tiered Auction",id:"tiered-auction",children:[{value:"Select the number of winners",id:"select-the-number-of-winners",children:[],level:4},{value:"Select tiers",id:"select-tiers",children:[],level:4}],level:2}],p={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"auction-sale"},"Auction Sale"),(0,r.kt)("p",null,"Metaplex currently supports four types of auctions that are all derived from English auctions. English auction, sometimes referred to an open auction, is the same type of auction that eBay uses. Participants of the auction can see the Price Floor (ie, the minimum bid that you are willing to sell your NFT). "),(0,r.kt)("p",null,"Basic parameters include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Auction start time"),(0,r.kt)("li",{parentName:"ul"},"Auction end time"),(0,r.kt)("li",{parentName:"ul"},"Reservation price")),(0,r.kt)("p",null,"Additionally, Metaplex includes a novel concept of the participation NFT, which you can use for your own auction. Each bidding participant can be rewarded a unique NFT for participating in the auction. Keep in mind that there are costs (ie, minting of participation NFTs) associated with using this feature."),(0,r.kt)("p",null,'The creator of an auction also has the ability to configure a minimal price that should be charged for redemption, with the option to set it as "free". As mentioned before, participants of your auction are able to see this price.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select type",src:i(92946).Z})),(0,r.kt)("h2",{id:"open-edition"},"Open Edition"),(0,r.kt)("p",null,"Print as many as you want!"),(0,r.kt)("p",null,'An open edition auction requires the offering of a Master Edition NFT that specifically has no set supply. The auction will only create Prints of this item for bidders: each bidder is guaranteed to get a print, as there are no true "winners" of this auction type.'),(0,r.kt)("p",null,"An open edition auction can either have a set fixed price (equivalent to a Buy Now sale), can be set to the bid price (Pay what you want), or can be free (Make any bid to get it for free)."),(0,r.kt)("h4",{id:"select-which-item-to-sell"},"Select which item to sell"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select item",src:i(73111).Z})),(0,r.kt)("h4",{id:"set-the-price"},"Set the price"),(0,r.kt)("p",null,"Set the price floor and bid tick. Bid tick is the amount of price increment for each bid."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Set the price",src:i(69929).Z})),(0,r.kt)("h4",{id:"initial-phase"},"Initial phase"),(0,r.kt)("p",null,"The initial phase setting allows you to delay the start of the auction. If you are launching multiple NFTs or an NFT collection, setting a specific date is recommended. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Initial phase",src:i(7219).Z})),(0,r.kt)("h4",{id:"ending-phase"},"Ending phase"),(0,r.kt)("p",null,"When would you like your auction to end? We\u2019ve seen projects that set their auction duration from anywhere from a few hours (ie, 3 hours) to a few days (no more than 3 days) have the most success. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ending phase",src:i(28685).Z})),(0,r.kt)("h5",{id:"gap-time"},"Gap Time"),(0,r.kt)("p",null,"Gap Time is a more advanced feature and most auctions don\u2019t use it. If you anticipate that your community will have lots of competitive bids at the very end, you can use the Gap Time feature. Each new higher bid resets the countdown clock for when the auction ends. Based on feedback from recent projects, we recommend setting Gap Time to a few minutes and no more than 5 or 10 minutes. "),(0,r.kt)("h5",{id:"tick-size"},"Tick Size"),(0,r.kt)("p",null,"Tick Size for Ending Phase is another more advanced feature and most auctions don\u2019t use it. Tick Size dictates how much higher the next bid must be to beat out the previous bid. Outside of Ending Phase, Tick Size is an amount of Sol. In Ending Phase, it\u2019s defined as a percentage higher. "),(0,r.kt)("h4",{id:"publish"},"Publish"),(0,r.kt)("p",null,"Publish the auction and observe it under ",(0,r.kt)("strong",{parentName:"p"},"Explore")," section."),(0,r.kt)("p",null,"You will be asked to approve a transaction, so it will reduce a transaction fee in SOL from your wallet."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Publish",src:i(83091).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Auction page",src:i(35620).Z})),(0,r.kt)("h2",{id:"limited-edition"},"Limited Edition"),(0,r.kt)("p",null,"Keep your NFTs rare! For a limited edition auction, a Master Edition NFT (of limited or unlimited supply) may be provided to the auction with a number of copies as the set amount of winning places."),(0,r.kt)("p",null,"For each prize place, a Print will be minted in order of prize place, and awarded to the winning bidder of that place."),(0,r.kt)("p",null,"For example, the first place winner will win Print #1; the second place winner Print #2; and so on."),(0,r.kt)("p",null,"It is required for limited supply NFTs that there is at least as much supply remaining as there are desired winners in the auction."),(0,r.kt)("p",null,"Flow is identical to the Open Edition auction, with only a difference in the item selection screen.\nThere you can provide the number of copies to sell."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Limited edition page",src:i(38043).Z})),(0,r.kt)("h2",{id:"single-item"},"Single Item"),(0,r.kt)("p",null,"This type of auction can be used to sell normal NFTs and re-sell Prints, as well as the sale of Master Edition themselves (and the associated printing rights) if the artist so wishes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sell item",src:i(11601).Z})),(0,r.kt)("p",null,"On the ",(0,r.kt)("strong",{parentName:"p"},"Participation NFT")," each bidding participant can be rewarded a unique Open Edition NFT for participating in the auction."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Participation",src:i(46832).Z})),(0,r.kt)("h2",{id:"tiered-auction"},"Tiered Auction"),(0,r.kt)("p",null,"Tiered Auctions is a useful tool for awarding multiple winners (ie, first, second, third place) with NFTs. This can be editions of the same NFTs or different NFTs as runner up prizes."),(0,r.kt)("p",null,"A tiered auction can contain a mix of the other three auction types as winning placements. For instance, the first place winner could win a Print of Limited Edition NFT A, while the second-place winner could win Normal NFT, and so on. Additionally, all participants who did not win any place could get a Participation NFT Print from a Master Edition (if the Master Edition had no supply limit)."),(0,r.kt)("h4",{id:"select-the-number-of-winners"},"Select the number of winners"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Participation",src:i(28287).Z})),(0,r.kt)("h4",{id:"select-tiers"},"Select tiers"),(0,r.kt)("p",null,"On this screen, you can create several tiers to put winners in them. In our example, the first winner will get ",(0,r.kt)("strong",{parentName:"p"},"Full Rights")," transfer for an NFT. The second and third winners will get a ",(0,r.kt)("strong",{parentName:"p"},"Print")," of other NFT."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select tier 1",src:i(42288).Z}),"\n",(0,r.kt)("img",{alt:"Select tier 2",src:i(42404).Z})))}d.isMDXComponent=!0},35620:function(e,t,i){t.Z=i.p+"assets/images/auction-page-394fa3a1625acf0d464f50e12a41d7a2.png"},69929:function(e,t,i){t.Z=i.p+"assets/images/choose-price-ab44e5fe45821cbf859fb5cbefa6cdf4.png"},28685:function(e,t,i){t.Z=i.p+"assets/images/ending-phase-292783eb479781ee16395422cf934f15.png"},7219:function(e,t,i){t.Z=i.p+"assets/images/initial-phase-34bc93464f066f9a8135d5794aaf1919.png"},38043:function(e,t,i){t.Z=i.p+"assets/images/limited-edition-39418997c59b007e55a6910730e86a13.png"},46832:function(e,t,i){t.Z=i.p+"assets/images/participation-ef071b36def553d1743fe4fd3d5e6e3b.png"},83091:function(e,t,i){t.Z=i.p+"assets/images/publish-e42deb1f4ce69dee0e0ffb7359ff87ee.png"},73111:function(e,t,i){t.Z=i.p+"assets/images/select-item-1a73007675ee3aeef6b6879b49efb2db.png"},11601:function(e,t,i){t.Z=i.p+"assets/images/sell-item-22a7dbfac222f829bae36d7574fdbdf8.png"},28287:function(e,t,i){t.Z=i.p+"assets/images/tiered-select-count-9a495e8ac7d950df5900dd30bfa4665c.png"},42288:function(e,t,i){t.Z=i.p+"assets/images/tiered-select-tiers-1-6d4f0182017f3b48193c1dc7ef0d6e98.png"},42404:function(e,t,i){t.Z=i.p+"assets/images/tiered-select-tiers-2-a4d4e257db2ad2cc059143a2ef59e948.png"},92946:function(e,t,i){t.Z=i.p+"assets/images/select-type-eed0362a681bc3b398586d72a849c40c.png"}}]);