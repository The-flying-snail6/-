// JavaScript Document
window.onload=function(){
/***********************************顶部成分*******************************************************/
	var oNav=document.getElementById('nav');
	var oHeader=document.getElementById('header');
	var aLi=document.getElementsByTagName('li');
	
	var i=0;
	for(i;i<6;i++){
		aLi[i].index=i;	
	aLi[i].onmouseover = function(){
		for(var j=0;j<6;j++){
			aLi[j].className = "";	
		}
		aLi[this.index].className = "il";
	}
	}
	
/***********************************顶部下面的图片*******************************************************/
			var oDiv = document.getElementById('nav');
			var oUl = document.getElementById('wed');
			
			var timer = setInterval (move,5000);
			function move(){
			var leftNum = parseInt(getStyle(oUl,'left'));
				if(leftNum>-3000){
					leftNum -= 1520;
					oUl.style.left = leftNum + 'px';
				}else{
					oUl.style.left ="";
					
				}
				
				function getStyle(obj,attr){
					return obj.currentstyle? obj.currentstyle[attr] : getComputedStyle(obj)[attr];
				}		
			}
	
/***********************************平台简介图片*******************************************************/
			
			
			for(var k=12;k<15;k++){
				aLi[k].index=k;
			
				aLi[k].onclick = function(){
					for(var s=9;s<12;s++){
						aLi[s].className="";	
					}
					aLi[this.index-3].className="tive2";	
				}
			}
}
