// ==UserScript==
// @name         Zendesk Mute New Chat Notifications
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  Adds the option to "mute" new chat notifications
// @author       Senff
// @downloadURL  https://github.com/Autmattic/support-helper-tools/raw/main/zendesk-enhancements/zendesk-style-changes/zendesk-style-changes.user.js
// @updateURL    https://github.com/Autmattic/support-helper-tools/raw/main/zendesk-enhancements/zendesk-style-changes/zendesk-style-changes.user.js
// @match        https://woothemes.zendesk.com/agent/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zendesk.com
// @grant        none
// ==/UserScript==

var $ = window.jQuery;

// === Add Mute Button ===================================================
function addMuteButton() {

    if(!$('#dnd-chats').length) {
        $('body').append('<style type="text/css" id="dnd-button-styles">.dnd-checkbox {display:flex;align-items: center;font-weight: bold;}#dnd-chats {float: left;margin-left: 5px;margin-right: 5px;}.dnd-checkbox fieldset {display: flex;padding-right: 10px;padding-left: 5px;}body.dnd-mode button[data-test-id="toolbar-serve-chat-button"] {background: #e9ebed !important;animation: none !important;}body.dnd-mode button[data-test-id="toolbar-serve-chat-button"] span{color:#999999 !important;text-shadow: 1px 1px 0 #ffffff;}body.dnd-mode button[data-test-id="toolbar-serve-chat-button"] div {background: #bb0000 !important;color: #ffffff !important;}body.dnd-mode audio {muted: true !important;}</style>');
        $('button[data-test-id="toolbar-serve-chat-button"]').parent().addClass('dnd-checkbox').append('<fieldset><input type="checkbox" id="dnd-chats"><label for="dnd-chats">DO NOT DISTURB</input></fieldset>');
    }

}

$('body').on('click',$('.dnd-checkbox fieldset'),function(m){
    if(document.getElementById('dnd-chats').checked) {
        $('body').addClass('dnd-mode');
    } else {
     $('body').removeClass('dnd-mode');
    }
});

// Loop until styles are added
window.setInterval(function(){
    addMuteButton();
}, 1000);
