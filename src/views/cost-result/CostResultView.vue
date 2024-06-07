<script setup lang="ts">
import ButtonComponent from '@/components/button/ButtonComponent.vue'
import router from '@/router'
import { computed } from 'vue'
import { getProductCost } from '@/utils/calculator/calculator.utils'

const productTotalCost = computed(() => getProductCost())

function onSaveCost() {}

function onNewCostClick() {
  router.push('/home')
}
</script>

<template>
  <h1 class="pageTitle">Resultado de custos</h1>

  <section class="resultsContainer">
    <div class="resultsImage">
      <img src="@/assets/icons/results-icon.svg" alt="" />
    </div>
    <div class="resultsWrapper">
      <div class="results">
        <p class="resultsText">
          De acordo com os dados fornecidos, o seu custo para o produto é de:
        </p>
        <div class="resultsValue">
          <p>{{ productTotalCost }}</p>
        </div>
      </div>
      <div class="buttonsContainer">
        <ButtonComponent type="button" title="salvar custos" @click="onSaveCost"
          >Salvar</ButtonComponent
        >
        <ButtonComponent type="button" title="Novo cálculo de custos" @click="onNewCostClick"
          >+ Novo custo</ButtonComponent
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.pageTitle {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.resultsContainer {
  display: grid;
  grid-template-columns: 1fr 40%;
  width: 100%;
  height: 100vh;

  .resultsImage {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .resultsWrapper {
    background-color: var(--light-purple);
    padding: 16px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 32px;
    font-weight: 700;

    .resultsText {
      max-width: 500px;
      line-height: 1.4;
      width: 100%;
    }

    .resultsValue {
      font-size: 72px;
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }

    .buttonsContainer {
      display: flex;
      margin-top: 48px;
      width: 100%;
      justify-content: center;
      column-gap: 24px;
    }
  }
}
</style>
