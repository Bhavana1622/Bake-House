'use strict';

angular.module("AngAppl")

.service("homeService",function()
{

var promodish = [{  promoname:'promo',image:'promo.jpg',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ,tempor incididunt ut labore et dolore magna aliqua.',
label:'NEW'}];

var discount = [{ name:'Chicken Zinger Burger',image:'image/burger.jpg',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ,tempor incididunt ut labore et dolore magna aliqua.',
label:'HOT & SPICY',price:'10'},{ name:'Veg Zinger Burger',image:'image/burger.jpg',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ,tempor incididunt ut labore et dolore magna aliqua.',
label:'VEGGIE',price:'6'}];

var chef = [{  name:'ABC',image:'image/chef3.jpg',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ,tempor incididunt ut labore et dolore magna aliqua.',
designation:'CEO'}];




this.getChef = function(){
return chef;
};


this.getPromodish = function(){
return promodish;
};
this.getDiscounts = function(){
return discount;
};

this.getDiscount = function(index){
return discount[index];
};

})


.factory("aboutFactory",function(){

var about ={};

var chefs= [{ref:'founder',name:'Gusteau',image:'image/founder.jpg',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ,tempor incididunt ut labore et dolore magna aliqua.',
designation:'Founder'},
{ref:'chef2',name:'Sheena Mora',image:'image/chef2.jpg',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ,tempor incididunt ut labore et dolore magna aliqua.',
designation:'Head Chef'},
{ref:'chef1',name:'Ratan Tata',image:'image/chef1.jpg',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ,tempor incididunt ut labore et dolore magna aliqua.',
designation:'Sous Chef'},
{ref:'chef3',name:'Delinos',image:'image/chef4.jpg',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ,tempor incididunt ut labore et dolore magna aliqua.',
designation:'Sous Chef'}];


about.getChefs  = function(){
	return chefs;
};
return about;

})



;