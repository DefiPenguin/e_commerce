
const ul = document.getElementById('listaProducts');

products.forEach((product) =>
{
    
    const li = document.createElement('li');
    li.innerHTML = `
    <a href="index.html">
        <img width="100px"
         src="${product.image}" alt="">
        <span class="item-name">${product.name}</span>
    </a>
    
    `;
    ul.appendChild(li);
});

function filtrar()
{
    var input,
    filter,
    ul,
    li,
    a,
    i,
    span,
    txtValue,
    count = 0

    input = document.getElementById('searchBar');
    ul = document.getElementById('listaProducts');


    filter = input.value.toUpperCase();

    li = ul.getElementsByTagName("li");

    for(i = 0; i < li.length; i++)
    {
        a = li[i].getElementsByTagName("a")[0];

        txtValue = a.textContent || a.innerText;

        if(txtValue.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";

            count++

            span = li[i].querySelector(".item-name");

            if(span)
            {
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"),(match)=> {
                    return "<strong>" + match + "</strong>";
                })
            }
        } else
        {
            li[i].style.display = "none";
        }
    }

    if (count === 0)
    {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
}


