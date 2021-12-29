let card= document.querySelector("#card");
card.addEventListener('mouseenter',hover);
card.addEventListener('mouseout',over);

const div=document.createElement("div");
const firstDiv=document.createElement("div")

div.innerHTML=`
<div id=hover-div1>
<p class="total-name">نام غذا:</p>
<p class="total-name1">رولت گوشت</p>
<p class="total-enter">گوشت ، پیاز ، تخم مرغ، فلفل</p>
<p class="total-price">قیمت : 50,000 تومان</p>
<button class="card-overlay-btn" type="button">سفارش</button>
</div>    
    `;
firstDiv.innerHTML=`

<img src="images/gallery-img-1.jpeg" class="card-img">
    <div class="card-overlay">
    <h2 class="card-overlay-heading">رولت گوشت</h2>
    <p class="card-overlay-paragraph">قیمت : 50,000 تومان</p>
    </div>
                    `

function hover(e) {
   card.replaceChildren(div);
}
function over(e) {
    card.replaceChildren(firstDiv);
}

let card2= document.querySelector("#card2");
card2.addEventListener('mouseenter',hover2);
card2.addEventListener('mouseout',over2);

const div2=document.createElement("div");
const firstDiv2=document.createElement("div")

div2.innerHTML=`
<div id=hover-div2>
<p class="total-name">نام غذا:</p>
<p class="total-name1">پنه</p>
<p class="total-enter">گوشت ، پیاز ، تخم مرغ، فلفل</p>
<p class="total-price">قیمت : 45,000 تومان</p>
<button class="card-overlay-btn" type="button">سفارش</button>
</div>    
    `;
firstDiv2.innerHTML=`

<img src="images/gallery-img-2.jpeg" class="card-img">
    <div class="card-overlay">
    <h2 class="card-overlay-heading">پنه</h2>
    <p class="card-overlay-paragraph">قیمت : 45,000 تومان</p>
    </div>
                    `

function hover2(e) {
   card2.replaceChildren(div2);
}
function over2(e) {
    card2.replaceChildren(firstDiv2);
}