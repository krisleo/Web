
$(document).ready(set_person());

function set_person() {
    $("#setting #prize-set").hide();
    $("#style-theme").hide();
    $("#start_lottery").hide();
    $("#person-set").show();
}

function set_prize() {
    $("#prize-set").show();
    $("#style-theme").hide();
    $("#person-set").hide();
    $("#start_lottery").hide();
}

function set_bg() {
    $("#prize-set").hide();
    $("#style-theme").show();
    $("#person-set").hide();
    $("#start_lottery").hide();
}

function start() {
    $("#prize-set").hide();
    $("#style-theme").hide();
    $("#person-set").hide();
    $("#start_lottery").show();
}