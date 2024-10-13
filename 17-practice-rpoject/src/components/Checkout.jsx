import React from "react";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import Error from "./UI/Error";
import { useCartModal } from "../hooks/useUserProgress";
import { useCart } from "../hooks/useCart";
import Formatter from "../util/formatter";
import Input from "./UI/Input";
import { createOrder } from "../mealsApi";
import useHttp from "../hooks/useHttp";

const Checkout = () => {
  const { progress, close } = useCartModal();
  const { items, clearCart } = useCart();
  const { data, isFetching, error, sendRequest, clearData } = useHttp(null);

  const totalAmount = items.reduce(
    (total, item) => item.price * item.count + total,
    0
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const formData = Object.fromEntries(fd.entries());

    const orderData = {
      order: {
        items: items,
        customer: {
          email: formData.email,
          name: formData["full-name"],
          street: formData.street,
          "postal-code": formData["postal-code"],
          city: formData.city,
        },
      },
    };

    await sendRequest(() => createOrder(orderData));
  };

  const handleFinish = () => {
    close();
    clearCart();
    clearData();
  };

  let actions = (
    <>
      <Button text onClick={close} type="reset">
        Close
      </Button>
      <Button type="submit">Submit Order</Button>
    </>
  );

  if (isFetching) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order was submitted succesfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={progress === "checkout"} onClose={close}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {Formatter.format(totalAmount, "USD")}</p>
        <Input id="full-name" name="full-name" title="Full Name" type="text" />
        <Input id="email" name="email" title="E-mail Address" type="email" />
        <Input id="street" name="street" title="Street" type="text" />
        <div className="control-row">
          <Input
            id="postal-code"
            name="postal-code"
            title="Postal Code"
            type="text"
          />
          <Input id="city" name="city" title="City" type="text" />
        </div>
        {error && <Error title="Failed to submit order" message={error} />}
        <menu className="modal-actions">{actions}</menu>
      </form>
    </Modal>
  );
};

export default Checkout;
