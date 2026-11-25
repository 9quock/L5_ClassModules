export class Заказ {  
  #sid
  #status
  #client
  
  get sid() { return this.#sid }
  set sid(value) { this.#sid = value }
  get status() { return this.#status }
  set status(value) { this.#status = value }
  get client() { return this.#client }
  set client(value) { this.#client = value }

  constructor(client) {
    this.sid = crypto.randomUUID()
    this.status = "Issued"
    this.client = client
  }

  show() {
    console.log(`Заказ #${this.sid}: ${this.client} [${this.status}]`)
  }

  delete() {
    this.sid = undefined
    this.status = undefined
    this.client = undefined
  }

  copy() {
    return Object.assign({}, this)
  }

  _loose() {
    this.sid = crypto.randomUUID()
    this.status = "Lost"
  }

  static clone(other) {
    if (other instanceof Заказ) return other.copy()
    else return undefined
  }
}
