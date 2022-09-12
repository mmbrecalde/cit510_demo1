<template>
    <!-- quiz container -->
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
        Open | Due Sep 05 at 6:30pm | 20 pts | 20 Questions | Score: {{score}}/100
      </v-card-subtitle>
  
      <v-card-text>
        <div class="text-justify">A quiz that consists of general questions on Information Technology that would help you enhance your knowledge.</div>
      </v-card-text>

      <v-row>
        <v-col class="shrink">

          <v-btn
            variant="text"
            color="teal"
            class="mb-3 ml-3"
            @click="expand = !expand"
          >
            TAKE QUIZ
          </v-btn>

          <v-divider></v-divider>

          <v-expand-transition>
            <v-card
              v-show="expand"
              height="300"
            >

              <!-- timer container -->
              <v-card-text>
                <div style="min-height: 4px;">
                  <v-progress-linear
                    v-model="timer"
                    color="teal"
                  ></v-progress-linear>
                </div>
              </v-card-text>

              <!-- question number -->
              <v-card-title>
                <h1 class="text-center mt-8">Question {{ questionCounter }} out of {{ questions.length }}</h1>
              </v-card-title>

              <!-- actual question -->
              <v-card-text>
                <p class="text-center mt-6">{{formattedQuestion}}</p>
              </v-card-text>

              <v-card-actions
                class="justify-center d-flex flex-wrap"
              >
                <v-btn
                  v-for="(choice, item) in currentQuestion.choices" 
                  :key="item"
                  rounded="pill"
                  variant="tonal"
                  size="small"
                  class="mx-1 my-1"
                >
                
                  <!-- option name -->
                  <div
                    class="default"
                    :ref="optionChosen"
                    @click="onOptionClicked(choice, item)"
                  >
                    {{ choice }}
                  </div>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <v-card
                  v-if="endOfQuiz"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%;"
                >
              
                  <!-- quiz results -->
                  <v-card-title>
                    <h1 class="text-center mt-8">Quiz Results</h1>
                  </v-card-title>

                  <!-- score -->
                  <v-card-text
                    class="text-center mt-6"
                  >
 
                    <v-progress-circular 
                      v-model="score"
                      color="teal"
                      :width="10"
                      :size="100"
                    >
                      <h1>{{score}}</h1>
                    </v-progress-circular>                  
                  </v-card-text>

                  <v-card-actions
                    class="justify-center"
                  >
                    <v-btn
                      v-if="endOfQuiz"
                      variant="text"
                      color="teal"
                      @click="onQuizStart"
                    >
                      NEW ATTEMPT
                    </v-btn>

                    <v-btn
                      variant="text"
                      color="red"
                      @click="expand = !expand"
                    >
                      CLOSE
                    </v-btn>  
                  </v-card-actions>

                </v-card>
              </v-expand-transition>

            </v-card>
          </v-expand-transition>

        </v-col>
      </v-row>   

    </v-card>

</template>

<style>
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }

