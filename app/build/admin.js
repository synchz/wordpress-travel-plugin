jQuery(document).ready((function(t){var i=wpctgPointer.pointers;!function n(o){if(!(o>=i.length)){var e=i[o];t(e.target).pointer({content:e.options.content,position:{edge:e.options.position.edge,align:e.options.position.align},close:t.proxy((function(){t.post(ajaxurl,this),n(o+=1)}),{pointer:e.pointer_id,action:"dismiss-wp-pointer"})}).pointer("open")}}(0),jQuery(document).on("click",".wp-travel-notice-black-friday .notice-dismiss",(function(){t.ajax(ajaxurl,{type:"POST",data:{action:"wp_travel_black_friday_dismiss"}})})),jQuery(document).on("click",".wp-travel-notice-v4-update .notice-dismiss",(function(){t.ajax(ajaxurl,{type:"POST",data:{action:"wp_travel_v4_update_dismiss"}})}))}));