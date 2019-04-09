<template>
    <div class="content">
        <content_header/>
        <content_section/>
        <content_footer/>
    </div>
</template>

<script>
    import content_header from './ContentHeader.vue';
    import content_section from './ContentSection.vue';
    import content_footer from './ContentFooter.vue';

    export default {
        name: "app",
        components:{
            content_header, content_section, content_footer
        }
    }
</script>

<style scoped>
    .content{ width: 100%; height: 100%; margin: auto;}
</style>