</style>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  data: () => ({
      expand: false,
    }),
  setup() {
    // Data to Use
    let canClick = true;
    let timer = ref(100);
    let endOfQuiz = ref(false);
    let questionCounter = ref(0);
    let score = ref(0);
    const currentQuestion = ref({
      question: "",
      answer: 1,
      choices: [],
    });
    let percentageScore = ref(0);

    const questions = ref([]);
    
    const loadQuestion = () => {
      canClick = true;
      // Condition to check if there are still questions to load
      if (questions.value.length > questionCounter.value) {
        // If true, do the following
        timer.value--;
        currentQuestion.value = questions.value[questionCounter.value];
        questionCounter.value++;
      } else {
        // If false, do the following
        onQuizEnd();
      }
    };

    // Method
    let itemsRef = [];
    const optionChosen = (element) => {
      if (element) {
        itemsRef.push(element);
      }
    };

    // Clear the selected option
    const clearSelected = (divSelected) => {
      setTimeout(() => {
        divSelected.classList.remove("bg-green");
        divSelected.classList.remove("bg-red");
        divSelected.classList.add("default");
        loadQuestion();
      }, 1000);
    };

    // What to do when an option is clicked
    const onOptionClicked = (choice, item) => {
      // If the user can click, do the following
      if (canClick) {
        const divContainer = itemsRef[item];
        const optionID = item + 1;
        // Check if the answer is correct
        if (currentQuestion.value.answer == optionID) {
          // If yes, do the following
          score.value += 10;
          divContainer.classList.add("bg-green"); // change the button text color to green
          divContainer.classList.remove("default"); // remove the default button text color
          timer.value = 100;
        } else {
          // If no, do the following
          divContainer.classList.add("bg-red"); // change the button text color to red
          divContainer.classList.remove("default"); // remove the default button text color
          timer.value--;
        }
        canClick = false;
        // What to do to go to the next question
        clearSelected(divContainer);
        console.log(choice, item);
      } else {
        // If the user can't click, do the following
        console.log("cant select question");
      }
    };

    // For the countdown timer
    const countDownTimer = function() {
      let interVal = setInterval(() => {
        // Check if the timer value if greater than 0
        if (timer.value > 0) {
          // If yes, lessen the timer value
          timer.value--;
        } else {
          // If no, end the quiz
          onQuizEnd();
          clearInterval(interVal);
        }
      }, 150);
    };

    // Get the questions from the API
    const fetchQuestionsFromServer = async function() {
      axios("https://opentdb.com/api.php?amount=10&category=18")
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          // Make our own question and answer arrangement
          const newQuestions = data.results.map((serverQuestion) => {
            const arrangedQuestion = {
              question: serverQuestion.question,
              choices: "",
              answer: "",
            };

            const choices = serverQuestion.incorrect_answers;

            arrangedQuestion.answer = Math.floor(Math.random() * 4 + 1);

            choices.splice(
              arrangedQuestion.answer - 1,
              0,
              serverQuestion.correct_answer
            );

            arrangedQuestion.choices = choices;

            return arrangedQuestion;
          });
          // Once the arranged questions are available from the server, load the question and the implement the countdown timer
          questions.value = newQuestions;
          loadQuestion();
          countDownTimer();
        });
    };

    // What to do when the quiz ends
    const onQuizEnd = function() {
      // Display the score
      score.value = score.value;

      // Stop the countdown timer
      timer.value = 0;

      // Change the value of endOfQuiz to true since the quiz already ended
      endOfQuiz.value = true;
    };

    // What to do when the quiz starts
    const onQuizStart = function() {
      // Set the values to default
      canClick = true;
      timer.value = 100;
      endOfQuiz.value = false;
      questionCounter.value = 0;
      score.value = 0;
      currentQuestion.value = {
        question: "",
        answer: 1,
        choices: [],
      };
      percentageScore.value = 0;
      questions.value = [];

      // Get the questions from the server
      fetchQuestionsFromServer();
    };

    // Lifecycle
    onMounted(() => {
      fetchQuestionsFromServer();
    });
    // Return
    return {
      timer,
      currentQuestion,
      questions,
      score,
      questionCounter,
      loadQuestion,
      onOptionClicked,
      optionChosen,
      endOfQuiz,
      onQuizEnd,
      percentageScore,
      onQuizStart,
    };
  },

  // Format the question since some questions are not readable
  computed: {
    formattedQuestion() {
      let entities = {
        amp: "&",
        apos: "'",
        "#x27": "'",
        "#x2F": "/",
        "#39": "'",
        "#47": "/",
        lt: "<",
        gt: ">",
        nbsp: " ",
        quot: '"',
        "#039": "'",
      };

      return this.currentQuestion.question.replace(/&([^;]+);/gm, function(
        match,
        entity
      ) {
        return entities[entity] || match;
      });
    },
  },

};
</script>
