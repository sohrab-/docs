"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6298],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49128:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var a=n(83117),r=(n(67294),n(3905));const o={sidebar_label:"How to set up a CLI Wallet"},l="Setting up a Solana CLI Wallet",i={unversionedId:"guides/cli-wallet",id:"guides/cli-wallet",title:"Setting up a Solana CLI Wallet",description:"Setting up a CLI wallet is quick! To start, download the Solana Tool Suite. This guide will assume that you are using the Solana CLI commands:",source:"@site/docs/04-guides/01-cli-wallet.md",sourceDirName:"04-guides",slug:"/guides/cli-wallet",permalink:"/guides/cli-wallet",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/04-guides/01-cli-wallet.md",tags:[],version:"current",lastUpdatedAt:1683147496,formattedLastUpdatedAt:"May 3, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"How to set up a CLI Wallet"},sidebar:"sidebar",previous:{title:"How to set up a Minting UI",permalink:"/guides/candy-machine-ui"},next:{title:"How to get Your Mint List",permalink:"/guides/mint-lists"}},s={},u=[{value:"Setting up a devnet wallet (for testing)",id:"setting-up-a-devnet-wallet-for-testing",level:3},{value:"Funding your devnet wallet",id:"funding-your-devnet-wallet",level:3},{value:"Switching to Mainnet Beta for Production",id:"switching-to-mainnet-beta-for-production",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-solana-cli-wallet"},"Setting up a Solana CLI Wallet"),(0,r.kt)("p",null,"Setting up a CLI wallet is quick! To start, download the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"Solana Tool Suite"),". This guide will assume that you are using the Solana CLI commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana --version\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"output:")," ",(0,r.kt)("em",{parentName:"p"},"solana-cli 1.10.29"))),(0,r.kt)("h3",{id:"setting-up-a-devnet-wallet-for-testing"},"Setting up a devnet wallet (for testing)"),(0,r.kt)("p",null,"The steps described here will create a wallet to be used in the Solana ",(0,r.kt)("inlineCode",{parentName:"p"},"devnet")," environment. In normal circumstances you would redact your mnemonic, store it somewhere safe and take advantage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"--outfile")," flag."),(0,r.kt)("p",null,"To create a new wallet, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"solana-keygen")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana-keygen new --outfile ~/.config/solana/devnet.json\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Generating a new keypair\n\nFor added security, enter a BIP39 passphrase\n\nNOTE! This passphrase improves security of the recovery seed phrase NOT the\nkeypair file itself, which is stored as insecure plain text\n\nBIP39 Passphrase (empty for none):\n\nWrote new keypair to /Users/febo/.config/solana/devnet.json\n=======================================================================\npubkey: 6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ\n=======================================================================\nSave this seed phrase and your BIP39 passphrase to recover your new keypair:\n## REDACTED ##\n=======================================================================\n")))),(0,r.kt)("p",null,"The next step is to make this our default keypair:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --keypair ~/.config/solana/devnet.json\n")),(0,r.kt)("p",null,"and make sure we are on the ",(0,r.kt)("inlineCode",{parentName:"p"},"devnet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --url https://metaplex.devnet.rpcpool.com/\n")),(0,r.kt)("p",null,"If all the above steps are successful, your configuration be similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana config get\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Config File: ~/.config/solana/cli/config.yml\nRPC URL: https://metaplex.devnet.rpcpool.com/\nWebSocket URL: wss://metaplex.devnet.rpcpool.com/ (computed)\nKeypair Path: ~/.config/solana/devnet.json\nCommitment: confirmed\n")))),(0,r.kt)("h3",{id:"funding-your-devnet-wallet"},"Funding your devnet wallet"),(0,r.kt)("p",null,"In order to add SOL to your ",(0,r.kt)("inlineCode",{parentName:"p"},"devnet")," wallet, you can request funds from a faucet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana airdrop 2\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Requesting airdrop of 2 SOL\n\nSignature: 41ZEZqpyNMLUy3kQahWSy349PeDz3Q82dNDHKiA7QcsrAzHs3f7YiDEZWjnFi434DoiiDiDkazkBRycRnctx1m6e\n\n2 SOL\n")))),(0,r.kt)("p",null,"If the command is successful, you will see the updated balance at the end. Make sure you are entering the airdrop amount that is within the airdrop limit. Currently, the maximum airdrop request limit is ",(0,r.kt)("strong",{parentName:"p"},"2 SOL")," and there is a daily total limit of ",(0,r.kt)("strong",{parentName:"p"},"24 SOL"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"solana airdrop")," command is sometimes unreliable. If the command doesn't work, you can use the airdrop tool at ",(0,r.kt)("a",{parentName:"p",href:"https://solfaucet.com"},"https://solfaucet.com"),".")),(0,r.kt)("h3",{id:"switching-to-mainnet-beta-for-production"},"Switching to Mainnet Beta for Production"),(0,r.kt)("p",null,"To switch to the Mainnet Beta cluster, you can either make a new wallet or continue to use the same keypair. This guide will be using the same keypair."),(0,r.kt)("p",null,"The only step would be to set the cluster to a Mainnet Beta RPC: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --url https://api.metaplex.solana.com/\n")),(0,r.kt)("p",null,"And that's it!"),(0,r.kt)("p",null,"You will have to send ",(0,r.kt)("strong",{parentName:"p"},"real")," SOL to your address now. You can buy SOL from a centralized exchange such as Binance, Coinbase, Crypto.com, and others."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you send your SOL to the correct address! There is no ",(0,r.kt)("inlineCode",{parentName:"p"},"undo")," button with cryptocurrency.")),(0,r.kt)("p",null,"You can check your wallet address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana address\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"output:")," ",(0,r.kt)("em",{parentName:"p"},"6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ"))),(0,r.kt)("p",null,"and your balance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana balance\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"output:")," ",(0,r.kt)("em",{parentName:"p"},"2 SOL"))))}c.isMDXComponent=!0}}]);