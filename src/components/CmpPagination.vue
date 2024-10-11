<template>
    <div class="main-container">
        <div class="flex-container">
            <figure class="circle previus" v-if="(store.currentPage - 1) > 0" @click="previusPage()">{{
                store.currentPage - 1 }}</figure>
            <figure class="circle current">{{ store.currentPage }}</figure>
            <figure class="circle next" v-if="(store.currentPage + 1) != store.totalPages" @click="nextPage()">{{
                store.currentPage + 1 }}
            </figure>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        // Metodo per caricare la pagina successiva
        async nextPage() {
            window.scrollTo({ top: 0, behavior: "smooth" });

            let { action, params } = this.store.lastCall
            params.page = this.store.currentPage + 1
            await this.store.callAPI(action, params)
        },

        // Metodo per caricare la pagina precedente
        async previusPage() {
            window.scrollTo({ top: 0, behavior: "smooth" });
            let { action, params } = this.store.lastCall
            params.page = this.store.currentPage - 1
            await this.store.callAPI(action, params)
        }
    }
}
</script>

<style lang="scss" scoped>
.main-container {
    width: 100%;
    height: 120px;
    position: relative;
}

.flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transform: translate(translate(-50%, -50%))
}

.circle {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a1a1aa;
    background-color: #ffffff;
    border: 1px solid #d1d5db;
    width: 65px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    transition: all 0.25s ease;
    cursor: pointer;
    position: relative;
    font-size: 32px;
    font-weight: 800;
}

.current {
    color: #000;
    width: 75px;
    z-index: 2;
}

.next {
    margin-left: -10px;
    z-index: 1;
}

.previus {
    margin-right: -10px;
    z-index: 1;
}

.circle:hover {
    z-index: 10;
    width: 85px;
}

.circle:hover .current {
    z-index: 1 !important;
    width: 65px !important;
}
</style>