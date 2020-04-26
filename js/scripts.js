window.jQuery = window.$ = jQuery;

/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function () {
	//Preloader
	setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})",1000);
	setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",1000);
	setTimeout("jQuery('footer').animate({'opacity' : '1'},500)",1000);

});

////
//// $ - для подключение jQuery
//// # -id
//// . - class
//// "p" - all <p> elements
////
var _initHTMLbtn;

$(function () {
  $('[data-toggle="popover"]').popover()
})



$(document).ready(function(){//
    $("#btnApply").click(onClickedFnc);
    $("#btnClear").click(clearing);
    _initHTMLbtn = $("#btnApply").html();
    
    $("#btnShift").click(shifter);
    
    //setInterval(titleChanger,500);    
    
    $("input").keyup(maxCountListner);
  //  $("input").effect("highlight", {color:"#669966"}, 3000);

    $("#newWindow").click(openNewWindow);
    
    $("#btnSend").click(senderAllPosition);
    
    
});


function senderAllPosition(){
    
    var _items = $(this).parent().find("input");
    var _itemsTextArea = $(this).parent().find("textarea");

    if(_items.eq(0).val()=="" || _items.eq(1).val()=="" || 
      _items.eq(2).val()=="" || _itemsTextArea.eq(0).val()=="")
            {
                $("#alarmer").html("Не все поля заполнены");
                setTimeout(function(){
                    $("#alarmer").show();
                         setInterval(function(){$("#alarmer").toggle();},500)},3000);			
            }
            
    
}

var _maxCount = 100;

function openNewWindow(){
    window.open("./kek.html","_blank");
}

function maxCountListner(){    
    if(this.value.length >_maxCount){
        this.value="Максимум 10 символов";
        $(this).parent().effect("highlight", {color:"#669966"}, 3000);
    }
} 



var isOldTitle=true;
var oldTitle = $("title").html;
var newTitle = "Новое сообщение";

function titleChanger(){
    console.log("sure");
    $("title").text( (isOldTitle) ? newTitle: oldTitle);
    isOldTitle=!oldTitle;    
}

function onClickedFnc(){    
    
    $("h2").css("foreground-color", "red");
    $("#btnApply").width(100);
    $("#btnApply").height(150);
    $("#btnApply").css({
                "background-color":"bisque",
                "color":"black",
                "font-family":"Comic Sans MS"});

    
    $("#resultText").css({
                    "color":"forestgreen",
                    "font-family":"Comic Sans MS"});
    
    var _fromHTML1 = parseFloat($("#firstTxt").val());
    var _fromHTML2 = parseFloat($("#secondTxt").val());
    
    
    var a = (isNaN(_fromHTML1)) ?  0 : _fromHTML1;  
    var b = (isNaN(_fromHTML2)) ?  0 : _fromHTML2;

    $("#resultText").html(a+b);
    
    (a+b)!=0 ? $("#btnApply").html("Успех, введите значение снова") : $("#btnApply").html("Введите значение снова"); 
}

function clearing(){
    $("#firstTxt").val("");
    $("#secondTxt").val("");
    $("#resultText").html("Результат");
    $("#btnApply").html(_initHTMLbtn);
       
}

function shifter(){           

    Data = new Date();
    setInterval(function(){$('#currTime').html(Date);}, 1000);   
     
    ($("p").val().includes(".")) ?  null : $("p").append(".");
    
    $("p").css({"color":"forestgreen"}); 
    
    
}