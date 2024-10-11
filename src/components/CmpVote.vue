<template>
    <div class="position-relative">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="60px" height="60px" :style="`
            fill: none;
            stroke: url(#GradientColor${id});
            stroke-width: 8px;
            stroke-dasharray: ${15.2 * vote};
            stroke-dashoffset: 0;
        `">
            <defs>
                <linearGradient :id="'GradientColor' + id">
                    <stop offset="0%" :stop-color="`${color}`" />
                    <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
            </defs>
            <circle cx="30" cy="30" r="25" stroke-linecap="round" />
        </svg>
        <p :style="`color: ${color};`">{{ parseFloat(vote).toFixed(1) }}</p>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        vote: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true
        },
    },
}
</script>

<style lang="scss" scoped>
p {
    font-size: 1.1em;
    font-weight: bold;

    position: absolute;
    bottom: 0px;
    left: 18.5px;
}
</style>