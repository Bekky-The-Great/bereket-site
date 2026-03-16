// Basic small interactions: contact handler, demo modal (light)
document.getElementById('year').innerText = new Date().getFullYear();

// Replace WA link with a working number (edit as needed)
document.getElementById('wa-link').href = "https://wa.me/251969006332";
document.getElementById('contact-whatsapp').href = "https://wa.me/251969006332";

// Simple demo handler — replace with real links if you have them
function openDemo(slug){
  alert("Demo requested: " + slug + ". Replace this behavior with a real link or demo page.");
}

// contact form -> open mailto (simple, no backend)
function sendMail(){
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  if(!name || !email || !message){
    alert("Please fill all fields.");
    return false;
  }

  var subject = encodeURIComponent("Contact from personal site: " + name);
  var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
  var mailto = "mailto:bereketaddisu1477@gmail.com?subject=" + subject + "&body=" + body;
  window.location.href = mailto;
  return false; // prevent actual form submit
}