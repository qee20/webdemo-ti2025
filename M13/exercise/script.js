(function() {
  const itemForm = document.getElementById('itemForm');
  const itemNameInput = document.getElementById('itemName');
  const itemPriceInput = document.getElementById('itemPrice');
  const shopMoneyInput = document.getElementById('budgetMoney');
  const itemsList = document.getElementById('itemsList');
  const totalPriceEl = document.getElementById('totalPrice');
  const labelMinus = document.getElementById('ngutang');
  const restMoney = document.getElementById('restMoney');

  const rupiahFormatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let total = 0;
  let moneyLeft = 0;

  function updateTotal(amount) {
    total += amount;
    if (total < 0) total = 0;
    totalPriceEl.textContent = rupiahFormatter.format(total);
  }

  function updateRestMoney() {
    const moneyInput = parseFloat(shopMoneyInput.value.trim());
    moneyLeft = moneyInput - total;

    if (moneyLeft < 0) {
      labelMinus.textContent = " Mau Ngutang kah? U_U";
    } else {
      labelMinus.textContent = "";
    }

    restMoney.textContent = rupiahFormatter.format(moneyLeft);
  }

  itemForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = itemNameInput.value.trim();
    const priceStr = itemPriceInput.value.trim();
    const moneyStr = shopMoneyInput.value.trim();

    if (name === '' || priceStr === '' || moneyStr === '') {
      alert('Tolong input nama item, harga barang, dan uang belanja');
      return;
    }

    const price = parseFloat(priceStr);

    if (isNaN(price) || price < 0) {
      alert('Mohon masukkan harga yang valid');
      return;
    }

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = false;

    const label = document.createElement('label');
    label.style.cursor = 'pointer';
    label.textContent = ` ${name}: ${rupiahFormatter.format(price)}`;

    const li = document.createElement('li');
    li.appendChild(checkbox);
    li.appendChild(label);
    itemsList.appendChild(li);

    // Update total & sisa uang belanja
    updateTotal(price);
    updateRestMoney();

    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        updateTotal(-price);
      } else {
        updateTotal(price);
      }
      updateRestMoney();
    });

    itemNameInput.value = '';
    itemPriceInput.value = '';
    itemNameInput.focus();
  });
})();
