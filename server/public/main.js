"use strict";var app=angular.module("M5Systems",["ui.router"]);app.config(["$locationProvider","$urlRouterProvider",function(t,e){t.html5Mode(!0),e.otherwise("/404")}]),app.run(["$rootScope",function(t){t.$on("$stateChangeSuccess",function(){document.body.scrollTop=document.documentElement.scrollTop=0,document.querySelector(".bottom").classList.remove("active")})}]),app.config(["$stateProvider",function(t){t.state("404",{url:"/404",templateUrl:"js/404/404.template.min.html"})}]),app.controller("AboutCtrl",["$scope",function(t){}]),app.config(["$stateProvider",function(t){t.state("about-us",{url:"/about-us",templateUrl:"js/about-us/about-us.template.min.html",controller:"AboutCtrl"})}]),app.controller("CloudConsultingCtrl",["$scope",function(t){}]),app.config(["$stateProvider",function(t){t.state("cloud-consulting",{url:"/cloud-consulting",templateUrl:"js/cloud-consulting/cloud-consulting.template.min.html",controller:"CloudConsultingCtrl"})}]),app.controller("ContactUsCtrl",["$scope","$http",function(t,e){t.submitted=!1,t.getInfo=function(o){var n=o.name,r=o.email,l=o.website,s=o.message;e({method:"POST",url:"/api/formSubmit",data:{name:n,email:r,website:l,message:s}}),t.submitted=!0}}]),app.config(["$stateProvider",function(t){t.state("contact-us",{url:"/contact-us",templateUrl:"js/contact-us/contact-us.template.min.html",controller:"ContactUsCtrl"})}]),app.directive("footer",["$rootScope","$state",function(t,e){return{restrict:"E",scope:{},templateUrl:"js/footer/footer.template.min.html",link:function(t){}}}]),app.controller("HomeCtrl",["$scope",function(t){}]),app.config(["$stateProvider",function(t){t.state("home",{url:"/",templateUrl:"js/home/home.template.min.html",controller:"HomeCtrl"})}]),app.directive("navbar",["$rootScope","$state",function(t,e){return{restrict:"E",scope:{},templateUrl:"js/navbar/navbar.template.min.html",link:function(t){t.displayLinks=function(){document.querySelector(".bottom").classList.toggle("active")}}}}]),app.controller("SolutionsAndServicesCtrl",["$scope",function(t){}]),app.config(["$stateProvider",function(t){t.state("solutions-and-services",{url:"/solutions-and-services",templateUrl:"js/solutions-and-services/solutions-and-services.template.min.html",controller:"SolutionsAndServicesCtrl"})}]),app.controller("TestimonialsCtrl",["$scope",function(t){}]),app.config(["$stateProvider",function(t){t.state("testimonials",{url:"/testimonials",templateUrl:"js/testimonials/testimonials.template.min.html",controller:"TestimonialsCtrl"})}]),app.controller("NetworkSecurityCtrl",["$scope",function(t){}]),app.config(["$stateProvider",function(t){t.state("network-security",{url:"/solutions-and-services/network-security",templateUrl:"js/solutions-and-services/network-security/network-security.template.min.html",controller:"NetworkSecurityCtrl"})}]),app.controller("NetworkInfrastructureCtrl",["$scope",function(t){}]),app.config(["$stateProvider",function(t){t.state("network-infrastructure",{url:"/solutions-and-services/network-infrastructure",templateUrl:"js/solutions-and-services/network-infrastructure/network-infrastructure.template.min.html",controller:"NetworkInfrastructureCtrl"})}]),app.controller("NetworkAndDatacenterVirtualizationCtrl",["$scope",function(t){}]),app.config(["$stateProvider",function(t){t.state("network-and-datacenter-virtualization",{url:"/solutions-and-services/network-and-datacenter-virtualization",templateUrl:"js/solutions-and-services/network-and-datacenter-virtualization/network-and-datacenter-virtualization.template.min.html",controller:"NetworkAndDatacenterVirtualizationCtrl"})}]),app.controller("StaffAugmentationCtrl",["$scope",function(t){}]),app.config(["$stateProvider",function(t){t.state("staff-augmentation",{url:"/solutions-and-services/staff-augmentation",templateUrl:"js/solutions-and-services/staff-augmentation/staff-augmentation.template.min.html",controller:"StaffAugmentationCtrl"})}]),app.controller("TPMCtrl",["$scope",function(t){}]),app.config(["$stateProvider",function(t){t.state("tpm",{url:"/solutions-and-services/technical-project-management",templateUrl:"js/solutions-and-services/tpm/tpm.template.min.html",controller:"TPMCtrl"})}]),app.controller("WirelessNetworksCtrl",["$scope",function(t){}]),app.config(["$stateProvider",function(t){t.state("wireless-networks",{url:"/solutions-and-services/wireless-networks",templateUrl:"js/solutions-and-services/wireless-networks/wireless-networks.template.min.html",controller:"WirelessNetworksCtrl"})}]);