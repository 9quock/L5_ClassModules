import { ОптовыйЗаказ } from "./оптзаказ.js"

let orders = [
  new ОптовыйЗаказ("Сан сан", 0.75),
  new ОптовыйЗаказ("Ринёсок", 0.99),
]

orders[0].show()
orders[1].show()

