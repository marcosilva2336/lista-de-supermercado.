let totalAmount = 0;

        document.getElementById('addProduct').addEventListener('click', function () {
            let productName = document.getElementById('nome_produto');
            let productPrice = document.getElementById('price');
            let productQuantity = document.getElementById('quantity');

            if (productName.value && productPrice.value && productQuantity.value) {
                let productList = document.getElementById('productList');
                let product = document.createElement('div');
                product.className = 'lista-produto-single';
                product.innerHTML = `
                    <div class="product-name"><strong>${productQuantity.value}x ${productName.value}</strong></div>
                    <div class="product-controls">
                        <span>R$ ${productPrice.value}</span>
                        <button onclick="removeProduct(event, ${productPrice.value}, ${productQuantity.value})">X</button>
                    </div>
                `;

                productList.appendChild(product);
                totalAmount += Number(productPrice.value) * Number(productQuantity.value);
                document.getElementById('totalAmount').innerHTML = 'TOTAL: R$' + totalAmount.toFixed(2);

                productName.value = '';
                productPrice.value = '';
                productQuantity.value = '';
            }
        });

        function removeProduct(event, price, quantity) {
            event.target.parentNode.parentNode.remove();
            totalAmount -= Number(price) * Number(quantity);
            document.getElementById('totalAmount').innerHTML = 'TOTAL: R$' + totalAmount.toFixed(2);
        }

        document.getElementById('clearList').addEventListener('click', function () {
            let productList = document.getElementById('productList');
            while (productList.firstChild) {
                productList.removeChild(productList.firstChild);
            }
            totalAmount = 0;
            document.getElementById('totalAmount').innerHTML = 'TOTAL: R$' + totalAmount.toFixed(2);
        });