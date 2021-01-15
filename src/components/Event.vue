<template>
  <div class="event">
    <h2>Event</h2>
    <table class="event-table">
      <thead>
        <tr>
          <th
            class="event-title"
            v-for="(item,index) in columns"
            :key="index">{{ item.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,index) in data"
          :key="index">
          <td
            class="event-title td"
            v-for="(value,key) in item"
            :key="key">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'event',
  props: {
    columns: {
      type: Object
    },
    data: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.event {
  width: 100%;
  overflow-x: auto;

  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }

  .event-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }

  .event-title {
    text-align: left;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }

  .td {
    color: #606266;
  }
}
</style>
