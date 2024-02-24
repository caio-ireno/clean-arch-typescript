import Address from "./address";
import Customer from "./customer"

describe("Customer unit tests", () => {
  it("Should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "Caio");
    }).toThrow()
  })

  it("Should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("123", "");
    }).toThrow()
  })

  it("Should change name", () => {
    //Arrange
    const customer = new Customer("123", "Caio")
    // Act
    customer.changeName("Nath")
    // Assert
    expect(customer.name).toBe("Nath")
  })

  it("Should activate customer", () => {
    const customer = new Customer("123", "CUstomer 1")
    const address = new Address("Rua tres", 25, "12345-678", "Sorocaba", "brazil")
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true)
  })


  it("Should throw Erro when address is undefined when you activate a customer", () => {

    expect(() => {
      const customer = new Customer("123", "Customer 1")
      customer.activate();
    }).toThrow();
  })

  it("Should Deactivate customer", () => {
    const customer = new Customer("123", "CUstomer 1")
    customer.deactivate();

    expect(customer.isActive()).toBe(false)
  })
})