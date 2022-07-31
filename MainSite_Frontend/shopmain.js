

var val=[["T-Shirt","assets/img/clothes/1645186962-outfit-basicrpm-02-v2-m.png",50,1],
["Floral Dress","assets/img/clothes/1649151869-outfit-rogue-01-v2-m.png",40,1],
["Hoodie","assets/img/clothes/c.png",85,1],
["Jacket","assets/img/clothes/d.png",29,1],
["Suit","assets/img/clothes/e.png",50,1],
["Shirt","assets/img/clothes/f.png",49,1],
["Green Shirt","assets/img/clothes/g.png",79,1],
["White T-Shirt","assets/img/clothes/h.png",90,1],
["Red-Suit","assets/img/clothes/i.png",90,1],
["Hoodie","assets/img/clothes/j.png",90,1]]

var arrin=[false,false,false,false,false,false,false,false,false,false];
var quantity=0;
var price=0;
async function addToCart(id)
{
  if(arrin[id-1]===false)
  {
    // console.log(arr+"xyz ");
    arrin[id-1]=true;
    quantity+=1;
    price+=val[id-1][2];
    updatePrice();
    addItem(id);
      localStorage.setItem('store', JSON.stringify(arrin));
      localStorage.setItem('price', JSON.stringify(price));
      localStorage.setItem('quantity', JSON.stringify(quantity));
      var x = document.getElementById("myAudio");
      x.play();
      var notify=document.getElementById('target');
      notify.innerHTML=`<div id="notify">
      Item Added To Cart <span id ="hatao">
      </div>`
      
      
      setTimeout(()=>{
        var notify=document.getElementById('target');
        notify.innerHTML="";
      },900)
    }
    else{
      var notify=document.getElementById('target');
      notify.innerHTML=`<div id="notify">
      Already Added To Cart <span id ="hatao">
      </div>`
      
      
      setTimeout(()=>{
        var notify=document.getElementById('target');
        notify.innerHTML="";
      },900)
    }


  
}


function updatePrice()
{
  var setQ=document.getElementById("quan");
  var subQ=document.getElementById("quantity");
  var setPrice=document.getElementById("price");
  var cartStatus=document.getElementById("cartStatus");
  // console.log(typeof(price)+price)
  if(price!=0)
  cartStatus.innerHTML=`
  <a class="btn w-100 btn-dark" href="checkout.html">Order Now</a>`;
  else
  {
    cartStatus.innerHTML=`<div class="btn w-100 btn-dark">Cart Is Empty</div>`;
  }
  setPrice.innerHTML=price;
  setQ.innerHTML=quantity;
  subQ.setAttribute("data-cart-items",quantity);
}

document.addEventListener('DOMContentLoaded', function() {
    addItems();
}, false);

function addItem(i)
{
    var items=document.getElementById("getCart");
    // console.log(items);
    
        
            items.innerHTML+=`<li class="list-group-item">
            <div class="row align-items-center">
              <div class="col-4">
        
                <a href="product.html">
                  <img class="img-fluid" src=${val[i-1][1]} alt="..." />
                </a>
        
              </div>
              <div class="col-8">
        
                
                <p class="fs-sm fw-bold mb-6">
                  <div class="text-body" href="product.html">${val[i-1][0]}</div> <br />
                  <span class="text-muted">${val[i-1][2]}</span>
                </p>
        
                
                <div class="d-flex align-items-center">
        
                  
                  <select class="form-select form-select-xxs w-auto">
                    <option value="1">1</option>
                    
                  </select>
        
                  
                  <div class="fs-xs text-gray-400 ms-auto" onClick="removeFromCart(${i})">
                    <i class="fe fe-x"></i> Remove
                  </div>
        
                </div>
        
              </div>
            </div>
          </li>`
       
        // var quantity=getElementById('quantity');
}

async function addItems()
{
  // localStorage.setItem('testObject', JSON.stringify(arr));
  
  var arr=await JSON.parse(localStorage.getItem('store') || {});
    if(arr!==null)
    {
    // var arr=localStorage.getItem('store');
    var temp=await JSON.parse(localStorage.getItem('price') || {});
    var temq=await JSON.parse(localStorage.getItem('quantity') || {});
    arrin=arr;
    price=temp||price;
    quantity=temq||quantity;
    updatePrice();
    var items=document.getElementById("getCart");
    items.innerHTML="";
    // console.log(items);
    for(var i=1;i<=10;i++)
    {
        if(arr[i-1]===true)
        {
            items.innerHTML+=`<li class="list-group-item">
            <div class="row align-items-center">
              <div class="col-4">
        
                <a href="product.html">
                  <img class="img-fluid" src=${val[i-1][1]} alt="..." />
                </a>
        
              </div>
              <div class="col-8">
        
                
                <p class="fs-sm fw-bold mb-6">
                  <div class="text-body" href="product.html">${val[i-1][0]}</div> <br />
                  <span class="text-muted">${val[i-1][2]}</span>
                </p>
        
                
                <div class="d-flex align-items-center">
        
                  
                  <select class="form-select form-select-xxs w-auto">
                    <option value="1">1</option>
                    
                  </select>
        
                  
                  <div class="fs-xs text-gray-400 ms-auto" onClick="removeFromCart(${i})">
                  <i class="fe fe-x"></i> Remove
                </div>
        
                </div>
        
              </div>
            </div>
          </li>`
        }
    }
}
else{
    arr=[false,false,false,false,false,false,false,false,false,false];
    localStorage.setItem('store', JSON.stringify(arr));
}
}
   
async function removeFromCart(id)
{   
    arrin[id-1]=false;
    quantity-=1;
    price-=val[id-1][2];
    updatePrice();
    localStorage.setItem('store', JSON.stringify(arrin));
    localStorage.setItem('price', JSON.stringify(price));
    localStorage.setItem('quantity', JSON.stringify(quantity));
    addItems();
}