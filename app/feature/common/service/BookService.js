myVirtualStoryBookApp.service("BookService", ["$http",
    function($http){
        
        var service = {};
 
        var BASE_URL = "http://myvirtualstorybook-okazari-4.c9.io/symfony/web/app_dev.php";
 
        service.getPublishedBooks = function(){
            return $http.get(BASE_URL+"/books");
        }
 
        service.getPlayerBooks = function(playerId){
            return $http.get(BASE_URL+"/players/"+playerId+"/books");
        }
 
        service.createPlayerBook = function(playerId){
            return $http.post(BASE_URL+"/players/"+playerId+"/books");
        }
 
        service.deleteBook = function(book){
            return $http.delete(BASE_URL+"/books/"+book.id);
        }
 
        service.getBook = function(bookId){
            return $http.get(BASE_URL+"/books/"+bookId);
        }
 
        return service;
    }
]);