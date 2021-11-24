let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Apple Monastery" },
];

const itemInfo = document.querySelector(".card-group");
for (let i = 0; i < products.length; i++) {
  itemInfo.innerHTML += `
  <div class="card" id = ${products[i].id}>
  <img src="https://via.placeholder.com/600" />
  <div class="card-body">
    <h5>${products[i].title}</h5>
    <p>${products[i].price}</p>
    <button class="btn btn-danger">주문하기</button>
  </div>
</div>`;
}

//가격순 정렬
const sortBtn = document.querySelector(".sort-btn");

sortBtn.addEventListener("click", () => {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  itemInfo.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    itemInfo.innerHTML += `
    <div class="card" id = ${products[i].id}>
    <img src="https://via.placeholder.com/600" />
    <div class="card-body">
      <h5>${products[i].title}</h5>
      <p>${products[i].price}</p>
      <button class="btn btn-danger">주문하기</button>
    </div>
  </div>`;
  }
});

//가나다순 정렬
const sortBtn2 = document.querySelector(".sort-btn2");

sortBtn2.addEventListener("click", () => {
  products.sort(function (a, b) {
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  itemInfo.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    itemInfo.innerHTML += `
    <div class="card" id = ${products[i].id}>
    <img src="https://via.placeholder.com/600" />
    <div class="card-body">
      <h5>${products[i].title}</h5>
      <p>${products[i].price}</p>
      <button class="btn btn-danger">주문하기</button>
    </div>
  </div>`;
  }
});

//5만원 이하만 출력
const sortBtn3 = document.querySelector(".sort-btn3");

sortBtn3.addEventListener("click", () => {
  //먼저 5만원이하만 걸러줌.
  let lowPrice = products.filter((e) => {
    return e.price <= 60000;
  });
  console.log(lowPrice);
  itemInfo.innerHTML = "";
  for (let i = 0; i < lowPrice.length; i++) {
    itemInfo.innerHTML += `
    <div class="card" id = ${lowPrice[i].id}>
    <img src="https://via.placeholder.com/600" />
    <div class="card-body">
      <h5>${lowPrice[i].title}</h5>
      <p>${lowPrice[i].price}</p>
      <button class="btn btn-danger">주문하기</button>
    </div>
  </div>`;
  }
});
