/**
 * Created by W on 2018/3/7.
 * 命名原则：class用-连接，id用_连接，js变量名用驼峰法
 */


//封装document.getElementById方法
function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
}

//点击“使用默认键位”按钮
var btnDefaultKey = $("default_key");
var skill1 = $("skill_1");
var skill2 = $("skill_2");
var defaultSkills = document.getElementsByClassName("default-skills");
var left = document.getElementsByClassName("left")[0];
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
        for (var i = 0; i < defaultSkills.length; i++) {
            defaultSkills[i].style.display = "none";
        }
        left.style.height = "320px";
    }
};

//点击“极速模式”按钮
var btnJsms = $("btn_jsms");
var buttonsAndIntroduce = $("buttons_and_introduce");
var playZone = $("play_zone");
btnJsms.onclick = function () {
    buttonsAndIntroduce.style.display = "none";
    playZone.style.display = "block";
};

//点击“返回”按钮
var btnBack = $("btn_back");
btnBack.onclick = function () {
    buttonsAndIntroduce.style.display = "flex";
    playZone.style.display = "none";
};
//点击“实战模式”按钮

//点击“恢复默认”按钮

//点击“音乐”按钮

//点击“音效”按钮

//点击各个技能键位

