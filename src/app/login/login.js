export function LoginController() {
    'ngInject';
    'use strict';

    let vm = this;
    // 第二入口文件
    // 第二入口文件=
    vm.myVar=false;
    vm.toggle = function() {
        vm.myVar = !vm.myVar;
    };

}
