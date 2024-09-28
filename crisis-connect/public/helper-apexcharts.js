!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var a=e();for(var s in a)("object"==typeof exports?exports:t)[s]=a[s]}}(self,(()=>(()=>{"use strict";var t={};return(()=>{var e=t;
    /*
     * @version: 2.5.0
     * @author: Preline Labs Ltd.
     * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
     * Copyright 2024 Preline Labs Ltd.
     */Object.defineProperty(e,"__esModule",{value:!0}),e.buildTooltip=function(t,e){var a=e.title,s=e.mode,o=e.valuePrefix,n=void 0===o?"$":o,c=e.isValueDivided,r=void 0===c||c,l=e.valuePostfix,i=void 0===l?"":l,d=e.hasTextLabel,p=void 0!==d&&d,v=e.invertGroup,x=void 0!==v&&v,u=e.labelDivider,g=void 0===u?"":u,b=e.wrapperClasses,f=void 0===b?"ms-0.5 mb-2 bg-white border border-gray-200 text-gray-800 rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700":b,h=e.wrapperExtClasses,m=void 0===h?"":h,k=e.seriesClasses,y=void 0===k?"text-[12px]":k,w=e.seriesExtClasses,C=void 0===w?"":w,E=e.titleClasses,j=void 0===E?"font-semibold !text-sm !bg-white !border-gray-200 text-gray-800 rounded-t-lg dark:!bg-neutral-800 dark:!border-neutral-700 dark:text-neutral-200":E,P=e.titleExtClasses,T=void 0===P?"":P,D=e.markerClasses,L=void 0===D?"!w-2.5 !h-2.5 !me-1.5":D,z=e.markerExtClasses,I=void 0===z?"!rounded-sm":z,A=e.valueClasses,B=void 0===A?"!font-medium text-gray-500 !ms-auto dark:text-neutral-400":A,V=e.valueExtClasses,_=void 0===V?"":V,F=e.labelClasses,O=void 0===F?"text-gray-500 dark:text-neutral-400":F,S=e.labelExtClasses,$=void 0===S?"":S,q=t.dataPointIndex,G=t.ctx.opts.colors,H=t.ctx.opts.series,M="";return H.forEach((function(e,a){var s=t.series[a][q]||("object"!=typeof H[a].data[q]?H[a].data[q]:t.series[a][q]),o=H[a].name,c=x?{left:"".concat(p?o:"").concat(g),right:"".concat(n).concat(s>=1e3&&r?"".concat(s/1e3,"k"):s).concat(i)}:{left:"".concat(n).concat(s>=1e3&&r?"".concat(s/1e3,"k"):s).concat(i),right:"".concat(p?o:"").concat(g)},l='<span class="apexcharts-tooltip-text-y-label '.concat(O," ").concat($,'">').concat(c.left,"</span>");M+='<div class="apexcharts-tooltip-series-group !flex '.concat(p?"!justify-between":""," order-").concat(a+1," ").concat(y," ").concat(C,'">\n      <span class="flex items-center">\n        <span class="apexcharts-tooltip-marker ').concat(L," ").concat(I,'" style="background: ').concat(G[a],'"></span>\n        <div class="apexcharts-tooltip-text">\n          <div class="apexcharts-tooltip-y-group !py-0.5">\n            <span class="apexcharts-tooltip-text-y-value ').concat(B," ").concat(_,'">').concat(c.right,"</span>\n          </div>\n        </div>\n      </span>\n      ").concat(l,"\n    </div>")})),'<div class="'.concat("dark"===s?"dark ":"").concat(f," ").concat(m,'">\n    <div class="apexcharts-tooltip-title ').concat(j," ").concat(T,'">').concat(a,"</div>\n    ").concat(M,"\n  </div>")},e.buildTooltipCompareTwo=function(t,e){var a=t.dataPointIndex,s=t.ctx.opts.xaxis.categories,o=t.ctx.opts.colors,n=t.ctx.opts.series,c=e.title,r=e.mode,l=e.valuePrefix,i=void 0===l?"$":l,d=e.isValueDivided,p=void 0===d||d,v=e.valuePostfix,x=void 0===v?"":v,u=e.hasCategory,g=void 0===u||u,b=e.hasTextLabel,f=void 0!==b&&b,h=e.labelDivider,m=void 0===h?"":h,k=e.wrapperClasses,y=void 0===k?"ms-0.5 mb-2 bg-white border border-gray-200 text-gray-800 rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700":k,w=e.wrapperExtClasses,C=void 0===w?"":w,E=e.seriesClasses,j=void 0===E?"!justify-between w-full text-[12px]":E,P=e.seriesExtClasses,T=void 0===P?"":P,D=e.titleClasses,L=void 0===D?"flex justify-between font-semibold !text-sm !bg-white !border-gray-200 text-gray-800 rounded-t-lg dark:!bg-neutral-800 dark:!border-neutral-700 dark:text-neutral-200":D,z=e.titleExtClasses,I=void 0===z?"":z,A=e.markerClasses,B=void 0===A?"!w-2.5 !h-2.5 !me-1.5":A,V=e.markerExtClasses,_=void 0===V?"!rounded-sm":V,F=e.valueClasses,O=void 0===F?"!font-medium text-gray-500 !ms-auto dark:text-neutral-400":F,S=e.valueExtClasses,$=void 0===S?"":S,q=e.labelClasses,G=void 0===q?"text-gray-500 dark:text-neutral-400 ms-2":q,H=e.labelExtClasses,M=void 0===H?"":H,J="",K=n[0].data[a],N=n[1].data[a],Q=s[a].split(" "),R=g?"".concat(Q[0]).concat(Q[1]?" ":"").concat(Q[1]?Q[1].slice(0,3):""):"",U=K>N,W=K/N==1,X=W?0:K/N*100,Y=U?'<svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>':'<svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></svg>';return n.forEach((function(e,s){var c=t.series[s][a]||("object"!=typeof n[s].data[a]?n[s].data[a]:t.series[s][a]),r=n[s].name,l=n[s].altValue||null,d='<span class="apexcharts-tooltip-text-y-label '.concat(G," ").concat(M,'">').concat(R," ").concat(r||"","</span>"),v=l||'<span class="apexcharts-tooltip-text-y-value '.concat(O," ").concat($,'">').concat(i).concat(c>=1e3&&p?"".concat(c/1e3,"k"):c).concat(x).concat(m,"</span>");J+='<div class="apexcharts-tooltip-series-group '.concat(j," !flex order-").concat(s+1," ").concat(T,'">\n      <span class="flex items-center">\n        <span class="apexcharts-tooltip-marker ').concat(B," ").concat(_,'" style="background: ').concat(o[s],'"></span>\n        <div class="apexcharts-tooltip-text">\n          <div class="apexcharts-tooltip-y-group !py-0.5">\n            ').concat(v,"\n          </div>\n        </div>\n      </span>\n      ").concat(f?d:"","\n    </div>")})),'<div class="'.concat("dark"===r?"dark ":"").concat(y," ").concat(C,'">\n    <div class="apexcharts-tooltip-title ').concat(L," ").concat(I,'">\n      <span>').concat(c,'</span>\n      <span class="flex items-center gap-x-1 ').concat(W?"":U?"text-green-600":"text-red-600",' ms-2">\n        ').concat(W?"":Y,'\n        <span class="inline-block text-sm">\n          ').concat(X.toFixed(1),"%\n        </span>\n      </span>\n    </div>\n    ").concat(J,"\n  </div>")},e.buildTooltipCompareTwoAlt=function(t,e){var a=t.dataPointIndex,s=t.ctx.opts.xaxis.categories,o=t.ctx.opts.colors,n=t.ctx.opts.series,c=e.title,r=e.mode,l=e.valuePrefix,i=void 0===l?"$":l,d=e.isValueDivided,p=void 0===d||d,v=e.valuePostfix,x=void 0===v?"":v,u=e.hasCategory,g=void 0===u||u,b=e.hasTextLabel,f=void 0!==b&&b,h=e.labelDivider,m=void 0===h?"":h,k=e.wrapperClasses,y=void 0===k?"ms-0.5 mb-2 bg-white border border-gray-200 text-gray-800 rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700":k,w=e.wrapperExtClasses,C=void 0===w?"":w,E=e.seriesClasses,j=void 0===E?"!justify-between w-full text-[12px]":E,P=e.seriesExtClasses,T=void 0===P?"":P,D=e.titleClasses,L=void 0===D?"flex justify-between font-semibold !text-sm !bg-white !border-gray-200 text-gray-800 rounded-t-lg dark:!bg-neutral-800 dark:!border-neutral-700 dark:text-neutral-200":D,z=e.titleExtClasses,I=void 0===z?"":z,A=e.markerClasses,B=void 0===A?"!w-2.5 !h-2.5 !me-1.5":A,V=e.markerExtClasses,_=void 0===V?"!rounded-sm":V,F=e.valueClasses,O=void 0===F?"!font-medium text-gray-500 !ms-auto dark:text-neutral-400":F,S=e.valueExtClasses,$=void 0===S?"":S,q=e.labelClasses,G=void 0===q?"text-gray-500 dark:text-neutral-400 ms-2":q,H=e.labelExtClasses,M=void 0===H?"":H,J="",K=n[0].data[a],N=n[1].data[a],Q=s[a].split(" "),R=g?"".concat(Q[0]).concat(Q[1]?" ":"").concat(Q[1]?Q[1].slice(0,3):""):"",U=K>N,W=K/N==1,X=W?0:K/N*100,Y=U?'<svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>':'<svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></svg>';return n.forEach((function(e,s){var c=t.series[s][a]||("object"!=typeof n[s].data[a]?n[s].data[a]:t.series[s][a]),r=n[s].name,l='<span class="apexcharts-tooltip-text-y-label '.concat(G," ").concat(M,'">').concat(i).concat(c>=1e3&&p?"".concat(c/1e3,"k"):c).concat(x,"</span>");J+='<div class="apexcharts-tooltip-series-group !flex '.concat(j," order-").concat(s+1," ").concat(T,'">\n      <span class="flex items-center">\n        <span class="apexcharts-tooltip-marker ').concat(B," ").concat(_,'" style="background: ').concat(o[s],'"></span>\n        <div class="apexcharts-tooltip-text text-[12px]">\n          <div class="apexcharts-tooltip-y-group !py-0.5">\n            <span class="apexcharts-tooltip-text-y-value ').concat(O," ").concat($,'">').concat(R," ").concat(r||"").concat(m,"</span>\n          </div>\n        </div>\n      </span>\n      ").concat(f?l:"","\n    </div>")})),'<div class="'.concat("dark"===r?"dark ":"").concat(y," ").concat(C,'">\n    <div class="apexcharts-tooltip-title ').concat(L," ").concat(I,'">\n      <span>').concat(c,'</span>\n      <span class="flex items-center gap-x-1 ').concat(W?"":U?"text-green-600":"text-red-600",' ms-2">\n        ').concat(W?"":Y,'\n        <span class="inline-block text-sm">\n          ').concat(X.toFixed(1),"%\n        </span>\n      </span>\n    </div>\n    ").concat(J,"\n  </div>")},e.buildTooltipForDonut=function(t,e){var a=t.series,s=t.seriesIndex,o=t.w.globals,n=o.colors;return'<div class="apexcharts-tooltip-series-group" style="background-color: '.concat(n[s],'; display: block;">\n    <div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">\n      <div class="apexcharts-tooltip-y-group" style="color: ').concat(e[s],'">\n        <span class="apexcharts-tooltip-text-y-label">').concat(o.labels[s],': </span>\n        <span class="apexcharts-tooltip-text-y-value">').concat(a[s],"</span>\n      </div>\n    </div>\n  </div>")},e.buildChart=function(t,e,a,s){var o=document.querySelector(t),n=null;if(!o)return!1;var c=o.closest('[role="tabpanel"]'),r=null;Array.from(document.querySelector("html").classList).forEach((function(t){["dark","light","default"].includes(t)&&(r=t)}));var l=function(t){return void 0===t&&(t=r||localStorage.getItem("hs_theme")),window._.merge(e(t),"dark"===t?s:a)};o&&((n=new ApexCharts(o,l())).render(),window.addEventListener("on-hs-appearance-change",(function(t){return n.updateOptions(l(t.detail))})),c&&c.addEventListener("on-hs-appearance-change",(function(t){return n.updateOptions(l(t.detail))})));return n}})(),t})()));