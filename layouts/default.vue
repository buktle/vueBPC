<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <!-- home -->
        <v-list-item>
          <v-list-item-action>
            <v-list-item-action>
              <!-- <v-icon>home</v-icon> -->
              BPC
            </v-list-item-action>
          </v-list-item-action>
        </v-list-item>
        <!-- home -->
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" dense fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->

      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-{{ `chevron-${!drawer ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container class="ma-2">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Sale Order',
          to: '/saleorder'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'สินค้า',
          to: '/Products'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'กระดาษม้วน',
          to: '/Paper'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ครื่องจักร',
          to: '/machines'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'แจ้งซ่อม',
          to: '/repair'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Temp',
          to: '/temp'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BPC'
    }
  }
}
</script>

<style>
</style>