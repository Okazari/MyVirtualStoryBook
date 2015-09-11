'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('WritePageController', function ($scope, $state, $stateParams, $timeout, TransitionService, BookService, PageService, D3Service, MusicPlayerService) {

    $scope.music = MusicPlayerService.music;

    $scope.savePage = function(){
      PageService.updatePage($scope.page);
      if(MusicPlayerService.isValidUrl($scope.page.background_music)){
        MusicPlayerService.load($scope.page.background_music);
      }else{
        MusicPlayerService.music.unload();
      }
    }
    
    $scope.pageLoading=true;
    $scope.transitionsLoading=true;
    
    PageService.getPage($stateParams.id).success(function(page){
      $scope.page = page;
      $scope.pageLoading=false;
      if(MusicPlayerService.isValidUrl($scope.page.background_music)){
        MusicPlayerService.load($scope.page.background_music);
      }else{
        MusicPlayerService.music.unload();
      }
      PageService.getPageTransitions($scope.page).success($scope.updateTransitions);
      BookService.getBookPages($scope.page.bookId).success(function(pages){
        $scope.pages = pages;
        $scope.transitionsLoading=false;
      });
      BookService.getBook($scope.page.bookId).success(function(book){
        $scope.book = book;
      });
    });
    
    $scope.addNewTransition = function(){
      $scope.transitionsLoading=true;
      TransitionService.addNewTransition($scope.page).success(function(){
        PageService.getPageTransitions($scope.page).success($scope.updateTransitions);
      });
    };
    
    $scope.updateTransitions = function(transitions){
      $scope.page.transitions = transitions;
      $scope.transitionsLoading=false;
    }
    
    $scope.deleteTransition = function(transition){
      $scope.transitionsLoading=true;
      TransitionService.deleteTransition(transition).success(function(){
        PageService.getPageTransitions($scope.page).success($scope.updateTransitions);
      });
    };
    
    $scope.saveTransition = function(transition){
      TransitionService.updateTransition(transition);
    }
    
    $scope.addNewPage = function(transition){
      PageService.addBookNewPage($scope.book).success(function(page){
        transition.toPage = page._id;
        console.log(transition);
        TransitionService.updateTransition(transition).success(function(){
          $state.go("app.write.page",{id:page._id});
        });
      });
    }
  });
