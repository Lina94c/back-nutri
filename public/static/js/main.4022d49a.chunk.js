(this["webpackJsonpback-nutri"]=this["webpackJsonpback-nutri"]||[]).push([[0],{170:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(24),o=t.n(r),s=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,180)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),a(n),i(n),r(n),o(n)}))},c=t(36),l=t.n(c),d=t(63),p=t(60);var u,j,x,m,b,h,f,g,O,y,v,w,k,z,F,C,S,q,M,I,N,A,P,R,B,D,G,J,T,L,W,E,U,H,K,_=function(n,e){var t=localStorage.getItem(e),i=t?JSON.parse(t):n,r=Object(a.useState)(i),o=Object(p.a)(r,2),s=o[0],c=o[1];return Object(a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(s))}),[s,e]),[s,c]},V=t(115),Q=t.n(V).a.create({baseURL:"/api/auth",withCredentials:!0}),Y=function(n){return Q.post("/signup",n)},X=function(n){return Q.post("/login",n)},Z=function(n){return Q.get("/logout")},$=function(n){return Q.get("/session")},nn=t(131),en=t(4),tn=Object(a.createContext)(),an=function(n){var e=_(null,"user"),t=Object(p.a)(e,2),i=t[0],r=t[1];function o(){return(o=Object(d.a)(l.a.mark((function n(e){var t,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,X(e);case 3:t=n.sent,a=t.data,r(a),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),nn.b.error(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function s(){return(s=Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Z();case 2:r(null);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function n(){return(n=Object(d.a)(l.a.mark((function n(){var e,t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,$();case 2:e=n.sent,(t=e.data)&&r(t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[r]),Object(en.jsx)(tn.Provider,{value:{user:i,login:function(n){return o.apply(this,arguments)},logout:function(){return s.apply(this,arguments)},setUser:r},children:n.children})},rn=t(30),on=t(21),sn=t(8),cn=t(9),ln=cn.a.nav(u||(u=Object(sn.a)(["\n    background: rgb(211,232,186);\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 0.9rem;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n    @media screen and (max-width: 960px) {\n        transition: 0.8s all ease;\n    }\n"]))),dn=cn.a.div(j||(j=Object(sn.a)(["\n    display: flex;\n    justify-content: space-between;\n    height: 80px;\n    z-index: 1;\n    width: 100%;\n    padding: 0 24 px;\n    max-width: 1100px; \n"]))),pn=Object(cn.a)(rn.b)(x||(x=Object(sn.a)(["\n    color: black;\n    justify-self: flex-start;\n    cursor: pointer;\n    font-size: 2.5rem;\n    font-family:'Montez', cursive;\n    display: flex;\n    align-items: center;\n    margin-left: 24px;\n    font-weight: bold;\n    text-decoration: none;\n"]))),un=cn.a.div(m||(m=Object(sn.a)(["\n    display: none;\n@media screen and (max-width: 768px) {\n    display: block; \n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1 rem;\n    cursor: pointer;\n    color: #fff;\n}\n"]))),jn=cn.a.ul(b||(b=Object(sn.a)(["\n    display: flex;\n    align-items: center;\n    list-style: none;\n    text-align: center;\n    margin-right: -22px;\n    @media screen and (max-width: 768px){\n        display: none;\n    }\n"]))),xn=cn.a.li(h||(h=Object(sn.a)(["\n    height: 80px;\n"]))),mn=Object(cn.a)(rn.b)(f||(f=Object(sn.a)(["\n    color:black;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    font-family: 'Montserrat', sans-serif;\n    padding: 0 1rem;\n    height: 100%;\n    cursor: pointer;\n    &.active {\n        border-bottom: 3px solid #fffe11b;\n        \n    }\n"]))),bn=cn.a.nav(g||(g=Object(sn.a)(["\n    display: flex;\n    align-items: center;\n    @media screen and (max-width: 768px) {\n        display:none;\n    }\n"]))),hn=Object(cn.a)(rn.b)(O||(O=Object(sn.a)(["\n    border-radius: 50px;\n    background: #c6aa8e;\n    white-space: nowrap;\n    padding: 10px 22px;\n    font-family: 'Montserrat', sans-serif;\n    color: #fff;\n    font-size: 12px;\n    outline:none;\n    border:none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n    &:hover {\n        transition: all 0.2s ease-in-out;\n        background: #fff;\n        color: #010606;\n    }\n    "]))),fn=function(n){var e=n.toggle,t=(n.user,n.logout);return Object(en.jsx)(en.Fragment,{children:Object(en.jsx)(ln,{children:Object(en.jsxs)(dn,{children:[Object(en.jsx)(pn,{to:"/",children:"NutriSmart"}),Object(en.jsx)(un,{onClick:e}),Object(en.jsxs)(jn,{children:[Object(en.jsx)(xn,{children:Object(en.jsx)(mn,{to:"about",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"Nosotros"})}),Object(en.jsx)(xn,{children:Object(en.jsx)(mn,{to:"discover",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"Planes"})}),Object(en.jsx)(xn,{children:Object(en.jsx)(mn,{to:"alimentos",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"Alimentos"})}),Object(en.jsx)(xn,{children:Object(en.jsx)(mn,{to:"/signup",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"Registrate"})}),Object(en.jsx)(xn,{children:Object(en.jsx)(mn,{to:"/",onClick:t,smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,children:"Salir"})})]}),Object(en.jsx)(bn,{children:Object(en.jsx)(hn,{to:"/login",children:"Ingresar"})})]})})})},gn=t.p+"static/media/happy.068eb548.mp4",On=Object(cn.a)(rn.b)(y||(y=Object(sn.a)(["\n    font-family:'Montserrat', sans-serif;\n    border-radius: 50px;\n    background:rgb(211,232,186);\n    };\n    padding:14px 48px;\n    color: black;\n    outline: none;\n    border: none;\n    display: flex;\n    justify-content: center;\n\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n    &:hover {\n        transition: all 0.2s ease-in-out;\n        background: #fff ;\n        color: black;\n    };\n    }\n"]))),yn=cn.a.div(v||(v=Object(sn.a)(["\n    background: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 400px;\n    z-index: 1;\n    "]))),vn=cn.a.div(w||(w=Object(sn.a)(["\n    top: 0;\n    bottom: 0;\n    width: cover;\n    height: 100%;\n"]))),wn=cn.a.video(k||(k=Object(sn.a)(["\n    width: 100%;\n    height: 100%;\n    -o-object-fit:cover;\n    object-fit: cover;\n    background: black;\n"]))),kn=cn.a.div(z||(z=Object(sn.a)(["\n    z-index: 3;\n    position: absolute;\n    padding: 8px 24px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n"]))),zn=cn.a.h1(F||(F=Object(sn.a)(["\n    font-family: 'Montserrat', sans-serif;\n    color: #fff;\n    font-size: 48px;\n    text-align: center;\n    @media screen and (max-width: 768px) {\n        font-size: 40px;\n    }\n    @media screen and (max-width: 480px) {\n        font-size: 32px;\n    }\n"]))),Fn=cn.a.p(C||(C=Object(sn.a)(["\n    font-family: 'Montserrat', sans-serif;\n    margin-top: 24px;\n    color: #fff;\n    font-size: 24px;\n    text-align: center;\n    \n    \n   \n    @media screen and (max-width: 768px) {\n        font-size: 24px;\n    }\n    @media screen and (max-width: 480px) {\n        font-size: 18px;\n    }\n"]))),Cn=cn.a.div(S||(S=Object(sn.a)(["\n    margin-top: 32px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),Sn=function(){var n=Object(a.useState)(!1),e=Object(p.a)(n,2);e[0],e[1];return Object(en.jsxs)(yn,{children:[Object(en.jsx)(vn,{children:Object(en.jsx)(wn,{autoPlay:!0,loop:!0,muted:!0,src:gn,type:"video/mp4"})}),Object(en.jsxs)(kn,{children:[Object(en.jsx)(zn,{children:"Toma el control de tu vida"}),Object(en.jsx)(Fn,{children:"Alcanza tus objetivos y vive m\xe1s saludable"}),Object(en.jsx)(Cn,{children:Object(en.jsx)(On,{to:"signup",children:"Registrate"})})]})]})},qn=cn.a.main(q||(q=Object(sn.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]))),Mn=function(){return Object(en.jsx)(qn,{children:Object(en.jsx)(Sn,{})})},In=t(100),Nn=t(53),An=t(54),Pn=t(61),Rn=t(59),Bn=t(99),Dn=t(176),Gn=t(174),Jn=t(175),Tn=t(177),Ln=t(179),Wn=t(178),En=function(n){var e=n.foods,t=n.selectedFoods,a=n.setSelectedFoods;return Object(en.jsx)(Dn.b,{size:"small",itemLayout:"horizontal",dataSource:e,renderItem:function(n){return Object(en.jsx)(Dn.b.Item,{extra:Object(en.jsxs)(Gn.a,{className:"field has-addons",children:[Object(en.jsx)(Jn.a,{span:16,className:"control",children:Object(en.jsx)(Tn.a,{size:"large",min:1,defaultValue:1,id:n.name.replace(" ","_"),className:"input"})}),Object(en.jsx)(Jn.a,{span:8,className:"control",children:Object(en.jsx)(Ln.a,{size:"large",type:"primary",className:"button is-info",onClick:function(e){return function(n){var e=t.map((function(e){return e.name===n.replace("_"," ")&&(e.quantity=parseInt(e.quantity)+parseInt(document.getElementById(n).value)),e}));a(e)}(n.name.replace(" ","_"))},children:"+"})})]}),children:Object(en.jsx)(Dn.b.Item.Meta,{avatar:Object(en.jsx)(Wn.a,{shape:"square",size:75,src:n.image}),title:n.name,description:Object(en.jsxs)("small",{children:[n.calories," cal"]})})})}})},Un=t(127),Hn=function(n){Object(Pn.a)(t,n);var e=Object(Rn.a)(t);function t(n){var a;return Object(Nn.a)(this,t),(a=e.call(this,n)).displayForm=function(){var n=!a.state.showForm;a.setState({showForm:n})},a.handleChange=function(n){var e=n.target.name;a.setState(Object(Un.a)({},e,n.target.value))},a.handleSubmission=function(n){n.preventDefault(),a.props.addFood({name:a.state.name,calories:a.state.calories,image:a.state.image}),a.setState({showForm:!1,name:"",calories:0,image:""})},a.state={showForm:!1,name:"",calories:0,image:""},a}return Object(An.a)(t,[{key:"render",value:function(){var n={display:this.state.showForm?"block":"none"};return Object(en.jsxs)("div",{children:[Object(en.jsx)("button",{onClick:this.displayForm,children:this.state.showForm?"Hide form":"Display form"}),Object(en.jsxs)("form",{onSubmit:this.handleSubmission,style:n,children:[Object(en.jsx)("label",{children:"Name:"}),Object(en.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(en.jsx)("label",{children:"Calories:"}),Object(en.jsx)("input",{type:"number",name:"calories",value:this.state.calories,onChange:this.handleChange}),Object(en.jsx)("label",{children:"Image:"}),Object(en.jsx)("input",{type:"text",name:"image",value:this.state.image,onChange:this.handleChange}),Object(en.jsx)("button",{children:"Submit"})]})]})}}]),t}(a.Component),Kn=function(n){Object(Pn.a)(t,n);var e=Object(Rn.a)(t);function t(n){var a;return Object(Nn.a)(this,t),(a=e.call(this,n)).handleSearchInput=function(n){var e=n.target.value;a.setState({searchInput:e}),a.props.filterFood(e)},a.state={searchInput:""},a}return Object(An.a)(t,[{key:"render",value:function(){return Object(en.jsxs)("div",{children:[Object(en.jsx)("label",{children:"Search:"}),Object(en.jsx)("input",{type:"text",name:"search",value:this.state.searchInput,onChange:this.handleSearchInput})]})}}]),t}(a.Component),_n=function(n){Object(Pn.a)(t,n);var e=Object(Rn.a)(t);function t(){var n;Object(Nn.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=e.call.apply(e,[this].concat(i))).state={foods:Bn,displayedFoods:Object(In.a)(Bn)},n.AddFoodhandle=function(e){var t=[e].concat(Object(In.a)(n.state.foods));n.setState({foods:t,displayedFoods:t})},n.handleFilterFood=function(e){var t=n.state.foods.filter((function(n){return n.name.toUpperCase().includes(e.toUpperCase())}));n.setState({displayedFoods:t})},n}return Object(An.a)(t,[{key:"render",value:function(){var n=this.state.displayedFoods.map((function(n){return Object(en.jsx)(En,{food:n},n.name)}));return Object(en.jsxs)("div",{className:"App",children:[Object(en.jsx)(Kn,{filterFood:this.handleFilterFood}),Object(en.jsx)(Hn,{addFood:this.AddFoodhandle}),n]})}}]),t}(i.a.Component),Vn=t.p+"static/media/nature.e7422395.png",Qn=cn.a.div(M||(M=Object(sn.a)(["\n    background-image: url(",");\n    position:inherit;\n    left: 0;\n    right: 0;\n    \n        "])),Vn),Yn=cn.a.div(I||(I=Object(sn.a)(["\n        padding:40px;\n        height: 50%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        @media screen and (max-width: 300px) {\n        }\n        "]))),Xn=cn.a.div(N||(N=Object(sn.a)(["\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            @media screen and (max-width: 480px) {\n                padding: 10px;\n            }\n        "]))),Zn=cn.a.form(A||(A=Object(sn.a)(["\n        background: #ffff;\n        max-width: 400px;\n        height: auto;\n        width: 100%;\n        z-index: 1;\n        display: grid;\n        margin: 0 auto;\n        padding: 10px 32px;\n        border-radius: 20px;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);\n        @media screen and (max-width: 400px) {\n            padding: 32px 32px;\n        }\n        "]))),$n=cn.a.h1(P||(P=Object(sn.a)(["\n            font-family:'Montserrat', sans-serif;\n            margin-bottom: 40px;\n            font-size: 20px;\n            font-weight: 400;\n            text-align: center;\n        "]))),ne=cn.a.label(R||(R=Object(sn.a)(["\n        margin-bottom: 8px;\n        font-size: 13px;\n        font-family: 'Montserrat', sans-serif;\n        color: #red;\n        "]))),ee=cn.a.input(B||(B=Object(sn.a)(["\n        padding: 10px 10px;\n        margin-bottom: 32px;\n        border-width: thin;\n        font-family: 'Montserrat', sans-serif;\n        border-radius: 4px;\n        outline:none;\n        "]))),te=cn.a.button(D||(D=Object(sn.a)(["\n            background: rgb(211,232,186);\n            max-width: 130px;\n            padding: 16px 0;\n            border: none;\n            border-radius: 50px;\n            color: black;\n            font-size: 12px;\n            font-family:'Montserrat', sans-serif;\n            border:none;\n            cursor: pointer;\n            transition: all 0.2s ease-in-out;\n            text-decoration: none;\n            &:hover {\n                transition: all 0.2s ease-in-out;\n                background: #c6aa8e;\n                color: white;\n            }\n            "]))),ae=cn.a.span(G||(G=Object(sn.a)(["\n            text-align: ClientRect;\n            font-family:'Montserrat', sans-serif;\n            margin-top: 24px;\n            color: #333333;\n            font-size: 13px;\n        "]))),ie=function(){return Object(en.jsx)(en.Fragment,{children:Object(en.jsx)(Qn,{children:Object(en.jsx)(Yn,{children:Object(en.jsx)(Xn,{children:Object(en.jsxs)(Zn,{action:"#",children:[Object(en.jsx)($n,{children:"Inicia sesi\xf3n"}),Object(en.jsx)(ne,{htmlFor:"for",children:"Email"}),Object(en.jsx)(ee,{type:"email",required:!0}),Object(en.jsx)(ne,{htmlFor:"for",children:"Password"}),Object(en.jsx)(ee,{type:"password",required:!0}),Object(en.jsx)(te,{type:"submit",children:"Continuar"}),Object(en.jsx)(ae,{children:"\xbfOlivdaste tu contrase\xf1a?"})]})})})})})},re=t(128),oe=t.n(re),se=cn.a.div(J||(J=Object(sn.a)(["\n    background-image: url(",");\n    position:inherit;\n    left: 0;\n    right: 0;\n        "])),Vn),ce=cn.a.div(T||(T=Object(sn.a)(["\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    @media screen and (max-width: 300px) {\n    }\n    "]))),le=cn.a.div(L||(L=Object(sn.a)(["\n        margin-top:40px;\n        margin-bottom:40px;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        @media screen and (max-width: 480px) {\n            padding: 10px;\n        }\n    "]))),de=cn.a.form(W||(W=Object(sn.a)(["\n    background: #ffff;\n    max-width: 400px;\n    height: auto;\n    width: 50%;\n    z-index: 1;\n    display: grid;\n    margin: 0 auto;\n    padding: 10px 32px;\n    border-radius: 20px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);\n    @media screen and (max-width: 400px) {\n        padding: 32px 32px;\n    }\n    "]))),pe=cn.a.h1(E||(E=Object(sn.a)(["\n        margin-bottom: 10px;\n        font-family: 'Montserrat', sans-serif;\n        color: #333333;\n        font-size: 20px;\n        font-weight: 400;\n        text-align: center;\n    "]))),ue=cn.a.label(U||(U=Object(sn.a)(["\n    margin-bottom: 8px;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 13px;\n    "]))),je=cn.a.input(H||(H=Object(sn.a)(["\n    padding: 10px 10px;\n    margin-bottom: 32px;\n    border-width: thin;\n    font-family: 'Montserrat', sans-serif;\n    outline:none;\n    border-radius: 4px;\n    "]))),xe=cn.a.button(K||(K=Object(sn.a)(["\n        background: rgb(211,232,186);\n        max-width: 130px;\n        padding: 16px 0;\n        border: none;\n        border-radius: 50px;\n        color: black;\n        font-size: 12px;\n        font-family:'Montserrat', sans-serif;\n        border:none;\n        cursor: pointer;\n        transition: all 0.2s ease-in-out;\n        text-decoration: none;\n        &:hover {\n            transition: all 0.2s ease-in-out;\n            background: #c6aa8e;\n            color: white;\n        }\n        "])));var me,be,he,fe,ge,Oe,ye,ve,we,ke,ze,Fe=function(){function n(){return(n=Object(d.a)(l.a.mark((function n(e){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return oe.a.preventDefault(),n.prev=1,n.next=4,Y(e);case 4:nn.b.success("Account created"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),nn.b.error(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))).apply(this,arguments)}return Object(en.jsx)(se,{children:Object(en.jsx)(ce,{children:Object(en.jsx)(le,{children:Object(en.jsxs)(de,{onSubmit:function(e){return n.apply(this,arguments)},children:[Object(en.jsx)(pe,{children:"Crea tu usuario"}),Object(en.jsx)(ue,{htmlFor:"for",children:"Nombre usuario"}),Object(en.jsx)(je,{type:"text",name:"username",id:"username",required:!0}),Object(en.jsx)(ue,{htmlFor:"for",children:"e-mail"}),Object(en.jsx)(je,{type:"email",required:!0}),Object(en.jsx)(ue,{htmlFor:"for",children:"Password"}),Object(en.jsx)(je,{type:"password",required:!0}),Object(en.jsx)(xe,{children:"Registrar"})]})})})})},Ce=cn.a.footer(me||(me=Object(sn.a)(["\n    background-color:#c6aa8e;\n"]))),Se=cn.a.div(be||(be=Object(sn.a)(["\n    padding: 10px 4px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-width: 1200px;\n    margin: 0 auto;\n"]))),qe=cn.a.div(he||(he=Object(sn.a)(["\n    display: flex;\n    justify-content: center;\n    @media screen and (max-width: 820px) {\n        padding-top: 20px;\n    }\n"]))),Me=cn.a.div(fe||(fe=Object(sn.a)(["\n    display: flex; \n    @media screen and (max-width: 820px) {\n        flex-direction: column;\n    }\n"]))),Ie=cn.a.div(ge||(ge=Object(sn.a)(["\n    display: flex;\n    flex-direction: column;\n    font-family:'Montserrat', sans-serif;\n    align-items: flex-start;\n    margin: 16px;\n    text-aling: left;\n    width: 100px;\n    box-sizing: border-box;\n    color: #fff;\n    @media screen and (max-width: 420px) {\n        margin: 0;\n        padding: 10px;\n        width: 100%;\n    }\n"]))),Ne=cn.a.h1(Oe||(Oe=Object(sn.a)(["\n    font-size: 14px;\n    font-family:'Montserrat', sans-serif;\n    margin-bottom: 16px;\n"]))),Ae=Object(cn.a)(rn.b)(ye||(ye=Object(sn.a)(["\n    color: #fff;\n    text-decoration: none;\n    margin-bottom: 0.5rem;\n    font-size: 12px;\n    font-family:'Montserrat', sans-serif;\n    &:hover {\n        color: #ffe11b;\n        transition: 0.3s ease-out\n    }\n"]))),Pe=cn.a.section(ve||(ve=Object(sn.a)(["\n    max-width: 1000px;\n    width: 100%;\n"]))),Re=cn.a.div(we||(we=Object(sn.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-width: 1100px;\n    margin: 40px auto 0 auto;\n@media screen and (max-width: 820px){\n    flex-direction: column;\n}\n"]))),Be=Object(cn.a)(rn.b)(ke||(ke=Object(sn.a)(["\n    color: #fff;\n    font-family:'Montez', cursive;\n    justify-self: start;\n    cursor: pointer;\n    text-decoration: none;\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    margin-bottom: 16px;\n    font-weight: bold;\n"]))),De=cn.a.small(ze||(ze=Object(sn.a)(["\n    color: #fff;\n    font-family:'Montserrat', sans-serif;\n    margin-bottom: 16px;\n"])));var Ge=function(){return Object(en.jsx)(Ce,{children:Object(en.jsxs)(Se,{children:[Object(en.jsxs)(qe,{children:[Object(en.jsx)(Me,{children:Object(en.jsxs)(Ie,{children:[Object(en.jsx)(Ne,{children:"Sobre nosotros"}),Object(en.jsx)(Ae,{to:"/signin",children:"Testimonios"}),Object(en.jsx)(Ae,{to:"/signin",children:"Preguntas frecuentes"}),Object(en.jsx)(Ae,{to:"/signin",children:"T\xe9rminos y condiciones"}),Object(en.jsx)(Ae,{to:"/signin",children:"Sugerencias"})]})}),Object(en.jsx)(Me,{children:Object(en.jsxs)(Ie,{children:[Object(en.jsx)(Ne,{children:"Cont\xe1ctanos"}),Object(en.jsx)(Ae,{to:"/signin",children:"Contacto"}),Object(en.jsx)(Ae,{to:"/signin",children:"Suporte"}),Object(en.jsx)(Ae,{to:"/signin",children:"Reviews"}),Object(en.jsx)(Ae,{to:"/signin",children:"Asesor\xedas"})]})})]}),Object(en.jsx)(Pe,{children:Object(en.jsxs)(Re,{children:[Object(en.jsx)(De,{children:"Nutrismart \xa9 2021 All rights reserved"}),Object(en.jsx)(Be,{to:"/",children:"Nutrismart"})]})})]})})},Je=function(){return Object(en.jsxs)(rn.a,{children:[Object(en.jsx)(fn,{}),Object(en.jsxs)(on.c,{children:[Object(en.jsx)(on.a,{exact:!0,path:"/",component:Mn}),Object(en.jsx)(on.a,{path:"/login",component:ie}),Object(en.jsx)(on.a,{path:"/signup",component:Fe}),Object(en.jsx)(on.a,{exact:!0,path:"/alimentos",component:_n})]}),Object(en.jsx)(Ge,{})]})};o.a.render(Object(en.jsx)(an,{children:Object(en.jsx)(Je,{})}),document.getElementById("root")),s()},99:function(n){n.exports=JSON.parse('[{"name":"Pizza","calories":400,"image":"https://i.imgur.com/eTmWoAN.png","quantity":0},{"name":"Salad","calories":150,"image":"https://i.imgur.com/DupGBz5.jpg","quantity":0},{"name":"Sweet Potato","calories":120,"image":"https://i.imgur.com/hGraGyR.jpg","quantity":0},{"name":"Gnocchi","calories":500,"image":"https://i.imgur.com/93ekwW0.jpg","quantity":0},{"name":"Pot Roast","calories":350,"image":"https://i.imgur.com/WCzJDWz.jpg","quantity":0},{"name":"Lasagna","calories":750,"image":"https://i.imgur.com/ClxOafl.jpg","quantity":0},{"name":"Hamburger","calories":400,"image":"https://i.imgur.com/LoG39wK.jpg","quantity":0},{"name":"Pad Thai","calories":475,"image":"https://i.imgur.com/5ktcSzF.jpg","quantity":0},{"name":"Almonds","calories":75,"image":"https://i.imgur.com/JRp4Ksx.jpg","quantity":0},{"name":"Bacon","calories":175,"image":"https://i.imgur.com/7GlqDsG.jpg","quantity":0},{"name":"Hot Dog","calories":275,"image":"https://i.imgur.com/QqVHdRu.jpg","quantity":0},{"name":"Chocolate Cake","calories":490,"image":"https://i.imgur.com/yrgzA9x.jpg","quantity":0},{"name":"Wheat Bread","calories":175,"image":"https://i.imgur.com/TsWzMfM.jpg","quantity":0},{"name":"Orange","calories":85,"image":"https://i.imgur.com/abKGOcv.jpg","quantity":0},{"name":"Banana","calories":175,"image":"https://i.imgur.com/BMdJhu5.jpg","quantity":0},{"name":"Yogurt","calories":125,"image":"https://i.imgur.com/URhdrAm.png","quantity":0}]')}},[[170,1,2]]]);
//# sourceMappingURL=main.4022d49a.chunk.js.map