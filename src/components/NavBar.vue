<template>
  <nav>
    <!--Toolbar-->
      <v-toolbar 
      app
      color="teal-darken-3"
      image="https://picsum.photos/1920/1080?random">

    <!--Toolbar Image-->
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

    <!--Toolbar Contents-->
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Activity </span>
        <span>Compilation</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>

    <!--Nav Drawer-->
     <v-navigation-drawer 
     app 
     v-model="drawer"
     color="black"
     >

    <!--Nav Drawer Profile List Item-->
        <v-list>
          <v-list-item
            prepend-avatar="mel1.jpg"
            title="Melchizedek Recalde"
            subtitle="mmbrecalde@tip.edu.ph"
            class="my-5"
          ></v-list-item>
        </v-list>

      <v-divider></v-divider>

    <!--Nav Drawer Link List Item-->
       <v-list-item
          class="my-2"
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon"
            active-color="teal">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([          
           { title: 'Simple Calculator', icon: 'mdi-calculator', path: '/SimpleCalculatorView' },
           { title: 'String Manipulation', icon: 'mdi-text', path: '/StringManipulationView'},
           { title: 'Vuetify', icon: 'mdi-label', path: '/VuetifyView'},
           { title: 'About Me', icon: 'mdi-account-circle-outline', path: '/AboutMeView'},
           { title: 'Quiz', icon: 'mdi-check-circle', path: '/QuizView'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>