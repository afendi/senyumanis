import{S as a,i as e,s as n,e as s,t as i,a as t,b as r,f as l,g as c,d as o,c as d,h,j as u,k as g,m as k,o as m,r as p,p as f,n as b,l as v}from"./client.e9f5bcca.js";const w=[{question:"Umur anda:",answers:{"Bawah 45 tahun":0,"45-54 tahun":2,"55-64 tahun":3,"64 tahun keatas":4}},{question:"Ukur lilit pinggang – diukur di bawah tulang rusuk (biasanya pada bahagian pusat)",answers:{"Lelaki - Kurang dari 90cm (35.4 inci) / Wanita - Kurang dari 80cm (31.4 inci)":0,"Lelaki - Lebih dari 90cm (35.4 inci) / Wanita - Lebih dari 80cm (31.4 inci)":4}},{question:"Adakah anda biasa melakukan aktiviti fizikal sekurang-kurangnya 30 minit sehari di tempat kerja dan/atau semasa waktu lapang (termasuk aktiviti harian)?",answers:{Ya:0,Tidak:2}},{question:"Berapa kerap anda makan sayur-sayuran dan buah-buahan?",answers:{"Setiap hari":0,"Tidak setiap hari":1}},{question:"Pernahkan anda mengambil ubat darah tinggi secara berkala?",answers:{"Tidak pernah":0,Pernah:2}},{question:"Pernahkan bacaan gula dalam darah anda tinggi? (semasa menjalani pemeriksaan kesihatan atau semasa menghidapi penyakit atau semasa hamil)?",answers:{"Tidak pernah":0,Pernah:5}},{question:"Adakah anda mempunyai mana-mana keluarga terdekat mahupun saudara- mara yang menghidapi sebarang bentuk penyakit diabetes (kecuali ketika mengandung)?",answers:{Tidak:0,"Ya; datuk/nenek, ibu/bapa saudara, sepupu (bukan ibu/bapa, adik beradik atau anak)":3,"Ya; ibu/bapa, adik beradik atau anak":5}}];function y(a,e,n){const s=a.slice();return s[11]=e[n][0],s[12]=e[n][1],s}function x(a,e,n){const s=a.slice();return s[8]=e[n],s[9]=e,s[10]=n,s}function E(a){let e,n,f,b,v,w,y,x,E,I,S,j=a[11]+"";function D(){a[5].call(n,a[9],a[10])}return a[6][0][a[10]]=[],{c(){e=s("label"),n=s("input"),b=t(),v=s("span"),w=t(),y=s("span"),x=i(j),E=t(),this.h()},l(a){e=r(a,"LABEL",{class:!0});var s=l(e);n=r(s,"INPUT",{type:!0,value:!0,class:!0}),b=d(s),v=r(s,"SPAN",{class:!0}),l(v).forEach(o),w=d(s),y=r(s,"SPAN",{class:!0});var i=l(y);x=c(i,j),i.forEach(o),E=d(s),s.forEach(o),this.h()},h(){h(n,"type","radio"),n.__value=f=a[12],n.value=n.__value,h(n,"class","svelte-widaan"),a[6][0][a[10]].push(n),h(v,"class","checkmark svelte-widaan"),h(y,"class","text-base md:text-lg"),h(e,"class","answer-container svelte-widaan")},m(s,i){u(s,e,i),g(e,n),n.checked=n.__value===a[8].answer,g(e,b),g(e,v),g(e,w),g(e,y),g(y,x),g(e,E),I||(S=[m(n,"change",D),m(n,"click",a[7])],I=!0)},p(e,s){a=e,1&s&&f!==(f=a[12])&&(n.__value=f,n.value=n.__value),1&s&&(n.checked=n.__value===a[8].answer),1&s&&j!==(j=a[11]+"")&&k(x,j)},d(s){s&&o(e),a[6][0][a[10]].splice(a[6][0][a[10]].indexOf(n),1),I=!1,p(S)}}}function I(a){let e,n,m,p,b,v,w,x,I,S,j,D,L,_=a[10]+1+"",T=a[0].length+"",q=a[8].question+"",V=Object.entries(a[8].answers),P=[];for(let e=0;e<V.length;e+=1)P[e]=E(y(a,V,e));return{c(){e=s("div"),n=s("div"),m=s("span"),p=i(_),b=i("/"),v=i(T),w=i("."),x=t(),I=s("div"),S=t(),j=s("div");for(let a=0;a<P.length;a+=1)P[a].c();D=t(),this.h()},l(a){e=r(a,"DIV",{class:!0});var s=l(e);n=r(s,"DIV",{class:!0});var i=l(n);m=r(i,"SPAN",{class:!0});var t=l(m);p=c(t,_),b=c(t,"/"),v=c(t,T),w=c(t,"."),t.forEach(o),x=d(i),I=r(i,"DIV",{class:!0}),l(I).forEach(o),i.forEach(o),S=d(s),j=r(s,"DIV",{class:!0});var h=l(j);for(let a=0;a<P.length;a+=1)P[a].l(h);h.forEach(o),D=d(s),s.forEach(o),this.h()},h(){h(m,"class","text-indigo-700 font-bold"),h(I,"class","text-base md:text-lg"),h(n,"class","question svelte-widaan"),h(j,"class","answers svelte-widaan"),h(e,"class",L="slide "+(a[1]==a[10]?"active-slide":"")+" svelte-widaan")},m(a,s){u(a,e,s),g(e,n),g(n,m),g(m,p),g(m,b),g(m,v),g(m,w),g(n,x),g(n,I),I.innerHTML=q,g(e,S),g(e,j);for(let a=0;a<P.length;a+=1)P[a].m(j,null);g(e,D)},p(a,n){if(1&n&&T!==(T=a[0].length+"")&&k(v,T),1&n&&q!==(q=a[8].question+"")&&(I.innerHTML=q),3&n){let e;for(V=Object.entries(a[8].answers),e=0;e<V.length;e+=1){const s=y(a,V,e);P[e]?P[e].p(s,n):(P[e]=E(s),P[e].c(),P[e].m(j,null))}for(;e<P.length;e+=1)P[e].d(1);P.length=V.length}2&n&&L!==(L="slide "+(a[1]==a[10]?"active-slide":"")+" svelte-widaan")&&h(e,"class",L)},d(a){a&&o(e),f(P,a)}}}function S(a){let e,n,t,d,k;return{c(){e=s("div"),n=s("button"),t=i("Lihat Indeks Literasi Saya"),this.h()},l(a){e=r(a,"DIV",{class:!0});var s=l(e);n=r(s,"BUTTON",{class:!0});var i=l(n);t=c(i,"Lihat Indeks Literasi Saya"),i.forEach(o),s.forEach(o),this.h()},h(){h(n,"class","inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500\r\n        text-white mb-4"),h(e,"class","flex justify-center")},m(s,i){u(s,e,i),g(e,n),g(n,t),d||(k=m(n,"click",a[4]),d=!0)},p:b,d(a){a&&o(e),d=!1,k()}}}function j(a){let e,n,m,p,f,b,v,w,y,x;return{c(){e=s("div"),n=s("h2"),m=i("Skor Anda: "),p=i(a[2]),f=t(),b=s("div"),v=t(),w=s("div"),y=s("a"),x=i("Kembali ke Senarai Ujian"),this.h()},l(s){e=r(s,"DIV",{class:!0});var i=l(e);n=r(i,"H2",{class:!0});var t=l(n);m=c(t,"Skor Anda: "),p=c(t,a[2]),t.forEach(o),f=d(i),b=r(i,"DIV",{class:!0}),l(b).forEach(o),i.forEach(o),v=d(s),w=r(s,"DIV",{class:!0});var h=l(w);y=r(h,"A",{class:!0,href:!0});var u=l(y);x=c(u,"Kembali ke Senarai Ujian"),u.forEach(o),h.forEach(o),this.h()},h(){h(n,"class","font-bold text-lg"),h(b,"class","text-lg mb-3"),h(e,"class","text-center"),h(y,"class","inline-block border border-blue-500 rounded py-1 px-3\r\n          bg-blue-500 text-white mb-3"),h(y,"href","../ujian"),h(w,"class","flex justify-center")},m(s,i){u(s,e,i),g(e,n),g(n,m),g(n,p),g(e,f),g(e,b),b.innerHTML=a[3],u(s,v,i),u(s,w,i),g(w,y),g(y,x)},p(a,e){4&e&&k(p,a[2]),8&e&&(b.innerHTML=a[3])},d(a){a&&o(e),a&&o(v),a&&o(w)}}}function D(a){let e,n,k,m,p,w,y,E,D=a[0],L=[];for(let e=0;e<D.length;e+=1)L[e]=I(x(a,D,e));let _=a[1]==a[0].length&&!a[3]&&S(a),T=a[3]&&j(a);return{c(){e=s("div"),n=s("div"),k=s("div"),m=i("Ujian Penilaian Risiko Diabetes"),p=t(),w=s("div");for(let a=0;a<L.length;a+=1)L[a].c();y=t(),_&&_.c(),E=t(),T&&T.c(),this.h()},l(a){e=r(a,"DIV",{class:!0});var s=l(e);n=r(s,"DIV",{class:!0});var i=l(n);k=r(i,"DIV",{class:!0});var t=l(k);m=c(t,"Ujian Penilaian Risiko Diabetes"),t.forEach(o),i.forEach(o),p=d(s),w=r(s,"DIV",{class:!0,style:!0});var h=l(w);for(let a=0;a<L.length;a+=1)L[a].l(h);h.forEach(o),y=d(s),_&&_.l(s),E=d(s),T&&T.l(s),s.forEach(o),this.h()},h(){h(k,"class","uppercase tracking-wide text-c2 mb-4"),h(n,"class","px-6 py-4 mb-2 mt-4 mb-8"),h(w,"class","quiz-container svelte-widaan"),v(w,"display",a[1]==a[0].length-0?"none":"inherit"),h(e,"class","overflow-hidden shadow-lg border-t-4 bg-white mb-4 rounded-b-lg\r\n  rounded-t border-red-200 w-full")},m(a,s){u(a,e,s),g(e,n),g(n,k),g(k,m),g(e,p),g(e,w);for(let a=0;a<L.length;a+=1)L[a].m(w,null);g(e,y),_&&_.m(e,null),g(e,E),T&&T.m(e,null)},p(a,[n]){if(3&n){let e;for(D=a[0],e=0;e<D.length;e+=1){const s=x(a,D,e);L[e]?L[e].p(s,n):(L[e]=I(s),L[e].c(),L[e].m(w,null))}for(;e<L.length;e+=1)L[e].d(1);L.length=D.length}3&n&&v(w,"display",a[1]==a[0].length-0?"none":"inherit"),a[1]!=a[0].length||a[3]?_&&(_.d(1),_=null):_?_.p(a,n):(_=S(a),_.c(),_.m(e,E)),a[3]?T?T.p(a,n):(T=j(a),T.c(),T.m(e,null)):T&&(T.d(1),T=null)},i:b,o:b,d(a){a&&o(e),f(L,a),_&&_.d(),T&&T.d()}}}function L(a,e,n){let s=0,i=0,t="";return[w,s,i,t,function(a){a.preventDefault(),n(2,({indexscore:i,skormessage:t}=function(a){let e=[],n=0,s="",i=0,t="";for(let s=0;s<a.length;s++){let i=a[s];n+=i.answer,e[s]=i.answer}i=n;const r={answerone:e[0],answertwo:e[1],answerthree:e[2],answerfour:e[3],answerfive:e[4],answersix:e[5],answerseven:e[6]};t=sessionStorage.getItem("bmi"),r.bmi=parseFloat(t),r.bmi<23?r.answereight=0:r.bmi>=23&&r.bmi<=27.49?r.answereight=1:r.answereight=3,r.indexscore=i;let l=JSON.stringify(r);return console.log(l),s=i<6?"<strong>Rendah:</strong> dianggarkan 1 dalam 100 orang akan menghidapi penyakit ini":i>=7&&i<=11?"<strong>Sedikit tinggi:</strong> dianggarkan 1 dalam 25 orang akan menghidapi penyakit ini":i>=12&&i<=14?"<strong>Sederhana:</strong> dianggarkan 1 dalam 6 orang akan menghidapi penyakit ini":i>=15&&i<=20?"<strong>Tinggi:</strong> dianggarkan 1 dalam 3 orang akan menghidapi penyakit ini":"<strong>Sangat tinggi:</strong> dianggarkan 1 dalam 2 orang akan menghidapi penyakit ini",fetch("https://localhost:5001/api/ujiansatu",{method:"post",headers:{"Content-type":"application/json;"},body:l}).catch(a=>{console.error("Request failed",a)}),{indexscore:i,skormessage:s}}(w)),i,n(3,t))},function(a,e){a[e].answer=this.__value,n(0,w)},[[]],()=>n(1,s+=1)]}export default class extends a{constructor(a){super(),e(this,a,L,D,n,{})}}
