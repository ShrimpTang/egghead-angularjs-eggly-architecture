angular.module('eggly.models.boolmarks', [])
    .service('BookmarksModel', function ($http) {
        var model = this,
            bookmarks,
            URLS = {
                FETCH: 'data/bookmarks.json'
            };

        function extract(result) {
            return result.data;
        }

        function cacheBookmarks(result) {
            bookmarks = extract(result);
            return bookmarks;
        }

        model.getBookmarks = function () {
            return $http.get(URLS.FETCH).then(cacheBookmarks);
        }

        model.createBookmark = function (bookmark) {
            bookmark.id =bookmarks.length;
            bookmarks.push(bookmark);
        }
    });
