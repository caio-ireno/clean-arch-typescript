import Address from "./address";

export default class Customer {
  private _id: string;
  private _name: string;
  private _active: boolean;
  private _address?: Address;

  constructor(id: string, name: string, address?: string) {
    this._id = id;
    this._name = name;
    this._active = true;
    this.validate();
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required")
    }
    if (this._name.length === 0) {
      throw new Error("Name is required")
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate()
  }
  isActive(): boolean {
    return this._active
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer")
    }
    this._active = true
  }

  deactivate() {

    this._active = false
  }


  get name(): string {
    return this._name
  }

  set Address(address: Address) {
    this._address = address
  }
}