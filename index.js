$('#menuTabs .nav-link').click(function () {
  $('#menuTabs .nav-link').removeClass('active');
  $(this).addClass('active');
});



$('#bookForm').submit(function (e) {
  e.preventDefault();

  let name = $('#name').val().trim();
  let email = $('#email').val().trim();
  let date = $('#date').val();
  let people = $('#people').val();

  if (name === '' || email === '' || date === '' || people === '') {
    alert('Please fill all required fields');
    return;
  }

  alert('✅ Table booked successfully!');
  this.reset();
});


// Reserved for future interactions (hover, animation, referral logic)
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.02)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});






