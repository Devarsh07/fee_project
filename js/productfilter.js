const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    // console.log(storeitems.length);
    const product = document.querySelectorAll(".product");
    // console.log(product);
    // console.log(product.length);
    // console.log(product[0]);
    const pname = storeitems.getElementsByTagName("h2");
    // console.log(pname);
    // console.log(pname.length);
    
    for(var i=0; i < pname.length; i++)
    {
        let match = product[i].getElementsByTagName('h2')[0];
        
        // console.log(product[i]);
        
        if(match)
        {
            let textvalue = match.textContent || match.innerHTML
            
            if(textvalue.toUpperCase().indexOf(searchbox) > -1)
            {
                // console.log(indexOf(searchbox));
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}
search();