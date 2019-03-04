"use strict";

import {ListModel, ListView, ListController} from "./mvc.js";

//Mock Data
const ENTRIES = ["Banane", "Apfel", "Pfirsich"];

//Start Application
const foodDiaryModel = new ListModel(ENTRIES);
const foodDiaryView = new ListView(foodDiaryModel);
// eslint-disable-next-line no-unused-vars
const foodDiarycontroller = new ListController(foodDiaryModel, foodDiaryView);
foodDiaryView.initListView();