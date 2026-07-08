// Nav toggle (mobile)
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');
if(navToggle && navLinks){
  navToggle.addEventListener('click', function(){
    navLinks.classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(function(a){
    a.addEventListener('click', function(){ navLinks.classList.remove('open'); });
  });
}

// Mark active nav link based on current page
(function(){
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(function(a){
    if(a.getAttribute('data-page') === path){ a.classList.add('active'); }
  });
})();

// Scroll reveal
var observer = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting){ entry.target.classList.add('in'); }
  });
}, {threshold:0.15});
document.querySelectorAll('.reveal').forEach(function(el){ observer.observe(el); });

// Accordion (Get Involved page)
document.querySelectorAll('.acc-item').forEach(function(item){
  var trigger = item.querySelector('.acc-trigger');
  var panel = item.querySelector('.acc-panel');
  if(!trigger || !panel) return;
  if(item.classList.contains('open')){
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }
  trigger.addEventListener('click', function(){
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(function(other){
      other.classList.remove('open');
      var p = other.querySelector('.acc-panel');
      if(p) p.style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
window.addEventListener('resize', function(){
  document.querySelectorAll('.acc-item.open .acc-panel').forEach(function(p){
    p.style.maxHeight = p.scrollHeight + 'px';
  });
});

// Contact form (static demo submit)
var contactForm = document.querySelector('form.contact-form');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    var msg = contactForm.querySelector('.form-msg');
    if(msg) msg.textContent = 'Thank you — the hub team will be in touch.';
  });
}
