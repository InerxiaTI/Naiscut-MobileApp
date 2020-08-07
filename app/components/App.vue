<template lang="html">
    <BottomNavigation>
        
        <!-- Menú -->
        <TabStrip>
            <TabStripItem class="navigation__item">
                <Label text="Inicio"></Label>
                <Image src.decode="font://&#xf015;" class="fas t-36"></Image>
            </TabStripItem>
            <TabStripItem class="navigation__item">
                <Label text="Gestión"></Label>
                <Image src.decode="font://&#xf1ad;" class="far t-36"></Image>
            </TabStripItem>
            <TabStripItem class="navigation__item">
                <Label text="Perfil"></Label>
                <Image src.decode="font://&#xf007;" class="fas fa-36"></Image>
            </TabStripItem>
        </TabStrip>
        <!-- Menú -->

        <!-- FEED -->
        <TabContentItem>
            <Frame>
                <SalonesList />
            </Frame>
        </TabContentItem>
        <!-- FEED -->


        <!-- SALONES -->

        <!-- PERFIL -->

        <!-- <TabContentItem>
            <Frame>
                <Items />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Browse />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Search />
            </Frame>
        </TabContentItem> -->

    </BottomNavigation>
</template>

<script>
import Items from "./Items.vue";
import Browse from "./Browse.vue";
import Search from "./Search.vue";

// Secciones
import SalonesList from "../salon/SalonesList.vue";


export default {
  components: {
    Items,
    Browse,
    Search,
    SalonesList
  }
};
</script>

<style lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles

</style>
