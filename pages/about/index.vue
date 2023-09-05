<script setup lang="ts">
const dialogTableVisible = ref(false)

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
</script>

<template>
  <div class="container">
    <div class="content">
      <el-button text @click="dialogTableVisible = true">
        open a Table nested Dialog
      </el-button>

      <el-dialog v-if="false" v-show="false" v-model="dialogTableVisible" title="Shipping address">
        <!--<el-table :data="gridData">-->
        <!--  <el-table-column property="date" label="Date" width="150"/>-->
        <!--  <el-table-column property="name" label="Name" width="200"/>-->
        <!--  <el-table-column property="address" label="Address"/>-->
        <!--</el-table>-->
      </el-dialog>
      <el-dialog v-model="dialogTableVisible" title="Shipping address">
        <el-table :data="gridData">
          <el-table-column property="date" label="Date" width="150"/>
          <el-table-column property="name" label="Name" width="200"/>
          <el-table-column property="address" label="Address"/>
        </el-table>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
