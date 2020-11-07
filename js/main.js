let data;

function addImg(images) {
  $('#img-product').empty();
  images.forEach(img => {
    $('#img-product').append(`
      <div class="carousel-item">
        <img src="./images/products/${img}" class="d-block w-100">
      </div>
    `);
  })
  $( ".carousel-item:first-child" ).addClass("active");
}

function viewDetails(id) {
  $('#title-product').html(data[id-1].name);
  if((data[id-1].image).length > 1) {
    $('.carousel-control-prev, .carousel-control-next').show()
  } else {
    $('.carousel-control-prev, .carousel-control-next').hide()
  }
  $('#img-product').html(addImg(data[id-1].image));
  // $('#artist-product').html(`Artista: <a href="#" onclick="straightSearch('${data[id-1].artist}')">${data[id-1].artist}</a>`);
  // $('#price-product').html(`Precio: ${data[id-1].price}`);
  //$('#tags-product').html(addTags(data[id-1].tags));  
  // $('#cart-product').html(`<a style="color:black; cursor:pointer" onclick="moreProduct('${data[id-1].id}')"><i class="fas fa-plus-circle tooltips" data-toggle="tooltip" data-placement="right" title="Agregar al Carrito"></i> Agregar al carrito</a>`)
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
j = Math.floor(Math.random() * (i + 1));
x = a[i];
a[i] = a[j]; 
a[j] = x;
  }
  return a;
}
$(document).ready(() => {
  productsContainer = $('#products-container');
  $.ajax({
    method: 'GET',
    url: "./data/data.json",
    dataType: 'json',
    }).done(database => {
        data = database;
        buildList(data);
      }).fail( function(){
        alert('Hubo un problema, por favor vuelva a intentarlo');
        })

  $('nav').attr("style", ""); // PARA QUE EL MODAL DEL CARRITO NO SE ESCONDA TRAS EL NAV 
  $('.bg-white').show("puff", 500);
  
});