angular.module('categories', ['eggly.models.categories'])
    .config(function ($stateProvider) {
        $stateProvider.state('eggly.categorise', {
            url:'/',
            views: {
                'categories@': {
                    templateUrl: 'app/categories/categories.tmpl.html',
                    controller: 'CategoriesListCtrl as categoriesListCtrl'
                },
                'bookmarks@': {
                    templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
                }
            }
        });
    }).controller('CategoriesListCtrl', function (CategoriesModel) {
        var categoriesListCtrl = this;
        categoriesListCtrl.categories = CategoriesModel.getCategories();
    });
