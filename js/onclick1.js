/**
 * Created by asus-pc on 2017/2/26.
 */
function onclick1(obj1,obj2,obj3) {
    for (var i = 0; i < obj1.length; i++) {
        obj1[i].index = i;
        obj1[i].onclick = function () {
            if (obj2[this.index].style.display == 'none') {
                obj3[this.index].style.transform = 'rotate(-90deg)';
                obj2[this.index].style.display = 'block';
            }
            else {
                obj3[this.index].style.transform = 'rotate(0deg)';
                obj2[this.index].style.display = 'none';
            }
        };
    }
}