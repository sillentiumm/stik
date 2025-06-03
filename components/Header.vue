<template>
  <header>
    <div>
      <ul class="header-icons">
        <li class="mobile"><img width="18" src="~/assets/img/icons/User-icon.svg" alt="user"></li>
        <li class="mobile"><img src="~/assets/img/icons/Search.svg" alt="search"></li>
      </ul>
    </div>
    <img src="~/assets/img/logo.png" alt="Logo">
    <ul class="header-icons">
      <li class="desktop"><img src="~/assets/img/icons/Search.svg" alt="search"></li>
      <li class="desktop"><img src="~/assets/img/icons/Stroke.svg" alt="stroke"></li>
      <li class="desktop"><img width="18" src="~/assets/img/icons/User-icon.svg" alt="user"></li>
      <li class=""><img src="~/assets/img/icons/Basket.svg" alt="basket"></li>
    </ul>
  </header>
</template>


<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 48px;
}
.header-icons {
  min-width: 126px;
  display: flex;
  gap: 16px;
}
.header-icons li {
  cursor: pointer;
}

@media (max-width: 980px) {
  header {
    padding: 16px;
  }
  .header-icons {
    min-width: auto;
  }
}
</style>