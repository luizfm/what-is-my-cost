<script setup lang="ts">
import ButtonComponent from '@/components/button/ButtonComponent.vue'
import InputComponent from '@/components/input/InputComponent.vue'
import TransitionComponent from '@/components/transition/TransitionComponent.vue'
import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys'
import router from '@/router'
import domToImage from 'dom-to-image'

interface ProductItemProps {
  productCost: string
  productName: string
  unit: string
  productUsage: string
}

interface FormProductsList {
  productsList: ProductItemProps[]
}

function onSubmit(values: FormProductsList) {
  localStorage.setItem(LOCAL_STORAGE_KEYS.PRODUCTS_LIST, JSON.stringify(values.productsList))
  router.push('/cost-form')
}

function convert() {
  domToImage.toPng(document.getElementById('test') as HTMLElement).then((dataUrl: any) => {
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = 'capture.png'
    a.click()
    URL.revokeObjectURL(dataUrl)
  })
}
</script>

<template>
  <button @click="convert">teste</button>

  <TransitionComponent name="slide-fade">
    <main class="page-container" id="test">
      <h1>Informa pra gente os produtos utilizados?</h1>

      <img
        src="https://whatismycost.luizfm.com/assets/costs-items-icon-Cc6u--hV.svg"
        alt="Várias pessoas mexendo em uma página da web virtual"
      />

      <FormKit :actions="false" type="form" class="form-wrapper" @submit="onSubmit">
        <FormKit
          name="productsList"
          type="list"
          :value="[{}]"
          dynamic
          #default="{ items, node, value }"
        >
          <FormKit type="group" v-for="(item, index) in items" :key="item" :index="index">
            <div class="inputs-container">
              <InputComponent
                type="text"
                name="productName"
                :label="index === 0 ? 'Produto' : ''"
                placeholder="Farinha de trigo"
                validation="required"
                :validation-messages="{
                  required: 'Este item é necessário'
                }"
              />
              <InputComponent
                type="text"
                name="productUsage"
                :label="index === 0 ? 'Utilizado' : ''"
                placeholder="500"
                validation="required"
                :validation-messages="{
                  required: 'Este item é necessário'
                }"
              />
              <InputComponent
                name="productCost"
                placeholder="3,25"
                type="number"
                number
                step="0.01"
                :label="index === 0 ? 'Preço pago' : ''"
                validation="required"
                :validation-messages="{
                  required: 'Este item é necessário'
                }"
              >
              </InputComponent>
              <InputComponent
                name="unit"
                type="select"
                :label="index === 0 ? 'Unidade' : ''"
                placeholder="kg / lt"
                :options="['Kg', 'Lt']"
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
  grid-template-columns: 1fr 100px 120px 100px;
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
</style>
