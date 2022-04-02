'use strict';

const QueryHandler = (function(){

    var instance;

    var Parameter = function(){
        if(typeof window === 'undefined'){
            console.warn('window object is not found.'); 
        }
        if(typeof instance === 'undefined'){
            instance = init();
            return instance;
        }
        return instance;
    }

    var init = function(){
        var params = window.location.search.slice(1).split('&');
        let map = new Map();
        if(params.length === 0 || params[0].length === 0){
            return map;
        }
        for(let i = 0,len = params.length; i < len; i++){
            let p = params[i].split('=');
            map.set(p[0],p[1]);
        }
        return map;
    }

    return Parameter();
})();

