<template>
  <div v-cloak class="widthAll">
    <v-row justify="center">
      <div class="indexDiv">
        <v-row class="my-6" justify="center">
          <div class="indexDiv relative">
            <v-skeleton-loader class="mb-sm-5 textLoader"
              type="chip"
            >
              <div class="d-inline-block mt-1 ml-1 ml-sm-4 " style="height:3px;width:60px;background-color: #bf0000 !important;"></div>
              <h3 class="d-inline-block font-small-title-xs">پرسش و پاسخ</h3>
              <div class="d-inline-block mt-1 mr-1 mr-sm-4 " style="height:3px;width:60px;background-color: #bf0000 !important;"></div>
            </v-skeleton-loader>
            <v-expansion-panels multiple class="ltr questionPanell" >
              <v-expansion-panel class="white"
                v-for="(item,i) in questions"
                :key="i"
              >
                <v-skeleton-loader class="my-2 my-sm-6"
                  type="list-item-avatar"
  
                >
                  <v-card class="py-2">
                    <v-row class="">
                      <v-expansion-panel-header class="">
                        <v-icon color="#bf0000" large class="mx-3 float-right">mdi-chat-question</v-icon>
                        <span class="float-right questionText mt-sm-2 font-small-xs">{{item.question}}</span>
                      </v-expansion-panel-header>
                    </v-row>
                    <v-row>
                      <v-expansion-panel-content>
                        <span class="answerText grey--text text--darken-2 font-small-xs">
                          {{item.answer}}
                        </span>
                        <br v-if="item.answer2">
                        <span v-if="item.answer2" class="answerText grey--text text--darken-2 font-small-xs">
                          {{item.answer2}}
                        </span>
                        <br v-if="item.answer3">
                        <span v-if="item.answer3" class="answerText grey--text text--darken-2 font-small-xs">
                          {{item.answer3}}
                        </span>
                      </v-expansion-panel-content>
                    </v-row>
                  </v-card>
                </v-skeleton-loader>
              </v-expansion-panel>             
            </v-expansion-panels>
          </div>
        </v-row>
      </div>
    </v-row>

  </div>
</template>


<script>


export default {
  name: 'QuestionAnswer',
  components: {
  },
  watch: {
    
  },
  props:{
    questions:{
      type:Array,
      require:true
    }
  },
  data: () => ({
  }),
  methods: {
    
  },
  created() {
    window.scrollTo(0, 0);
  },
}
</script>
