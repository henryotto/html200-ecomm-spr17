var cart = [];

$('.addToCart').click(function(event){

  var name = $(event.target.parentElement).find('.name').text();
  var description = $(event.target.parentElement).find('.description').text();
  var price = $(event.target.parentElement).find('.price').text();

  cart.push({
    name: name,
    description: description,
    price: price});

  console.log(cart);
  refreshCounter();
});

function refreshCounter() {
  var counter = $('header').find('.counter');
  if (cart) {
    counter.text(cart.length);
  }
}
