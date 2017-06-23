'use strict';

angular.module('BlurAdmin.services').factory('hazardService', function(BaseService) {
  var service = new BaseService('hazards');
  var originalFindAll = service.findAll;
  service.findAll = function (queryParams) {
    queryParams = queryParams || {};
    queryParams.userId = queryParams.userId || 'all';
    return originalFindAll.call(this, queryParams);
  };
  return service;
});
