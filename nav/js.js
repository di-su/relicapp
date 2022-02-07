

function loadThanks() {
  $('#page-1').hide();
  $('#page-2').show();
  $('#invite-bar p').hide();
  $('.navbar-to-hide').remove();
  $('.stripe').hide();
  fbq('track', 'CompleteRegistration');
}

function loadThanksTwo() {
  $('#interest-content').hide();
  $('#interest-thanks').show();
  $('.interest-to-be-filled').val('');
  setCookie('email', $('.email-cookie').val(), 30)
  setCookie('name', $('.name-cookie').val(), 30)
  fbq('track', 'Lead');
}

$(function() {
  $(".close-modal").click(function() {
    closeModal();
  });
  $(".interest-button").click(function() {
    openModal();
  });
  $("#interest-form").click(function(ev){
    if(ev.target != this) return;
    closeModal();
  });
  $('.email-cookie').val(getCookie('email'))
  $('.name-cookie').val(getCookie('name'))
});

function closeModal() {
  $('#interest-mask').hide();
}

function openModal() {
  $('#interest-mask').show();
  $('#interest-content').show();
  $('#interest-thanks').hide();
  // $('#email-cookie').val(getCookie('email'))
}

function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
function setCookie(name, value, days) {
  var d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function deleteCookie(name) { setCookie(name, '', -1); }