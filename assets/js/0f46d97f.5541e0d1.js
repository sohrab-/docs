"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7990],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23550:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=t(83117),o=(t(67294),t(3905));const a={},i="Working with Sugar",c={unversionedId:"developer-tools/sugar/guides/working-with-sugar",id:"developer-tools/sugar/guides/working-with-sugar",title:"Working with Sugar",description:"Sugar Tutorial",source:"@site/docs/03-developer-tools/00-sugar/03-guides/02-working-with-sugar.md",sourceDirName:"03-developer-tools/00-sugar/03-guides",slug:"/developer-tools/sugar/guides/working-with-sugar",permalink:"/developer-tools/sugar/guides/working-with-sugar",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/03-guides/02-working-with-sugar.md",tags:[],version:"current",lastUpdatedAt:1683147496,formattedLastUpdatedAt:"May 3, 2023",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Preparing your Assets",permalink:"/developer-tools/sugar/guides/preparing-assets"},next:{title:"Configuration",permalink:"/developer-tools/sugar/guides/configuration"}},s={},l=[],u={toc:l};function p(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-sugar"},"Working with Sugar"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sugar Tutorial",src:t(49289).Z+"#radius#shadow",width:"1446",height:"864"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/26067212/165967904-0a551b6e-dc7e-4d8c-9348-3093e0d93883.mp4"},"Full Sugar Video Tutorial")),(0,o.kt)("p",null,"Sugar contains a collection of commands for creating and managing Metaplex Candy Machines. The complete list of commands can be viewed by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sugar\n")),(0,o.kt)("p",null,"This will display a list of commands and their short description:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USAGE:\n    sugar [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n    -h, --help                     Print help information\n    -l, --log-level <LOG_LEVEL>    Log level: trace, debug, info, warn, error, off\n    -V, --version                  Print version information\n\nSUBCOMMANDS:\n    bundlr            Interact with the bundlr network\n    collection        Manage the collection on the candy machine\n    create-config     Interactive process to create the config file\n    deploy            Deploy cache items into candy machine config on-chain\n    freeze            Commands for the Candy Machine Freeze feature\n    hash              Generate hash of cache file for hidden settings\n    help              Print this message or the help of the given subcommand(s)\n    launch            Create a candy machine deployment from assets\n    mint              Mint one NFT from candy machine\n    reveal            Reveal the NFTs from a hidden settings candy machine\n    show              Show the on-chain config of an existing candy machine\n    sign              Sign one or all NFTs from candy machine\n    thaw              Thaw a NFT or all NFTs in a candy machine\n    unfreeze-funds    Unlock treasury funds after freeze is turned off or expires\n    update            Update the candy machine config on-chain\n    upload            Upload assets to storage and creates the cache config\n    validate          Validate JSON metadata files\n    verify            Verify uploaded data\n    withdraw          Withdraw funds from candy machine account closing it\n")),(0,o.kt)("p",null,"To get more information about a particular command (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy"),"), use the ",(0,o.kt)("inlineCode",{parentName:"p"},"help")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sugar help deploy\n")),(0,o.kt)("p",null,"The list of options together with a short description will be displayed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Deploy cache items into candy machine config on-chain\n\nUSAGE:\n    sugar deploy [OPTIONS]\n\nOPTIONS:\n    -c, --config <CONFIG>          Path to the config file, defaults to "config.json" [default:\n                                   config.json]\n        --cache <CACHE>            Path to the cache file, defaults to "cache.json" [default:\n                                   cache.json]\n    -h, --help                     Print help information\n    -k, --keypair <KEYPAIR>        Path to the keypair file, uses Sol config or defaults to\n                                   "~/.config/solana/id.json"\n    -l, --log-level <LOG_LEVEL>    Log level: trace, debug, info, warn, error, off\n    -r, --rpc-url <RPC_URL>        RPC Url\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," This guide assumes that you set up your RPC url and a keypair using Solana CLI config, as described in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.metaplex.com/developer-tools/sugar/overview/quick-start"},"Quick Start")," section above.")))}p.isMDXComponent=!0},49289:function(e,n,t){n.Z=t.p+"assets/images/Sugar-Tutorial-5ce27c9247f9b8992a7ad544124a9686.gif"}}]);