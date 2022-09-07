<template>
    <v-card
    class="mx-auto my-12"
    elevation="5"
    max-width="800"
    >
      <v-img
        class="align-end text-white"
        height="200"
        src="https://th.bing.com/th/id/OIP.zlCtlTZMsPFFkifitjJBsQHaEo?pid=ImgDet&rs=1"
        cover
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      >
        <v-card-title>General Information Technology</v-card-title>
      </v-img>
  
      <v-card-subtitle class="pt-4">
        Open | Due Sep 05 at 6:30pm | 20 pts | 20 Questions
      </v-card-subtitle>
  
      <v-card-text>
        <div class="text-justify">A quiz that consists of general questions on Information Technology that would help you enhance your knowledge.</div>
      </v-card-text>
  
      <v-card-text>
        <v-chip-group
            color="teal accent-2 white--text"
            column
            multiple
        >
        
            <v-chip
                @click="getQuestions"
            >
            TAKE QUIZ
            </v-chip>

            <v-expand-transition>
              <v-carousel
                height="400"
                hide-delimiters
                progress="teal"
                v-show="getQuestions"
              >
                <v-carousel-item
                  v-for="(question, i) in questions"
                  :key="question.id"
                >
                  <v-sheet
                    height="100%"
                  >

                    <v-container class="text-center text-wrap my-10">
                      <v-row>
                        <v-col class="text-h4 my-5">
                          Question {{ i + 1 }} of 10
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col class="text-subtitle-1">
                          {{ question.question }}
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col>
                          <v-chip 
                            color="success"
                            size="default"
                            filter
                          >
                          {{question.correct_answer}}
                          </v-chip>

                          <v-chip 
                            color="red"
                            size="default"
                            filter
                            filter-icon="mdi-cancel"
                          >
                          {{question.incorrect_answers[0]}}
                          </v-chip>

                          <v-chip 
                            color="red"
                            size="default"
                            filter
                            filter-icon="mdi-cancel"
                          >
                          {{question.incorrect_answers[1]}}
                          </v-chip>

                          <v-chip 
                            color="red"
                            size="default"
                            filter
                            filter-icon="mdi-cancel"
                          >
                          {{question.incorrect_answers[2]}}
                          </v-chip>
                        </v-col>
                      </v-row>
                    </v-container>

                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-expand-transition>

        </v-chip-group>
        </v-card-text>

    </v-card>
    
</template>

<script setup>
    import {ref} from 'vue';
    import axios from 'axios'

    const questions=ref([])

    async function getQuestions(){
        axios.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple').then( response => {
            questions.value=(response.data.results)     
        })
    }

</script>