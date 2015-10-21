angular.module('categories.bookmarks', [
    'categories.bookmarks.create',
    'categories.bookmarks.edit',
    'eggly.models.categories',
    'eggly.models.boolmarks'
]).config(function ($stateProvider) {
    $stateProvider.state('eggly.categorise.bookmarks', {
        url: 'categories/:category',
        views: {
            "bookmarks@": {
                templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
                controller: 'BookMarksCtrl'
            }
        }
    });
}).controller('BookMarksCtrl', function ($scope,$stateParams) {
    $scope.currentCategoryName = $stateParams.category;
});
