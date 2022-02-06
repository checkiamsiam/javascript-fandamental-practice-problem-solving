const products = [
  {productName:'i Phone' , price:50000 , quantity:1},
  {productName:'walton Phone' , price:5000 , quantity:1},
  {productName:'macBook' , price:180000 , quantity:2},
  {productName:'watch' , price:50000 , quantity:3},
  {productName:'head Phone' , price:50000 , quantity:2},
  {productName:'ear Phone' , price:50000 , quantity:2}
];

function search(products , searchText){
for(const product of products){
  if(product.productName.includes(searchText)){
    console.log(product.productName)
  }
}
}
search(products , 'Phone');