<template>
    <div class = "section_css">
        <div v-if="showed">
            <div class="mask" v-on:click="hidden"></div>
            <role_detailed v-bind:role="role"/>
        </div>
        <role_select v-on:selected_type="selected"/>
        <role_show v-bind:roles="roles" v-on:selected_role="detailed"/>
    </div>
</template>

<script>
    import role_detailed from './RoleDetailed.vue';
    import role_select from './RoleSelect.vue';
    import role_show from './RoleShow.vue';

    export default {
        name: "ContentSection",
        components: {
            role_detailed, role_select, role_show
        },
        data: function(){
            return{
                showed: false,
                alchemy : [],
                roles: [],
                role: null
            }
        },
        methods:{
            selected: function(selected_type){
                if(selected_type !== 'undefined'){
                    this.roles = this.alchemy.filter( (val) => val.type === selected_type);
                }else{
                    this.roles = Array.from(this.alchemy);
                }
                //console.log(this.roles);
            },
            detailed: function (selected_role) {
                this.role = selected_role;
                this.showed = true;
            },
            hidden:function () {
                this.showed = false;
            }
        },
        created: function(){
            let url = "interface/alchemy.json";
            fetch(url).then(res => res.json())
                .then((data) => {
                    this.alchemy = data.alchemy;
                    this.selected('undefined');
                })
                .catch((e) => console.log("loading alchemy.json error ! \n " + e))
        }
    }
</script>

<style scoped>
    .section_css{ width: 800px; height: 600px; padding: 30px; margin: auto; background-color:transparent;}
    .mask{ position: fixed; top: 0; left: 0; bottom: 0; right: 0; background-color: rgba(0,0,0,0.3); z-index: 5; }
</style>