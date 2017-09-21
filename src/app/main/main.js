export function MainController($state) {
    'ngInject';
    'use strict';

    let vm = this;
    // 第二入口文件
    vm.show=false;
    vm.register=function(){
        $state.go('register');

    }


}
