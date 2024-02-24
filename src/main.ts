import Address from "./Entity/address";
import Customer from "./Entity/customer";
import Order from "./Entity/order";
import OrderItem from "./Entity/order_item";

// Agregado 1
let customer = new Customer("123", "Caio");
const address = new Address("Rua tres", 25, "12345-678", "Sorocaba", "brazil")
customer.Address = address;

//Agregado 2
const item1 = new OrderItem("1", "Item 1", 50);
const item2 = new OrderItem("2", "Item 2", 530);
const item3 = new OrderItem("3", "Item 3", 320);
const ordem = new Order("1", "123", [item1, item2, item3])