(function () {
'use strict';

class Test {
    constructor() {
        this.doSomething = (a => (function ($return, $error) {
            var x;
            return Promise.resolve('' + a).then((function ($await_1) {
                x = $await_1;
                console.log(x);
                return $return();
            }).$asyncbind(this, $error), $error);
        }).$asyncbind(this, true));
    }
}


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcbmRcXFRlc3QuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxLQUFLO0lBQ2QsY0FBYztRQUNWLElBQUEsQ0FBSyxXQUFMLENBQUEsQ0FBQSxFQUF5QixDQUFOOztZQUNMLE9BQU0sT0FBQSxDQUFRLE9BQVIsQ0FBZ0IsRUFBQSxDQUFBLENBQUEsQ0FBSyxHQUEzQjtnQkFBSixJQUFJO2dCQUNWLE9BQUEsQ0FBUSxHQUFSLENBQVk7Ozs7SUFFeEI7QUFDQTtBQVBBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxcbmRcXFRlc3QuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRlc3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kb1NvbWV0aGluZyA9IGFzeW5jKGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGF3YWl0IFByb21pc2UucmVzb2x2ZSgnJyArIGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59Il19

const t = new Test();
function start() {
    return (function ($return, $error) {
        var res;
        return t.doSomething('whatever').then((function ($await_1) {
            res = $await_1;
            return $return(res);
        }).$asyncbind(this, $error), $error);
    }).$asyncbind(this, true);
}

start();

}());
