
//以下为实际执行脚本,本程序由浮云 fuyun@mosx.cn 编写测试 2019年12月26日

function delete_link_click(){     //删除连接点击函数
lista=document.querySelectorAll(".operations a");
console.log(lista);
lista[0].click();
}

function confirm_button(){  //确认删除按钮点击函数
confirm_but=document.querySelectorAll(".ant-confirm-btns button.ant-btn-primary");
confirm_but[0].click(); 

}

var data_delete=setInterval(function () {   //循环执行删除数据时钟

lista=document.querySelectorAll(".operations a");
if (lista.length == 0){       //判断数据是否删除完，删除完成即退出程序
clearInterval(data_delete);  
console.warn("无可删除数据了,停止运行");
return;
}
delete_link_click();   //引用删除链接点击函数
confirm_button();     //引用点击确认删除按钮
console.count();  //输出程序执行次数
console.warn("删除成功！"); //删除完成后提示数据删除完毕!
},1500);
