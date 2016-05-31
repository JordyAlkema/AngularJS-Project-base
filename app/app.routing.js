app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/components/home/homeView.html',
        controller: 'homeController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
