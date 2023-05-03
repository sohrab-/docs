"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7458],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4635:function(e,t,n){n.r(t),n.d(t,{assets:function(){return E},contentTitle:function(){return S},default:function(){return V},frontMatter:function(){return I},metadata:function(){return O},toc:function(){return P}});var a=n(83117),r=n(67294),o=n(3905),l=n(34334),i=n(12466),s=n(76775),u=n(91980),c=n(67392),p=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:a}),[c,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??c;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),d(e)}),[u,d,o]),tabValues:o}}var g=n(72389),k="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",y,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function C(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}var T="tabItem_Ymn6";function x(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(T,a),hidden:n},t)}const I={},S="Installation",O={unversionedId:"developer-tools/sugar/overview/installation",id:"developer-tools/sugar/overview/installation",title:"Installation",description:"To install, either download a binary, install from Crates.io, or install from source. Non-technical users will typically find using a pre-built binary to be simpler.",source:"@site/docs/03-developer-tools/00-sugar/01-overview/01-installation.md",sourceDirName:"03-developer-tools/00-sugar/01-overview",slug:"/developer-tools/sugar/overview/installation",permalink:"/developer-tools/sugar/overview/installation",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/01-overview/01-installation.md",tags:[],version:"current",lastUpdatedAt:1683147496,formattedLastUpdatedAt:"May 3, 2023",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/developer-tools/sugar/overview/introduction"},next:{title:"Quick Start",permalink:"/developer-tools/sugar/overview/quick-start"}},E={},P=[{value:"Recommended Installation Method",id:"recommended-installation-method",level:2},{value:"Binaries",id:"binaries",level:2},{value:"Advanced Installation Methods",id:"advanced-installation-methods",level:2},{value:"Crates.io",id:"cratesio",level:3},{value:"Build From Source",id:"build-from-source",level:3}],A={toc:P};function V(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},A,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install, either download a binary, install from Crates.io, or install from source. Non-technical users will typically find using a pre-built binary to be simpler."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When installing from crates.io or from source on Ubuntu or WSL (Windows Subsystem for Linux) you may need to install some additional dependencies:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install libudev-dev pkg-config unzip\n"))),(0,o.kt)("h2",{id:"recommended-installation-method"},"Recommended Installation Method"),(0,o.kt)(C,{mdxType:"Tabs"},(0,o.kt)(x,{value:"unix",label:"MacOS, Linux, WSL",mdxType:"TabItem"},(0,o.kt)("p",null,"Run this install script in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sSf https://sugar.metaplex.com/install.sh)\n")),(0,o.kt)("p",null,"This will install the binary to your machine and add it to your PATH. You will be asked which version you want to use. V1.x is for Candy Machine v2, V2.x is for Candy Machine v3. We recommend to use the latest version.")),(0,o.kt)(x,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the Winstaller executable from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/winstaller/releases/latest/download/winstaller.exe"},"here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try to run the binary by double-clicking on it. If you get a pop-up message warning about an untrusted binary try clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"More Info")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"Run Anyway"),". If you do not have this option, follow steps 3 - 6. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Right-click on the executable file and go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Properties"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Properties.PNG",src:n(21337).Z+"#radius#shadow",width:"1295",height:"799"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you trust the Metaplex developer team, check the ",(0,o.kt)("inlineCode",{parentName:"p"},"Unblock")," button as show in the image below. This will allow you to run this binary on your computer since Microsoft does not trust it automatically."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Unblock.PNG",src:n(93450).Z+"#radius#shadow",width:"497",height:"653"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Apply")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Ok"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Double-click the executable file, and it will open a terminal and begin to install Sugar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If everything completed successfully you will get a message saying so."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"installed.PNG",src:n(7532).Z+"#radius#shadow",width:"1097",height:"630"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try running ",(0,o.kt)("inlineCode",{parentName:"p"},"sugar")," in your terminal and see if it prints a list of commands you can use. If so you're good to go!")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Report any errors to the ",(0,o.kt)("inlineCode",{parentName:"p"},"#sugar")," channel on the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/metaplex"},"Metaplex Discord"),"."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This installer binary downloads the latest Sugar binary version, unzips it and copies it to a folder in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment. If you have Rust, the binary will be copied to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin"),", otherwise it creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"SugarCLI")," folder in your ",(0,o.kt)("inlineCode",{parentName:"p"},"%LOCALAPPDATA%")," directory. Once the binary is at that location, your OS will find it automatically, and you will be able to run the sugar binary from any directory in your file system as a normal command-line application.")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The modifications to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," variable may not take effect until the terminal is restarted. Follow the instructions of the installation script to see whether the terminal needs to be restarted or not.")),(0,o.kt)("h2",{id:"binaries"},"Binaries"),(0,o.kt)("p",null,"Binaries for the supported OS can be found at:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/sugar/releases"},"Sugar Releases"))),(0,o.kt)("h2",{id:"advanced-installation-methods"},"Advanced Installation Methods"),(0,o.kt)("h3",{id:"cratesio"},"Crates.io"),(0,o.kt)("p",null,"In order to install sugar from Crates.io, you will need to have ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust")," installed in your system. It is recommended to install Rust using ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("p",null,"After the installation completes, running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustc --version\n")),(0,o.kt)("p",null,"should print the version of the Rust compiler. If the command fails, check if the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin")," directory is in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable."),(0,o.kt)("p",null,"The next step is to install Sugar from Crates.io:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install sugar-cli\n")),(0,o.kt)("p",null,"This will download the Sugar code from Crates.io and automatically install it for you."),(0,o.kt)("h3",{id:"build-from-source"},"Build From Source"),(0,o.kt)("p",null,"In order to build Sugar from the source code, you will need to have ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust")," installed in your system. It is recommended to install Rust using ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("p",null,"After the installation completes, running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rustc --version\n")),(0,o.kt)("p",null,"should print the version of the Rust compiler. If the command fails, check if the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin")," directory is in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable."),(0,o.kt)("p",null,"The next step is to clone Sugar repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/metaplex-foundation/sugar.git\n")),(0,o.kt)("p",null,"This will create a directory ",(0,o.kt)("inlineCode",{parentName:"p"},"sugar")," with the latest code from the repository. Switch to the newly created directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd sugar\n")),(0,o.kt)("p",null,"Then, you can build and install the binary to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install --path ./\n")),(0,o.kt)("p",null,"As long as ",(0,o.kt)("inlineCode",{parentName:"p"},"./cargo/bin")," is in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable, you will be able to execute ",(0,o.kt)("inlineCode",{parentName:"p"},"sugar")," from any directory in your file system."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," You need to execute ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo install")," from Sugar source code root directory ","\u2014"," the directory where the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," is located.")))}V.isMDXComponent=!0},21337:function(e,t,n){t.Z=n.p+"assets/images/Properties-a728fa4422df37b3700247294874ce06.png"},93450:function(e,t,n){t.Z=n.p+"assets/images/Unblock-bc100bf8d7193682c0a75fa01418d07e.png"},7532:function(e,t,n){t.Z=n.p+"assets/images/installed-2cc250e376836b86f47ed98ab4aca7d2.png"}}]);