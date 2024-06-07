<script setup lang="ts">
import InputComponent from '@/components/input/InputComponent.vue'
import ButtonComponent from '@/components/button/ButtonComponent.vue'
import router from '@/router'
import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys'
import TransitionComponent from '@/components/transition/TransitionComponent.vue'

export interface Taxes {
  sellingCostsName: string
  sellingCostsValue: number
  sellingCostsUnit: string
}

export interface TaxesForm {
  taxesList: Taxes[]
}

function onSubmit(values: TaxesForm) {
  localStorage.setItem(LOCAL_STORAGE_KEYS.TAXES_LIST, JSON.stringify(values.taxesList))
  router.push('/cost-result')
}
</script>

<template>
  <TransitionComponent name="slide-fade">
    <main class="page-container">
      <h1>Agora vamos os custos de venda</h1>

      <img src="@/assets/icons/taxes-icon.svg" alt="" />

      <FormKit :actions="false" type="form" @submit="onSubmit" name="taxesForm">
        <FormKit
          name="taxesList"
          type="list"
          :value="[{}]"
          dynamic
          #default="{ items, node, value }"
        >
          <FormKit type="group" v-for="(item, index) in items" :key="item" :index="index">
            <div class="inputs-container">
              <InputComponent
                type="text"
                name="sellingCostsName"
                :label="index === 0 ? 'Despesa' : ''"
                placeholder="Energia / Impostos / Comissões"
                validation="required"
                :validation-messages="{
                  required: 'Este item é necessário'
                }"
              />

              <InputComponent
                type="number"
                name="sellingCostsValue"
                :label="index === 0 ? 'Total' : ''"
                placeholder="25"
                number
                step="0.01"
                validation="required"
                :validation-messages="{
                  required: 'Este item é necessário'
                }"
              />

              <InputComponent
                name="sellingCostsUnit"
                type="select"
                :label="index === 0 ? 'Unidade' : ''"
                placeholder="R$ / %"
                :options="['R$', '%']"
                validation="required"
                :validation-messages="{
                  required: 'Este item é necessário'
                }"
              />
            </div>
          </FormKit>

          <ButtonComponent
            class="add-new-item-button"
            type="button"
            title="Adicionar novo item"
            @click="() => node.input(value?.concat({}))"
            >Adicionar outro item</ButtonComponent
          >
        </FormKit>

        <ButtonComponent class="submit-button" type="submit" title="Adicionar custos">
          >
        </ButtonComponent>
      </FormKit>
    </main>
  </TransitionComponent>
</template>

<style scoped>
.formkit-form {
  width: 600px;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 0;
  row-gap: 48px;
  position: relative;
}

.form-wrapper {
  width: 800px;
  display: flex;
  flex-direction: column;
}

.inputs-container {
  display: grid;
  width: 100%;
  column-gap: 8px;
  grid-template-columns: 1fr 120px 120px;
}

.add-new-item-button {
  margin-top: 24px;
}

.submit-button {
  position: absolute;
  top: 80px;
  right: 0;
  width: 32px;
  height: 32px;
  border-radius: 9999px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
