jQuery('document').ready(function(){

 jQuery('button').on('click',function(){
     
    var v1,v2,v3;

    v1 = jQuery('#v1').val();
    v2 = jQuery('#v2').val();
    v1 = parseInt(v1);
    v2 = parseInt(v2);
    v3 = Math.round((Math.sqrt((v2*v2) + (v1*v1))));

    alert(v3); // вывод в alert окно
 })
 
 jQuery('input').on('keyup',function () {
    var value1,value2,value3;

    value1 = jQuery('#val1').val();
    value2 = jQuery('#val2').val();
    value1 = parseInt(value1);// Str to Int
    value2 = parseInt(value2);
    value3 = Math.round((Math.sqrt((value2*value2) + (value1*value1))));
     
    jQuery('#res').html(value3);// вывод в строку
 })
 
var test1;

//test1 = prompt('Введите Ваше имя?','максим')

});