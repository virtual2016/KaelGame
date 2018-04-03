/**
 * Created by W on 2018/3/7.
 * 命名原则：class用-连接，id用_连接，js变量名用驼峰法
 */


//封装document.getElementById方法
function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}

var btnSzms = $("btn_szms"),
    btnJsms = $("btn_jsms"),
    introduceTitle = $("introduce_title"),
    introduceDetail = $("introduce_detail"),
    arrow = $("arrow"),
    btnDefaultKey = $("default_key"),
    skill1 = $("skill_1"),
    skill2 = $("skill_2"),
    defaultSkills = document.getElementsByClassName("default-skills"),
    left = document.getElementsByClassName("left")[0],
    buttonsAndIntroduce = $("buttons_and_introduce"),
    playZone = $("play_zone"),
    btnBack = $("btn_back"),
    btnRestart = $("btn_restart"),
    startButton = $("start_button"),
    stopWatch = $("stopwatch"),
    imgZone = $("img_zone"),
    textZone = $("text_zone"),
    orb1 = $("orb_1"),
    orb2 = $("orb_2"),
    orb3 = $("orb_3"),
    imgSkill1 = $("img_skill_1"),
    imgSkill2 = $("img_skill_2");

//鼠标悬停“实战模式”按钮
btnSzms.onmouseover = function () {
    introduceTitle.innerText = "实战模式";
    introduceDetail.innerText = "每次随机给出一组技能，总共15组，每组技能数量逐渐增多，玩家需要按顺序完成Combo！想成为卡尔大神？先来挑战你的反应能力吧！注意每个技能需要施放才算完成此技能。";
    arrow.style.top = "210px";
};

//鼠标悬停“急速模式”按钮
btnJsms.onmouseover = function () {
    introduceTitle.innerText = "极速模式";
    introduceDetail.innerText = "每次随机给出一个技能，玩家只需召唤该技能，无需施放，总共20个技能。快来挑战你的极限手速吧！";
    arrow.style.top = "60px";
};


//点击“使用默认键位”按钮
btnDefaultKey.onclick = function () {
    if (this.checked === true) {
        skill1.style.display = "none";
        skill2.style.display = "none";
        for (var i = 0; i < defaultSkills.length; i++) {
            defaultSkills[i].style.display = "table-row";
        }
        left.style.height = "510px";
    } else {
        skill1.style.display = "table-row";
        skill2.style.display = "table-row";
        for (var j = 0; j < defaultSkills.length; j++) {
            defaultSkills[j].style.display = "none";
        }
        left.style.height = "320px";
    }
};

//点击“极速模式”按钮


btnJsms.onclick = function () {
    buttonsAndIntroduce.style.display = "none";
    playZone.style.display = "block";
};

//点击“返回”按钮


btnBack.onclick = function () {
    buttonsAndIntroduce.style.display = "flex";
    playZone.style.display = "none";
};

//点击“实战模式”按钮
btnSzms.onclick = function () {
    buttonsAndIntroduce.style.display = "none";
    playZone.style.display = "block";
};

//点击“重新开始”按钮

btnRestart.onclick = function () {
    startButton.disabled = false;

};
//点击“恢复默认”按钮

//点击“音乐”按钮

//点击“音效”按钮

//点击各个技能键位

//定义一个秒表
function stopWatches() {
    var o = new Object();
    var s = "00", m = 0;
    o.start= function () {
        setInterval(function () {
            if (m === 100) {
                m = 0;
                s++;
                s = s < 10 ? "0" + s : s;
            }
            m++;
            m = m < 10 ? "0" + m : m;
            stopWatch.innerText = s + ":" + m;
        }, 10);
    };
    return o;
}


var numberOfSkills = 20;
//点击“开始游戏”按钮
startButton.addEventListener("click", function () {
    startButton.disabled = "disabled";//点击开始按钮之后，让其失去点击功能
    var stopWatch = window.stopWatches();
    stopWatch.start();
});

startButton.addEventListener("click", function () {
    //随机出现技能图片和名字
    var arr = [
        {text: "急速冷却", nameOfClass: "img-jslq"},
        {text: "幽灵漫步", nameOfClass: "img-ylmb"},
        {text: "寒冰之墙", nameOfClass: "img-hbzq"},
        {text: "电磁脉冲", nameOfClass: "img-dcmc"},
        {text: "强袭飓风", nameOfClass: "img-qxjf"},
        {text: "灵动迅捷", nameOfClass: "img-ldxj"},
        {text: "阳炎冲击", nameOfClass: "img-yycj"},
        {text: "熔炉精灵", nameOfClass: "img-rljl"},
        {text: "混沌陨石", nameOfClass: "img-hdys"},
        {text: "超震声波", nameOfClass: "img-czsb"}
    ];
    var num = Math.floor(Math.random() * 10);
    imgZone.className = arr[num].nameOfClass;
    textZone.innerText = arr[num].text;
    imgZone.style.display = "inline-block";
    textZone.style.display = "inline";
});

startButton.addEventListener("click", function () {
    //判断玩家是否操作正确
    if (true) {
        numberOfSkills--;
    }
    startButton.innerText = "剩余技能" + numberOfSkills;
});

startButton.addEventListener("click", function () {
    document.addEventListener("keydown", function (event) {
        if (event.key === "q" || event.key === "w" || event.key === "e") {
            orb1.className = orb2.className;
            orb2.className = orb3.className;
            orb3.className = orbClassName(event.key);
        } else if (event.key === "r") {
            imgSkill2.src = imgSkill1.src;
            imgSkill1.src = "images/spells/"+threeSkills.s003+".png";
        }
    });
});

function orbClassName(key) {
    if (key === "q") {
        return "orb-1";
    } else if (key === "w") {
        return "orb-2";
    } else if (key === "e") {
        return "orb-3";
    }
}


var threeSkills = {
    S300: "cold_snap",
    s210: "ghost_walk",
    s201: "ice_wall",
    s030: "emp",
    s120: "tornado",
    s021: "alacrity",
    s003: "sun_strike",
    s102: "forge_spirit",
    s012: "chaos_meteor",
    s111: "deafening_blast"
};