// Copyright 2018 underdolphin(masato sueda)
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

<template>
  <ul id="menubar">
    <li>
      <div class="first-level-column">
        <input type="button" value="File" class="first-level-column-select">
        <ul class="menu-list second-level-container">
          <li>
            <div>New File</div>
          </li>
          <li>
            <div>New Window</div>
          </li>
          <li>
            <div class="border"></div>
          </li>
          <li>
            <div>Exit</div>
          </li>
        </ul>
      </div>
    </li>
    <li>
      <div class="first-level-column">
        <input type="button" value="Edit" class="first-level-column-select">
      </div>
    </li>
    <li>
      <div>View</div>
    </li>
    <li>
      <div>Mixer</div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
#menubar {
  display: flex;
  justify-content: left;
  list-style-type: none;
  padding: 5px;
}

#menubar li {
  position: relative;
  float: left;
  margin: 5px;
}

#menubar li div {
  display: block;
  margin: 0;
  text-decoration: none;
  color: #dcdce9;
}

#menubar li > div {
  padding: 0px, 5px, 0px;
}

.second-level-container {
  display: none;
  transition: 0.2s;
}

.first-level-column-select:focus + .second-level-container {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 500%;
  margin-top: 10px;
  margin-left: -10px;
  z-index: 100;
}
</style>
