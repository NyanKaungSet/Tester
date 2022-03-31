$(document).ready(function(){
    $("#games_page").hide();
    $("#company_page").hide();
    $("#aboutus_page").hide();

    $("#home").click(function(){
        $("#home_page").show();
        $("#games_page").hide();
        $("#company_page").hide();
        $("#aboutus_page").hide();
    })

    $("#games").click(function(){
        $("#home_page").hide();
        $("#games_page").show();
        $("#company_page").hide();
        $("#aboutus_page").hide();
    })

    $("#company").click(function(){
        $("#home_page").hide();
        $("#games_page").hide();
        $("#company_page").show();
        $("#aboutus_page").hide();
    })

    $("#careers").click(function(){
        $("#home_page").hide();
        $("#games_page").hide();
        $("#company_page").hide();
        $("#aboutus_page").hide();
    })

    $("#aboutus").click(function(){
        $("#home_page").hide();
        $("#games_page").hide();
        $("#company_page").hide();
        $("#aboutus_page").show();
    })
});