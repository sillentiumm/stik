<template>
  <div class="container">
    <div class="products">
      <h3>Похожие товары</h3>
      <div class="products-list">
        <div
          v-for="product in products"
          :key="product.id"
          class="product"
        >
          <img :src="product.img" alt="model">
          <h4>{{ product.title }}</h4>
          <div class="products-list-price">
            <span>{{ product.price }}</span>
            <span v-if="product.secondaryPrice" class="products-list-price-secondary">
              {{ product.secondaryPrice }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      products: [
        { id:1, title: 'ПЛАТЬЕ С V-ОБРАЗНЫМ ВЫРЕЗОМ, БЕЛЫЙ', price: '14 900 RUB', secondaryPrice: '8 000 RUB', img: '_nuxt/assets/img/same_products/image-1.png' },
        { id:2, title: 'ЖАКЕТ ДВУБОРТНЫЙ, СЕРО-ГОЛУБОЙ', price: '8 900 RUB', secondaryPrice: '', img: '_nuxt/assets/img/same_products/image-2.png' },
        { id:3, title: 'ПЛАТЬЕ МАКСИ С ЯРУСАМИ, БЕЛЫЙ', price: '10 500 RUB', secondaryPrice: '', img: '_nuxt/assets/img/same_products/image-3.png' },
        { id:4, title: 'КОМБИНЕЗОН СО СТОЙКОЙ, ЧёРНЫЙ', price: '9 500 RUB', secondaryPrice: '', img: '_nuxt/assets/img/same_products/image-4.png' }
      ],
    }
  }
}
</script>

<style scoped>
.products {
  padding-bottom: 64px;
}

.products h3 {
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 32px;
}
.products-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
.products-list img {
  margin-bottom: 16px;
  width: 100%
}
.products-list h4, .products-list-price {
  font-size: 10px;
  font-weight: 400;
  color: var(--main-color);
  padding-left: 14px;
  padding-right: 14px;
  margin-bottom: 12px;
}
.products-list-price-secondary {
  color: rgb(130, 130, 130);
  text-decoration: line-through;
  margin-left: 8px;
}

@media screen and (max-width: 1360px) {
  .products {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (max-width: 980px) {
  .products-list {
    grid-template-columns: repeat(2, 1fr);
  }
  .products-list img, .products-list h4 {
    margin-bottom: 8px;
  }
  .products-list-price {
    margin-bottom: 0;
  }
  .product {
    margin-bottom: 28px;
  }
}

@media (max-width: 540px) {
  .products {
    padding-left: 8px;
    padding-right: 8px;
  }
}

</style>