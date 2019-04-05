<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="标题" class="filter-item input-item"/>
      <el-button v-waves class="filter-item button-item" type="primary" icon="el-icon-search">搜素</el-button>
      <el-button v-waves class="filter-item button-item" type="primary" icon="el-icon-edit" @click="dialogVisible=true">添加</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      fit
      highlight-current-row
      stripe
      style="width: 100%;"
    >
      <el-table-column label="编号" width="65">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="名字" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="年龄" align="center">
        <template slot-scope="scope">
          {{ scope.row.age }}
        </template>
      </el-table-column>
      <el-table-column label="日期" align="center">
        <template slot-scope="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogVisible" title="添加文章">
      <el-form :model="tableItem">
        <el-form-item label="编号" label-width="150">
          <el-input-number v-model="tableItem.id"/>
        </el-form-item>
        <el-form-item label="名字" label-width="150">
          <el-input v-model="tableItem.name"/>
        </el-form-item>
        <el-form-item label="年龄" label-width="150">
          <el-input-number v-model="tableItem.age"/>
        </el-form-item>
        <el-form-item label="日期" label-width="150">
          <el-date-picker v-model="tableItem.date" type="date" placeholder="选择日期"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button>确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import waves from '@/directive/waves' // Waves directive
import { getArticles } from '../../api/article'

export default {
  directives: {
    waves
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      tableItem: {
        id: null,
        name: '',
        age: null,
        date: null
      }
    }
  },
  created() {
    const that = this
    getArticles(1, 1).then(function(res) {
      that.tableData = res.data.data.table
    })
  },
  methods: {
    /**
     *
     * @param rowIndex 行号
     * @param rowObj 行对象
     */
    handleEdit: function(rowIndex, rowObj) {
    }
  }
}
</script>

<style lang="scss">
.app-container {
  .filter-container {
    margin-bottom: 30px;
    .input-item {
      width: 200px;
    }
  }
}
</style>
