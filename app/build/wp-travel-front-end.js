(()=>{"undefined"!=typeof _wp_travel_check_for_pro&&"1"==_wp_travel_check_for_pro.is_enable&&"undefined"!=typeof _wp_travel_check_cp_by_billing&&"yes"==_wp_travel_check_cp_by_billing.is_enable&&jQuery((function(e){function a(a,t){"paypal"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-paypal' name='wp_travel_payment_gateway' value='paypal' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-paypal' class='radio-checkbox-label'>Standard Paypal</label></div>"),"instamojo_checkout"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-instamojo_checkout' name='wp_travel_payment_gateway' value='instamojo_checkout' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-instamojo_checkout' class='radio-checkbox-label'>Instamojo</label></div>"),"bank_deposit"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-bank_deposit' name='wp_travel_payment_gateway' value='bank_deposit' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-bank_deposit' class='radio-checkbox-label'>Bank Deposite</label></div>"),"khalti"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-khalti' name='wp_travel_payment_gateway' value='khalti' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-khalti' class='radio-checkbox-label'>Khalti</label></div>"),"payu"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-payu' name='wp_travel_payment_gateway' value='payu' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-payu' class='radio-checkbox-label'>Payu</label></div>"),"payu_latam"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-payu_latam' name='wp_travel_payment_gateway' value='payu_latam' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-payu_latam' class='radio-checkbox-label'>Payu Latam</label></div>"),"payfast"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-payfast' name='wp_travel_payment_gateway' value='payfast' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-payfast' class='radio-checkbox-label'>Payfast</label></div>"),"payhere"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-payhere' name='wp_travel_payment_gateway' value='payhere' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-payhere' class='radio-checkbox-label'>Payhere</label></div>"),"express_checkout"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-express_checkout' name='wp_travel_payment_gateway' value='express_checkout' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-express_checkout' class='radio-checkbox-label'>Paypal Express Checkout</label></div>"),"paystack"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-paystack' name='wp_travel_payment_gateway' value='paystack' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-paystack' class='radio-checkbox-label'>Paystack</label></div>"),"razorpay_checkout"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-razorpay_checkout' name='wp_travel_payment_gateway' value='razorpay_checkout' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-razorpay_checkout' class='radio-checkbox-label'>Razorpay</label></div>"),"squareup_checkout"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-squareup_checkout' name='wp_travel_payment_gateway' value='squareup_checkout' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-squareup_checkout' class='radio-checkbox-label'>Squareup</label></div>"),"stripe"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-stripe' name='wp_travel_payment_gateway' value='stripe' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-stripe' class='radio-checkbox-label'>Stripe</label></div>"),"stripe_ideal"==a&&e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio'><input type='radio' id='wp-travel-payment-stripe_ideal' name='wp_travel_payment_gateway' value='stripe_ideal' data-parsley-required='1' required='1' data-parsley-errors-container='#error_container-wp-travel-payment-gateway' data-parsley-multiple='wp_travel_payment_gateway' checked><label for='wp-travel-payment-stripe_ideal' class='radio-checkbox-label'>Stripe Ideal</label></div>")}e("#wp-travel-country").change((function(){e(".wp-travel-radio-group.wp-travel-payment-field .wp-travel-radio").remove();var t=Object.keys(_wp_travel_active_payment),r=[],l=1;for(var i in _wp_travel_conditional_payment_list)t.includes(_wp_travel_conditional_payment_list[i].payment_gateway)&&_wp_travel_conditional_payment_list[i].billing_address==this.value&&(r[l]=_wp_travel_conditional_payment_list[i].payment_gateway),l++;r.length>0?r.forEach(a):e(".wp-travel-radio-group.wp-travel-payment-field").append("<div class='wp-travel-radio no-payment-found'>Payment Gateway is not found for selected billing country.</div>")}))})),jQuery((function(e){function a(){var a=0;e(".wp-travel-feature-slide-content").css({height:"auto"}),window.innerWidth>992&&(e(".wp-travel-feature-slide-content").each((function(){e(this).height()>a&&(a=e(this).height())})),a>0&&(e(".trip-headline-wrapper .left-plot").height(a),e(".trip-headline-wrapper .right-plot").height(a)))}function t(a){for(var t=0;t<a;t++)e(".rate_label:eq( "+t+" )").addClass("fas").removeClass("far");for(j=4;j>=t;j--)e(".rate_label:eq( "+j+" )").addClass("far")}if(e(".wp-travel-error").length>0&&e("html, body").animate({scrollTop:e(".wp-travel-error").offset().top-200},1e3),a(),e(".wp-travel-gallery").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}),e(".wp-travel-send-enquiries").magnificPopup({type:"inline",preloader:!1,focus:"#wp-travel-enquiry-name",midClick:!0,callbacks:{open:function(){e("#wp-travel-enquiries").trigger("reset").parsley().reset()}}}),e(".wti-send-enquiries").magnificPopup({type:"inline",preloader:!1,focus:"#wp-travel-enquiry-name",midClick:!0,callbacks:{open:function(){e("#wp-travel-enquiries").trigger("reset").parsley().reset()}}}),e("#wp-travel-tab-wrapper").easyResponsiveTabs({}),e(".rate_label").hover((function(){var a=e(this).attr("data-id");e(".rate_label").removeClass("fas"),t(a)}),(function(){var a=e("#wp_travel_rate_val").val();e(".rate_label").removeClass("fas").addClass("far"),a>0&&t(a)})),e(".rate_label").click((function(a){a.preventDefault(),e("#wp_travel_rate_val").val(e(this).attr("data-id"))})),e(document).on("click",".wp-travel-count-info",(function(a){a.preventDefault(),e(".wp-travel-review").trigger("click")})),e(document).on("click",".top-view-gallery",(function(a){a.preventDefault(),e(".wp-travel-tab-gallery-contnet").trigger("click")})),e(document).on("click",".wp-travel-count-info, .top-view-gallery",(function(a){a.preventDefault();var t=e(window).width(),r=e(".wp-travel-tab-wrapper").offset().top;t<767&&(r=e(".resp-accordion.resp-tab-active").offset().top),e("html, body").animate({scrollTop:r},1200)})),e(window).on("resize",(function(e){a()})),e(".open-all-link").click((function(a){a.preventDefault(),e(".panel-title a").removeClass("collapsed").attr({"aria-expanded":"true"}),e(".panel-collapse").addClass("in"),e(".close-all-link").show(),e(".panel-collapse").css("height","auto")})),e(".close-all-link").click((function(a){a.preventDefault(),e(".panel-title a").addClass("collapsed").attr({"aria-expanded":"false"}),e(".panel-collapse").removeClass("in"),e(".open-all-link").show()})),jQuery(".wp-travel-booking-row").hide(),jQuery(".show-booking-row").click((function(a){a.preventDefault();var t=e(this).closest("li.availabily-content");jQuery(this).parent(".action").siblings(".wp-travel-booking-row").toggle("fast",(function(){t.toggleClass("opened")})).addClass("animate"),jQuery(this).text((function(e,a){return a===wp_travel.strings.bookings.select?wp_travel.strings.bookings.close:wp_travel.strings.bookings.select}))})),jQuery(".wp-travel-booking-row-fd").hide(),jQuery(".show-booking-row-fd").click((function(e){e.preventDefault(),jQuery(this).parent(".action").parent(".trip_list_by_fixed_departure_dates_booking").siblings(".wp-travel-booking-row-fd").toggle("fast").addClass("animate"),jQuery(this).text((function(e,a){return a===wp_travel.strings.bookings.select?wp_travel.strings.bookings.close:wp_travel.strings.bookings.select}))})),jQuery(".wp-travel-pricing-dates").each((function(){var e=jQuery(this).data("available-dates");e?jQuery(this).wpt_datepicker({language:wp_travel.locale,autoClose:!0,minDate:new Date,onRenderCell:function(a,t){if("day"==t)return e=e.map((function(e){return new Date(e).toLocaleDateString("en-US")})),isDisabled=!e.includes(a.toLocaleDateString("en-US")),{disabled:isDisabled}}}):jQuery(this).wpt_datepicker({language:wp_travel.locale,minDate:new Date,autoClose:!0})})),"undefined"!=typeof moment&&(e(".wp-travel-pricing-days-night").wpt_datepicker({language:wp_travel.locale,minDate:new Date,autoClose:!0,onSelect:function(a,t,r){if(t){var l=r.$el,i=e(l).closest("form").attr("id"),p="arrival_date"===e(l).attr("name")?e("#"+i+" input[name=departure_date]"):e("#"+i+" input[name=arrival_date]"),n=parseInt(l.data("totaldays"));if(n<1)return void p.val(a);var s=moment(t);"arrival_date"===e(l).attr("name")?someFormattedDate=s.add(n,"days").format("YYYY-MM-DD"):someFormattedDate=s.subtract(n,"days").format("YYYY-MM-DD"),p.wpt_datepicker().data("datepicker").date=new Date(someFormattedDate),p.val(someFormattedDate)}}}),e("input[name=departure_date]").each((function(){var a=e(this).wpt_datepicker().data("datepicker");if(void 0!==a){var t=a.$el.data("totaldays");t>0&&(someFormattedDate=moment().add(t,"days").format("YYYY-MM-DD"),a.update("minDate",new Date(someFormattedDate)))}}))),"function"==typeof parsley&&e("input").parsley(),e(".login-page .message a").click((function(a){a.preventDefault(),e(".login-page form.login-form,.login-page form.register-form").animate({height:"toggle",opacity:"toggle"},"slow")})),e(".dashboard-tab").easyResponsiveTabs({type:"vertical",width:"auto",fit:!0,tabidentify:"ver_1",activetab_bg:"#fff",inactive_bg:"#F5F5F5",active_border_color:"#c1c1c1",active_content_border_color:"#5AB1D0"}),window.location.hash){var r=window.location.hash.substring(1);if(e("ul.resp-tabs-list > li#"+r).hasClass("wp-travel-ert")&&(lis=e("ul.resp-tabs-list > li"),lis.removeClass("resp-tab-active"),e("ul.resp-tabs-list > li#"+r).addClass("resp-tab-active"),tab_cont=e(".tab-list-content"),tab_cont.removeClass("resp-tab-content-active").hide(),e("#"+r+".tab-list-content, #wp-travel-tab-content-"+r+".tab-list-content").addClass("resp-tab-content-active").show()),e(".wp-travel-tab-wrapper").length){var l=e(window).width(),i=e(".wp-travel-tab-wrapper").offset().top;l<767&&(i=e(".resp-accordion.resp-tab-active").offset().top),e("html, body").animate({scrollTop:i},1200)}}e(".dashtab-nav").click((function(a){a.preventDefault();var t=e(this).data("tabtitle");e("#"+t).click(),e(this).hasClass("change-password")&&(e("#wp-travel-dsh-change-pass-switch").is(":checked")||e("#wp-travel-dsh-change-pass-switch").trigger("click"))})),e("#wp-travel-dsh-change-pass-switch").change((function(a){e("#wp-travel-dsh-change-pass").slideToggle()})),e(".wp_travel_tour_extras_toggler").click((function(){e(this).parents(".wp_travel_tour_extras_option_single_content").children(".wp_travel_tour_extras_option_bottom").slideToggle()})),e(".wp-travel-magnific-popup").magnificPopup({type:"inline"}),e(".wp-travel-payment-receipt").magnificPopup({type:"image"}),e(document).on("click",".paxpicker .icon-users",(function(a){e(this).closest(".paxpicker").hasClass("is-active")?e(this).closest(".paxpicker").removeClass("is-active"):e(this).closest(".paxpicker").addClass("is-active")})),e(".add-to-cart-btn").on("click",(function(){var a=e(this).closest("form").find(".pricing-categories");parseInt(a[0].dataset.selectedPax)<parseInt(a[0].dataset.min)?(alert(wp_travel.strings.alert.atleast_min_pax_alert),e(this).attr("disabled","disabled").css({opacity:".5"})):e(this).removeAttr("disabled").removeAttr("style")})),e(document).on("click",".pax-picker-plus, .pax-picker-minus",(function(a){a.preventDefault();var t,r,l,i=e(this).closest(".pricing-categories"),p=i.attr("id"),n=e("#"+i.data("parent-form-id")),s=parseInt(document.getElementById(p).dataset.availablePax),o=parseInt(document.getElementById(p).dataset.selectedPax),d=(parseInt(document.getElementById(p).dataset.max),parseInt(document.getElementById(p).dataset.min));r=e(t=this).siblings(".paxpicker-input"),l=r.val()?parseInt(r.val()):0,e("#"+p).find(".available-seats").find("span").text((function(){var a=parseInt(jQuery(r).attr("step"));return e(t).hasClass("pax-picker-plus")&&s>0?(s-=a,o+=a,l+=a,document.getElementById(p).dataset.availablePax=s,document.getElementById(p).dataset.selectedPax=o,r.removeAttr("disabled").val(l).trigger("change"),s):e(t).hasClass("pax-picker-minus")&&l>0?(s+=a,o-=a,l-=a,document.getElementById(p).dataset.availablePax=s,document.getElementById(p).dataset.selectedPax=o,r.removeAttr("disabled").val(l).trigger("change"),s):void 0})),o<d&&n.find("input[type=submit]").attr("disabled","disabled").css({opacity:".5"})||n.find("input[type=submit]").removeAttr("disabled").removeAttr("style");var c="",v="";e("#"+p+" .paxpicker-input").each((function(){if(e(this).val()>0){var a=e(this).data("type"),t=e(this).data("custom");"custom"===a&&""!=t&&(a=t);var r=e(this).data("category-id");c+=", "+a+" x "+e(this).val(),v+='<input type="hidden" name="pax['+r+']" value="'+e(this).val()+'" >'}})),c||(c=e("#"+p).siblings(".summary").find(".participants-summary-container").data("default")),c=c.replace(/^,|,$/g,""),e("#"+p).siblings(".summary").find(".participants-summary-container").val(c),e("#"+p+" .pricing-input").html(v)})),e(".scroll-spy-button").each((function(){e(this).on("click",(function(){var a=e(this).data("scroll");return e(".scroll-spy-button").removeClass("active"),e("html, body").animate({scrollTop:e(a).offset().top-70},{duration:500}),e(this).addClass("active"),!1}))})),e(".wti__selector-item.active").find(".wti__selector-content-wrapper").slideDown(),e(".wti__selector-heading").on("click",(function(){e(this).parents(".wti__selector-item").toggleClass("active"),e(this).siblings(".wti__selector-content-wrapper").stop().slideToggle()})),e(window).on("scroll",(function(){var a=e(window).scrollTop(),t=e(".scroll-spy-button");e(".wti__tab-content-wrapper").each((function(){var r=e(this).attr("id"),l=e(this).offset().top-100,i=e(this).height();a>=l&&a<l+i&&(t.removeClass("active"),e("#scrollspy-buttons").find('[data-scroll="#'+r+'"]').addClass("active"))}))})),e(document).ready((function(e){e(".wti__advance-gallery-item-list").magnificPopup({delegate:".gallery-item  ",type:"image",gallery:{enabled:!0}})})),e(document).ready((function(){e(".accordion-panel-heading").click((function(){e(this).next().slideToggle(500),e(this).toggleClass("active"),e(this).parent().toggleClass("accordion-active")}))})),jQuery("#wp-travel-tab-wrapper .resp-tabs-list").wrap('<div id="slider-tab" />');var p={dots:!1,infinite:!1,speed:300,slidesToShow:6,centerMode:!1,arrows:!0,variableWidth:!0,rows:0,cssEase:"linear",slidesToScroll:1};jQuery("body").hasClass("rtl")&&(p.rtl=!0),jQuery("#wp-travel-tab-wrapper .resp-tabs-list").slick(p)}));var e=document.getElementById("wp-travel-view-mode-lists");if(e&&e.length>0)for(var a=e.getElementsByClassName("wp-travel-view-mode"),t=0;t<a.length;t++)a[t].addEventListener("click",(function(){var e=document.getElementsByClassName("active-mode");e[0].className=e[0].className.replace(" active-mode",""),this.className+=" active-mode"}))})();