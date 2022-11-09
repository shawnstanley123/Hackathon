import $ from 'jquery';
import ReactDOM from 'react-dom'
import React from 'react'
$('push').click(function(){
    $('.bucket').animate({
        marginTop: "+=80px",
    }, 1000);


    });