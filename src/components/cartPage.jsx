import React from "react";

const CartPage = ({
  cartItems,
  onUpdateCart,
  onClearCart,
  onProceedCheckout,
}) => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>
      <div className="bg-white shadow-lg rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      ₹{item.price.toFixed(2)}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <button
                        onClick={() => onUpdateCart(item.id, item.quantity - 1)}
                        className="px-3 py-1 text-gray-600 hover:text-gray-900"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateCart(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-gray-600 hover:text-gray-900"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button
                      onClick={() => onUpdateCart(item.id, 0)}
                      className="text-red-600 hover:text-red-900"
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 bg-gray-100 border-t border-gray-200 text-right">
          <button
            onClick={onClearCart}
            className="text-red-600 hover:text-red-900 mr-3"
          >
            Clear Cart
          </button>
          <button
            onClick={onUpdateCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
          >
            Update Cart
          </button>
          <button
            onClick={onProceedCheckout}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
