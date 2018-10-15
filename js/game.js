/**
 * Created by W on 2018/3/7.
 * 命名原则：class用-连接，id用_连接，js变量名用驼峰法
 */


//定义一个游戏的构造函数
function GameManager(gameType) {
    this.gameType = gameType;
}

//随机出技能
GameManager.prototype.randomSkill = function () {
    var arr = [           //数组中包括10个对象，每个对象都有text和nameOfClass两个属性
        {text: "急速冷却", nameOfClass: "cold_snap"},
        {text: "幽灵漫步", nameOfClass: "ghost_walk"},
        {text: "寒冰之墙", nameOfClass: "ice_wall"},
        {text: "电磁脉冲", nameOfClass: "emp"},
        {text: "强袭飓风", nameOfClass: "tornado"},
        {text: "灵动迅捷", nameOfClass: "alacrity"},
        {text: "阳炎冲击", nameOfClass: "sun_strike"},
        {text: "熔炉精灵", nameOfClass: "forge_spirit"},
        {text: "混沌陨石", nameOfClass: "chaos_meteor"},
        {text: "超震声波", nameOfClass: "deafening_blast"}
    ];
    var num = Math.floor(Math.random() * 10);     //num范围为[0,9]
    imgZone.className = arr[num].nameOfClass;
    textZone.innerText = arr[num].text;
    imgZone.style.display = "inline-block";
    textZone.style.display = "inline";
};

//重新开始游戏
GameManager.prototype.restart = function () {
    numberOfSkills = 3;
    startButton.disabled = false;
    startButton.innerText = "开始游戏（点击）";
    startButton.style.cursor = "pointer";
    if (this.gameType === "jsms") {
        jsmsZone.style.display = "flex";
    } else if (this.gameType === "szms") {
        szmsZone.style.display = "flex";
    }
    orbContainer.style.display = "flex";
    skillButtons.style.display = "flex";
    overControlButtons.style.display = "none";
    stopwatch.reset();                              //秒表重置
    imgZone.style.display = "none";
    textZone.style.display = "none";
};

//结束游戏，并返回到游戏模式选择界面
GameManager.prototype.exit = function () {
    buttonsAndIntroduce.style.display = "flex";
    orb1.className = "";
    orb2.className = "";
    orb3.className = "";
    imgSkill1.className = "";
    imgSkill2.className = "";
    document.removeEventListener("keydown", handler);
    this.restart();
    playZone.style.display = "none";
};
