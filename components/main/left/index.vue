<template>
  <div class="container">
    <div class="new-blog">
      <!--最新博客-->
      <div class="up">
        <span class="title">
          最新博客
        </span>
        <span class="more">
          <el-link default-expand-all href="https://element-plus.org" target="_blank">
            更多
          </el-link>
        </span>
      </div>
      <div class="content">
        <ul>
          <li @click="blogClick(1)">
            Spring两大核心竟然这么简单，看了学不会来打我
          </li>
          <li @click="blogClick(1)">
            十分钟学会SpringBoot，学不会来打我
          </li>
          <li @click="blogClick(1)">
            CGLIB 和 JDK 两种动态代理方法对比
          </li>
          <li @click="blogClick(1)">
            Spring 创建 Bean 的三种方式
          </li>
          <li @click="blogClick(1)">
            在CentOS 7.6上单机部署Zookeeper
          </li>
          <li @click="blogClick(1)">
            Redis基础入门，Redis远程连接，java连接Redis
          </li>
          <li @click="blogClick(1)">
            分布式数据库系列——（一）强一致性
          </li>
          <li @click="blogClick(1)">
            图算法之无权最短路径 - 基于Neo4j实现
          </li>
        </ul>
      </div>
    </div>
    <div class="category">
      <!--分类-->
      <div class="up">
        <span class="title">
          分类
        </span>
        <span class="more">

        </span>
      </div>
      <!--内容区域-->
      <div class="content">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"/>
      </div>
    </div>
    <div class="tag">
      <!--标签-->
      <div class="up">
        <span class="title">
          标签
        </span>
        <span class="more">
          <el-link href="https://element-plus.org" target="_blank">
            更多
          </el-link>
        </span>
      </div>

      <!--内容-->
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const blogClick = (id: number) => {
  console.log(id);
}


interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: '中间件',
    children: [
      {
        label: '消息队列',
        children: [
          {
            label: 'RabbitMQ',
          },
          {
            label: 'Kafka',
          },
          {
            label: 'RocketMQ',
          },
          {
            label: 'ActiveMQ',
          },
        ],
      },
      {
        label: 'web server',
        children: [
          {
            label: 'Nginx',
          },
          {
            label: 'OpenResty',
          },
          {
            label: 'Tomcat',
          },
        ],
      },
    ],
  },
  {
    label: '编程语言',
    children: [
      {
        label: 'Java',
        children: [
          {
            label: 'SpringBoot',
          },
          {
            label: 'String',
          },
          {
            label: 'JVM',
          },
          {
            label: 'JUC',
          },
        ],
      },
      {
        label: 'JavaScript',
        children: [
          {
            label: 'Vue',
          },
          {
            label: 'Nuxt',
          },
          {
            label: 'Node',
          },
          {
            label: 'React',
          },
          {
            label: 'jQuery',
          },
        ],
      },
    ],
  },
  {
    label: '编程语言',
    children: [
      {
        label: 'Java',
        children: [
          {
            label: 'SpringBoot',
          },
          {
            label: 'String',
          },
          {
            label: 'JVM',
          },
          {
            label: 'JUC',
          },
        ],
      },
      {
        label: 'JavaScript',
        children: [
          {
            label: 'Vue',
          },
          {
            label: 'Nuxt',
          },
          {
            label: 'Node',
          },
          {
            label: 'React',
          },
          {
            label: 'jQuery',
          },
        ],
      },
    ],
  },
  {
    label: '编程语言',
    children: [
      {
        label: 'Java',
        children: [
          {
            label: 'SpringBoot',
          },
          {
            label: 'String',
          },
          {
            label: 'JVM',
          },
          {
            label: 'JUC',
          },
        ],
      },
      {
        label: 'JavaScript',
        children: [
          {
            label: 'Vue',
          },
          {
            label: 'Nuxt',
          },
          {
            label: 'Node',
          },
          {
            label: 'React',
          },
          {
            label: 'jQuery',
          },
        ],
      },
    ],
  },
  {
    label: '编程语言',
    children: [
      {
        label: 'Java',
        children: [
          {
            label: 'SpringBoot',
          },
          {
            label: 'String',
          },
          {
            label: 'JVM',
          },
          {
            label: 'JUC',
          },
        ],
      },
      {
        label: 'JavaScript',
        children: [
          {
            label: 'Vue',
          },
          {
            label: 'Nuxt',
          },
          {
            label: 'Node',
          },
          {
            label: 'React',
          },
          {
            label: 'jQuery',
          },
        ],
      },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}

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
  // { type: 'danger', label: '网络安全' },
  // { type: 'info', label: 'JVM' },
  // { type: 'success', label: 'JUC' },
  // { type: 'info', label: '网络编程' },
  // { type: 'success', label: 'Unity3D' },
])

const tagClick = (id: number) => {
  console.log(id)
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 100%;

  .new-blog {
    // 边框
    border:1px solid #cccccc;
    //border-top: 1px solid #cccccc;
    //border-right: 1px solid #cccccc;
    //border-left: 1px solid #cccccc;
    //border-bottom: 1px solid #cccccc;

    height: 300px;
    width: 100%;

    .up {
      // 边框
      border-bottom: 1px solid #cccccc;

      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        margin-left: 10px;
      }

      .more {
        margin-right: 10px;

        ::v-deep(.el-link__inner) {
          font-size: 16px;
        }
      }
    }

    .content {


      height: 260px;
      width: 100%;

      ul {
        li {
          // 间距
          letter-spacing:1px;

          height: 20px;
          margin: 10px 10px;
          font-size: 16px;
          //文字溢出显示省略号
          text-overflow: ellipsis;
          //强制文字在一行
          white-space: nowrap;
          //超出宽度隐藏
          overflow: hidden;
          // 鼠标变小手
          cursor: pointer;
        }

        // 悬浮样式
        li:hover {
          color: blue;
        }

        li:active {
          color: black;
        }
      }
    }
  }

  .category {
    border:1px solid #cccccc;
    margin-top: 20px;
    height: 560px;
    width: 100%;

    .up {
      border-bottom:1px solid #cccccc;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        margin-left: 10px;
      }

      .more {
        margin-right: 10px;

        ::v-deep(.el-link__inner) {
          font-size: 16px;
        }
      }
    }

    .content {
      display: flex;
    }
  }

  .tag {
    border:1px solid #cccccc;
    margin-top: 20px;
    height: 300px;
    width: 100%;

    .up {
      border-bottom:1px solid #cccccc;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        margin-left: 10px;
      }

      .more {
        margin-right: 10px;

        ::v-deep(.el-link__inner) {
          font-size: 16px;
        }
      }
    }

    .content {
      display: flex;
      flex-wrap: wrap;

      ::v-deep(.el-button) {
        margin: 5px 5px;
      }
    }
  }
}
</style>
