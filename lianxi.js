/**
 * Created by W on 2018/3/7.
 */


var btn = document.getElementById("123");
console.log(btn);
console.log(btn.value);
console.log(btn.checked);
btn.onclick = function () {
    console.log(this.value);
    console.log(this.checked);
}