<template>
    <div>
        <img :src="captcha" @click="getImg" />
        <input type="text" v-model="code">
        <a-button @click="login">登录</a-button>
    </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss" scoped></style>