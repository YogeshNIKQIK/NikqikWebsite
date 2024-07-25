$(document).ready(function() {
  var currentTab = '';
  if(window.location.hash !='' && window.location.hash != undefined){
    setTimeout(function(){
      currentTab = window.location.hash;
      if(currentTab == '#it-service-management-process-consulting'){
        $('.banner-text').html('IT Service Management Process Consulting')
      }

      else if(currentTab == '#it-service-management-tools-implementation'){
        $('.banner-text').html('IT Service Management Tools Implementation')
      }

      else if(currentTab == '#cloud-contact-center-professional-services'){
        $('.banner-text').html('Cloud Contact Center Professional Services')
      }

      else if(currentTab == '#quality-assuarance'){
        $('.banner-text').html('Quality Assuarance')
      }

      else if(currentTab == '#project-management'){
        $('.banner-text').html('Project Management')
      }

      else if(currentTab == '#data-analytics'){
        $('.banner-text').html('Data Analytics')
      }

      else if(currentTab == '#organizational-change-management'){
        $('.banner-text').html('Organizational Change Management')
      }

      else if(currentTab == '#business-analysis'){
        $('.banner-text').html('Business Analysis')
      }

      else if(currentTab == '#staff-augmentation'){
        $('.banner-text').html('Staff Augmentation')
      }

      else if(currentTab == '#managed-services'){
        $('.banner-text').html('Managed Services')
      }

      $('.nav-pills').find('.nav-link, active').removeClass('active');
      var request =  $('.nav-pills').find("a[href='"+currentTab+"']");
      request.addClass("active");
      // console.log('request',request)
      $('#v-pills-tabContent').find('.tab-pane').removeClass('fade show active');
      var activeClassAdd = request.attr('href');
      $(activeClassAdd).addClass('fade show active');
      // console.log('activeClassAdd',activeClassAdd)
    },200)

  }

  $('.nav-pills .nav-link').click(function(){
    var url   = window.location.origin + window.location.pathname
    window.location.href = url+$(this).attr('href');
    if(window.location.hash != currentTab){
      currentTab = $(this).attr('href');
      if(currentTab == '#it-service-management-process-consulting'){
        $('.banner-text').html('IT Service Management Process Consulting')
      }
      else if(currentTab == '#it-service-management-tools-implementation'){
        $('.banner-text').html('IT Service Management Tools Implementation')
      }
      else if(currentTab == '#cloud-contact-center-professional-services'){
        $('.banner-text').html('Cloud Contact Center Professional Services')
      }
      else if(currentTab == '#quality-assuarance'){
        $('.banner-text').html('Quality Assuarance')
      }
      else if(currentTab == '#project-management'){
        $('.banner-text').html('Project Management')
      }
      else if(currentTab == '#data-analytics'){
        $('.banner-text').html('Data Analytics')
      }
      else if(currentTab == '#organizational-change-management'){
        $('.banner-text').html('Organizational Change Management')
      }
      else if(currentTab == '#business-analysis'){
        $('.banner-text').html('Business Analysis')
      }
      else if(currentTab == '#staff-augmentation'){
        $('.banner-text').html('Staff Augmentation')
      }
      else if(currentTab == '#managed-services'){
        $('.banner-text').html('Managed Services')
      }
      // $(".tab-content").find('.tab-pane').not(':eq('+$(this).index()+')').hide('slow');
      // $(".tab-content").find('.tab-pane').eq($(this).index()).toggle({ direction: "top" }, 2000);
    }
  });

  // $(".nav-link").click(function() {

  //   // $(".tab-content").find('.tab-pane').not(':eq('+$(this).index()+')').hide('slow');
  //   // $(".tab-content").find('.tab-pane').eq($(this).index()).toggle({ direction: "top" }, 2000);
  // });
});



////






$(function ($) {
  $(".mobile_btn").on("click", function () {
    $(".main_menu").slideToggle();
    $(".mobile_btn i").toggleClass("fa-xmark fa-xl");
  });

  if ($(window).width() < 768) {
    $(".main_menu  ul li a").on("click", function () {
      $(this)
        .parent(".has_dropdown")
        .children(".sub_menu")
        .css({ "padding-left": "15px" })
        .stop()
        .slideToggle();

      $(this)
        .parent(".has_dropdown")
        .children("a")
        .find(".fa-angle-right")
        .stop()
        .toggleClass("fa-rotate-90");
    });
  }
});






