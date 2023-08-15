<template>
  <div class="container">
    <div class="content">
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>
      <el-button
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          @click="tagClick(item.id)"
          size="small"
      >
        {{ item.label }}
      </el-button>

    </div>

    <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
/**
 * 标签
 */
type Item = {
  type: string,
  label: string,
  id: number
}


const items = ref<Array<Item>>([
  {type: '', label: '中间件', id: 1},
  {type: 'success', label: 'Java', id: 2},
  {type: 'info', label: 'PHP', id: 3},
  {type: 'danger', label: 'Golang', id: 4},
  {type: 'info', label: 'MySQL', id: 5},
  {type: 'warning', label: 'Oracle', id: 6},
  {type: 'info', label: 'Nuxt', id: 7},
  {type: 'success', label: 'Vue', id: 8},
  {type: 'info', label: 'Vue3', id: 9},
  {type: 'success', label: 'Vue2', id: 10},
  {type: 'info', label: 'VueX', id: 11},
  {type: 'danger', label: 'RabbitMQ', id: 12},
  {type: 'info', label: '数据库', id: 13},
  {type: 'danger', label: 'StringBoot', id: 14},
  {type: 'info', label: 'String', id: 15},
])
</script>

<style scoped lang="scss">
.container {
  width: 720px;
  height: 1100px;
  background: #c9cbca;
  .content {
    display: flex;
    flex-wrap:wrap;
    .el-button {
      margin: 10px 10px;
    }
  }
}
</style>