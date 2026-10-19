function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cartCurrent, product, qty) { 
  const cartProduct = cartCurrent.find((item) => item.id === product.id);

  if (!Number.isInteger(qty) || qty <= 0) {
    throw new RangeError("Количество должно быть положительным целым числом");
  }

  if (qty > product.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  if (cartProduct) {
    return cartCurrent.map((item) => {
      console.log(item.quantity + qty);
      if (item.id === product.id) {
        if (product.stock < item.quantity + qty) {
          throw new RangeError("Недостаточно товара на складе");
        } else {
          return {
            ...item,
            quantity: item.quantity + qty,
          }
        }
      }
      return item;
    });
  } else {
    return [
      ...cartCurrent,
      {
        ...product,
        quantity: qty,
      },
    ];
  }
}

function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;