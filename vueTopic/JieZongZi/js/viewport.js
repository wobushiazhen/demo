eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < 62 ? "" : e(parseInt(c / 62))) +
        ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function (e) {
          return r[e] || e;
        },
      ];
      e = function () {
        return "[3-9h-zA-H]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '!4(a){8 b=4(a){8 b=a.i||a.u||a.v||a.w||a.x||a.i||1;6(y.z||1)/b}(a),c=4(a,b){A(8 c in a)a.hasOwnProperty(c)&&b(a[c],c)},d={fillRect:"5",clearRect:"5",strokeRect:"5",moveTo:"5",lineTo:"5",arc:[0,1,2],arcTo:"5",bezierCurveTo:"5",isPointinPath:"5",isPointinStroke:"5",quadraticCurveTo:"5",rect:"5",translate:"5",createRadialGradient:"5",createLinearGradient:"5"};1!==b&&(c(d,4(c,d){a[d]=4(a){6 4(){8 d,e,f=j.h.r.k(l);B("5"===c)f=f.map(4(a){6 a*b});else B(j.isArray(c))A(d=0,e=c.length;e>d;d++)f[c[d]]*=b;6 a.m(3,f)}}(a[d])}),a.C=4(a){6 4(){3.D*=b,a.m(3,l),3.D/=b}}(a.C),a.E=4(a){6 4(){8 c=j.h.r.k(l);c[1]*=b,c[2]*=b,3.7=3.7.n(/(\\d+)(9|o|p|q)/g,4(a,c,d){6 c*b+d}),a.m(3,c),3.7=3.7.n(/(\\d+)(9|o|p|q)/g,4(a,c,d){6 c/b+d})}}(a.E),a.F=4(a){6 4(){8 c=j.h.r.k(l);c[1]*=b,c[2]*=b,3.7=3.7.n(/(\\d+)(9|o|p|q)/g,4(a,c,d){6 c*b+d}),a.m(3,c),3.7=3.7.n(/(\\d+)(9|o|p|q)/g,4(a,c,d){6 c/b+d})}}(a.F))}(CanvasRenderingContext2D.h),4(a){a.G=4(a){6 4(b){8 c,d,e=a.k(3,b);6"2d"===b&&(c=e.i||e.u||e.v||e.w||e.x||e.i||1,d=(y.z||1)/c,lzb_ratio=d,d>1&&(3.H.s=3.s+"9",3.H.t=3.t+"9",3.t*=d,3.s*=d)),e}}(a.G)}(HTMLCanvasElement.h);',
    [],
    44,
    "|||this|function|all|return|font|var|px||||||||prototype|backingStorePixelRatio|Array|call|arguments|apply|replace|em|rem|pt|slice|height|width|webkitBackingStorePixelRatio|mozBackingStorePixelRatio|msBackingStorePixelRatio|oBackingStorePixelRatio|window|devicePixelRatio|for|if|stroke|lineWidth|fillText|strokeText|getContext|style".split(
      "|"
    ),
    0,
    {}
  )
);

/*!function(){var a="@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}",b=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(b),b.styleSheet)b.styleSheet.disabled||(b.styleSheet.cssText=a);else try{b.innerHTML=a}catch(c){b.innerText=a}}();!function(a,b){function c(){var b=f.getBoundingClientRect().width;b/i>540&&(b=540*i);var c=b/10;f.style.fontSize=c+"px",k.rem=a.rem=c}var d,e=a.document,f=e.documentElement,g=e.querySelector('meta[name="viewport"]'),h=e.querySelector('meta[name="flexible"]'),i=0,j=0,k=b.flexible||(b.flexible={});if(g){console.warn("将根据已有的meta标签来设置缩放比例");var l=g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);l&&(j=parseFloat(l[1]),i=parseInt(1/j))}else if(h){var m=h.getAttribute("content");if(m){var n=m.match(/initial\-dpr=([\d\.]+)/),o=m.match(/maximum\-dpr=([\d\.]+)/);n&&(i=parseFloat(n[1]),j=parseFloat((1/i).toFixed(2))),o&&(i=parseFloat(o[1]),j=parseFloat((1/i).toFixed(2)))}}if(!i&&!j){var p=(a.navigator.appVersion.match(/android/gi),a.navigator.appVersion.match(/iphone/gi)),q=a.devicePixelRatio;i=p?q>=3&&(!i||i>=3)?3:q>=2&&(!i||i>=2)?2:1:1,j=1/i}if(f.setAttribute("data-dpr",i),!g)if(g=e.createElement("meta"),g.setAttribute("name","viewport"),g.setAttribute("content","initial-scale="+j+", maximum-scale="+j+", minimum-scale="+j+", user-scalable=no"),f.firstElementChild)f.firstElementChild.appendChild(g);else{var r=e.createElement("div");r.appendChild(g),e.write(r.innerHTML)}a.addEventListener("resize",function(){clearTimeout(d),d=setTimeout(c,300)},!1),a.addEventListener("pageshow",function(a){a.persisted&&(clearTimeout(d),d=setTimeout(c,300))},!1),"complete"===e.readyState?e.body.style.fontSize=12*i+"px":e.addEventListener("DOMContentLoaded",function(){e.body.style.fontSize=12*i+"px";

},!1),c(),k.dpr=a.dpr=i,k.refreshRem=c,k.rem2px=function(a){var b=parseFloat(a)*this.rem;return"string"==typeof a&&a.match(/rem$/)&&(b+="px"),b},k.px2rem=function(a){var b=parseFloat(a)/this.rem;return"string"==typeof a&&a.match(/px$/)&&(b+="rem"),b}}(window,window.lib||(window.lib={}));*/
