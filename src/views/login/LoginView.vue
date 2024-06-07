<script setup lang="ts">
import InputComponent from '@/components/input/InputComponent.vue'
import ButtonComponent from '@/components/button/ButtonComponent.vue'
import router from '@/router'
import type { FormKitNode } from '@formkit/core'
import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys'

interface LoginFormProps {
  email: string
  password: string
}

function onSubmit(credentials: LoginFormProps) {
  localStorage.setItem(LOCAL_STORAGE_KEYS.EMAIL, credentials.email)
  router.push('/home')
}

function onPasswordVisibilityChange(node: FormKitNode) {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
}
</script>

<template>
  <div class="loginContainer">
    <div class="loginFormContainer">
      <div class="logoContainer">
        <p class="companyName">Quanto Foi?</p>
        <img src="@assets/icons/logo.svg" alt="" />
      </div>

      <FormKit
        :actions="false"
        submit-label="Acessar"
        type="form"
        @submit="onSubmit"
        class="formContainer"
      >
        <h1 class="formTitle">
          Calcule o custo dos seus produtos com base nas informações fornecidas
        </h1>

        <InputComponent
          placeholder="john.doe@gmail.com"
          label="Email"
          type="email"
          class="input"
          name="email"
          required
        />
        <InputComponent
          label="Senha"
          name="password"
          type="password"
          class="input"
          placeholder="Teste"
          required
          suffix-icon="eyeClosed"
          @suffix-icon-click="onPasswordVisibilityChange"
        />

        <ButtonComponent type="submit" title="submit-button" class="login-button"
          >Acessar
        </ButtonComponent>
      </FormKit>
    </div>

    <div class="iconContainer">
      <span class="loginIcon">
        <img src="@assets/icons/costs-icon.svg" alt="Logo do Cookin' up" />
      </span>
    </div>
  </div>
</template>

<style scoped>
.loginContainer {
  display: grid;
  grid-template-columns: 40% 1fr;
  width: 100%;
  height: 100vh;
}

.loginFormContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--light-purple);
  padding: 16px 48px;

  .logoContainer {
    display: flex;
    align-items: center;
    column-gap: 8px;
    margin-bottom: 120px;
    width: 100%;

    .companyName {
      font-family: var(--font-vibes);
      font-size: 48px;
    }
  }

  .formContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .formTitle {
    font-size: 48px;
    margin-bottom: 32px;
    line-height: 52px;
  }

  .input {
    margin-bottom: 16px;
  }

  .submitButton {
    margin-top: 32px;
    width: 100%;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.login-button {
  margin-top: 24px;
}

.iconContainer {
  display: flex;
  justify-content: center;
  padding: 16px 48px;

  .loginIcon {
    margin-top: 196.8px;
  }
}
</style>
