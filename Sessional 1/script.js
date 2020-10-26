function starter()
{
    var divM = document.createElement("div");
    divM.setAttribute("class", "row");
    divM.classList.add("class","myDIV");
    
    var divH1 = document.createElement("div");
    divH1.setAttribute("class", "col-sm");
    
    var headImg = document.createElement("img");
    headImg.src = "IndependentMonogram.png";
    headImg.setAttribute("height","45.29");
    headImg.classList.add("class","wrap");

    var hd2 = document.createElement("h2");
    divH1.appendChild(hd2);
    hd2.appendChild(headImg);
    hd2.classList.add("h2");

    divM.appendChild(divH1);

    var divH2 = document.createElement("div");
    divH2.setAttribute("class", "col-md-6 d-flex justify-content-end");
    
    var hd3 = document.createElement("p");
    
    //Support Us Text
    var txt = document.createElement("label");
    txt.innerHTML = "Support Us";
    txt.classList.add("label");
    txt.classList.add("topStrip");
    hd3.appendChild(txt);

    //Contribute Button
    var conB = document.createElement("button");
    conB.innerHTML = "Contribute";
    conB.classList.add("button");
    conB.classList.add("danger");
    //conB.setAttribute("class", "btn btn-outline-danger");
    hd3.appendChild(conB);

    var subB = document.createElement("button");
    subB.innerHTML = "Subscribe";
    subB.classList.add("button");
    subB.classList.add("green");
    //subB.setAttribute("class", "btn btn-outline-danger");
    hd3.appendChild(subB);


    var logDiv = document.createElement("div");
    logDiv.setAttribute("class","col-sm");
    //login button
    var login = document.createElement("label");
    login.setAttribute("id","lgButton");
    login.innerHTML = "LOGIN";
    login.classList.add("loginButton");
    login.style.fontWeight = "bold";
    login.onmouseover = function(){mOver()};
    login.onmouseout = function(){mOver2()};
    logDiv.appendChild(login);

    //menu button
    var menu = document.createElement("label");
    menu.setAttribute("id","mnButton");
    menu.innerHTML = "MENU";
    menu.classList.add("loginButton");
    menu.style.fontWeight = "bold";
    menu.onmouseover = function(){mnOver()};
    menu.onmouseout = function(){mnOver2()};
    logDiv.appendChild(menu);

    divH2.appendChild(hd3);
    divM.appendChild(divH2);
    divM.appendChild(logDiv);

    document.body.appendChild(divM);

    //--------------------------------------------second row--------------------------------------------------
    var divC = document.createElement("div");
    //divC.classList.add("myDIV2");
    divC.setAttribute("class","container");

    var div2 = document.createElement("div");
    div2.setAttribute("class","row-xs p-2");
    div2.classList.add("myDIV");
    div2.classList.add("myDIV2");
    //divC.appendChild(div2);

    var c1 = document.createElement("div");
    c1.setAttribute("class","col-xs d-inline-flex p-2 w-0.5");
    var news = document.createElement("label");
    news.setAttribute("id","news");
    news.innerHTML = "NEWS";
    c1.classList.add("secRow");
    c1.appendChild(news);
    c1.classList.add("cBorder");
    c1.onmouseover = function(){
        c1.style.borderBottomColor = "red";
    };
    c1.onmouseout = function(){
        c1.style.fontWeight = "normal";
        c1.style.borderBottomColor = "";
    };
    c1.onclick = function(){
        //document.getElementById("")
        newsClicked();
    };
    //c1.classList.add("loginButton");
    div2.appendChild(c1);

    var c2 = document.createElement("div");
    c2.setAttribute("class","col-xs d-inline-flex p-2");
    var corona = document.createElement("label");
    corona.innerHTML = "CORONAVIRUS UPDATE";
    corona.classList.add("secRow");
    c2.appendChild(corona);
    c2.classList.add("cBorder");
    c2.onmouseover = function(){
        c2.style.borderBottomColor = "red";
    };
    c2.onmouseout = function(){
        c2.style.fontWeight = "normal";
        c2.style.borderBottomColor = "";
    };
    //c2.onclick = function(){
        //coronaUpdate();
    //};
    div2.appendChild(c2);


    var c3 = document.createElement("div");
    c3.setAttribute("class","col-xs d-inline-flex p-2");
    var uP = document.createElement("label");
    uP.innerHTML = "UK POLITICS";
    uP.classList.add("secRow");
    c3.appendChild(uP);
    c3.classList.add("cBorder");
    c3.onmouseover = function(){
        c3.style.borderBottomColor = "red";
    };
    c3.onmouseout = function(){
        c3.style.fontWeight = "normal";
        c3.style.borderBottomColor = "";
    };
    //c3.classList.add("loginButton");
    div2.appendChild(c3);
    
    var c4 = document.createElement("div");
    c4.setAttribute("class","col-xs d-inline-flex p-2");
    var usP = document.createElement("label");
    usP.innerHTML = "US POLITICS";
    usP.classList.add("secRow");
    c4.appendChild(usP);
    c4.classList.add("cBorder");
    c4.onmouseover = function(){
        c4.style.borderBottomColor = "red";
    };
    c4.onmouseout = function(){
        c4.style.fontWeight = "normal";
        c4.style.borderBottomColor = "";
    };
    //c4.classList.add("loginButton");
    div2.appendChild(c4);

    var c5 = document.createElement("div");
    c5.setAttribute("class","col-xs d-inline-flex p-2");
    var el = document.createElement("label");
    el.innerHTML = "2020 ELECTION";
    el.classList.add("secRow");
    c5.appendChild(el);
    c5.classList.add("cBorder");
    c5.onmouseover = function(){
        c5.style.borderBottomColor = "red";
    };
    c5.onmouseout = function(){
        c5.style.fontWeight = "normal";
        c5.style.borderBottomColor = "";
    };
    //c5.classList.add("loginButton");
    div2.appendChild(c5);


    var c6 = document.createElement("div");
    c6.setAttribute("class","col-xs d-inline-flex p-2");
    var el = document.createElement("label");
    el.innerHTML = "VOICES";
    el.classList.add("secRow");
    c6.appendChild(el);
    c6.classList.add("cBorder");
    c6.onmouseover = function(){
        c6.style.borderBottomColor = "red";
    };
    c6.onmouseout = function(){
        c6.style.fontWeight = "normal";
        c6.style.borderBottomColor = "";
    };
    //c6.classList.add("loginButton");
    div2.appendChild(c6);

    var c7 = document.createElement("div");
    c7.setAttribute("class","col-xs d-inline-flex p-2");
    var el = document.createElement("label");
    el.innerHTML = "SPORT";
    el.classList.add("secRow");
    c7.appendChild(el);
    c7.classList.add("cBorder");
    c7.onmouseover = function(){
        c7.style.borderBottomColor = "red";
    };
    c7.onmouseout = function(){
        c7.style.fontWeight = "normal";
        c7.style.borderBottomColor = "";
    };
    //c1.classList.add("loginButton");
    div2.appendChild(c7);


    var c8 = document.createElement("div");
    c8.setAttribute("class","col-xs d-inline-flex p-2");
    var el = document.createElement("label");
    el.innerHTML = "CULTURE";
    el.classList.add("secRow");
    c8.appendChild(el);
    c8.classList.add("cBorder");
    c8.onmouseover = function(){
        c8.style.borderBottomColor = "red";
    };
    c8.onmouseout = function(){
        c8.style.fontWeight = "normal";
        c8.style.borderBottomColor = "";
    };
    //c1.classList.add("loginButton");
    div2.appendChild(c8);

    var c9 = document.createElement("div");
    c9.setAttribute("class","col-xs d-inline-flex p-2");
    var el = document.createElement("label");
    el.innerHTML = "INDY/LIFE";
    el.classList.add("secRow");
    c9.appendChild(el);
    c9.classList.add("cBorder");
    c9.onmouseover = function(){
        c9.style.borderBottomColor = "red";
    };
    c9.onmouseout = function(){
        c9.style.fontWeight = "normal";
        c9.style.borderBottomColor = "";
    };
    //c9.classList.add("loginButton");
    div2.appendChild(c9);

    var c10 = document.createElement("div");
    c10.setAttribute("class","col-xs d-inline-flex p-2");
    var el = document.createElement("label");
    el.innerHTML = "INDYBEST";
    el.classList.add("secRow");
    c10.appendChild(el);
    c10.classList.add("cBorder");
    c10.onmouseover = function(){
        c10.style.borderBottomColor = "red";
    };
    c10.onmouseout = function(){
        c10.style.fontWeight = "normal";
        c10.style.borderBottomColor = "";
    };
    //c10.classList.add("loginButton");
    div2.appendChild(c10);

    var c11 = document.createElement("div");
    c11.setAttribute("class","col-xs d-inline-flex p-2");
    var el = document.createElement("label");
    el.innerHTML = "INDY100";
    el.classList.add("secRow");
    c11.appendChild(el);
    c11.classList.add("cBorder");
    c11.onmouseover = function(){
        c11.style.borderBottomColor = "red";
    };
    c11.onmouseout = function(){
        c11.style.fontWeight = "normal";
        c11.style.borderBottomColor = "";
    };
    //c11.classList.add("loginButton");
    div2.appendChild(c11);


    var c12 = document.createElement("div");
    c12.setAttribute("class","col-xs d-inline-flex p-2");
    var el = document.createElement("label");
    el.innerHTML = "LONG READS";
    el.classList.add("secRow");
    c12.appendChild(el);
    c12.classList.add("cBorder");
    c12.onmouseover = function(){
        //c12.style.fontWeight = "bold";
        c12.style.borderBottomColor = "red";
    };
    c12.onmouseout = function(){
        c12.style.fontWeight = "normal";
        c12.style.borderBottomColor = "";
    };
    //c12.classList.add("loginButton");
    div2.appendChild(c12);

    var c13 = document.createElement("div");
    c13.setAttribute("class","col-xs d-inline-flex p-2");
    var el = document.createElement("label");
    el.innerHTML = "VOUCHERS";
    el.classList.add("secRow");
    c13.appendChild(el);
    c13.classList.add("cBorder");
    c13.onmouseover = function(){
        //c13.style.fontWeight = "bold";
        c13.style.borderBottomColor = "red";
    };
    c13.onmouseout = function(){
        c13.style.fontWeight = "normal";
        c13.style.borderBottomColor = "";
    };
    //c1.classList.add("loginButton");
    div2.appendChild(c13);
    
    var c14 = document.createElement("div");
    c14.setAttribute("class","col-xs d-inline-flex p-2");
    var el = document.createElement("label");
    el.innerHTML = "PREMIUM";
    el.classList.add("secRow");
    c14.appendChild(el);
    c14.classList.add("cBorder");
    c14.onmouseover = function(){
        //c14.style.fontWeight = "bold";
        c14.style.borderBottomColor = "red";
    };
    c14.onmouseout = function(){
        c14.style.fontWeight = "normal";
        c14.style.borderBottomColor = "";
    };
    //c1.classList.add("loginButton");
    div2.appendChild(c14);
    

    // var c15 = document.createElement("div");
    // c15.setAttribute("class","col-xs d-inline-flex p-2");
    // var el = document.createElement("span");
    // el.className = "glyphicon glyphicon-search";
    // c15.appendChild(el);
    // c15.classList.add("cBorder");
    // c15.onmouseover = function(){
    //     c15.style.fontWeight = "bold";
    //     c15.style.borderBottomColor = "red";
    // };
    // c15.onmouseout = function(){
    //     c15.style.fontWeight = "normal";
    //     c15.style.borderBottomColor = "";
    // };
    //c1.classList.add("loginButton");
    // div2.appendChild(c15);

    document.body.appendChild(div2);

    coronaUpdate();

    var foot = document.createElement("footer");
    foot.setAttribute("class","page-footer font-small pt-4");
    foot.classList.add("footerB");

    var fC = document.createElement("div");
    fC.setAttribute("class","container-fluid text-center text-md-left");
    foot.appendChild(fC);

    var r1 = document.createElement("div");
    r1.setAttribute("class","row");

    var co1 = document.createElement("div");
    co1.setAttribute("class","col-md-4 mt-md-0 mt-3")
    var img = document.createElement("img");
    img.src = "logo.png";
    img.setAttribute("height","90.49");
    co1.appendChild(img);
    
    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "GET IN TOUCH";
    txt.style.fontWeight = "bold";
    txt.classList.add("myDIV4");
    rr1.appendChild(txt);
    co1.appendChild(rr1);

    var rr2 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Contact US";
    // txt.onmouseover = function(){
    //     //txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV5");
    rr2.appendChild(txt);
    co1.appendChild(rr2);

    var rr3 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Jobs";
    txt.classList.add("myDIV5");
    rr3.appendChild(txt);
    co1.appendChild(rr3);


    r1.appendChild(co1);

    var co2 = document.createElement("div");
    co2.setAttribute("class","col-md-2 mt-md-0 mt-3")
    var txt = document.createElement("h5");
    txt.innerHTML = "OUR PRODUCTS";
    txt.classList.add("myDIV3");
    co2.appendChild(txt);
    r1.appendChild(co2);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Subscriptions";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Install Our Apps";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Archive";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var co2 = document.createElement("div");
    co2.setAttribute("class","col-md-2 mt-md-0 mt-3");
    //co2.classList.add("myDIV3");
    var txt = document.createElement("h5");
    txt.innerHTML = "OTHER PUBLICATIONS";
    txt.classList.add("myDIV3");
    co2.appendChild(txt);
    r1.appendChild(co2);


    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "International Editions";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Independent an Espanol";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Independent Arabia";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Independent Turkish";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Independent Persian";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Independent Urdu";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Evening Standard";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Novaya Gazeta";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var co2 = document.createElement("div");
    co2.setAttribute("class","col-md-2 mt-md-0 mt-3");
    var txt = document.createElement("h5");
    txt.innerHTML = "EXTRAS";
    txt.classList.add("myDIV3");
    co2.appendChild(txt);
    r1.appendChild(co2);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "All Topics";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Voucher Codes";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Advertising Guides";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Syndication";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);  

    var co2 = document.createElement("div");
    co2.setAttribute("class","col-md-2 mt-md-0 mt-3");
    var txt = document.createElement("h5");
    txt.innerHTML = "LEGAL";
    txt.classList.add("myDIV3");
    co2.appendChild(txt);
    r1.appendChild(co2);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Code of Conducts and Complaints";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Contributors";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Cookie Policy";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Donations Terms and Conditions";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "Privacy Notice";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);

    var rr1 = document.createElement("div");
    r1.setAttribute("class","row");
    var txt = document.createElement("h5");
    txt.innerHTML = "User Policies";
    // txt.onmouseover = function(){
    //     txt.style.fontWeight = "bold";
    //     txt.style.color = "red";
    // };
    // txt.onmouseout = function(){
    //     //txt.style.fontWeight = "normal";
    //     txt.style.color = "";
    // };
    txt.classList.add("myDIV6");
    rr1.appendChild(txt);
    co2.appendChild(rr1);





    fC.appendChild(r1);
    document.body.appendChild(foot);

}

