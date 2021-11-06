"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1932],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2552:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2,unlisted:!0},s="Features Overview",u={unversionedId:"overviews/features_overview",id:"overviews/features_overview",isDocsHomePage:!1,title:"Features Overview",description:"Setting up a Storefront",source:"@site/docs/overviews/features_overview.md",sourceDirName:"overviews",slug:"/overviews/features_overview",permalink:"/overviews/features_overview",editUrl:"https://github.com/metaplex/docs/tree/main/docs/overviews/features_overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,unlisted:!0},sidebar:"sidebar",previous:{title:"Why Metaplex?",permalink:"/overviews/metaplex_overview"},next:{title:"Metadata Overview",permalink:"/overviews/metadata_overview"}},p=[{value:"Setting up a Storefront",id:"setting-up-a-storefront",children:[]},{value:"(Coming soon) Instant Sale Overview",id:"coming-soon-instant-sale-overview",children:[]},{value:"Auction Overview",id:"auction-overview",children:[]},{value:"Fees",id:"fees",children:[]},{value:"Wallets",id:"wallets",children:[]},{value:"Supported NFTs",id:"supported-nfts",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"features-overview"},"Features Overview"),(0,o.kt)("h2",{id:"setting-up-a-storefront"},"Setting up a Storefront"),(0,o.kt)("p",null,"Before selling NFTs, you will need to have set up your storefront, which requires a basic understanding of development for most people. To set up your storefront, if you haven\u2019t already done so, checkout Metaplex Doc\u2019s ",(0,o.kt)("a",{parentName:"p",href:"https://docs.metaplex.com/create-store/introduction"},"Create a Store"),". If you are not technical, see the build-a-team channel in the Metaplex Discord. Personally, it\u2019s been a great resource for my own NFT projects. "),(0,o.kt)("p",null,"Update for developers: Metaplex is working on several updates to make development easier. To stay in the loop on these upcoming releases, checkout our announcements channel in the Metaplex ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/metaplex"},"Discord"),". "),(0,o.kt)("h1",{id:"selling-and-sharing-nfts-overview"},"Selling and Sharing NFTs Overview"),(0,o.kt)("p",null,"While setting up a storefront requires familiarity with development for most, running Auctions and Instant Sales do not."),(0,o.kt)("h2",{id:"coming-soon-instant-sale-overview"},"(Coming soon) Instant Sale Overview"),(0,o.kt)("p",null,"In an Instant Sale, buyers will buy your NFT for the advertised price. The concept of Instant Sale is often referred to as a fixed price sale on Shopify and other traditional eCommerce platforms\u2014they\u2019re basically the same thing. Instant Sales are a great way to get started that\u2019s more beginner friendly than auctions."),(0,o.kt)("p",null,"There are two players in an Instant Sale, the seller and buyers. The seller sets the NFT for a fixed price in Sol, and the buyer buys the NFT for that fixed price. "),(0,o.kt)("h2",{id:"auction-overview"},"Auction Overview"),(0,o.kt)("p",null,"Remember eBay auctions? Metaplex\u2019s style of auction is similar to eBay\u2019s and also referred to as an open or English style auction. "),(0,o.kt)("p",null,"There are two players in an Auction, the seller and bidders. The seller sets up an auction (a way to exchange goods for money) and bidders bid on the goods. Success looks like the seller making some SOL and the bidder winning a cool NFT from your branded NFT storefront. "),(0,o.kt)("h2",{id:"fees"},"Fees"),(0,o.kt)("p",null,"One advantage of Metaplex is that storefront owners only pay to use Solana\u2019s network, a super fast and cheap blockchain. Everytime you use Solana\u2019s Network through The Metaplex Protocol\u2019s Smart Contract, you\u2019ll pay a small fee of $0.30 to $3.00. Our team is also working to make this fee even lower by streamlining processing power. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minting an NFT"),(0,o.kt)("li",{parentName:"ul"},"Selling an NFT through an Auction or Instant Sale ")),(0,o.kt)("h2",{id:"wallets"},"Wallets"),(0,o.kt)("p",null,"By connecting your wallet, you are able to create a storefront, mint NFTs, and sell NFTs\u2014basically do everything that requires use of the Solana Network. "),(0,o.kt)("p",null,"Likewise, sales from your NFTs are distributed into you Wallet, where you are able to withdrawal funds, etc. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/wallet-guide"},"Check out")," the Solana Wallet Guide. If your community is new to NFTs, it's recommended that you instruct them how to set up their wallet 5 days ahead of your NFT drop so that your community will be ready to go with their funds. "),(0,o.kt)("h2",{id:"supported-nfts"},"Supported NFTs"),(0,o.kt)("p",null,"Since an NFT can be anything, all file types are supported, including:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"File Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Extension"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Audio"),(0,o.kt)("td",{parentName:"tr",align:null},".mp3, .flac, .wav")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Img"),(0,o.kt)("td",{parentName:"tr",align:null},".png, .jpg, .gif")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Movie"),(0,o.kt)("td",{parentName:"tr",align:null},".mp4, .mov, .webm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VR"),(0,o.kt)("td",{parentName:"tr",align:null},".gib")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HTML"),(0,o.kt)("td",{parentName:"tr",align:null},".html")))),(0,o.kt)("p",null,"Max 2GB file. Limit doe to browser memory constraints. "),(0,o.kt)("p",null,"Keep in mind that the Metaplex tool does not support previews yet for the vast majority of file types. "),(0,o.kt)("h1",{id:"helpful-tips-for-you-and-your-community"},"Helpful Tips for you and your Community"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If your community is new to NFTs, please instruct you community to set up a Solana wallet one week before your NFTs launch as the KYC process and transferring funds may take a number of business days. "),(0,o.kt)("li",{parentName:"ul"},"Metaplex does offer an FTX on-ramp. Users can buy Solana from FTX, a popular crypto currency exchange. "),(0,o.kt)("li",{parentName:"ul"},"For auctions, the bidders bid is placed in escrow until the auction ends. If the bidder wishes to retrieve their funds from the auction, they need to cancel their bid. This is true for any bid, including if it is not the currently highest bid. "),(0,o.kt)("li",{parentName:"ul"},"Currently our platform is experiencing some performance issues as we scale. Our engineering team is working on it around the clock. Thanks for your patience. Fixing this issue is our priority.")))}d.isMDXComponent=!0}}]);