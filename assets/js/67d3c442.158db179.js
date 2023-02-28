"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[135],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},15786:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var a=t(83117),o=(t(67294),t(3905));const r={},i="Introduction",l={unversionedId:"deprecated/fair-launch/introduction",id:"deprecated/fair-launch/introduction",title:"Introduction",description:"Fair launch is a protocol by which minters/prospective buyers can bid on the price of an NFT they are willing to pay in a range that is determined by the creator.",source:"@site/docs/06-deprecated/03-fair-launch/introduction.md",sourceDirName:"06-deprecated/03-fair-launch",slug:"/deprecated/fair-launch/introduction",permalink:"/deprecated/fair-launch/introduction",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/03-fair-launch/introduction.md",tags:[],version:"current",lastUpdatedAt:1677613669,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{},sidebar:"sidebar",previous:{title:"Candy Machine v2",permalink:"/deprecated/candy-machine-v2/"},next:{title:"1. Create Fair Launch",permalink:"/deprecated/fair-launch/create-fair-launch"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Developer Tooling Required",id:"developer-tooling-required",level:3},{value:"The Fair Launch Command Line Tool",id:"the-fair-launch-command-line-tool",level:3},{value:"Solana Tooling Required",id:"solana-tooling-required",level:3},{value:"devnet for the win",id:"devnet-for-the-win",level:4},{value:"Create devnet wallet (for testing)",id:"create-devnet-wallet-for-testing",level:4},{value:"Fund devnet wallet",id:"fund-devnet-wallet",level:4}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Fair launch is a protocol by which minters/prospective buyers can bid on the price of an NFT they are willing to pay in a range that is determined by the creator."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The Fair Launch Protocol is being deprecated and will be receiving no updates/support moving forward.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before starting this journey, you'll need to install and understand how to operate a handful of developer tools."),(0,o.kt)("h3",{id:"developer-tooling-required"},"Developer Tooling Required"),(0,o.kt)("p",null,"Ensure you have recent versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"git"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"node"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},(0,o.kt)("inlineCode",{parentName:"a"},"git")," Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},(0,o.kt)("inlineCode",{parentName:"a"},"node")," Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/lang/en/docs/install"},(0,o.kt)("inlineCode",{parentName:"a"},"yarn")," Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-node#installation"},(0,o.kt)("inlineCode",{parentName:"a"},"ts-node")," Installation"))),(0,o.kt)("p",null,"We recommend confirming these tools are working before proceeding further. Some sensible tests are running the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git version\ngit version 2.31.1\n\n$ node --version\nv14.17.0\n\n$ yarn --version\n1.22.11\n\n$ ts-node --version\nv10.2.1\n")),(0,o.kt)("p",null,"The specific version numbers don't matter that much, but make sure you're running something recent. The more important thing is confirming these tools are installed and on your ",(0,o.kt)("a",{parentName:"p",href:"https://janelbrandon.medium.com/understanding-the-path-variable-6eae0936e976"},"system PATH")," correctly."),(0,o.kt)("h3",{id:"the-fair-launch-command-line-tool"},"The Fair Launch Command Line Tool"),(0,o.kt)("p",null,"Creating and controlling a Fair Launch is typically done through the Metaplex command line tool, currently distributed as source code in a GitHub repository."),(0,o.kt)("p",null,"You can clone this repository anywhere you like, but the recommended practice is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/metaplex-foundation/deprecated-clis.git ~/metaplex-foundation/deprecated-clis\n")),(0,o.kt)("p",null,"If you use a different location, you'll need to adjust for it in subsequent instructions."),(0,o.kt)("p",null,"You also need to install the project's node/npm dependencies. The recommended way of doing this is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yarn install --cwd ~/metaplex-foundation/deprecated-clis/\n")),(0,o.kt)("p",null,'Future versions of this tooling will be "npx runnable". For now though, ',(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," is recommended for most users."),(0,o.kt)("p",null,"After ensuring ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," is installed and cloning the repo run the following commands to confirm the command line tool is operating correctly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ts-node ~/metaplex-foundation/deprecated-clis/src/candy-machine-cli.ts --version\n0.0.2\n")),(0,o.kt)("h3",{id:"solana-tooling-required"},"Solana Tooling Required"),(0,o.kt)("p",null,"The Fair Launch was built by Metaplex (and Solana) to operate on the Solana blockchain."),(0,o.kt)("p",null,"To work with it effectively you will need to understand tools and practices from that ecosystem."),(0,o.kt)("p",null,"To get started, we recommend you begin by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reading the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.solana.com/cli"},"Solana Command-line Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"Installing the Solana Command-line Tools")),(0,o.kt)("li",{parentName:"ul"},"And practice with the examples they provide in their documents.")),(0,o.kt)("h4",{id:"devnet-for-the-win"},"devnet for the win"),(0,o.kt)("p",null,"The Solana devnet serves as a playground for anyone who wants to take Solana for a test drive, as a user, token holder, app developer, or NFT publisher. NFT publishers should target devnet before going for mainnet."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We highly recommend making devnet your default Solana url\n",(0,o.kt)("inlineCode",{parentName:"p"},"solana config set --url https://api.devnet.solana.com"))),(0,o.kt)("h4",{id:"create-devnet-wallet-for-testing"},"Create devnet wallet (for testing)"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Read the fine manual\n",(0,o.kt)("inlineCode",{parentName:"p"},"solana-keygen help new"))),(0,o.kt)("p",null,"If you're me, you'll redact your mnemonic, store it somewhere safe and take advantage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--outfile")," flag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solana-keygen new --outfile ~/.config/solana/devnet.json\nGenerating a new keypair\n\nFor added security, enter a BIP39 passphrase\n\nNOTE! This passphrase improves security of the recovery seed phrase NOT the\nkeypair file itself, which is stored as insecure plain text\n\nBIP39 Passphrase (empty for none):\n\nWrote new keypair to ~/.config/solana/devnet.json\n=====================================================================\npubkey: 7zMqBkHowtpEC8iayNmCoT42T8dKjikzmTbZX5aNJbhJ\n=====================================================================\nSave this seed phrase and your BIP39 passphrase to recover your new keypair:\n# REDACTED\n=====================================================================\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We also recommend making devnet your default keypair:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"solana config set --keypair ~/.config/solana/devnet.json"))),(0,o.kt)("h4",{id:"fund-devnet-wallet"},"Fund devnet wallet"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To get started, read the fine manuals in the help system\n",(0,o.kt)("inlineCode",{parentName:"p"},"solana help config"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"solana help balance")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"solana help airdrop"))),(0,o.kt)("p",null,"If you're me, you're confirming your config right now to ensure you're on devnet, because we're going to rely on this to make subsequent command line invocations simpler from here forward. Here's how you check it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solana config get\nConfig File: ~/.config/solana/cli/config.yml\nRPC URL: https://api.devnet.solana.com\nWebSocket URL: wss://api.devnet.solana.com/ (computed)\nKeypair Path: ~/.config/solana/devnet.json\nCommitment: confirmed\n")),(0,o.kt)("p",null,"And here's how you can fund that wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solana balance # check your initial balance\n0 SOL\n\n$ solana airdrop 2 # request funds\nRequesting airdrop of 2 SOL\n\nSignature: 2s8FE29f2fAaAoWphbiyb5b4iSKYWznLG64w93Jzx8k2DAbFGsmbyXhe3Uix8f5X6m9HRL5c6WB58j2t2WrUh88d\n\n2 SOL\n\n$ solana balance # confirm your balance\n2 SOL\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"solana airdrop")," command is sometimes unreliable. If the command doesn't work, you can use the airdrop tool at ",(0,o.kt)("a",{parentName:"p",href:"https://solfaucet.com"},"https://solfaucet.com"),".")))}c.isMDXComponent=!0}}]);