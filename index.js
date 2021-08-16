// Your code here
function saturdayFun(act="roller-skate") {
    return `This Saturday, I want to ${act}!`
  }

const mondayWork = function(act="go to the office") {
    return `This Monday, I will ${act}.`
}

function wrapAdjective(sig="*"){

    return function inner(adj = "special"){
        return `You are ${sig}${adj}${sig}!`
    }
}

const Calculator = {
    add: function(a,b){return a + b},
    subtract: function(a,b){return a - b},
    multiply: function(a,b){return a * b},
    divide: function(a,b){return a / b}
};

function actionApplyer(num, arr){
    let res = num
    
    for(let i = 0; i < arr.length; i++){
        res = arr[i](res)
    }
    console.log(res)
    return res;
}