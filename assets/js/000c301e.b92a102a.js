"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2764],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71959:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],c={sidebar_label:"10. Withdraw Funds"},l="Withdraw Funds",s={unversionedId:"create-candy/withdraw",id:"create-candy/withdraw",title:"Withdraw Funds",description:"Candy machines rely on a special account called the config account. This account stores the big list of pointers to assets that will be minted.",source:"@site/docs/create-candy/11-withdraw.md",sourceDirName:"create-candy",slug:"/create-candy/withdraw",permalink:"/create-candy/withdraw",editUrl:"https://github.com/metaplex/docs/tree/main/docs/create-candy/11-withdraw.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"10. Withdraw Funds"},sidebar:"sidebar",previous:{title:"9. Operate Candy Machine Drop",permalink:"/create-candy/operate-cm-drop"},next:{title:"Gumdrop",permalink:"/airdrops/create-gumdrop"}},u=[{value:"Example",id:"example",children:[{value:"NOTE",id:"note",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"withdraw-funds"},"Withdraw Funds"),(0,i.kt)("p",null,"Candy machines rely on a special account called the config account. This account stores the big list of pointers to assets that will be minted.\nThis data is useless after the candy machine has been fully minted. You can drain this account by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"withdraw")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Usage: candy-machine-cli withdraw [options]\n\nOptions:\n  -e, --env <string>              Solana cluster env name (default: "devnet")\n  -k, --keypair <path>            Solana wallet location (default: "--keypair\n                                  not provided")\n  -l, --log-level <string>        log level\n  -c, --cache-name <string>       Cache file name (default: "temp")\n  -d ,--dry                       Show Candy Machine withdraw amount without\n                                  withdrawing.\n  -ch, --charity <string>         Which charity? (default: "")\n  -cp, --charityPercent <string>  Which percent to charity? (default: "0")\n  -r, --rpc-url <string>          custom rpc url since this is a heavy command\n  -h, --help                      display help for command\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null," To use this command, make sure you have the keypair that you made the candy machine with. Pass that keypair in as the ",(0,i.kt)("inlineCode",{parentName:"p"},"-k")," argument. This command will find all the candy machine config accounts made by that keypair and attempt to drain them.\nIts a good idea to first run this with ",(0,i.kt)("inlineCode",{parentName:"p"},"-d")," to see how much you have locked up in those accounts and to make sure you arent draining an account you need. You can also donate a percentage of this money to charity. ",(0,i.kt)("strong",{parentName:"p"},"BE CAREFUL!")," This will actually take money out of the keypair you pass in and transfer it to the address you set as the ",(0,i.kt)("inlineCode",{parentName:"p"},"--charity")," option."),(0,i.kt)("h3",{id:"note"},"NOTE"),(0,i.kt)("p",null," Your Keypair must have a little sol in it to pay the transaction fee to withdraw."),(0,i.kt)("p",null,"If it all works like it should, you should see something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Total Number of Candy Machine Config Accounts to drain 50.03644952 SOL locked up in configs\nWARNING: This command will drain ALL of the Candy Machine config accounts that are owned by your current KeyPair, this will break your Candy Machine if its still in use.\n...\nHSLcb56y2wQEdaTcNoybcPJRrXuxRe3AnAXhpvJmZkMo has been withdrawn. \n...\nCongratulations, 1 config accounts have been successfully drained.\nNow you kinda rich, please consider supporting Open Source developers.\n")))}p.isMDXComponent=!0}}]);