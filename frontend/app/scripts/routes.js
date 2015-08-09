'use strict';

angular
  .module('frontendApp')
  // Configuration of states in router
  .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

     // Define colors of application, from material angular
     $mdThemingProvider.theme('default')
       .primaryPalette('red', { 'default': '200' })
       .accentPalette('orange');

     // For any unmatched url, redirect to /
     $urlRouterProvider.otherwise("/");

     $stateProvider
       .state('home', {
         url: "/",
         templateUrl: "views/home.html",
         controller: 'HomeCtrl'
       })
       .state('plugin', {
         url: '/plugin/:key',
         templateUrl: 'views/plugin.html',
         controller: 'PluginCtrl'
       })
       .state('search', {
         url: '/search/:val',
         templateUrl: "views/plugin_list.html",
         controller: "SearchCtrl"
       })
       .state('tag', {
        url: '/tag/:key',
        templateUrl: "views/plugin_list.html",
        controller: "TagCtrl"
       })
       .state('author', {
        url: '/author/:id',
        templateUrl: 'views/author.html',
        controller: 'AuthorCtrl'
       })
       .state('author_plugins', {
        url: '/author/:id/plugin',
        templateUrl: "views/plugin_list.html",
        controller: "AuthorPluginsCtrl"
       })
       .state('submit', {
         url: '/submit',
         templateUrl: "views/submit.html",
         controller: "SubmitCtrl"
       })
       .state('contact', {
         url: '/contact',
         templateUrl: 'views/contact.html',
         controller: 'ContactCtrl'
       });
   });