"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8878],{4224:(e,n,t)=>{t.r(n),t.d(n,{CH:()=>h,assets:()=>l,chCodeConfig:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>a,toc:()=>d});t(7294);var o=t(5893),r=t(1151),s=t(9794);const c={},i="Integrating Langfuse with Langflow",a={id:"guides/langfuse_integration",title:"Integrating Langfuse with Langflow",description:"Introduction",source:"@site/docs/guides/langfuse_integration.mdx",sourceDirName:"guides",slug:"/guides/langfuse_integration",permalink:"/guides/langfuse_integration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Building chatbots with System Message",permalink:"/guides/chatprompttemplate_guide"},next:{title:"FlowRunner Component",permalink:"/examples/flow-runner"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Step-by-Step Instructions",id:"step-by-step-instructions",level:2},{value:"Step 1: Create a Langfuse account",id:"step-1-create-a-langfuse-account",level:3},{value:"Step 2: Set up Langfuse in Langflow",id:"step-2-set-up-langfuse-in-langflow",level:3}],h={annotations:s.ds,Code:s.EK},u={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"};function p(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",ol:"ol",li:"li",a:"a",strong:"strong",code:"code",hr:"hr"},(0,r.ah)(),e.components);return h||f("CH",!1),h.Code||f("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,o.jsx)(n.h1,{id:"integrating-langfuse-with-langflow",children:"Integrating Langfuse with Langflow"}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"Langfuse is an open-source tracing and analytics tool designed for LLM applications. Integrating Langfuse with Langflow provides detailed production traces and granular insights into quality, cost, and latency. This integration allows you to monitor and debug your Langflow's chat or APIs easily."}),"\n",(0,o.jsx)(n.h2,{id:"step-by-step-instructions",children:"Step-by-Step Instructions"}),"\n",(0,o.jsx)(n.h3,{id:"step-1-create-a-langfuse-account",children:"Step 1: Create a Langfuse account"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Go to ",(0,o.jsx)(n.a,{href:"https://langfuse.com",children:"Langfuse"}),' and click on the "Sign In" button in the top right corner.']}),"\n",(0,o.jsx)(n.li,{children:'Click on the "Sign Up" button and create an account.'}),"\n",(0,o.jsx)(n.li,{children:'Once logged in, click on "Settings" and then on "Create new API keys."'}),"\n",(0,o.jsxs)(n.li,{children:["Copy the Public key and the Secret Key and save them somewhere safe.","\n","\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"step-2-set-up-langfuse-in-langflow",children:"Step 2: Set up Langfuse in Langflow"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Export the Environment Variables"}),": You'll need to export the environment variables ",(0,o.jsx)(n.code,{children:"LANGFLOW_LANGFUSE_SECRET_KEY"})," and ",(0,o.jsx)(n.code,{children:"LANGFLOW_LANGFUSE_PUBLIC_KEY"})," with the values obtained in Step 1."]}),"\n",(0,o.jsx)(n.p,{children:"You can do this by executing the following commands in your terminal:"}),"\n",(0,o.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_LANGFUSE_SECRET_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=<",props:{style:{color:"#FF7B72"}}},{content:"your ",props:{style:{color:"#A5D6FF"}}},{content:"secret ",props:{style:{color:"#FFA657"}}},{content:"ke",props:{style:{color:"#A5D6FF"}}},{content:"y",props:{style:{color:"#C9D1D9"}}},{content:">",props:{style:{color:"#FF7B72"}}}]},{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_LANGFUSE_PUBLIC_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=<",props:{style:{color:"#FF7B72"}}},{content:"your ",props:{style:{color:"#A5D6FF"}}},{content:"public ",props:{style:{color:"#FFA657"}}},{content:"ke",props:{style:{color:"#A5D6FF"}}},{content:"y",props:{style:{color:"#C9D1D9"}}},{content:">",props:{style:{color:"#FF7B72"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, you can run the Langflow CLI command:"}),"\n",(0,o.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"LANGFLOW_LANGFUSE_SECRET_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=<",props:{style:{color:"#FF7B72"}}},{content:"your ",props:{style:{color:"#A5D6FF"}}},{content:"secret ",props:{style:{color:"#FFA657"}}},{content:"ke",props:{style:{color:"#A5D6FF"}}},{content:"y",props:{style:{color:"#C9D1D9"}}},{content:"> ",props:{style:{color:"#FF7B72"}}},{content:"LANGFLOW_LANGFUSE_PUBLIC_KEY=",props:{style:{color:"#A5D6FF"}}},{content:"<",props:{style:{color:"#FF7B72"}}},{content:"your public ke",props:{style:{color:"#A5D6FF"}}},{content:"y",props:{style:{color:"#C9D1D9"}}},{content:"> ",props:{style:{color:"#FF7B72"}}},{content:"langflow",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.p,{children:["If you are self-hosting Langfuse, you can also set the environment variable ",(0,o.jsx)(n.code,{children:"LANGFLOW_LANGFUSE_HOST"})," to point to your Langfuse instance. By default, Langfuse points to the cloud instance at ",(0,o.jsx)(n.code,{children:"https://cloud.langfuse.com"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Verify Integration"}),": Ensure that the environment variables are set correctly by checking their existence in your environment, for example by running:"]}),"\n",(0,o.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"echo",props:{style:{color:"#79C0FF"}}},{content:" $LANGFLOW_LANGFUSE_SECRET_KEY",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"echo",props:{style:{color:"#79C0FF"}}},{content:" $LANGFLOW_LANGFUSE_PUBLIC_KEY",props:{style:{color:"#C9D1D9"}}}]}],lang:"bash"},annotations:[]}]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Monitor Langflow"}),": Now, whenever you use Langflow's chat or API, you will be able to see the tracing of your conversations in Langfuse."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"That's it! You have successfully integrated Langfuse with Langflow, enhancing observability and debugging capabilities for your LLM application."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Note: For more details or customized configurations, please refer to the official ",(0,o.jsx)(n.a,{href:"https://langfuse.com/docs/integrations/langchain",children:"Langfuse documentation"}),"."]})]})}const g=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(p,e)})):p(e)};function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);