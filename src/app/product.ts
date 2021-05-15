export interface Product {
  name:string,
  price:number,
  description:string
}

export const PRODUCTS:Product[]=[
  //PRODUCTS是定義資料型態
  //後面是Product是陣列型態
  {
    name: 'iPhone 13',
    price: 30400,
    description: '最新手機iPhone 13'
  },
  {
    name: 'iPhone 12',
    price: 28500,
    description: '這手機也很不賴'
  },
  {
    name: 'iPhone 11',
    price: 24900,
    description: '這是我這在拿的手機哈哈哈！'

  }
]



