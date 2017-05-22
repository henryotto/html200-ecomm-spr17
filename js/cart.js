var cart = [
  { name: "reversible plaid scarf", price: 26.99, class: "item01" },
  { name: "northern lights scarf", price: 27.99, class: "item02" },
  { name: "fringed plaid scarf", price: 18.99, class: "item03" },
  { name: "multi color scarf", price: 22.99, class: "item04" },
  { name: "ombre infinity scarf", price: 11.99, class: "item05" },
  { name: "ashby twill scarf", price: 70.99, class: "item06" },
  { name: "wool cable knit scarf", price: 49.99, class: "item07" }
];

$('addToCart').click(function(event){

  var name = $(event.target.parentElement).find('.name').text();
  var price = $(event.target.parentElement).find('.price').text();

  cart.push({
    name: name,
    price: price});

  console.log(cart);
  refreshCounter();
});

function refreshCounter() {
  var badge = $('header').find('.counter');
  if (cart) {
    badge.text(cart.length);
  }
}
