<template>
    <div class="roles_lists">
        <VueScroll :ops = "ops">
            <template v-for="role in roles">
                <div class="role_choice" v-on:click="selected(role)">
                    <role_thumbnail v-bind:name="role.name" v-bind:image="role.thumbnail" v-bind:typed="role.type"/>
                </div>
            </template>
        </VueScroll>
    </div>
</template>

<script>
    import VueScroll from 'vuescroll';
    import role_thumbnail from './RoleThumbnail.vue';

    export default {
        name: "RoleShow",
        props:{ roles: Array, required: true },
        components: { VueScroll, role_thumbnail },
        data: function(){
            return{
                ops: {
                    vueScroll: { mode: 'native', sizeStrategy: 'percent', detectResize: true},
                    scrollPanel: { initialScrollY: false, initialScrollX: false, scrollingX: true, scrollingY: true, speed: 300, easing: undefined, verticalNativeBarPos: 'right'},
                    rail: { background: 'transparent', opacity: 0, size: '6px', specifyBorderRadius: false, gutterOfEnds: null, gutterOfSide: '2px', keepShow: false},
                    bar: { showDelay: 500, onlyShowBarOnScroll: true, keepShow: false, background: '#39C5BB', opacity: 1, hoverStyle: false, specifyBorderRadius: false, minSize: false, size: '6px', disable: false}
                }
            }
        },
        methods: {
            selected: function (message) {
                this.$emit("selected_role",message);
            }
        }
    }
</script>

<style scoped>
    .roles_lists{ width: 740px; height:480px;}
</style>