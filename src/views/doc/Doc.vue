<template>
  <div class="layout">
    <Topnav
      toggleMenuButtonVisible
      class="nav" />
    <div class="content">
      <aside :class="{'aside-menu' : menuVisible}">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/into">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/fast">快速上手</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/icon">Icon</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Modal</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>

          <li>
            <router-link to="/doc/cascader">Cascader</router-link>
          </li>

          <li>
            <router-link to="/doc/collapse">Collapse</router-link>
          </li>

          <li>
            <router-link to="/doc/datePicker">DatePicker</router-link>
          </li>

          <li>
            <router-link to="/doc/grid">Grid</router-link>
          </li>

          <li>
            <router-link to="/doc/input">Input</router-link>
          </li>

          <li>
            <router-link to="/doc/container">Container</router-link>
          </li>

          <li>
            <router-link to="/doc/pager">Pager</router-link>
          </li>

          <li>
            <router-link to="/doc/popover">Popover</router-link>
          </li>

          <li>
            <router-link to="/doc/radio">Radio</router-link>
          </li>

          <li>
            <router-link to="/doc/spread">Spread</router-link>
          </li>

          <li>
            <router-link to="/doc/sticky">Sticky</router-link>
          </li>

          <li>
            <router-link to="/doc/waterfall">Waterfall</router-link>
          </li>

          <li>
            <router-link to="/doc/timePicker">TimePicker</router-link>
          </li>

        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>


<script lang="ts">
import Topnav from "../../components/Topnav.vue";
import { inject, Ref } from "vue";

export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return { menuVisible };
  },
}
</script>


<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
    background: #fff;
  }
  > .content {
    flex-grow: 1;
    padding-top: 75px;
    padding-left: 200px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    transform: translateX(-200px);
    // border-right: 1px solid #ebebeb;

    &.aside-menu {
      transform: translateX(0px);
    }
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    // background: lightgreen;
  }
}
aside {
  background: #fff;
  width: 200px;
  padding: 76px 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  overflow-y: auto;
  border-right: 1px solid rgb(234, 238, 251);
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
    font-size: 16px;
    color: #333;
    font-weight: 700;
  }
  > ol {
    > li {
      > a {
        padding: 8px 22px;
        display: block;
        color: #444;
        font-size: 14px;
        background: #fff;

        // vue自带选中a标签增加的class
        &.router-link-active {
          // color: rgb(110, 2, 195);
          color: #36b1bf;
        }

        &:hover {
          // color: rgb(110, 2, 195);
          color: #5ac4cc;
        }
      }
    }
  }
}
main {
  overflow: auto;
}
</style>