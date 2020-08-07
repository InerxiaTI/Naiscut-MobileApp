<template>
  <Page>
    <ActionBar class="action-bar">
      <Label text="Inicio"></Label>
    </ActionBar>
    
    <StackLayout >
        <Button text="Tap me!"></Button>
    </StackLayout>


    <ListView for="salon in salones" @itemTap="onItemTap">
      <v-template>
        <StackLayout orientation="horizontal">
            <Image  v-if="salon.logo!=''" row="0" col="0" :src="salon.logo" class="thumb img-circle"></Image>
            <Image  v-if="salon.logo==''" row="0" col="0" src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png" class="thumb img-circle"></Image>
            <Label :text="salon.tipoSalonFk.descripcion" textWrap="true"/>
            <Label :text="salon.nombre" textWrap="true"></Label>
        </StackLayout>
      </v-template>
    </ListView>

  </Page>
</template>

<script>
import SalonesDetail from "./SalonesDetail.vue";

// Servicios
import SalonService from "./servicios/SalonService.js";

export default {
    data: () => {
        return {
            salones : []
        }

    },
    methods:{
        async get_salones(){
            this.salones=await SalonService.get_salones()
        },

        onItemTap (args) {
            const view = args.view;
            const page = view.page;
            const tappedItem = view.bindingContext;

            // this.$showModal( SalonesDetail )

            this.$navigateTo(SalonesDetail, {
                props: { 
                    context: tappedItem,
                    animated: true,
                    transition: {
                        name: "slide",
                        duration: 200,
                        curve: "ease"
                    }}});
        }
    },
    created(){
       this.get_salones()
    }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables
</style>