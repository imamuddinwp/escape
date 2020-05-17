$(document).ready(function() {




            // Active Navigation 
                $('.navbar-nav li').click(function(){
                    $(this).addClass('active').siblings().removeClass('active');
                });

           

             // Go To Top Start
                            $('.go_to_top').click(function(){
                                $("html, body").animate({
                                    scrollTop: 0
                                }, 1000);   //Nano Second
                        
                        });

                        // Go To Top Hide & Show 

                        $('.go_to_top').fadeOut(); // Hide In First Opening Time
                        $(window).scroll(function(){
                            var mouse_scroll =$(this).scrollTop();

                            if(mouse_scroll < 200) {     //200px
                                //$('.go_to_top').hide();
                                $('.go_to_top').fadeOut();
                            } 
                            else {
                                //$('.go_to_top').show();
                                $('.go_to_top').fadeIn();
                            }
                        });
                 // Go To Top End


                 // Menu Fixed 
                 $(window).scroll(function(){
                    var fixed_menu =$(this).scrollTop();

                    if(fixed_menu > 100) {   
                        $('body').addClass('menu_fixed');
                    } 
                    else {
                        $('body').removeClass('menu_fixed');
                    }
                });

                //Menu Items Click Target
                $('.navbar-nav a[href^="#"]').click(function(e){
                    e.preventDefault();
     
                    var targeted_link = this.hash;
     
                    $('html, body').animate({
                        scrollTop: $(targeted_link).offset().top - 75
                    }, 2000);    
     
                 });
});