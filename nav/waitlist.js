function post(api_url, data, success_callback, fail_callback) {
  $.ajax({
    method: "POST",
    url: api_url,
    data: JSON.stringify(data),
    dataType: "json",
    contentType: "application/json",
    success: function (response) {
      success_callback(response);
    },
    error: function (response) {
      fail_callback(response);
    },
  });
}

function misc() {
    // document.querySelector("#demo_referral").addEventListener("click", click_to_copy);
    $('#page-1').hide();
    $('#page-2').show();
    $('#invite-bar p').hide();
    $('.navbar-to-hide').remove();
    $('.stripe').hide();

    // showing parts of HTML
    $("#current_text").show();
    $("#current_waiter_spot").show();
    $("#out_of").show();
    $("#all_waiter_spots").show();
    // $("#demo_referral").show();

    // appending HTML information
    $("#current_waiter_spot").html(waiter_priority);
    $("#all_waiter_spots").html(total_waiters_currently);
    $("#referral_link_url").html('Your referral link is: ' + '<a target="_blank "href=' + referral_link + ' id="ref-url">' + referral_link + '</a>' + '<br>' +' For every friend you invite, we\'ll move you up 5 positions!' +'<br>' + '<span style="font-size: 14px;">(referral link also sent to your email)</span>' + '<br><br>' + '<b style="font-family: Gilroy-Medium;color:black;">Register your interest in some of our thoughtfully considered selection of rare gems and collectibles. Browse the initial collection below.</b>');
    // $("#info_ref_link").html(
    //     "Click on the button to copy your referral link (also sent to your email)."
    // );
    $('#hidden-email').val(waiter_email)
}

function submit_email_to_waitlist_1() {

  // fetch values from the frontend
  var new_signup = document.getElementById("waitlist_email_1").value; //fetch user signing up on frontend
  var current_url = document.URL; //fetch current URL, including potential referral token

  const success_callback = function (response) {

    // fetching responses
    waiter_email = response["registered_email"];
    waiter_priority = response["current_priority"];
    total_waiters_currently = response["total_waiters_currently"];
    referral_link = response["referral_link"];

    misc();
  };

  const fail_callback = function (response) {
    // perform actions based on error codes
    response_code = response["status"];
    if (response_code == 422) {
      $("#error_message").html("Invalid value to sign up with.");
    } else if (response_code == 400) {
      $("#error_message").html("Error!");
    }
  };

  post(
    "https://www.getwaitlist.com/waitlist",
    { email: new_signup, api_key: "4WN2NI", referral_link: current_url },
    success_callback,
    fail_callback
  );

  return false;
}

function submit_email_to_waitlist_2() {

    // fetch values from the frontend
    var new_signup = document.getElementById("waitlist_email_2").value; //fetch user signing up on frontend
    var current_url = document.URL; //fetch current URL, including potential referral token
  
    const success_callback = function (response) {  
      // fetching responses
      waiter_email = response["registered_email"];
      waiter_priority = response["current_priority"];
      total_waiters_currently = response["total_waiters_currently"];
      referral_link = response["referral_link"];

      misc();
    };
  
    const fail_callback = function (response) {
      // perform actions based on error codes
      response_code = response["status"];
      if (response_code == 422) {
        $("#error_message").html("Invalid value to sign up with.");
      } else if (response_code == 400) {
        $("#error_message").html("Error!");
      }
    };
  
    post(
      "https://www.getwaitlist.com/waitlist",
      { email: new_signup, api_key: "4WN2NI", referral_link: current_url },
      success_callback,
      fail_callback
    );
    return false;
}

function submit_email_to_waitlist_3() {

    // fetch values from the frontend
    var new_signup = document.getElementById("waitlist_email_3").value; //fetch user signing up on frontend
    var current_url = document.URL; //fetch current URL, including potential referral token
  
    const success_callback = function (response) {
      // fetching responses
      waiter_email = response["registered_email"];
      waiter_priority = response["current_priority"];
      total_waiters_currently = response["total_waiters_currently"];
      referral_link = response["referral_link"];

      misc();
    };
  
    const fail_callback = function (response) {
      // perform actions based on error codes
      response_code = response["status"];
      if (response_code == 422) {
        $("#error_message").html("Invalid value to sign up with.");
      } else if (response_code == 400) {
        $("#error_message").html("Error!");
      }
    };
  
    post(
      "https://www.getwaitlist.com/waitlist",
      { email: new_signup, api_key: "4WN2NI", referral_link: current_url },
      success_callback,
      fail_callback
    );
    return false;
}

function submit_email_to_waitlist_4() {

  // fetch values from the frontend
  var new_signup = document.getElementById("waitlist_email_4").value; //fetch user signing up on frontend
  var current_url = document.URL; //fetch current URL, including potential referral token

  const success_callback = function (response) {
    // fetching responses
    waiter_email = response["registered_email"];
    waiter_priority = response["current_priority"];
    total_waiters_currently = response["total_waiters_currently"];
    referral_link = response["referral_link"];

    misc();
  };

  const fail_callback = function (response) {
    // perform actions based on error codes
    response_code = response["status"];
    if (response_code == 422) {
      $("#error_message").html("Invalid value to sign up with.");
    } else if (response_code == 400) {
      $("#error_message").html("Error!");
    }
  };

  post(
    "https://www.getwaitlist.com/waitlist",
    { email: new_signup, api_key: "4WN2NI", referral_link: current_url },
    success_callback,
    fail_callback
  );
  return false;
}

function submit_email_to_waitlist_5() {

  // fetch values from the frontend
  var new_signup = document.getElementById("waitlist_email_5").value; //fetch user signing up on frontend
  var current_url = document.URL; //fetch current URL, including potential referral token

  const success_callback = function (response) {
    // fetching responses
    waiter_email = response["registered_email"];
    waiter_priority = response["current_priority"];
    total_waiters_currently = response["total_waiters_currently"];
    referral_link = response["referral_link"];

    misc();
  };

  const fail_callback = function (response) {
    // perform actions based on error codes
    response_code = response["status"];
    if (response_code == 422) {
      $("#error_message").html("Invalid value to sign up with.");
    } else if (response_code == 400) {
      $("#error_message").html("Error!");
    }
  };

  post(
    "https://www.getwaitlist.com/waitlist",
    { email: new_signup, api_key: "4WN2NI", referral_link: current_url },
    success_callback,
    fail_callback
  );
  return false;
}

function click_to_copy() {
    /* Get the text field */
    var copyText = referral_link
    copyTextToClipboard(copyText);
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = 'Join me on Relic! Relic makes investing in highly collectible appreciating assets simple, from as little as £20. ' + text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
    document.querySelector('#demo_referral').innerHTML = 'Copied!';
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText('Join me on Relic! Relic makes investing in highly collectible appreciating assets simple, from as little as £20. ' + text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
    document.querySelector('#demo_referral').innerHTML = 'Copied!';
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

// async function copyTextToClipboard(text) {
//   try {
//     await navigator.clipboard.writeText('Join me on Relic! Relic makes investing in highly collectible appreciating assets simple, from as little as £20. ' + text);
//     console.log('Text copied to clipboard');
//     document.querySelector('#demo_referral').innerHTML = 'Copied!';
//   } catch (err) {
//     console.error('Error in copying text: ', err);
//     document.querySelector('#demo_referral').innerHTML = 'Error copying. Try again.';
//   }
// }