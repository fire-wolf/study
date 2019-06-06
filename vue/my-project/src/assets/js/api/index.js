import axios from 'axios';
import Qs from 'qs'
import {Message} from 'element-ui'
// axios.defaults.timeout =  1000*60*15;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
//添加请求拦截器
axios.interceptors.request.use(function (config) {
  let userToken =  sessionStorage.getItem('token');
  if(userToken){
    if(config.data){
      config.data = /token/g.test(config.data)?config.data:config.data+'&token='+userToken
    }else if(config.params){
      config.params['token'] = userToken;
     }
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response && response.data && response.data.res<1){
    Message.error({message: response.data.resMsg});
    //接口登录失效跳转
    // if(response.data.res==-1){
    //   setTimeout(function(){
    //     window.location.href="/login";
    //   },1000);
    // }
  }
  
  return response;
}, function (error) {
  if (error.response==undefined || error.response.status == 504||error.response.status == 404) {
    Message.error({message: '网络异常'});
  } else if (error.response.status == 403) {
    Message.error({message: '权限不足,请联系管理员!'});
  }else {
    Message.error({message: '未知错误!'});
  }
  return Promise.reject(error);
});

export const baseUrl = '/';
//提交数据处理
export const formDataObj = function(params){
    let demoParams = {};
    if(typeof(params)==='object'){
      Object.entries(params).forEach(function(obj){
        let name = obj[0].replace(/\_/g,'.');
        let objName = obj[0].split('_');
        if(params.objType && params.objType==='first' && objName.length>2){
            name = objName[0]+'.';
            objName.shift();
            name+=objName.join('_');
        }
        demoParams[name] = obj[1];
      })
      return demoParams;
    }else{
      return params;
    } 
}





