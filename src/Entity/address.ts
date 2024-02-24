export default class Address {
  _street: string = "";
  _number: number = 0;
  _zip: string = "";
  _city: string = "";
  _country: string = "";

  constructor(street: string, number: number, zip: string, city: string, country: string) {
    this._city = city;
    this._country = country;
    this._number = number;
    this._street = street;
    this._zip = zip;
    this.validate();
  }

  validate() {
    if (this._street.length === 0) {
      throw new Error("Street is required")
    }
    if (this._number === 0) {
      throw new Error("Number is required")
    }
    if (this._zip.length === 0) {
      throw new Error("Zip is required")
    }
    if (this._city.length === 0) {
      throw new Error("city is required")
    }
    if (this._country.length === 0) {
      throw new Error("country is required")
    }
  }

  toString() {
    return `${this._street},${this._number}, ${this._city}`
  }
}

