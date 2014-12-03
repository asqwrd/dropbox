(function($) {

    $.fn.imageGallery = function(options) {
      
      if(options == undefined)
        options = {
          pagination:false
        }
      this.slides = $(this).children('ul').children();
      this.paginationHTML = "<ul class='pagination'>";
      var  self=this;
      this.slides.each(function(index){
        self.slides[index].setAttribute("data-index", index);
        self.paginationHTML+="<li></li>";
      });
      
      this.paginationHTML+="</ul>";
      if(options.pagination){
        $(this).append(self.paginationHTML);
        this.pages = $('.pagination').children();
        this.pages.each(function(index){
          self.pages[index].setAttribute("data-index", index);
        });
      
        $(this.pages[0]).addClass("activePage");
      }
      $(this.slides[0]).addClass("imageAnimation");
      
      if(options.pagination){
        $('.pagination').on('click',function(e){
          if($(e.target).data('index') !==undefined){
            var currentSlide = $('.gallerySlides').find( ".imageAnimation" ).data('index');
            var selectedSlide = $(e.target).data('index');
            $(self.slides[currentSlide]).removeClass("imageAnimation");
            $(self.slides[selectedSlide]).addClass("imageAnimation");
            $(self.pages[currentSlide]).removeClass("activePage");
            $(self.pages[selectedSlide]).addClass("activePage");
          }
        });
      }
      $('.leftArrow').on('click',function(){
        var slideCount = self.slides.length;
        var currentSlide = $('.gallerySlides').find( ".imageAnimation" ).data('index');
        if(currentSlide == 0){
          $(self.slides[currentSlide]).removeClass("imageAnimation");
          $(self.slides[slideCount-1]).addClass("imageAnimation");
          if(options.pagination){
            $(self.pages[currentSlide]).removeClass("activePage");
            $(self.pages[slideCount-1]).addClass("activePage");
          }
        }else{
          $(self.slides[currentSlide]).removeClass("imageAnimation");
          $(self.slides[currentSlide-1]).addClass("imageAnimation");
          if(options.pagination){
            $(self.pages[currentSlide]).removeClass("activePage");
            $(self.pages[currentSlide-1]).addClass("activePage");
          }
        }
      });
      
      $('.rightArrow').on('click',function(){
        var slideCount = self.slides.length - 1;
        var currentSlide = $('.gallerySlides').find( ".imageAnimation" ).data('index');
        if(currentSlide == slideCount){
          $(self.slides[currentSlide]).removeClass("imageAnimation");
          $(self.slides[0]).addClass("imageAnimation");
          if(options.pagination){
            $(self.pages[currentSlide]).removeClass("activePage");
            $(self.pages[0]).addClass("activePage");
          }
        }else{
          $(self.slides[currentSlide]).removeClass("imageAnimation");
          $(self.slides[currentSlide + 1]).addClass("imageAnimation");
          if(options.pagination){
            $(self.pages[currentSlide]).removeClass("activePage");
            $(self.pages[currentSlide + 1]).addClass("activePage");
          }
        }
      });
        

    }

}(jQuery));