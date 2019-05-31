<template>
    <div class="user_layout">
        <h1>vue-iview-admin</h1>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    .user_layout{
        min-height: 100vh;
        background: #f7f7f7;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1{
        color: #2d8cf0;
        font-size: 30px;
        text-align: center;
        margin-bottom: 60px;
    }
</style>
