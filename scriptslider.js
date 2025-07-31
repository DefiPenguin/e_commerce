$(document).ready(function(){
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
        breakpoint: 1024,
        settings:
        {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    },
    {
        breakpoint: 600,
        settings:
        {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 480,
        settings:
        {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
  ]
  });
    products.forEach((product) => 
    {
        $(".slider").slick(
            "slickAdd",
            `
            <div class="card">
                <div class="like"></div>
                <img class="product-img" src="${product.image}" />
                <h4>${product.name}</h4>
                <div class="price">
                    <h5>${handlePrice(product.price)}</h5>
                    <h5>${handlePrice(product.price, true)}</h5>
                </div>
                <a>Adicionar ao carrinho</a>
            </div>
            `
        );
    })
});

function handlePrice(price, discount = false)
{
    if (discount)
    {
        price = price * 0.9;
    }
    return price.toLocaleString('pt-br', 
        {
           style: "currency",
           currency: "BRL" 
        });
}
