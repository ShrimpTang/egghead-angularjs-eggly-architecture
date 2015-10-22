angular.module('categories.bookmarks.create', [])
    .config(function ($stateProvider) {
        $stateProvider.state('eggly.categorise.bookmarks.create', {
            url: '/bookmarks/create',
            templateUrl: 'app/categories/bookmarks/create/bookmark-create.tmpl.html',
            controller: 'CreateBookMarkCtrl as createBookmarkCtrl'
        });
    })
    .controller('CreateBookMarkCtrl', function ($state, $stateParams, BookmarksModel) {
        var createBookmarkCtrl = this;

        function returnToBookmarks() {
            $state.go('eggly.categorise.bookmarks', {
                category: $stateParams.category
            });
        }

        function cancelCreating() {
            returnToBookmarks();
        }

        function createBookmarks(bookmark){
            BookmarksModel.createBookmark(bookmark);
            returnToBookmarks();
        }

        function resetForm(){
            createBookmarkCtrl.newBookmark = {
                title:'',
                url:'',
                category:$stateParams.category
            }
        }
        createBookmarkCtrl.cancelCreating=cancelCreating;
        createBookmarkCtrl.createBookmarks = createBookmarks;
        resetForm();
    });
