import OrderItem from "./order_item";

export default class Order {
  private _id: string;
  private _custumerId: string;
  private _items: OrderItem[] = [];
  private _total: number;


  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._custumerId = customerId;
    this._items = items
    this._total = this.total();
    this.validate();
  }

  validate(): boolean {
    if (this._id.length === 0) {
      throw new Error("Id is required")
    }
    if (this._custumerId.length === 0) {
      throw new Error("Customer Id is required")
    }
    if (this._items.length === 0) {
      throw new Error("Items are required")
    }

    return true
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item._price, 0)
  }


}