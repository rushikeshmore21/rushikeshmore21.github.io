console.log('Plugin Is COnnected');

// function runMe(){
//   console.log('Fun is started .................');
//   if (window.location.href == 'https://www.baravinsclt.com/s/checkout') {  
//     console.log('Verification done, it is checkout page');
//     document.getElementsByClassName('contact-form')[0].innerHTML += `<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css"><style type="text/css">#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;} #mc_embed_signup form{ padding: 0 !important; }.form-intro p {font-size: 16px;line-height: 1.4;}</style><b style="margin-top: 2rem;">Subscribe Now</b><div id="mc_embed_signup"><div class="form-intro"><p style="--mobile-base-font-size:14; --mobile-font-size-scale:1.15;font-family: Roboto;font-weight: 400; --inline-link-color:var(--primary-color);">Stay updated on all things Bar á Vins by signing up for our newsletter</p></div><form action="https://barsavinsclt.us14.list-manage.com/subscribe/post?u=8ceb0c53955662c7fcc5223b2&amp;id=3255656fc8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><div id="mc_embed_signup_scroll"><div class="indicates-required" style="margin: 0.8rem;"><span class="asterisk">*</span> indicates required</div><div class="mc-field-group"><label for="mce-FULLNAME" style="display: none;">Full Name  <span class="asterisk">*</span></label><input style="padding: 1rem 0.5rem;" type="text" placeholder="Full name *" value="" name="FULLNAME" class="required" id="mce-FULLNAME"></div><div class="mc-field-group"><label for="mce-EMAIL" style="display: none;">Email Address  <span class="asterisk">*</span></label><input style="padding: 1rem 0.5rem;" type="email" placeholder="Email address *" value="" name="EMAIL" class="required email" id="mce-EMAIL"></div><div class="mc-field-group"><label for="mce-MMERGE6" style="display: none;">Message </label><input style="padding: 1rem 0.5rem;" type="text" value="" placeholder="Message" name="MMERGE6" class="" id="mce-MMERGE6"></div><div id="mce-responses" class="clear foot"><div class="response" id="mce-error-response" style="display:none"></div><div class="response" id="mce-success-response" style="display:none"></div></div>    \x3C!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8ceb0c53955662c7fcc5223b2_3255656fc8" tabindex="-1" value=""></div><div class="optionalParent"><div class="clear foot"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" style="background:black; color:white; padding:0.4 1rem;"></div></div></div></form></div>\x3Cscript type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'>\x3C/script>\x3Cscript type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='FULLNAME';ftypes[7]='text';}(jQuery));var $mcj = jQuery.noConflict(true);\x3C/script><style>@media(max-width: 790px){#mc_embed_signup{width: 100% !important;}#mc_embed_signup .mc-field-group input{    padding: 1rem 0 !important;}}</style>`;  
//   }

// }


// let observer = new MutationObserver((mutations) => {
//   mutations.forEach((mutation) => {
//     if (!mutation.addedNodes) return

//     for (let i = 0; i < mutation.addedNodes.length; i++) {
//       // do things to your newly added nodes here
//       console.log('IN LOOP');
//       runMe();
//       let node = mutation.addedNodes[i]
//     }
//   })
// })



const observer = new MutationObserver((mutations, obs) => {
  var target = document.querySelector('.checkout-section[data-test-id="order-summary"][data-v-65cef6d8][data-v-65cef6d8]');
  if (target) {
    
    
    console.log('Fun is started .................');
  if (window.location.href == 'https://www.baravinsclt.com/s/checkout') {  
    console.log('Verification done, it is checkout page');
    document.getElementsByClassName('contact-form')[0].innerHTML += `<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css"><style type="text/css">#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;} #mc_embed_signup form{ padding: 0 !important; }.form-intro p {font-size: 16px;line-height: 1.4;}</style><b style="margin-top: 2rem;">Subscribe Now</b><div id="mc_embed_signup"><div class="form-intro"><p style="--mobile-base-font-size:14; --mobile-font-size-scale:1.15;font-family: Roboto;font-weight: 400; --inline-link-color:var(--primary-color);">Stay updated on all things Bar á Vins by signing up for our newsletter</p></div><form action="https://barsavinsclt.us14.list-manage.com/subscribe/post?u=8ceb0c53955662c7fcc5223b2&amp;id=3255656fc8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><div id="mc_embed_signup_scroll"><div class="indicates-required" style="margin: 0.8rem;"><span class="asterisk">*</span> indicates required</div><div class="mc-field-group"><label for="mce-FULLNAME" style="display: none;">Full Name  <span class="asterisk">*</span></label><input style="padding: 1rem 0.5rem;" type="text" placeholder="Full name *" value="" name="FULLNAME" class="required" id="mce-FULLNAME"></div><div class="mc-field-group"><label for="mce-EMAIL" style="display: none;">Email Address  <span class="asterisk">*</span></label><input style="padding: 1rem 0.5rem;" type="email" placeholder="Email address *" value="" name="EMAIL" class="required email" id="mce-EMAIL"></div><div class="mc-field-group"><label for="mce-MMERGE6" style="display: none;">Message </label><input style="padding: 1rem 0.5rem;" type="text" value="" placeholder="Message" name="MMERGE6" class="" id="mce-MMERGE6"></div><div id="mce-responses" class="clear foot"><div class="response" id="mce-error-response" style="display:none"></div><div class="response" id="mce-success-response" style="display:none"></div></div>    \x3C!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8ceb0c53955662c7fcc5223b2_3255656fc8" tabindex="-1" value=""></div><div class="optionalParent"><div class="clear foot"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" style="background:black; color:white; padding:0.4 1rem;"></div></div></div></form></div>\x3Cscript type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'>\x3C/script>\x3Cscript type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='FULLNAME';ftypes[7]='text';}(jQuery));var $mcj = jQuery.noConflict(true);\x3C/script><style>@media(max-width: 790px){#mc_embed_signup{width: 100% !important;}#mc_embed_signup .mc-field-group input{    padding: 1rem 0 !important;}}</style>`;  
  }
    
    obs.disconnect();
    return;
  }
});

observer.observe(document, {
  childList: true,
  subtree: true
});
