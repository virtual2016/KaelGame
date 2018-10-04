//定义一个秒表的构造函数
function Stopwatch() {
}

Stopwatch.prototype.start = function () {
    var s = "00", m = 0;
    this.time = setInterval(function () {
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
Stopwatch.prototype.stop = function () {
    clearInterval(this.time);
};

Stopwatch.prototype.reset = function () {
    clearInterval(this.time);
    stopWatch.innerText = "00:00";
};