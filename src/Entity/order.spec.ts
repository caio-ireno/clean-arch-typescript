import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

  it("Should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "Caio", []);
    }).toThrow()
  })

  it("Should throw error when CustomerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrow()
  })

  it("Should throw error when CustomerId is empty", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrow()
  })

  it("Should calculate total", () => {
    const item1 = new OrderItem("i1", "Item 1", 100)
    const item2 = new OrderItem("i2", "Item 2", 200)
    const item3 = new OrderItem("i3", "Item 3", 40)

    const order = new Order("o1", "c1", [item1, item2])

    const total = order.total();

    expect(total).toBe(300)
  })
})