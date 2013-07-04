// var reload_car_fares = true;
// var offset_hours = 2;
// function get_offset_date_time() {
//     var current_date = get_current_server_date_time();
//     current_date.setTime(current_date.getTime() + offset_hours * 60 * 60 * 1000);
//     return current_date;
// }

// $(function(){
    
//     var hours_options = $('#id_pickup_time_0').html();
//     var mins_options = $('#id_pickup_time_1').html();

//     function date_selected(dateText, inst) {
//         var dateComponents = dateText.split("/");
//         // parseInt(string, radix)
//         // the radix 10 means decimal
//         var sel_date = parseInt(dateComponents[0], 10);
//         var sel_month= parseInt(dateComponents[1], 10);
//         var sel_hour = parseInt($('#id_pickup_time_0').val(), 10);
        
//         var current_date = get_offset_date_time();
//         var current_hour = current_date.getHours();
        
//         window.min_hours = -1;
//         window.min_minutes = current_date.getMinutes();;
        
//         $("#id_pickup_time_1").html(mins_options);
//         $("#id_pickup_time_0").html(hours_options);
//         if ((sel_date == current_date.getDate()) && (sel_month == current_date.getMonth()+1)) {
//             window.min_hours = current_date.getHours();
//             if (sel_hour <= current_hour) {
//                 window.min_minutes = current_date.getMinutes();
//                 $("#id_pickup_time_1 option").each(function(){
//                     if ($(this).val() != 'mins') {
//                         var mins = parseInt($(this).val(), 10);
//                         if ((mins < window.min_minutes) && (window.min_minutes <= 45)) {
//                             $(this).remove();
//                         }
//                     }
//                 });
//             }
//         } 
//         $("#id_pickup_time_0 option").each(function(){
//             if ($(this).val() != 'hours') {
//                 var hr = parseInt($(this).val(), 10);
//                 if ((hr < window.min_hours) || ((hr == window.min_hours) && (window.min_minutes >= 45))) {
//                     $(this).remove();
//                 }
//             }
//         });
//         $('#id_pickup_time_0').val($('#id_pickup_time_0 option:nth-child(2)').val());
//         $('#id_pickup_time_1').val($('#id_pickup_time_1 option:nth-child(2)').val());
//     }

// });    



var d = new Date();
var n = d.getHours();
