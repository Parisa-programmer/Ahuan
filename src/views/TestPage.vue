<template>
  <v-container class="pt-12 mt-12">
    <v-row class="pt-12 mt-12">
      <v-col class="pt-12 mt-12">
        <v-autocomplete
          v-model="inputValue"
          :items="suggestions"
          label="Select an item"
          :menu-props="{ offsetY: true }"
        >
          <template v-slot:item="{ props, item }">
            <div class="testmest absolute" style="top: 300px">
              <v-list-item
                v-bind="props"
                :title="item.text"
                :subtitle="'item.text'"
              ></v-list-item>
            </div> </template
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
/* Style the autocomplete container */
.autocomplete {
  position: relative;
  display: inline-block;
}

/* Style the input field */
input {
  padding: 10px;
  width: 200px;
}

/* Style the autocomplete items */
.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  max-height: 150px;
  overflow-y: auto;
  z-index: 99;
}

/* Style each autocomplete item */
.autocomplete-item {
  padding: 10px;
  cursor: pointer;
}

/* Highlight the selected item */
.autocomplete-item:hover {
  background-color: #e9e9e9;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      inputValue: "",
      suggestions: [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Grape",
        "Lemon",
        "Orange",
        "Peach",
        "Pear",
      ],
      filteredSuggestions: [],
    };
  },
  methods: {
    handleInput() {
      const inputValue = this.inputValue.toLowerCase();
      // Filter suggestions based on input
      this.filteredSuggestions = this.suggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(inputValue)
      );
    },
    selectSuggestion(suggestion) {
      this.inputValue = suggestion;
      this.filteredSuggestions = [];
    },
  },
  created() {
    if (localStorage.getItem("Client-Token")) {
      // axios.defaults.headers.common["Authorization"] =
      //   "Bearer " + localStorage.getItem("Client-Token");
      // this.checkPenulty("34072344");
      // this.addToDatabase();
      // this.getInformations();
    }
  },
};
</script>