function set_person() {
    $("#prize-set").hide();
    $("#style-theme").hide();
    $("#person-set").show();
}

function set_prize() {
    $("#prize-set").show();
    $("#style-theme").hide();
    $("#person-set").hide();

}

function set_bg() {
    $("#prize-set").hide();
    $("#style-theme").show();
    $("#person-set").hide();

}
$(document).ready(set_person());