<template>
  <div class="container">
    <div class="content">

      <div class="tag">
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

    </div>

    <div class="page">
      <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="currentPageSize"
          :page-sizes="[10,50,100,200]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="150"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>

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
  {type: 'info', label: 'MySQL/Redis', id: 5},
  {type: 'warning', label: 'Oracle', id: 6},
  {type: 'info', label: 'Nuxt', id: 7},
  {type: 'success', label: 'Vue', id: 8},
  {type: 'info', label: 'Vue3', id: 9},
  {type: 'success', label: 'Vue2', id: 10},
])

// 当前页码
const currentPage = ref<number>(1)
// 分页大小
const currentPageSize = ref<number>(10)

</script>

<style scoped lang="scss">
.container {
  width: 720px;
  height: 1200px;

  display: flex;
  flex-direction: column;
  .content {
    height: 1100px;
    .tag{
      display: flex;
      flex-wrap:wrap;
      .el-button {
        margin: 10px 10px;
      }
    }
  }
  .page {
    height: 100px;
    display: flex;
    justify-content: center;
  }
}
</style>
