<template>
  <div class="upload-container">
    <el-button :style="{background:color,borderColor:color}" icon="el-icon-upload" size="mini" type="primary" @click=" dialogVisible=true">上传图片
    </el-button>
    <el-dialog :visible.sync="dialogVisible">
      <el-upload
        :multiple="true"
        :file-list="fileList"
        :show-file-list="true"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :action="upload"
        class="editor-slide-upload"
        list-type="picture-card">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'EditorSlideUpload',
  props: {
    color: {
      type: String,
      default: '#1890ff'
    },
    /**
     * 上传文件接口
     **/
    upload: {
      type: String,
      default: 'https://httpbin.org/post'
    }
  },
  data() {
    return {
      dialogVisible: false,
      /**
       * 存储图片对象列表
       */
      listObj: [],
      fileList: []
    }
  },
  methods: {
    checkAllSuccess() {
      return this.listObj.every(item => {
        return !!item.response
      })
    },
    /**
     * 用户上传完图片后，点击提交，执行该函数
     *
     */
    handleSubmit() {
      if (!this.checkAllSuccess()) {
        this.$message('请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！')
        return
      }
      this.$emit('successCBK', this.listObj)
      this.listObj = []
      this.fileList = []
      this.dialogVisible = false
    },
    /**
     * 选择文件点击确定后，element-upload 组件发送请求，上传文件
     * @param response 响应
     * @param file 上传的文件对象
     */
    handleSuccess(response, file) {
      this.listObj.push(file)
    },

    handleRemove(file) {
      for (let i = 0; i < this.listObj.length; i++) {
        if (this.listObj[i].uid === file.uid) {
          delete this.listObj[i]
          break
        }
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.editor-slide-upload {
  margin-bottom: 20px;
  /deep/ .el-upload--picture-card {
    width: 100%;
  }
}
</style>
