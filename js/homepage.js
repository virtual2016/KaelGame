/**
 * Created by W on 2018/3/7.
 */

var btn = document.getElementById("default-key");
var skill1 = document.getElementById("skill-1");
var skill2 = document.getElementById("skill-2");
var defaultSkills = document.getElementsByClassName("default-skills");
var left = document.getElementsByClassName("left")[0];
btn.onclick = function () {
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

