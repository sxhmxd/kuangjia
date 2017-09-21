export function dataService(KunHttp,$cookieStore) {
    'ngInject';
    'use strict';

    // 登录接口
    function startLogin(query){
      return KunHttp.post('login',query)
    }
    // 获取人气列表的接口
    function getRenQi(){

      return KunHttp.get('population/tasks')
    }

    // 新增人气任务的接口
    function addRenQi(query){

      return KunHttp.post('population/add_task')
    }
    //删除人气接口

    function deleteRenQi(query){

      return KunHttp.post('population/delete_task',query)
    }

      // 获取信息
    function addData(){
      return KunHttp.get('get/slide')
    }

    var exports = {
      //登录
      startLogin: startLogin,
      getRenQi:getRenQi,
      addRenQi:addRenQi,
      deleteRenQi:deleteRenQi,
      addData:addData,

    };

      // Public API here
      return exports;


  }
