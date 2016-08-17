var app = angular.module('worldscapeinc', ["ui.router", "ui.bootstrap"]);

app.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
])

.run(function($rootScope) {
    $rootScope
        .$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
            });
})