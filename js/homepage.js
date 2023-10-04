/**
 * Created by W on 2018/3/7.
 * 命名原则：class用-连接，id用_连接，js变量名用驼峰法
 */


//封装document.getElementById方法
function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}

//绑定元素
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
    btnRestart = document.getElementsByClassName("btn-restart"),
    btnExit = document.getElementsByClassName("btn-exit"),
    startButton = $("start_button"),
    stopWatch = $("stopwatch"),
    imgZone = $("img_zone"),
    textZone = $("text_zone"),
    orb1 = $("orb_1"),
    orb2 = $("orb_2"),
    orb3 = $("orb_3"),
    imgSkill1 = $("img_skill_1"),
    imgSkill2 = $("img_skill_2"),
    overControlButtons = $("over_control_buttons"),
    jsmsZone = $("jsms_zone"),
    szmsZone = $("szms_zone"),
    orbContainer = $("orb_container"),
    skillButtons = $("skill_buttons");

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
    jsmsZone.style.display = "flex";
    szmsZone.style.display = "none";
    overControlButtons.style.display = "none";
};


//点击“实战模式”按钮
btnSzms.onclick = function () {
    buttonsAndIntroduce.style.display = "none";
    playZone.style.display = "block";
    jsmsZone.style.display = "none";
    szmsZone.style.display = "flex";
    overControlButtons.style.display = "none";
};

var stopwatch = new Stopwatch();
var game1 = new GameManager("jsms");
var game2 = new GameManager("szms");

//点击“重新开始”按钮
for (var i = 0; i < btnRestart.length; i++) {
    btnRestart[0].onclick = function () {
        game1.restart();
        game2.restart();
    };
}

//点击“返回”按钮
for (var j = 0; j < btnExit.length; j++) {
    btnExit[j].onclick = function () {
        game1.exit();
    };
}

//点击“恢复默认”按钮

//点击“音乐”按钮

//点击“音效”按钮

//点击各个技能键位


var numberOfSkills = 3;
var handler = function (event) {
    var quashNum = 0;
    var wexNum = 0;
    var exortNum = 0;

    for (var i = 0; i < 3; i++) {
        var orbArray = [orb1, orb2, orb3];
        switch (orbArray[i].className) {
            case 'quash':
                quashNum += 1;
                break;
            case 'wex':
                wexNum += 1;
                break;
            case 'exort':
                exortNum += 1;
                break;
        }
    }
    var invokeCode = "s" + quashNum + wexNum + exortNum;

    if (event.key === "q" || event.key === "w" || event.key === "e") {
        orb1.className = orb2.className;
        orb2.className = orb3.className;
        orb3.className = orbClassName(event.key);
    } else if (event.key === "r" && imgSkill1.className !== invokeSkillsName[invokeCode]) {  //需要满足两个条件（1，按了r键 2，与上一次的组合不同）才改变技能图片
        imgSkill2.className = imgSkill1.className;
        imgSkill1.className = invokeSkillsName[invokeCode];
    }

    if (imgSkill1.className === imgZone.className) {                    //如果玩家操作正确
        startButton.innerText = "剩余技能" + --numberOfSkills;         //技能数显示减1
        game.randomSkill();       //重新随机出技能题目
    }
    if (numberOfSkills === 0) {  //玩家完成任务
        startButton.innerText = "游戏完成！";
        stopwatch.stop();
        jsmsZone.style.display = "none";
        orbContainer.style.display = "none";
        skillButtons.style.display = "none";
        overControlButtons.style.display = "block";
    }
};

//点击“开始游戏”按钮
startButton.addEventListener("click", function () {

    //点击开始按钮之后，让其失去点击功能
    startButton.disabled = "disabled";
    startButton.innerText = "剩余技能" + numberOfSkills;
    startButton.style.cursor = "auto";

    //秒表开始计时
    stopwatch.start();

    //随机出现技能图片和名字
    game1.randomSkill();

    //对键盘进行监听
    document.addEventListener("keydown", handler);
});

//声明函数，用来接收输入的按键，并返回与之对应的class name
function orbClassName(key) {
    if (key === "q") {
        return "quash";
    } else if (key === "w") {
        return "wex";
    } else if (key === "e") {
        return "exort";
    }
}

//技能和技能名的键值对(key-value pairs)
var invokeSkillsName = {
    s300: "cold_snap",
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