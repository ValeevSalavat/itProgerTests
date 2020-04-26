System.register((void 0), [], function() {
  "use strict";
  window.jQuery = window.$ = jQuery;
  jQuery(window).load(function() {
    setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})", 1000);
    setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)", 1000);
    setTimeout("jQuery('footer').animate({'opacity' : '1'},500)", 1000);
  });
  var _initHTMLbtn;
  $(function() {
    $('[data-toggle="popover"]').popover();
  });
  $(document).ready(function() {
    $("#btnApply").click(onClickedFnc);
    $("#btnClear").click(clearing);
    _initHTMLbtn = $("#btnApply").html();
    $("#btnShift").click(shifter);
    setInterval(titleChanger, 500);
  });
  var oldTitle = $("title").html;
  var newTitle = "Новое сообщение";
  function titleChanger() {
    var curTitle = (oldTitle != newTitle) ? newTitle : oldTitle;
    $("title").html(curTitle);
  }
  function onClickedFnc() {
    $("h2").css("foreground-color", "red");
    $("#btnApply").width(100);
    $("#btnApply").height(150);
    $("#btnApply").css({
      "background-color": "black",
      "font-family": "Comic Sans MS"
    });
    $("#resultText").css({
      "color": "forestgreen",
      "font-family": "Comic Sans MS"
    });
    var _fromHTML1 = parseFloat($("#firstTxt").val());
    var _fromHTML2 = parseFloat($("#secondTxt").val());
    var a = (isNaN(_fromHTML1)) ? 0 : _fromHTML1;
    var b = (isNaN(_fromHTML2)) ? 0 : _fromHTML2;
    $("#resultText").html(a + b);
    (a + b) != 0 ? $("#btnApply").html("Успех, введите значение снова") : $("#btnApply").html("Введите значение снова");
  }
  function clearing() {
    $("#firstTxt").val("");
    $("#secondTxt").val("");
    $("#resultText").html("Результат");
    $("#btnApply").html(_initHTMLbtn);
  }
  function shifter() {
    Data = new Date();
    setInterval(function() {
      $('#currTime').html(Date);
    }, 1000);
  }
  return {};
});
