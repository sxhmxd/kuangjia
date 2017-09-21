export function loginService($localStorage,cartService){
  'ngInject';
  'use strict';
      let vm = this;
      return {
                user: {},
                //登录
                login: function (userLogin) {
                    //获取存储在 $localStorage中注册的用户
                    var oldUser = $localStorage.get(userLogin.name);
                    if (oldUser == null || oldUser.pwd !== userLogin.pwd) {
                        alert("帐号不存在或密码错误!");
                        return;
                    }
                    $localStorage.put("curUser", oldUser);
                    vm.user = oldUser;
                    //登陆后根据用户名创建我的购物车
                    cartService.createMyCart(vm.user.name);
                    //返回登陆用户
                    return vm.user;
                },
                //注册
            register: function (newUser) {
                var userRegister = new User(newUser.name, newUser.pwd);
                //校验新注册的用户是否已经存在
                if ($localStorage.get(userRegister.name) != null) {
                    return false;
                }
                $localStorage.put(userRegister.name, userRegister);
                return true;
            },
            isLogin: function () {
                var oldUser = $localStorage.get("curUser");
                if (oldUser !== null) {
                    //登陆后根据用户名创建我的购物车
                    vm.user = oldUser;
                    cartService.createMyCart(vm.user);
                    return vm.user;
                }
                return null;
            },
            //退出登录
          outLogin: function () {
              vm.user = null;
              $localStorage.remove("curUser");
          }

    }
}
