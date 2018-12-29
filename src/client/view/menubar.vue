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
      <div>File</div>
      <ul>
        <li>
          <div>New File</div>
          <div class="nav-division"></div>
          <div>Exit</div>
        </li>
      </ul>
    </li>
    <li>
      <div>Edit</div>
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
  background-color: darkslategrey;
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

#menubar li ul {
  list-style: none;
  position: absolute;
  z-index: 100;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
}

#menubar li ul li {
  overflow: hidden;
  width: 100%;
  height: 0;
  color: #fff;
  transition: 0.2s;
}

#menubar li ul li div {
  background: rgb(17, 32, 32);
  text-align: left;
  width: 300%;
  font-weight: normal;
}

#menubar li:hover > ul > li {
  overflow: visible;
  height: 38px;
}
</style>
