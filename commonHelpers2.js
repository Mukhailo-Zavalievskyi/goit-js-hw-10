import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as s}from"./assets/vendor-f0698ccd.js";const r=document.querySelector("form");r.addEventListener("submit",m);function m(f){f.preventDefault();const t=f.target.elements,e=t.delay.value,i=t.state.value;r.reset(),new Promise((o,l)=>{setTimeout(()=>{i==="fulfilled"?o(`✅ Fulfilled promise in ${e}ms`):l(`❌ Rejected promise in ${e}ms`)},e)}).then(o=>{s.success({title:"OK",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",messageColor:"#ffffff",titleColor:"#ffffff",iconColor:"#ffffff",backgroundColor:"#59A10D"})}).catch(o=>{s.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight",messageColor:"#ffffff",titleColor:"#ffffff",iconColor:"#ffffff",backgroundColor:"#B51B1B"})})}
//# sourceMappingURL=commonHelpers2.js.map
