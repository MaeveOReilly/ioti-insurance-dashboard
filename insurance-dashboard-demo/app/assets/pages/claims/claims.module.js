(function() {
  'use strict';

  angular.module('BlurAdmin.pages.claims', []).config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider.state('main.claims', {
      url: 'claims',
      templateUrl: 'pages/claims/claim-list.html',
      title: 'Claims',
      sidebarMeta: {
        icon: 'fa fa-envelope-o',
        order: 1
      }
    }).state('main.claim-view', {
      url: 'claims/:claimId',
      templateUrl: 'pages/claims/claim-view.html',
      title: 'Claim'
    }).state('main.claim-add', {
      url: 'claims/add/:username',
      templateUrl: 'pages/claims/claim-add.html',
      title: 'New Claim'
    });
  }

})();
