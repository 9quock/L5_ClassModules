import { Заказ } from "./заказ.js"

export class ОптовыйЗаказ extends Заказ {
  #discount
  
  get discount() { return this.#discount }
  set discount(value) { this.#discount = value }

  constructor(client, discount) {
    super(client)
    this.discount = discount
    delete this._loose
  }

  show() {
    console.log(`Заказ оптовый #${this.sid}: ${this.client} [${this.status}], скидка ${this.discount*100}%`)
  }

  delete() {
    this.sid = undefined
    this.status = undefined
    this.client = undefined
    this.discount = undefined
  }
}
