"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2606],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27240:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(83117),r=(n(67294),n(3905));const o={sidebar_label:"How to burn NFTs"},i="How to burn NFTs",s={unversionedId:"guides/burn-nfts",id:"guides/burn-nfts",title:"How to burn NFTs",description:"What is burning?",source:"@site/docs/04-guides/03-burn-nfts.md",sourceDirName:"04-guides",slug:"/guides/burn-nfts",permalink:"/guides/burn-nfts",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/04-guides/03-burn-nfts.md",tags:[],version:"current",lastUpdatedAt:1683147496,formattedLastUpdatedAt:"May 3, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"How to burn NFTs"},sidebar:"sidebar",previous:{title:"How to Airdrop Tokens",permalink:"/guides/airdrops"},next:{title:"Community Guides",permalink:"/guides/community"}},l={},u=[{value:"What is burning?",id:"what-is-burning",level:2},{value:"How to burn...",id:"how-to-burn",level:2},{value:"... as a user?",id:"-as-a-user",level:3},{value:"... as a developer?",id:"-as-a-developer",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-burn-nfts"},"How to burn NFTs"),(0,r.kt)("h2",{id:"what-is-burning"},"What is burning?"),(0,r.kt)("p",null,"Completely destroying a Token/NFT is called burning. Burning will destroy the whole token and close the corresponding accounts. This results in"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The NFT being eliminated from the blockchain"),(0,r.kt)("li",{parentName:"ul"},"while the transactions around it obviously remain in the blockchain history"),(0,r.kt)("li",{parentName:"ul"},"giving you back some SOL that was reserved for account rent")),(0,r.kt)("h2",{id:"how-to-burn"},"How to burn..."),(0,r.kt)("p",null,"To burn NFTs different instructions can be run depending on which kind of NFTs you are using. You can not just burn it like a SPL token. This would not close all the token accounts required. Normal NFTs can be burned through the ",(0,r.kt)("a",{parentName:"p",href:"/programs/token-metadata/instructions#burn-a-nft"},(0,r.kt)("inlineCode",{parentName:"a"},"BurnNft")," instruction"),", Editions Prints require a different instruction called ",(0,r.kt)("a",{parentName:"p",href:"/programs/token-metadata/instructions#instructions#burn-an-edition-nft"},(0,r.kt)("inlineCode",{parentName:"a"},"BurnEditionNft")," instruction"),". There are multiple options for you how to burn NFTs as a user or programmatically as a developer:"),(0,r.kt)("h3",{id:"-as-a-user"},"... as a user?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Websites"),": there are web based tools created by the community which allow you to connect your wallet and burn NFTs like ",(0,r.kt)("a",{parentName:"li",href:"https://www.sol-incinerator.com/"},"sol-incinerator.com"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wallets"),": Some wallets like Solflare allow you to directly burn a NFT in your wallet by choosing the NFT and clicking something like ",(0,r.kt)("inlineCode",{parentName:"li"},"close")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://metaboss.rs/burn.html"},"Metaboss")),": Metaboss is a CLI tool primarily targeted at developers which has a ",(0,r.kt)("inlineCode",{parentName:"li"},"burn")," function. You can either burn a single NFT or burn a ",(0,r.kt)("a",{parentName:"li",href:"https://metaboss.rs/burn.html#burn-all"},"list of NFTs"),".\nAssumed that you have metaboss installed already you just have to run the following command where ",(0,r.kt)("inlineCode",{parentName:"li"},"<OWNER_KEYPAIR>")," is the path to your filesystem wallet and ",(0,r.kt)("inlineCode",{parentName:"li"},"<MINT_ACCOUNT>")," the NFTs address:\n",(0,r.kt)("inlineCode",{parentName:"li"},"metaboss burn one -k <OWNER_KEYPAIR> --account <MINT_ACCOUNT>"))),(0,r.kt)("h3",{id:"-as-a-developer"},"... as a developer?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/metaplex-foundation/js"},"JS SDK")),": The ",(0,r.kt)("inlineCode",{parentName:"li"},"@metaplex-foundation/js")," SDK has a ",(0,r.kt)("inlineCode",{parentName:"li"},"delete()")," function which can currently burn NFTs and soon also Editions. A simple NFT can burned like like shown in the following example. Depending on some conditions, like if it is part of a sized collection ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/js/blob/main/packages/js/src/plugins/nftModule/operations/deleteNft.ts#L45"},"some additional parameters")," have to be used. ",(0,r.kt)("inlineCode",{parentName:"li"},"delete()")," detects if it needs to burn a standard NFT or Edition Print.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Metaplex } from "@metaplex-foundation/js";\nimport { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";\nconst connection = new Connection(clusterApiUrl("devnet"));\nconst mx = Metaplex.make(connection);\nconst mintAddress = new PublicKey(address);\nconst parameters = {\n  mintAddress : mintAddress\n}\nawait mx.nfts().delete(parameters);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/metaplex-foundation/metaplex-program-library/tree/master/token-metadata/js"},"Auto-generated JavaScript library")),": There is also the auto-generated js package ",(0,r.kt)("inlineCode",{parentName:"li"},"@metaplex-foundation/mpl-token-metadata")," which contains the ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/metaplex-program-library/docs/token-metadata/index.html#createBurnNftInstruction"},"instructions")," to burn NFTs. This can technically be used, we advise to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"@metaplex-foundation/js")," package also called JS SDK where possible though."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://crates.io/crates/mpl-token-metadata"},"Token Metadata Rust crate")),": If you want to work with Rust the ",(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/mpl-token-metadata"},"mpl-token-metadata")," rust crate also contains the functions ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/mpl-token-metadata/latest/mpl_token_metadata/instruction/fn.burn_nft.html"},(0,r.kt)("inlineCode",{parentName:"a"},"burn_nft"))," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/mpl-token-metadata/latest/mpl_token_metadata/instruction/fn.burn_edition_nft.html"},(0,r.kt)("inlineCode",{parentName:"a"},"burn_edition_nft")),".")))}p.isMDXComponent=!0}}]);