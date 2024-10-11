<template>
    <span type="button" class="material-symbols-outlined favorite position-absolute top-0 end-0 mt-2 me-2"
        :class="[favorite ? 'fill text-danger animation-heart' : '']" @click.prevent="favorite = !favorite">
        favorite
    </span>
</template>

<script>
export default {
    props: {
        isFavorite: {
            type: Boolean,
            required: true
        },
    },
    data() {
        return {
            favorite: this.isFavorite
        }
    }
}
</script>

<style lang="scss" scoped></style>