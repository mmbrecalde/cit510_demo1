<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="teal"
          v-bind="props"
          variant="outlined"
        >
          SHOW RESULT
        </v-btn>
      </template>

      <v-card>
        <img src="https://img.icons8.com/color/96/000000/graph-report.png"/>
        <v-card-text>
          You got {{score}}/100.
        </v-card-text>
        <v-card-actions>
          <v-btn color="teal" variant="outlined" block @click="$emit('restartQuiz')">NEW ATTEMPT</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { ref } from "vue";

  export default {
    props:['score'],

    data () {
      return {
        dialog: false,
      }
    },
  }
</script>