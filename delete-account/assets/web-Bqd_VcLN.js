import{W as Ne}from"./index-CTk4k2QK.js";import{v as S,u as E,C,_ as P,E as oe,F as ce,c as v,b as Oe,L as Le,e as $e,s as xe,x as Be,y as je,z as Y,A as qe}from"./index.esm-BXFBjz6i.js";import{ConsentStatus as Ve,ConsentType as b}from"./index-Cw4-jDVC.js";const Ue=(e,t)=>t.some(n=>e instanceof n);let J,X;function ze(){return J||(J=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function We(){return X||(X=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ue=new WeakMap,x=new WeakMap,le=new WeakMap,M=new WeakMap,U=new WeakMap;function Ge(e){const t=new Promise((n,i)=>{const a=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{n(h(e.result)),a()},r=()=>{i(e.error),a()};e.addEventListener("success",s),e.addEventListener("error",r)});return t.then(n=>{n instanceof IDBCursor&&ue.set(n,e)}).catch(()=>{}),U.set(t,e),t}function Ke(e){if(x.has(e))return;const t=new Promise((n,i)=>{const a=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{n(),a()},r=()=>{i(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)});x.set(e,t)}let B={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return x.get(e);if(t==="objectStoreNames")return e.objectStoreNames||le.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return h(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function He(e){B=e(B)}function Ye(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(F(this),t,...n);return le.set(i,t.sort?t.sort():[t]),h(i)}:We().includes(e)?function(...t){return e.apply(F(this),t),h(ue.get(this))}:function(...t){return h(e.apply(F(this),t))}}function Je(e){return typeof e=="function"?Ye(e):(e instanceof IDBTransaction&&Ke(e),Ue(e,ze())?new Proxy(e,B):e)}function h(e){if(e instanceof IDBRequest)return Ge(e);if(M.has(e))return M.get(e);const t=Je(e);return t!==e&&(M.set(e,t),U.set(t,e)),t}const F=e=>U.get(e);function Xe(e,t,{blocked:n,upgrade:i,blocking:a,terminated:s}={}){const r=indexedDB.open(e,t),c=h(r);return i&&r.addEventListener("upgradeneeded",o=>{i(h(r.result),o.oldVersion,o.newVersion,h(r.transaction),o)}),n&&r.addEventListener("blocked",o=>n(o.oldVersion,o.newVersion,o)),c.then(o=>{s&&o.addEventListener("close",()=>s()),a&&o.addEventListener("versionchange",u=>a(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Qe=["get","getKey","getAll","getAllKeys","count"],Ze=["put","add","delete","clear"],N=new Map;function Q(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(N.get(t))return N.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,a=Ze.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||Qe.includes(n)))return;const s=async function(r,...c){const o=this.transaction(r,a?"readwrite":"readonly");let u=o.store;return i&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),a&&o.done]))[0]};return N.set(t,s),s}He(e=>({...e,get:(t,n,i)=>Q(t,n)||e.get(t,n,i),has:(t,n)=>!!Q(t,n)||e.has(t,n)}));const de="@firebase/installations",z="0.6.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=1e4,pe=`w:${z}`,me="FIS_v2",et="https://firebaseinstallations.googleapis.com/v1",tt=3600*1e3,nt="installations",it="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},y=new oe(nt,it,at);function he(e){return e instanceof ce&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge({projectId:e}){return`${et}/projects/${e}/installations`}function we(e){return{token:e.token,requestStatus:2,expiresIn:rt(e.expiresIn),creationTime:Date.now()}}async function ye(e,t){const i=(await t.json()).error;return y.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ie({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function st(e,{refreshToken:t}){const n=Ie(e);return n.append("Authorization",ot(t)),n}async function be(e){const t=await e();return t.status>=500&&t.status<600?e():t}function rt(e){return Number(e.replace("s","000"))}function ot(e){return`${me} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=ge(e),a=Ie(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&a.append("x-firebase-client",u)}const r={fid:n,authVersion:me,appId:e.appId,sdkVersion:pe},c={method:"POST",headers:a,body:JSON.stringify(r)},o=await be(()=>fetch(i,c));if(o.ok){const u=await o.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:we(u.authToken)}}else throw await ye("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=/^[cdef][\w-]{21}$/,j="";function dt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=ft(e);return lt.test(n)?n:j}catch{return j}}function ft(e){return ut(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=new Map;function ve(e,t){const n=_(e);Se(n,t),pt(n,t)}function Se(e,t){const n=Ae.get(e);if(n)for(const i of n)i(t)}function pt(e,t){const n=mt();n&&n.postMessage({key:e,fid:t}),ht()}let w=null;function mt(){return!w&&"BroadcastChannel"in self&&(w=new BroadcastChannel("[Firebase] FID Change"),w.onmessage=e=>{Se(e.data.key,e.data.fid)}),w}function ht(){Ae.size===0&&w&&(w.close(),w=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="firebase-installations-database",wt=1,I="firebase-installations-store";let O=null;function W(){return O||(O=Xe(gt,wt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(I)}}})),O}async function k(e,t){const n=_(e),a=(await W()).transaction(I,"readwrite"),s=a.objectStore(I),r=await s.get(n);return await s.put(t,n),await a.done,(!r||r.fid!==t.fid)&&ve(e,t.fid),t}async function Ee(e){const t=_(e),i=(await W()).transaction(I,"readwrite");await i.objectStore(I).delete(t),await i.done}async function R(e,t){const n=_(e),a=(await W()).transaction(I,"readwrite"),s=a.objectStore(I),r=await s.get(n),c=t(r);return c===void 0?await s.delete(n):await s.put(c,n),await a.done,c&&(!r||r.fid!==c.fid)&&ve(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e){let t;const n=await R(e.appConfig,i=>{const a=yt(i),s=It(e,a);return t=s.registrationPromise,s.installationEntry});return n.fid===j?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yt(e){const t=e||{fid:dt(),registrationStatus:0};return Ce(t)}function It(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(y.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=bt(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Tt(e)}:{installationEntry:t}}async function bt(e,t){try{const n=await ct(e,t);return k(e.appConfig,n)}catch(n){throw he(n)&&n.customData.serverCode===409?await Ee(e.appConfig):await k(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Tt(e){let t=await Z(e.appConfig);for(;t.registrationStatus===1;)await Te(100),t=await Z(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await G(e);return i||n}return t}function Z(e){return R(e,t=>{if(!t)throw y.create("installation-not-found");return Ce(t)})}function Ce(e){return At(e)?{fid:e.fid,registrationStatus:0}:e}function At(e){return e.registrationStatus===1&&e.registrationTime+fe<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt({appConfig:e,heartbeatServiceProvider:t},n){const i=St(e,n),a=st(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&a.append("x-firebase-client",u)}const r={installation:{sdkVersion:pe,appId:e.appId}},c={method:"POST",headers:a,body:JSON.stringify(r)},o=await be(()=>fetch(i,c));if(o.ok){const u=await o.json();return we(u)}else throw await ye("Generate Auth Token",o)}function St(e,{fid:t}){return`${ge(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t=!1){let n;const i=await R(e.appConfig,s=>{if(!ke(s))throw y.create("not-registered");const r=s.authToken;if(!t&&kt(r))return s;if(r.requestStatus===1)return n=Et(e,t),s;{if(!navigator.onLine)throw y.create("app-offline");const c=Pt(s);return n=Ct(e,c),c}});return n?await n:i.authToken}async function Et(e,t){let n=await ee(e.appConfig);for(;n.authToken.requestStatus===1;)await Te(100),n=await ee(e.appConfig);const i=n.authToken;return i.requestStatus===0?K(e,t):i}function ee(e){return R(e,t=>{if(!ke(t))throw y.create("not-registered");const n=t.authToken;return _t(n)?{...t,authToken:{requestStatus:0}}:t})}async function Ct(e,t){try{const n=await vt(e,t),i={...t,authToken:n};return await k(e.appConfig,i),n}catch(n){if(he(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ee(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await k(e.appConfig,i)}throw n}}function ke(e){return e!==void 0&&e.registrationStatus===2}function kt(e){return e.requestStatus===2&&!Dt(e)}function Dt(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+tt}function Pt(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function _t(e){return e.requestStatus===1&&e.requestTime+fe<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e){const t=e,{installationEntry:n,registrationPromise:i}=await G(t);return i?i.catch(console.error):K(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(e,t=!1){const n=e;return await Ft(n),(await K(n,t)).token}async function Ft(e){const{registrationPromise:t}=await G(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e){if(!e||!e.options)throw L("App Configuration");if(!e.name)throw L("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw L(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function L(e){return y.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="installations",Ot="installations-internal",Lt=e=>{const t=e.getProvider("app").getImmediate(),n=Nt(t),i=P(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},$t=e=>{const t=e.getProvider("app").getImmediate(),n=P(t,De).getImmediate();return{getId:()=>Rt(n),getToken:a=>Mt(n,a)}};function xt(){E(new C(De,Lt,"PUBLIC")),E(new C(Ot,$t,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt();S(de,z);S(de,z,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D="analytics",Bt="firebase_id",jt="origin",qt=60*1e3,Vt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",H="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new Le("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},d=new oe("analytics","Analytics",Ut);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){if(!e.startsWith(H)){const t=d.create("invalid-gtag-resource",{gtagURL:e});return l.warn(t.message),""}return e}function Pe(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Wt(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Gt(e,t){const n=Wt("firebase-js-sdk-policy",{createScriptURL:zt}),i=document.createElement("script"),a=`${H}?l=${e}&id=${t}`;i.src=n?n==null?void 0:n.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}function Kt(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ht(e,t,n,i,a,s){const r=i[a];try{if(r)await t[r];else{const o=(await Pe(n)).find(u=>u.measurementId===a);o&&await t[o.appId]}}catch(c){l.error(c)}e("config",a,s)}async function Yt(e,t,n,i,a){try{let s=[];if(a&&a.send_to){let r=a.send_to;Array.isArray(r)||(r=[r]);const c=await Pe(n);for(const o of r){const u=c.find(p=>p.measurementId===o),f=u&&t[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",i,a||{})}catch(s){l.error(s)}}function Jt(e,t,n,i){async function a(s,...r){try{if(s==="event"){const[c,o]=r;await Yt(e,t,n,c,o)}else if(s==="config"){const[c,o]=r;await Ht(e,t,n,i,c,o)}else if(s==="consent"){const[c,o]=r;e("consent",c,o)}else if(s==="get"){const[c,o,u]=r;e("get",c,o,u)}else if(s==="set"){const[c]=r;e("set",c)}else e(s,...r)}catch(c){l.error(c)}}return a}function Xt(e,t,n,i,a){let s=function(...r){window[i].push(arguments)};return window[a]&&typeof window[a]=="function"&&(s=window[a]),window[a]=Jt(s,e,t,n),{gtagCore:s,wrappedGtag:window[a]}}function Qt(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(H)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=30,en=1e3;class tn{constructor(t={},n=en){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const _e=new tn;function nn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function an(e){var r;const{appId:t,apiKey:n}=e,i={method:"GET",headers:nn(n)},a=Vt.replace("{app-id}",t),s=await fetch(a,i);if(s.status!==200&&s.status!==304){let c="";try{const o=await s.json();(r=o.error)!=null&&r.message&&(c=o.error.message)}catch{}throw d.create("config-fetch-failed",{httpStatus:s.status,responseMessage:c})}return s.json()}async function sn(e,t=_e,n){const{appId:i,apiKey:a,measurementId:s}=e.options;if(!i)throw d.create("no-app-id");if(!a){if(s)return{measurementId:s,appId:i};throw d.create("no-api-key")}const r=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new cn;return setTimeout(async()=>{c.abort()},qt),Re({appId:i,apiKey:a,measurementId:s},r,c,t)}async function Re(e,{throttleEndTimeMillis:t,backoffCount:n},i,a=_e){var c;const{appId:s,measurementId:r}=e;try{await rn(i,t)}catch(o){if(r)return l.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${o==null?void 0:o.message}]`),{appId:s,measurementId:r};throw o}try{const o=await an(e);return a.deleteThrottleMetadata(s),o}catch(o){const u=o;if(!on(u)){if(a.deleteThrottleMetadata(s),r)return l.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:r};throw o}const f=Number((c=u==null?void 0:u.customData)==null?void 0:c.httpStatus)===503?Y(n,a.intervalMillis,Zt):Y(n,a.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return a.setThrottleMetadata(s,p),l.debug(`Calling attemptFetch again in ${f} millis`),Re(e,p,i,a)}}function rn(e,t){return new Promise((n,i)=>{const a=Math.max(t-Date.now(),0),s=setTimeout(n,a);e.addEventListener(()=>{clearTimeout(s),i(d.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function on(e){if(!(e instanceof ce)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class cn{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function un(e,t,n,i,a){if(a&&a.global){e("event",n,i);return}else{const s=await t,r={...i,send_to:s};e("event",n,r)}}async function ln(e,t,n,i){{const a=await t;e("config",a,{update:!0,user_id:n})}}async function dn(e,t,n,i){if(i&&i.global){const a={};for(const s of Object.keys(n))a[`user_properties.${s}`]=n[s];return e("set",a),Promise.resolve()}else{const a=await t;e("config",a,{update:!0,user_properties:n})}}async function fn(e,t){const n=await e;window[`ga-disable-${n}`]=!t}let q;function Me(e){q=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(){if(Be())try{await je()}catch(e){return l.warn(d.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return l.warn(d.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mn(e,t,n,i,a,s,r){const c=sn(e);c.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&l.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>l.error(m)),t.push(c);const o=pn().then(m=>{if(m)return i.getId()}),[u,f]=await Promise.all([c,o]);Qt(s)||Gt(s,u.measurementId),q&&(a("consent","default",q),Me(void 0)),a("js",new Date);const p=(r==null?void 0:r.config)??{};return p[jt]="firebase",p.update=!0,f!=null&&(p[Bt]=f),a("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t){this.app=t}_delete(){return delete g[this.app.options.appId],Promise.resolve()}}let g={},te=[];const ne={};let $="dataLayer",gn="gtag",ie,T,ae=!1;function wn(){const e=[];if(xe()&&e.push("This is a browser extension environment."),qe()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,a)=>`(${a+1}) ${i}`).join(" "),n=d.create("invalid-analytics-context",{errorInfo:t});l.warn(n.message)}}function yn(e,t,n){wn();const i=e.options.appId;if(!i)throw d.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)l.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw d.create("no-api-key");if(g[i]!=null)throw d.create("already-exists",{id:i});if(!ae){Kt($);const{wrappedGtag:s,gtagCore:r}=Xt(g,te,ne,$,gn);T=s,ie=r,ae=!0}return g[i]=mn(e,te,ne,t,ie,$,n),new hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e=Oe()){e=v(e);const t=P(e,D);return t.isInitialized()?t.getImmediate():In(e)}function In(e,t={}){const n=P(e,D);if(n.isInitialized()){const a=n.getImmediate();if($e(t,n.getOptions()))return a;throw d.create("already-initialized")}return n.initialize({options:t})}function bn(e,t,n){e=v(e),ln(T,g[e.app.options.appId],t).catch(i=>l.error(i))}function Fe(e,t,n){e=v(e),dn(T,g[e.app.options.appId],t,n).catch(i=>l.error(i))}function Tn(e,t){e=v(e),fn(g[e.app.options.appId],t).catch(n=>l.error(n))}function V(e,t,n,i){e=v(e),un(T,g[e.app.options.appId],t,n,i).catch(a=>l.error(a))}function An(e){T?T("consent","update",e):Me(e)}const se="@firebase/analytics",re="0.10.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){E(new C(D,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return yn(i,a,n)},"PUBLIC")),E(new C("analytics-internal",e,"PRIVATE")),S(se,re),S(se,re,"esm2020");function e(t){try{const n=t.getProvider(D).getImmediate();return{logEvent:(i,a,s)=>V(n,i,a,s),setUserProperties:(i,a)=>Fe(n,i,a)}}catch(n){throw d.create("interop-component-reg-failed",{reason:n})}}}vn();class kn extends Ne{async getAppInstanceId(){throw this.unimplemented("Not implemented on web.")}async setConsent(t){const n=t.status===Ve.Granted?"granted":"denied",i={};switch(t.type){case b.AdPersonalization:i.ad_personalization=n;break;case b.AdStorage:i.ad_storage=n;break;case b.AdUserData:i.ad_user_data=n;break;case b.AnalyticsStorage:i.analytics_storage=n;break;case b.FunctionalityStorage:i.functionality_storage=n;break;case b.PersonalizationStorage:i.personalization_storage=n;break}An(i)}async setUserId(t){const n=A();bn(n,t.userId)}async setUserProperty(t){const n=A();Fe(n,{[t.key]:t.value})}async setCurrentScreen(t){const n=A();V(n,"screen_view",{firebase_screen:t.screenName||void 0,firebase_screen_class:t.screenClassOverride||void 0})}async logEvent(t){const n=A();V(n,t.name,t.params)}async logTransaction(t){throw this.unimplemented("Not implemented on web.")}async setSessionTimeoutDuration(t){throw this.unimplemented("Not implemented on web.")}async setEnabled(t){const n=A();Tn(n,t.enabled)}async isEnabled(){return{enabled:window["ga-disable-analyticsId"]===!0}}async resetAnalyticsData(){throw this.unimplemented("Not implemented on web.")}async initiateOnDeviceConversionMeasurementWithEmailAddress(t){throw this.unimplemented("Not implemented on web.")}async initiateOnDeviceConversionMeasurementWithPhoneNumber(t){throw this.unimplemented("Not implemented on web.")}async initiateOnDeviceConversionMeasurementWithHashedEmailAddress(t){throw this.unimplemented("Not implemented on web.")}async initiateOnDeviceConversionMeasurementWithHashedPhoneNumber(t){throw this.unimplemented("Not implemented on web.")}}export{kn as FirebaseAnalyticsWeb};