function newsClicked(){
    var news = document.getElementById("news");
    
    var div3 = document.createElement("div");
    div3.setAttribute("id","newsDiv");
    div3.setAttribute("class","row");

    var c16 = document.createElement("div");
    c16.setAttribute("class","col-xs");
    var el = document.createElement("iframe");
    el.src = "https://www.youtube.com/embed/2MoWhZa60O0";
    el.classList.add("iFrameD");
    //el.setAttribute("class","embed-responsive-item");
    c16.appendChild(el);
    div3.style.backgroundColor = "#696969";
    div3.appendChild(c16);

    document.body.appendChild(div3);
}

function coronaUpdate(){
    var divC = document.createElement("div");
    //divC.setAttribute("id","coronaDiv");
    divC.setAttribute("class","container");
    
    var div3 = document.createElement("div");
    div3.setAttribute("class","row");
    divC.appendChild(div3);

    var c16 = document.createElement("div");
    c16.setAttribute("class","col-xs float-left");
    var el = document.createElement("h2");
    el.innerHTML = "CORONAVIRUS ADVICE";
    el.classList.add("myDIV7");
    c16.appendChild(el);
    div3.appendChild(c16);

    document.body.appendChild(divC);

    var divC = document.createElement("div");
    //divC.setAttribute("id","coronaDiv");
    divC.setAttribute("class","container");
    
    var div4 = document.createElement("div");
    div4.setAttribute("class","row");
    divC.appendChild(div4);

    var c16 = document.createElement("div");
    c16.setAttribute("class","col h-25");
    var el = document.createElement("img");
    el.src = "covid.jpg";
    //headImg.setAttribute("height","45.29");
    el.classList.add("class","wrap");
    c16.appendChild(el);
    div4.appendChild(c16);

    var c16 = document.createElement("div");
    c16.setAttribute("class","col");
    var el = document.createElement("h1");
    el.innerHTML = "What we can do under the latest official coronavirus rules";
    el.onmouseover = function(){
        el.style.color = "red";
    };
    el.onmouseout = function(){
        el.style.fontWeight = "normal";
        el.style.color = "";
    };
    c16.appendChild(el);
    div4.appendChild(c16);
    
    document.body.appendChild(divC);


    var divC2 = document.createElement("div");
    divC2.setAttribute("class","container");
    
    var div5 = document.createElement("div");
    div5.setAttribute("class","row")
    
    var c15 = document.createElement("div");
    c15.setAttribute("class","col-xs");
    var el3 = document.createElement("img");
    el3.src = "indybest.jpg";
    el3.setAttribute("height","90.29");
    //e13.classList.add("class","wrap");
    c15.appendChild(el3);
    div5.appendChild(c15);

    var c16 = document.createElement("div");
    c16.setAttribute("class","col");
    var el2 = document.createElement("p");
    el2.style.fontWeight = "bold";
    el2.style.color = "red";
    el2.innerHTML = "INDYBEST";
    c16.appendChild(el2);
    div5.appendChild(c16);


    // var r17 = document.createElement("div");
    // r17.setAttribute("class","row-xs");

    // var c17 = document.createElement("div");
    // c17.setAttribute("class","col-xs");
    // var el4 = document.createElement("p");
    // el4.innerHTML = "Face masks: The ultimate buying guide for reusable face coverings";
    // c17.appendChild(el4);
    // r17.appendChild(c17);

    divC2.appendChild(div5);
   
    

    var div5 = document.createElement("div");
    div5.setAttribute("class","row")
    
    var c15 = document.createElement("div");
    c15.setAttribute("class","col-xs");
    var el3 = document.createElement("img");
    el3.src = "lifestyle.png";
    el3.setAttribute("height","90.29");
    //e13.classList.add("class","wrap");
    c15.appendChild(el3);
    div5.appendChild(c15);

    var c16 = document.createElement("div");
    c16.setAttribute("class","col");
    var el2 = document.createElement("p");
    el2.style.fontWeight = "bold";
    el2.style.color = "red";
    el2.innerHTML = "LIFESTYLE";
    c16.appendChild(el2);
    div5.appendChild(c16);

    divC2.appendChild(div5);
   

    var div5 = document.createElement("div");
    div5.setAttribute("class","row")
    
    var c15 = document.createElement("div");
    c15.setAttribute("class","col-xs");
    var el3 = document.createElement("img");
    el3.src = "health.jpg";
    el3.setAttribute("height","90.29");
    //e13.classList.add("class","wrap");
    c15.appendChild(el3);
    div5.appendChild(c15);

    var c16 = document.createElement("div");
    c16.setAttribute("class","col");
    var el2 = document.createElement("p");
    el2.style.fontWeight = "bold";
    el2.style.color = "red";
    el2.innerHTML = "Health and Fitness";
    c16.appendChild(el2);
    div5.appendChild(c16);

    divC2.appendChild(div5);


    var div5 = document.createElement("div");
    div5.setAttribute("class","row")
    
    var c15 = document.createElement("div");
    c15.setAttribute("class","col-xs");
    var el3 = document.createElement("img");
    el3.src = "news.jpg";
    el3.setAttribute("height","90.29");
    //e13.classList.add("class","wrap");
    c15.appendChild(el3);
    div5.appendChild(c15);

    var c16 = document.createElement("div");
    c16.setAttribute("class","col");
    var el2 = document.createElement("p");
    el2.style.fontWeight = "bold";
    el2.style.color = "red";
    el2.innerHTML = "NEWS AND ADVICE";
    c16.appendChild(el2);
    div5.appendChild(c16);

    divC2.appendChild(div5);
    

    var div5 = document.createElement("div");
    div5.setAttribute("class","row")
    
    var c15 = document.createElement("div");
    c15.setAttribute("class","col-xs");
    var el3 = document.createElement("img");
    el3.src = "family.jpg";
    el3.setAttribute("height","90.29");
    //e13.classList.add("class","wrap");
    c15.appendChild(el3);
    div5.appendChild(c15);

    var c16 = document.createElement("div");
    c16.setAttribute("class","col");
    var el2 = document.createElement("p");
    el2.style.fontWeight = "bold";
    el2.style.color = "red";
    el2.innerHTML = "HEALTH & FAMILIES";
    c16.appendChild(el2);
    div5.appendChild(c16);

    divC2.appendChild(div5);
    document.body.appendChild(divC2);


    var divC = document.createElement("div");
    divC.setAttribute("class","container");

    var div7 = document.createElement("div");
    div7.setAttribute("class","row");

    var col1 = document.createElement("div");
    col1.setAttribute("class","col");
    var el = document.createElement("img");
    el.src = "sanitizer.jpg";
    el.setAttribute("height","250.29");
    //e13.classList.add("class","wrap");
    col1.appendChild(el);

    var e2 = document.createElement("div");
    e2.classList.add("content");
    var h3 = document.createElement("h4");
    h3.innerHTML = "How to manage your mental health during lockdown";
    //h.classList.add("cBorder");
    h3.onmouseover = function(){
        h3.style.fontWeight = "bold";
        h3.style.color = "red";
    };
    h3.onmouseout = function(){
        h3.style.fontWeight = "normal";
        h3.style.color = "";
    };
    e2.appendChild(h3);
    col1.appendChild(e2);

    div7.appendChild(col1);


    var col2 = document.createElement("div");
    col2.setAttribute("class","col");
    var el = document.createElement("img");
    el.src = "facemask.png";
    el.setAttribute("height","250.29");
    //e13.classList.add("class","wrap");
    col2.appendChild(el);


    var e2 = document.createElement("div");
    e2.classList.add("content");
    var h2 = document.createElement("h4");
    h2.innerHTML = "How to manage your mental health during lockdown";
    //h.classList.add("cBorder");
    h2.onmouseover = function(){
        h2.style.fontWeight = "bold";
        h2.style.color = "red";
    };
    h2.onmouseout = function(){
        h2.style.fontWeight = "normal";
        h2.style.color = "";
    };
    e2.appendChild(h2);
    col2.appendChild(e2);

    div7.appendChild(col2);

    var col3 = document.createElement("div");
    col3.setAttribute("class","col");
    var el = document.createElement("img");
    el.src = "family.jpg";
    el.setAttribute("height","250.29");
    //e13.classList.add("class","wrap");
    col3.appendChild(el);

    var el = document.createElement("div");
    el.classList.add("content");
    var h = document.createElement("h4");
    h.innerHTML = "How to manage your mental health during lockdown";
    //h.classList.add("cBorder");
    h.onmouseover = function(){
        h.style.fontWeight = "bold";
        h.style.color = "red";
    };
    h.onmouseout = function(){
        h.style.fontWeight = "normal";
        h.style.color = "";
    };
    el.appendChild(h);
    col3.appendChild(el);


    div7.appendChild(col3);

    divC.appendChild(div7);
    document.body.appendChild(divC);



    var divC = document.createElement("div");
    divC.setAttribute("class","container");
    var r4 = document.createElement("div");
    r4.setAttribute("class","row");

    var c = document.createElement("div");
    c.setAttribute("class","col-md-10");
    var img = document.createElement("img");
    img.src = "covidBanner.jpg";
    img.classList.add("img2");
    img.setAttribute("width","1150px");
    c.appendChild(img);
    r4.appendChild(c);
    divC.append(r4);

    document.body.appendChild(divC);

}



function mOver()
{
    document.getElementById("lgButton").style.color = "red";
}
function mOver2()
{
    document.getElementById("lgButton").style.color = "black";
}

function mnOver()
{
    document.getElementById("mnButton").style.color = "red";
}
function mnOver2()
{
    document.getElementById("mnButton").style.color = "black";
}

starter();
