<template>
  <div class="container">
    <div class="main">
      <div class="other">
        <img src="~/assets/img/main/image.png" alt="model-1">
        <img src="~/assets/img/main/image-1.png" alt="model-2">
        <img src="~/assets/img/main/image-2.png" alt="model-3">
      </div>
      <div class="slider">
        <img src="~/assets/img/main/slider/image.png" alt="slide1">
        <div class="arrow-bg arrow-left arrow-bg__inactive">
          <svg
            width="16"
            viewBox="0 0 382.071 382.071"
          >
            <path d="m84.414 168.984h297.657v44.102h-297.657l74.155 74.155-31.181 31.182-127.388-127.388 127.388-127.387 31.181 31.181z"/>
          </svg>
        </div>
        <div class="arrow-bg arrow-right">
          <svg
            width="16"
            viewBox="0 0 382.071 382.071"
          >
            <path d="m84.414 168.984h297.657v44.102h-297.657l74.155 74.155-31.181 31.182-127.388-127.388 127.388-127.387 31.181 31.181z"/>
          </svg>
        </div>
      </div>
      <div class="descr">
        <h2>ЖАКЕТ УДЛИНЁННЫЙ, БЕЛЫЙ</h2>
        <div class="descr-price">8900 RUB</div>
        <h4>Размеры</h4>
        <div class="descr-sizes">
          <div v-for="el in sizes" :key="el.id">
            <h3
              class="descr-sizes-element_title"
              :class="{ 'descr-sizes-element_title_inactive': !el.active }"
            >
              {{ el.title }}
            </h3>
            <span
              class="descr-sizes-element_descr"
              :class="{ 'descr-sizes-element_descr_inactive': !el.active }"
            >
             {{ el.descr }}
            </span>
          </div>
        </div>
        <h4>Цвет: {{ activeColor }}</h4>
        <div class="descr-colors">
          <div 
            v-for="el, idx in colors"
            :key="el.id"
            @click="changeColor(el.title, idx)"
          >
            <div
              class="descr-colors-element"
              :class="{ 'descr-colors-element_active': el.active }"
              :style="
                {
                  backgroundColor: el.color,
                  borderColor: el.color === '#fff' ? 'var(--inactive-color)': 'transparent', 
                }"
            >
            </div>
          </div>
        </div>
        <div class="descr-busket">
          <button class="descr-busket-btn">Добавить в корзину</button>
          <button class="descr-busket-btn_secondary">
            <img width="24" src="~/assets/img/icons/Stroke.svg" alt="stroke">
          </button>
        </div>
        <div class="descr-footer">
          <div class="descr-footer-element">
            <div class="descr-footer-element-visible">
              <h4>Описание</h4>
              <button @click="descriptionVisible = !descriptionVisible" class="descr-footer-element-btn">
                <img src="~/assets/img/icons/Plus.svg" alt="stroke">
              </button>
            </div>
            <div v-if="descriptionVisible" class="descr-footer-element-hiden">
              Подробное описание
            </div>
          </div>
          <div class="descr-footer-element">
            <div class="descr-footer-element-visible">
              <h4>Состав и уход</h4>
              <button @click="compositionAndCareVisible= !compositionAndCareVisible" class="descr-footer-element-btn">
                <img src="~/assets/img/icons/Plus.svg" alt="stroke">
              </button>
            </div>
            <div v-if="compositionAndCareVisible" class="descr-footer-element-hiden">
              Подробное описание
            </div>
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
        sizes: [
          { id: 1, title: "XS", descr: "мало", active: true },
          { id: 2, title: "S", descr: "", active: true },
          { id: 3, title: "M", descr: "подписка", active: false }
        ],
        colors: [
          { id: 1, title: "Белый", color: '#fff', active: true },
          { id: 2, title: "Черный", color: '#000', active: false },
          { id: 3, title: "Бежевый", color: 'rgb(249, 241, 220)', active: false }
        ],
        activeColor: 'Белый',
        descriptionVisible: false,
        compositionAndCareVisible: false
      }
    },
    methods: {
      changeColor(color, idx) {
        this.activeColor = color
        let activeElement = this.colors.find(el => el.active)
        if (activeElement) activeElement.active = false
        this.colors[idx].active = true
      }
    }
  }
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 42px;
}
.other {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px
}
.slider {
  position: relative;
}
.descr {
  padding-left: 32px;
  padding-right: 32px;
}
.descr h2, .descr-price {
  font-size: 12px;
  font-weight: 400;
}
.descr h2 {
  margin-bottom: 10px;
}
.descr-price {
  margin-bottom: 32px;
}
.descr h4 {
  font-size: 10px;
  font-weight: 400;
  color: var(--secondary-color);
  margin-bottom: 10px;
}
.descr-sizes {
  display: flex;
  gap: 14px;
  margin-bottom: 36px;
}
.descr-sizes-element_title {
  width: 64px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
  border: 1px solid var(--main-color);
}
.descr-sizes-element_descr {
  display: flex;
  justify-content: center;
  color: rgb(130, 130, 130);
  font-size: 10px;
  font-weight: 400;
  margin-top: 4px;
}
.descr-sizes-element_title_inactive {
  color: var(--inactive-color);
  border: 1px solid var(--inactive-color);
}
.descr-sizes-element_descr_inactive {
  color: var(--inactive-color);
}
.descr-colors {
  display: flex;
  gap: 16px;
  margin-bottom: 36px;
}
.descr-colors-element {
  position: relative;
  width: 28px;
  height: 28px;
  border: 1px solid;
  border-color: transparent;
  cursor: pointer;
}
.descr-colors-element_active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: -3px;
  width: 34px;
  height: 1px;
  background-color: var(--secondary-color);
}
.descr-busket {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
}
.descr-busket-btn {
  width: 306px;
  height: 44px;
  background-color: #000;
  color: #fff;
  font-size: 11px;
  font-weight: 400;
  cursor: pointer;
}
.descr-busket-btn_secondary {
  width: 44px;
  height: 44px;
  border: 1px solid #000;
  background-color: transparent;
  cursor: pointer;
}
.descr-footer {
  width: 360px;
  border-top: 1px solid var(--descr-border-color);
}
.descr-footer-element {
  padding-top: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--descr-border-color);
}
.descr-footer-element-visible {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.descr-footer-element-hiden {
  font-size: 10px;
  font-weight: 400;
}
.descr-footer-element-btn {
  background-color: transparent;
  border: none;
  padding-right: 6px;
  cursor: pointer;
}

.arrow-bg {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
}
.arrow-bg__inactive {
  fill: var(--inactive-color);
  cursor: auto;
}
.arrow-left {
  position: absolute;
  left: 16px;
  bottom: calc(50% - 16px)
}
.arrow-right {
  position: absolute;
  right: 16px;
  bottom: calc(50% - 16px);
  transform: rotate(180deg);
}

@media screen and (max-width: 1360px) {
  .main {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  .other {
    display: none;
  }
  .slider {
    margin-bottom: 32px;
  }
  .descr-busket {
    display: none;
  }
}

@media (max-width: 980px) {
  .slider {
    width: 100%;
  }
  .slider img {
    width: 100%;
  }
  .descr {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
  .descr-footer {
    width: 100%;
  }
}

</style>