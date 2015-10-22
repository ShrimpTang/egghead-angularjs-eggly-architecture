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
                controller: 'BookMarksListCtrl as bookmarksListCtrl'
            }
        }
    });
}).controller('BookMarksListCtrl', function ($stateParams, BookmarksModel) {
    var bookmarksListCtrl = this;
    BookmarksModel.getBookmarks().then(function (result) {
        bookmarksListCtrl.bookmarks = result;
    });
    bookmarksListCtrl.currentCategoryName = $stateParams.category;

});
