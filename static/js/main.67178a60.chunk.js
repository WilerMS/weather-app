(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{334:function(n,e,t){"use strict";t.r(e);var a,i,o,s,c,r,l,d,p,b,u,h,m,f,g,x,j=t(3),v=t(80),w=t.n(v),y=(t(89),t(5)),O=t(22),_=t(6),k=Object(_.b)(a||(a=Object(y.a)(["\n    0% {\n        opacity: .5;\n    }\n    100%{\n        opacity: 1;\n    }\n"]))),z=(Object(_.b)(i||(i=Object(y.a)(["\n    0% {\n        opacity: 1;\n    }\n    100%{\n        opacity: .5;\n    }\n"]))),t(2)),C=_.a.form(o||(o=Object(y.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    position: relative;\n    animation: "," .5s ease;\n    animation-direction: alternate;\n"])),k),M=_.a.input(s||(s=Object(y.a)(["\n    color: white;\n    text-shadow: 1px 1px 4px #0000002e;\n    padding: 0;\n    padding-right: 30px;\n    width: 65%;\n    height: 35px;\n    font-size: 25px;\n    font-weight: 500;\n    outline: none;\n    background: none;\n    border: none;\n    font-weight: bold;\n    /*border-bottom: 1px solid #0b272f;*/\n\n    &::placeholder { \n        color: white;\n        opacity: 1; \n    }\n"]))),N=_.a.button(c||(c=Object(y.a)(["\n    color: white;\n    text-shadow: 1px 1px 4px #0000002e;\n    font-size: 25px;\n    background: none;\n    outline: none;\n    border: none;\n    position: absolute;\n    bottom: 0;\n    right: 25px;\n    cursor: pointer;\n    transition: .5s ease all;\n\n    &:hover {\n        transform: scale(1.2);\n    }\n"]))),S=function(n){var e=n.enableFormCity,t=n.setEnableFormCity,a=n.fetchWeather,i=Object(j.useState)(""),o=Object(O.a)(i,2),s=o[0],c=o[1];return Object(z.jsxs)(C,{onSubmit:function(n){n.preventDefault(),t(!e),""!==s&&a(s.toLowerCase()),c("")},children:[Object(z.jsx)(M,{type:"text",onChange:function(n){c(n.target.value)},value:s,placeholder:"Write your city..."}),Object(z.jsx)(N,{type:"submit",children:Object(z.jsx)("i",{className:"fas fa-search"})})]})},F=_.a.p(r||(r=Object(y.a)(["\n    margin: 0;\n    margin-bottom: 3px;\n    width: 65%;\n    height: 30px;\n    font-size: 25px;\n    transition: .3s all ease;\n    font-weight: 500;\n    animation: "," .5s ease;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n\n    @media (min-width: 600px) {\n        font-size: 28px;\n    }\n"])),k),E=_.a.div(l||(l=Object(y.a)(["\n    font-size: 25px;\n    margin-right: 15px;\n    text-shadow: 0px 0px 5px #0000008c;\n    animation: "," .5s ease;\n    margin-left: 30px;\n"])),k),J=function(n){var e=n.name,t=n.country;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(E,{children:Object(z.jsx)("i",{className:"fas fa-map-marker-alt"})}),Object(z.jsx)(F,{children:"\n                    ".concat(e||"","\n                    ").concat(t?", "+t:"","\n            ")})]})},W=function(n){var e=n.setEnableFormCity,t=n.enableFormCity;return Object(z.jsx)(X,{onClick:function(){e(!t)},children:Object(z.jsx)("i",{className:"fas fa-edit"})})},X=_.a.button(d||(d=Object(y.a)(["\n    text-shadow: 0px 0px 5px #0000008d;\n    color: white;\n    background: none;\n    outline: none;\n    border: none;\n    font-size: 25px;\n    position: absolute;\n    bottom: 1px;\n    right: 25px;\n    transition: .5s all ease;\n    cursor: pointer;\n\n    &:hover {\n        transform: scale(1.2);\n    }\n"]))),Y=_.a.div(p||(p=Object(y.a)(["\n    color: white;\n    height: 75px;\n    position: relative;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n    text-shadow: 0px 0px 5px #0000008c;\n"]))),I=function(n){var e=n.weather,t=n.fetchWeather,a=Object(j.useState)(!1),i=Object(O.a)(a,2),o=i[0],s=i[1];return Object(z.jsx)(Y,{children:o?Object(z.jsx)(S,{enableFormCity:o,setEnableFormCity:s,fetchWeather:t}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(J,{name:e.name,country:e.country}),Object(z.jsx)(W,{enableFormCity:o,setEnableFormCity:s})]})})},T=t.p+"static/media/001-cloudyday.3be6b9ca.svg",q=t.p+"static/media/036-night.5bad99a1.svg",A=t.p+"static/media/002-sunny.3548c7e2.svg",B=t.p+"static/media/021-cloudy night.b503ff7a.svg",D=t.p+"static/media/033-rainy day.588fecac.svg",H=t.p+"static/media/011-night.11544d77.svg",P=t.p+"static/media/032-snowy.0083c56e.svg",R=t.p+"static/media/010-night.20420062.svg",L=t.p+"static/media/003-sunny.28d03e9c.svg",G=t.p+"static/media/007-windy.09f7e476.svg",K=t.p+"static/media/022-humidity.a0203bab.svg",Q=t.p+"static/media/024-temperature.e17b1b7f.svg",U=t.p+"static/media/025-temperature.a76fe8ce.svg",V={clouds:[1003,1006,1009],rain:[1063,1072,1195,1198,1201,1204,1210,1150,1153,1168,1171,1180,1183,1186,1189,1192,1195,1198,1201,1204,1207,1240,1243,1246],snow:[1066,1114,1210,1213,1216,1219,1222,1225,1237,1255,1258,1261,1264,1279,1282,1117],fog:[1030,1135,1147],clear:[1e3]},Z=[T,A,D,P,L],$=[q,B,H,R,G],nn=[K,Q,U],en=_.a.div(b||(b=Object(y.a)(["\n    width: 100%;\n    height: 55%;\n    margin-top: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n\n    & > img {\n      max-width: 100%;\n      width: 55%;\n      -webkit-filter: drop-shadow(5px 5px 5px #222);\n      filter: drop-shadow(0px 2px 10px #0000003b);\n    }\n\n    .content__info {\n      width: 100%;\n      text-align: right;\n      position: relative;\n\n        & > h1 {\n            margin: 0;\n            margin-right: 20px;\n            margin-top: 1px;\n            font-size: 160px;\n            color: #d5e1e7;\n            text-shadow: 1px 1px 4px #0000002e;\n            }\n        & > p {\n            margin: 0;\n            position: absolute;\n            right: 15px;\n            bottom: 10px;\n            font-weight: 600;\n            text-shadow: 1px 1px 4px #0000002e;\n            color: white;\n        }\n    }\n"]))),tn=function(n){var e,t,a=n.weather,i=(e=a.now,t=a.main,V.clear.includes(t)?e?Z[1]:$[1]:V.clouds.includes(t)?e?Z[0]:$[0]:V.rain.includes(t)?e?Z[2]:$[2]:V.snow.includes(t)?e?Z[3]:$[3]:V.fog.includes(t)?e?Z[4]:$[4]:void 0);return Object(z.jsxs)(en,{children:[Object(z.jsx)("img",{src:i,alt:""}),Object(z.jsxs)("div",{className:"content__info",children:[Object(z.jsx)("h1",{children:a.temp?Math.round(a.temp)+"\xba":""}),Object(z.jsx)("p",{children:"".concat(a.description?"Description: "+a.description:"")})]})]})},an="#56e2d7",on="#58d5f1",sn="#043338",cn="#041f25",rn=_.a.div(u||(u=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n    \n  background: linear-gradient(to bottom, ",");\n  transition: 1s all ease;\n  animation: "," .5s linear;\n  overflow: hidden;\n  position: relative;\n  z-index: 0;\n\n  @media (min-width: 600px) {\n    width: 80%;\n    height: 90%;\n    max-width: 883px;\n    box-shadow: 0px 0px 10px 0px #00000040;\n    border: 1px solid #008b9a;\n    border-radius: 35px;\n  }\n"])),(function(n){return n.now?"".concat(an,", ").concat(on," "):"".concat(sn,", ").concat(cn)}),k),ln="#ffffffad",dn="#04202600",pn="#ffffff52",bn="#04202600",un=_.a.div(h||(h=Object(y.a)(["\n    float: left;\n    width: 130px;\n    height: 100%;\n    background: white;\n    border-radius: 20px;\n    margin-left: 10px;\n    margin-right: 5px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background: linear-gradient(to bottom, ",");\n\n    & > img {\n        width: 50%;\n        margin-bottom: 10px;\n    }\n\n    & > p {\n        margin: 0;\n        font-weight: bold;\n        color: white;\n        text-shadow: 1px 1px 10px black;\n    }\n"])),(function(n){return"day"===n.now?"".concat(ln,", ").concat(dn," "):"".concat(pn,", ").concat(bn)})),hn=function(n){var e=n.weather,t=n.children;return Object(z.jsx)(un,{now:e.now,children:t})},mn=_.a.div(m||(m=Object(y.a)(["\n    width: 100%;\n    height: 20%;\n    margin-top: 20px;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    display: flex;\n    justify-content: space-evenly;\n    transition: .5s all ease;\n\n    @media (min-width: 600px) {\n        &::-webkit-scrollbar-thumb {\n            background-color: white;\n        }\n        width: 75%;\n        justify-content:flex-start;\n    }\n\n    &::-webkit-scrollbar {\n        background: none;\n        height: 5px;\n    }\n"]))),fn=function(n){var e=n.weather;return Object(z.jsxs)(mn,{children:[Object(z.jsxs)(hn,{weather:e,children:[Object(z.jsx)("img",{src:nn[0],alt:""}),Object(z.jsx)("p",{children:"Humidity"}),Object(z.jsxs)("p",{children:[e.humidity,"%"]})]}),Object(z.jsxs)(hn,{weather:e,children:[Object(z.jsx)("img",{src:nn[1],alt:""}),Object(z.jsx)("p",{children:"Min Temp"}),Object(z.jsx)("p",{children:e.tempMin})]}),Object(z.jsxs)(hn,{weather:e,children:[Object(z.jsx)("img",{src:nn[2],alt:""}),Object(z.jsx)("p",{children:"Max Temp"}),Object(z.jsx)("p",{children:e.tempMax})]})]})},gn=_.a.div(f||(f=Object(y.a)(["\n    width: 100%;\n    height: 70%;\n    max-width: 100%;\n    max-height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: -1;\n\n    & > svg {\n        max-height: 100%;\n        max-width: 100%;\n    }\n"]))),xn=function(n){var e=n.now;return Object(z.jsx)(gn,{children:Object(z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.0",width:"1000.000000pt",height:"1000.000000pt",viewBox:"0 0 1000.000000 1000.000000",preserveAspectRatio:"none",children:Object(z.jsx)("g",{transform:"translate(0.000000,1000.000000) scale(0.100000,-0.100000)",fill:e?"#00aeca94":"#042e33b3",stroke:"none",children:Object(z.jsx)("path",{d:"M0 7470 l0 -2529 72 -103 c500 -717 1162 -1434 1864 -2019 714 -595 1473 -1087 2319 -1504 1677 -826 3502 -1265 5458 -1311 l287 -7 0 5001 0 5002 -5000 0 -5000 0 0 -2530z"})})})})},jn=_.a.img(g||(g=Object(y.a)(["\n    position: absolute;\n    height: 60%;\n    right: -50%;\n    bottom: 0;\n    z-index: 0;\n    opacity: 1;\n    transition: .5s all ease;\n    animation: "," .5s ease;\n"])),k),vn=function(n){n.weather;var e=n.mountain;return Object(z.jsx)(jn,{src:e.current,alt:""})},wn=t(84),yn=t.n(wn),On=t.p+"static/media/cloud.9c779a07.png",_n=t.p+"static/media/rain.4c25c7c5.png",kn='\n{\n    "particles": {\n      "number": {\n        "value": 128,\n        "density": {\n          "enable": true,\n          "value_area": 1104.8066982851817\n        }\n      },\n      "color": {\n        "value": "#ffffff"\n      },\n      "shape": {\n        "type": "circle",\n        "stroke": {\n          "width": 0,\n          "color": "#000000"\n        },\n        "polygon": {\n          "nb_sides": 5\n        },\n        "image": {\n          "src": "img/github.svg",\n          "width": 100,\n          "height": 100\n        }\n      },\n      "opacity": {\n        "value": 1,\n        "random": true,\n        "anim": {\n          "enable": true,\n          "speed": 1,\n          "opacity_min": 0,\n          "sync": false\n        }\n      },\n      "size": {\n        "value": 3,\n        "random": true,\n        "anim": {\n          "enable": false,\n          "speed": 4,\n          "size_min": 0.3,\n          "sync": false\n        }\n      },\n      "line_linked": {\n        "enable": false,\n        "distance": 150,\n        "color": "#ffffff",\n        "opacity": 0.4,\n        "width": 1\n      },\n      "move": {\n        "enable": true,\n        "speed": 1,\n        "direction": "none",\n        "random": true,\n        "straight": false,\n        "out_mode": "out",\n        "bounce": false,\n        "attract": {\n          "enable": false,\n          "rotateX": 600,\n          "rotateY": 600\n        }\n      }\n    },\n    "interactivity": {\n      "detect_on": "canvas",\n      "events": {\n        "onhover": {\n          "enable": true,\n          "mode": "bubble"\n        },\n        "onclick": {\n          "enable": true,\n          "mode": "repulse"\n        },\n        "resize": true\n      },\n      "modes": {\n        "grab": {\n          "distance": 400,\n          "line_linked": {\n            "opacity": 1\n          }\n        },\n        "bubble": {\n          "distance": 250,\n          "size": 0,\n          "duration": 2,\n          "opacity": 0,\n          "speed": 3\n        },\n        "repulse": {\n          "distance": 400,\n          "duration": 0.4\n        },\n        "push": {\n          "particles_nb": 4\n        },\n        "remove": {\n          "particles_nb": 2\n        }\n      }\n    },\n    "retina_detect": true\n  }\n',zn='\n  {\n    "particles": {\n      "number": {\n        "value": 400,\n        "density": {\n          "enable": true,\n          "value_area": 800\n        }\n      },\n      "color": {\n        "value": "#fff"\n      },\n      "shape": {\n        "type": "circle",\n        "stroke": {\n          "width": 0,\n          "color": "#000000"\n        },\n        "polygon": {\n          "nb_sides": 4\n        },\n        "image": {\n          "src": "img/github.svg",\n          "width": 100,\n          "height": 100\n        }\n      },\n      "opacity": {\n        "value": 0.5,\n        "random": true,\n        "anim": {\n          "enable": false,\n          "speed": 1,\n          "opacity_min": 0.1,\n          "sync": false\n        }\n      },\n      "size": {\n        "value": 8,\n        "random": true,\n        "anim": {\n          "enable": false,\n          "speed": 40,\n          "size_min": 0.1,\n          "sync": false\n        }\n      },\n      "line_linked": {\n        "enable": false,\n        "distance": 500,\n        "color": "#ffffff",\n        "opacity": 0.4,\n        "width": 2\n      },\n      "move": {\n        "enable": true,\n        "speed": 1,\n        "direction": "bottom",\n        "random": false,\n        "straight": false,\n        "out_mode": "out",\n        "bounce": false,\n        "attract": {\n          "enable": false,\n          "rotateX": 600,\n          "rotateY": 1200\n        }\n      }\n    },\n    "interactivity": {\n      "detect_on": "canvas",\n      "events": {\n        "onhover": {\n          "enable": false,\n          "mode": "bubble"\n        },\n        "onclick": {\n          "enable": false,\n          "mode": "repulse"\n        },\n        "resize": true\n      },\n      "modes": {\n        "grab": {\n          "distance": 400,\n          "line_linked": {\n            "opacity": 0.5\n          }\n        },\n        "bubble": {\n          "distance": 400,\n          "size": 4,\n          "duration": 0.3,\n          "opacity": 1,\n          "speed": 3\n        },\n        "repulse": {\n          "distance": 200,\n          "duration": 0.4\n        },\n        "push": {\n          "particles_nb": 4\n        },\n        "remove": {\n          "particles_nb": 2\n        }\n      }\n    },\n    "retina_detect": true\n  }\n',Cn='\n  {\n    "particles": {\n      "number": {\n        "value": 38,\n        "density": {\n          "enable": true,\n          "value_area": 1736.124811591\n        }\n      },\n      "color": {\n        "value": "#ffffff"\n      },\n      "shape": {\n        "type": "polygon",\n        "stroke": {\n          "width": 0,\n          "color": "#000"\n        },\n        "polygon": {\n          "nb_sides": 6\n        },\n        "image": {\n          "src": "img/github.svg",\n          "width": 100,\n          "height": 100\n        }\n      },\n      "opacity": {\n        "value": 0.2683101981549727,\n        "random": true,\n        "anim": {\n          "enable": false,\n          "speed": 1,\n          "opacity_min": 0.1,\n          "sync": false\n        }\n      },\n      "size": {\n        "value": 19.728691040806815,\n        "random": true,\n        "anim": {\n          "enable": true,\n          "speed": 10,\n          "size_min": 40,\n          "sync": false\n        }\n      },\n      "line_linked": {\n        "enable": false,\n        "distance": 200,\n        "color": "#ffffff",\n        "opacity": 1,\n        "width": 2\n      },\n      "move": {\n        "enable": true,\n        "speed": 3.4,\n        "direction": "none",\n        "random": false,\n        "straight": false,\n        "out_mode": "out",\n        "bounce": false,\n        "attract": {\n          "enable": false,\n          "rotateX": 600,\n          "rotateY": 1200\n        }\n      }\n    },\n    "interactivity": {\n      "detect_on": "canvas",\n      "events": {\n        "onhover": {\n          "enable": false,\n          "mode": "grab"\n        },\n        "onclick": {\n          "enable": false,\n          "mode": "push"\n        },\n        "resize": true\n      },\n      "modes": {\n        "grab": {\n          "distance": 400,\n          "line_linked": {\n            "opacity": 1\n          }\n        },\n        "bubble": {\n          "distance": 400,\n          "size": 40,\n          "duration": 2,\n          "opacity": 8,\n          "speed": 3\n        },\n        "repulse": {\n          "distance": 200,\n          "duration": 0.4\n        },\n        "push": {\n          "particles_nb": 4\n        },\n        "remove": {\n          "particles_nb": 2\n        }\n      }\n    },\n    "retina_detect": true\n  }\n',Mn='\n  {\n    "particles": {\n      "number": {\n        "value": 8,\n        "density": {\n          "enable": false,\n          "value_area": 800\n        }\n      },\n      "color": {\n        "value": "#1b1e34"\n      },\n      "shape": {\n        "type": "image",\n        "stroke": {\n          "width": 0,\n          "color": "#000"\n        },\n        "polygon": {\n          "nb_sides": 6\n        },\n        "image": {\n          "src": "https://i.pinimg.com/originals/a0/e2/58/a0e2587a7e91830aed9a530bb26d4a3c.png",\n          "width": 100,\n          "height": 100\n        }\n      },\n      "opacity": {\n        "value": 0.5,\n        "random": true,\n        "anim": {\n          "enable": false,\n          "speed": 1,\n          "opacity_min": 0.1,\n          "sync": false\n        }\n      },\n      "size": {\n        "value": 78.91476416322726,\n        "random": false,\n        "anim": {\n          "enable": true,\n          "speed": 10,\n          "size_min": 40,\n          "sync": false\n        }\n      },\n      "line_linked": {\n        "enable": false,\n        "distance": 200,\n        "color": "#ffffff",\n        "opacity": 1,\n        "width": 2\n      },\n      "move": {\n        "enable": true,\n        "speed": 1.9,\n        "direction": "left",\n        "random": false,\n        "straight": false,\n        "out_mode": "out",\n        "bounce": false,\n        "attract": {\n          "enable": false,\n          "rotateX": 600,\n          "rotateY": 1200\n        }\n      }\n    },\n    "interactivity": {\n      "detect_on": "canvas",\n      "events": {\n        "onhover": {\n          "enable": false,\n          "mode": "grab"\n        },\n        "onclick": {\n          "enable": false,\n          "mode": "push"\n        },\n        "resize": true\n      },\n      "modes": {\n        "grab": {\n          "distance": 400,\n          "line_linked": {\n            "opacity": 1\n          }\n        },\n        "bubble": {\n          "distance": 400,\n          "size": 40,\n          "duration": 2,\n          "opacity": 8,\n          "speed": 3\n        },\n        "repulse": {\n          "distance": 200,\n          "duration": 0.4\n        },\n        "push": {\n          "particles_nb": 4\n        },\n        "remove": {\n          "particles_nb": 2\n        }\n      }\n    },\n    "retina_detect": true\n  }\n',Nn='\n  {\n    "particles": {\n      "number": {\n        "value": 350,\n        "density": {\n          "enable": true,\n          "value_area": 1420.4657549380909\n        }\n      },\n      "color": {\n        "value": "#fff"\n      },\n      "shape": {\n        "type": "image",\n        "stroke": {\n          "width": 0,\n          "color": "#000000"\n        },\n        "polygon": {\n          "nb_sides": 4\n        },\n        "image": {\n          "src": "https://i.pinimg.com/originals/89/6e/b6/896eb63c1827bbf6419fa31ef27e2462.png",\n          "width": 160,\n          "height": 160\n        }\n      },\n      "opacity": {\n        "value": 0.5,\n        "random": true,\n        "anim": {\n          "enable": false,\n          "speed": 1,\n          "opacity_min": 0.1,\n          "sync": false\n        }\n      },\n      "size": {\n        "value": 10,\n        "random": true,\n        "anim": {\n          "enable": false,\n          "speed": 40,\n          "size_min": 0.1,\n          "sync": false\n        }\n      },\n      "line_linked": {\n        "enable": false,\n        "distance": 500,\n        "color": "#ffffff",\n        "opacity": 0.4,\n        "width": 2\n      },\n      "move": {\n        "enable": true,\n        "speed": 6,\n        "direction": "bottom",\n        "random": false,\n        "straight": false,\n        "out_mode": "out",\n        "bounce": false,\n        "attract": {\n          "enable": false,\n          "rotateX": 600,\n          "rotateY": 1200\n        }\n      }\n    },\n    "interactivity": {\n      "detect_on": "canvas",\n      "events": {\n        "onhover": {\n          "enable": true,\n          "mode": "bubble"\n        },\n        "onclick": {\n          "enable": true,\n          "mode": "repulse"\n        },\n        "resize": true\n      },\n      "modes": {\n        "grab": {\n          "distance": 400,\n          "line_linked": {\n            "opacity": 0.5\n          }\n        },\n        "bubble": {\n          "distance": 400,\n          "size": 4,\n          "duration": 0.3,\n          "opacity": 1,\n          "speed": 3\n        },\n        "repulse": {\n          "distance": 200,\n          "duration": 0.4\n        },\n        "push": {\n          "particles_nb": 4\n        },\n        "remove": {\n          "particles_nb": 2\n        }\n      }\n    },\n    "retina_detect": true\n  }\n';kn=JSON.parse(kn),zn=JSON.parse(zn),Cn=JSON.parse(Cn),Mn=JSON.parse(Mn),(Nn=JSON.parse(Nn)).particles.shape.image.src=_n,Mn.particles.shape.image.src=On;var Sn,Fn=_.a.div(x||(x=Object(y.a)(["\n    top: 0;\n    width: 200%;\n    position: absolute;\n    overflow: hidden;\n    z-index: -1;\n"]))),En=function(n){var e=n.now,t=n.main,a=Mn;return V.clear.includes(t)?a=e?Cn:kn:V.clouds.includes(t)?a=Mn:V.rain.includes(t)?a=Nn:V.snow.includes(t)?a=zn:V.fog.includes(t)&&(a=kn),Object(z.jsx)(Fn,{children:Object(z.jsx)(yn.a,{className:"particles",params:a})})},Jn=_.a.div(Sn||(Sn=Object(y.a)(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n"]))),Wn=function(n){var e=n.weather,t=n.mountain;return Object(z.jsxs)(Jn,{className:"background",children:[Object(z.jsx)(xn,{now:e.now}),Object(z.jsx)(vn,{mountain:t,weather:e}),Object(z.jsx)(En,{now:e.now,main:e.main})]})},Xn=[t.p+"static/media/001.5af353b1.png",t.p+"static/media/002.790aef9a.png",t.p+"static/media/003.ff24bfc6.png",t.p+"static/media/004.7da0d612.png",t.p+"static/media/005.8eca4206.png",t.p+"static/media/006.1d77244f.png",t.p+"static/media/007.a12f47b6.png",t.p+"static/media/008.7db6cce3.png",t.p+"static/media/009.043fb78e.png"],Yn=40.4167,In=-3.70325;navigator.geolocation.getCurrentPosition((function(n){Yn=n.coords.latitude,In=n.coords.longitude}));var Tn="56c032a9d9864e9496e110931212304",qn=function(){var n=Object(j.useState)({}),e=Object(O.a)(n,2),t=e[0],a=e[1],i=Object(j.useRef)(Xn[Math.floor(9*Math.random())]);return{fetchWeather:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=n||localStorage.getItem("lastCity"),t="https://api.weatherapi.com/v1/forecast.json?key=".concat(Tn,"&days=1&aqi=no&alerts=no"),o=e||"".concat(Yn,",").concat(In);fetch("".concat(t,"&q=").concat(o)).then((function(n){return n.json()})).then((function(n){var e=n.location,t=n.current,o=n.forecast;console.log(o);var s={name:e.name,country:e.country,temp:t.temp_c,humidity:t.humidity,unixTime:e.localtime_epoch,description:t.condition.text,main:t.condition.code,tempMax:o.forecastday[0].day.maxtemp_c,tempMin:o.forecastday[0].day.mintemp_c,now:t.is_day,hours:[]};i.current=Xn[Math.floor(9*Math.random())],a(s),localStorage.setItem("lastCity","".concat(s.name,", ").concat(s.country))})).catch((function(n){return console.log(n)}))},weather:t,mountain:i}},An=function(){var n=qn(),e=n.fetchWeather,t=n.weather,a=n.mountain;return Object(j.useEffect)(e,[]),Object(z.jsxs)(rn,{className:"App",now:t.now,children:[Object(z.jsx)(I,{fetchWeather:e,weather:t}),Object(z.jsx)(tn,{weather:t}),Object(z.jsx)(fn,{weather:t}),Object(z.jsx)(Wn,{weather:t,mountain:a})]})},Bn=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(Bn,"px")),w.a.render(Object(z.jsx)(An,{}),document.getElementById("root"))},89:function(n,e,t){}},[[334,1,2]]]);
//# sourceMappingURL=main.67178a60.chunk.js.map