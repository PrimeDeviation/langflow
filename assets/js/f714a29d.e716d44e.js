"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[7399],{9047:(e,n,t)=>{t.d(n,{Z:()=>V});var o=t(7294),i=t(5893);function s(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=o.Children.toArray(e),t=n.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=n.filter((e=>e!==t)),r=t?.props.children;return{mdxAdmonitionTitle:r,rest:s.length>0?(0,i.jsx)(i.Fragment,{children:s}):null}}(e.children),s=e.title??n;return{...e,...s&&{title:s},children:t}}var r=t(6905),a=t(5999),c=t(5281);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:o}=e;return(0,i.jsx)("div",{className:(0,r.Z)(c.k.common.admonition,c.k.common.admonitionType(n),l.admonition,t),children:o})}function h(e){let{icon:n,title:t}=e;return(0,i.jsxs)("div",{className:l.admonitionHeading,children:[(0,i.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function u(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:l.admonitionContent,children:n}):null}function g(e){const{type:n,icon:t,title:o,children:s,className:r}=e;return(0,i.jsxs)(d,{type:n,className:r,children:[(0,i.jsx)(h,{title:o,icon:t}),(0,i.jsx)(u,{children:s})]})}function x(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const m={icon:(0,i.jsx)(x,{}),title:(0,i.jsx)(a.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(e){return(0,i.jsx)(g,{...m,...e,className:(0,r.Z)("alert alert--secondary",e.className),children:e.children})}function p(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const f={icon:(0,i.jsx)(p,{}),title:(0,i.jsx)(a.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,i.jsx)(g,{...f,...e,className:(0,r.Z)("alert alert--success",e.className),children:e.children})}function S(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const w={icon:(0,i.jsx)(S,{}),title:(0,i.jsx)(a.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function A(e){return(0,i.jsx)(g,{...w,...e,className:(0,r.Z)("alert alert--info",e.className),children:e.children})}function b(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const L={icon:(0,i.jsx)(b,{}),title:(0,i.jsx)(a.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function y(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const T={icon:(0,i.jsx)(y,{}),title:(0,i.jsx)(a.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const C={icon:(0,i.jsx)(b,{}),title:(0,i.jsx)(a.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const k={...{note:j,tip:v,info:A,warning:function(e){return(0,i.jsx)(g,{...L,...e,className:(0,r.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(g,{...T,...e,className:(0,r.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(j,{title:"secondary",...e}),important:e=>(0,i.jsx)(A,{title:"important",...e}),success:e=>(0,i.jsx)(v,{title:"success",...e}),caution:function(e){return(0,i.jsx)(g,{...C,...e,className:(0,r.Z)("alert alert--warning",e.className),children:e.children})}}};var N=t(5108);function V(e){const n=s(e),t=(o=n.type,k[o]||(N.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),k.info));var o;return(0,i.jsx)(t,{...n})}},9467:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});t(7294);var o=t(5893),i=t(1151),s=t(9047);const r={},a="Agents",c={id:"components/agents",title:"Agents",description:"We appreciate your understanding as we polish our documentation \u2013 it may contain some rough edges. Share your feedback or report issues to help us improve! \ud83d\udee0\ufe0f\ud83d\udcdd",source:"@site/docs/components/agents.mdx",sourceDirName:"components",slug:"/components/agents",permalink:"/components/agents",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Custom Components",permalink:"/guidelines/custom-component"},next:{title:"Chains",permalink:"/components/chains"}},l={},d=[{value:"AgentInitializer",id:"agentinitializer",level:3},{value:"CSVAgent",id:"csvagent",level:3},{value:"JSONAgent",id:"jsonagent",level:3},{value:"SQLAgent",id:"sqlagent",level:3},{value:"VectorStoreAgent",id:"vectorstoreagent",level:3},{value:"VectorStoreRouterAgent",id:"vectorstorerouteragent",level:3},{value:"ZeroShotAgent",id:"zeroshotagent",level:3}];function h(e){const n=Object.assign({h1:"h1",p:"p",hr:"hr",h3:"h3",code:"code",strong:"strong",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"agents",children:"Agents"}),"\n",(0,o.jsx)(s.Z,{type:"caution",icon:"\ud83d\udea7",title:"ZONE UNDER CONSTRUCTION",children:(0,o.jsx)("p",{children:(0,o.jsx)(n.p,{children:"We appreciate your understanding as we polish our documentation \u2013 it may contain some rough edges. Share your feedback or report issues to help us improve! \ud83d\udee0\ufe0f\ud83d\udcdd"})})}),"\n",(0,o.jsx)(n.p,{children:"Agents are components that use reasoning to make decisions and take actions, designed to autonomously perform tasks or provide services with some degree of \u201cfreedom\u201d (or agency). They combine the power of LLM chaining processes with access to external tools such as APIs to interact with applications and accomplish tasks."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"agentinitializer",children:"AgentInitializer"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"AgentInitializer"})," component is a quick way to construct a zero-shot agent from a language model (LLM) and tools."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Params"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"LLM:"})," Language Model to use in the ",(0,o.jsx)(n.code,{children:"AgentInitializer"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Memory:"})," Used to add memory functionality to an agent. It allows the agent to store and retrieve information from previous conversations."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Tools:"})," Tools that the agent will have access to."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Agent:"})," The type of agent to be instantiated. Current supported: ",(0,o.jsx)(n.code,{children:"zero-shot-react-description"}),", ",(0,o.jsx)(n.code,{children:"react-docstore"}),", ",(0,o.jsx)(n.code,{children:"self-ask-with-search,conversational-react-description"})," and ",(0,o.jsx)(n.code,{children:"openai-functions"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"csvagent",children:"CSVAgent"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"CSVAgent"})," is an agent that is designed to interact with CSV (Comma-Separated Values) files. CSV files are a common format for storing tabular data, where each row represents a record and each column represents a field. The CSV agent can perform various tasks, such as reading and writing CSV files, processing the data, and generating tables. It can extract information from the CSV file, manipulate the data, and perform operations like filtering, sorting, and aggregating."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Params"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"LLM:"})," Language Model to use in the ",(0,o.jsx)(n.code,{children:"CSVAgent"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"path:"})," The file path to the CSV data."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"jsonagent",children:"JSONAgent"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"JSONAgent"})," deals with JSON (JavaScript Object Notation) data. Similar to the CSVAgent, it works with a language model (LLM) and a toolkit designed for JSON manipulation. This agent can iteratively explore a JSON blob to find the information needed to answer the user's question. It can list keys, get values, and navigate through the structure of the JSON object."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Params"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"LLM:"})," Language Model to use in the ",(0,o.jsx)(n.code,{children:"JSONAgent"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Toolkit:"})," Toolkit that the agent will have access to."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"sqlagent",children:"SQLAgent"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"SQLAgent"})," is an agent that is designed to interact with SQL databases. It is capable of performing various tasks, such as querying the database, retrieving data, and executing SQL statements. The agent can provide information about the structure of the database, including the tables and their schemas. It can also perform operations like inserting, updating, and deleting data in the database. The SQL agent is a helpful tool for managing and working with SQL databases efficiently."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Params"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"LLM:"})," Language Model to use in the ",(0,o.jsx)(n.code,{children:"SQLAgent"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"database_uri:"})," A string representing the connection URI for the SQL database."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"vectorstoreagent",children:"VectorStoreAgent"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VectorStoreAgent"})," is designed to work with a vector store \u2013 a data structure used for storing and querying vector-based representations of data. The ",(0,o.jsx)(n.code,{children:"VectorStoreAgent"})," can query the vector store to find relevant information based on user inputs."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Params"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"LLM:"})," Language Model to use in the ",(0,o.jsx)(n.code,{children:"VectorStoreAgent"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Vector Store Info:"})," ",(0,o.jsx)(n.code,{children:"VectorStoreInfo"})," to use in the ",(0,o.jsx)(n.code,{children:"VectorStoreAgent"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"vectorstorerouteragent",children:"VectorStoreRouterAgent"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VectorStoreRouterAgent"})," is a custom agent that takes a vector store router as input. It is typically used when there\u2019s a need to retrieve information from multiple vector stores. These can be connected through a ",(0,o.jsx)(n.code,{children:"VectorStoreRouterToolkit"})," and sent over to the ",(0,o.jsx)(n.code,{children:"VectorStoreRouterAgent"}),". An agent configured with multiple vector stores can route queries to the appropriate store based on the context."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Params"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"LLM:"})," Language Model to use in the ",(0,o.jsx)(n.code,{children:"VectorStoreRouterAgent"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Vector Store Router Toolkit:"})," ",(0,o.jsx)(n.code,{children:"VectorStoreRouterToolkit"})," to use in the ",(0,o.jsx)(n.code,{children:"VectorStoreRouterAgent"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"zeroshotagent",children:"ZeroShotAgent"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ZeroShotAgent"})," is an agent that uses the ReAct framework to determine which tool to use based solely on the tool's description. It can be configured with any number of tools and requires a description for each tool. The agent is designed to be the most general-purpose action agent. It uses an ",(0,o.jsx)(n.code,{children:"LLMChain"})," to determine which actions to take and in what order."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Params"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Allowed Tools:"})," Tools that the agent will have access to."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"LLM Chain:"})," LLM Chain to be used by the agent."]}),"\n"]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(h,e)})):h(e)}},1151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>s});var o=t(7294);const i=o.createContext({});function s(e){const n=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||r:s(e),o.createElement(i.Provider,{value:a},n)}}}]);