<template>
  <div>
    <div class="row">
      <div class="col-3">
        <h1 class="mr-2">
          派車注意事項
        </h1>
      </div>
      <div class="col-2">
        <button
          class="btn btn-primary mt-1"
          @click="addNote"
        >
          新增
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <el-table
          :data="notes"
          stripe
          style="width: 100%"
        >
          <el-table-column
            header-align="center"
            align="center"
            label="項次"
            width="80"
          >
            <template #default="scope">
              <div class="cell">
                {{ scope.$index + 1 }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="content"
            label="說明"
            header-align="center"
          />
          <el-table-column
            label="操作"
            width="150"
          >
            <template #default="scope">
              <el-button
                type="info"
                size="small"
                @click.prevent="editRow(scope.row)"
              >
                編輯
              </el-button>
              <el-popconfirm
                title="確定刪除?"
                @confirm="deleteRow(scope.row.id)"
              >
                <template #reference>
                  <el-button
                    type="danger"
                    size="small"
                  >
                    刪除
                  </el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <el-dialog
          v-model="dialogVisible"
          title="注意事項"
          :before-close="handleClose"
        >
          <el-form
            :model="note"
            label-width="50px"
          >
            <el-form-item label="說明">
              <el-input
                v-model="note.content"
                type="textarea"
                :autosize="{ minRows: 10, maxRows: 10 }"
              />
            </el-form-item>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="closeEditPage">取消</el-button>
              <el-button
                type="primary"
                @click="onSubmit"
              >確定</el-button>
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { Note } from '../api'
import { ElNotification } from 'element-plus'

const notes = ref([])
const getNotes = async () => {
  try {
    const { data: { data }} = await Note.index()
    notes.value = data
  } catch (error) {
    console.log(error)
  }
}
export default {
  setup() {
    getNotes()
    const note = ref({
      content: ''
    })
    const dialogVisible = ref(false)
    const showEditPage = () => {
      dialogVisible.value = true
    }
    const closeEditPage = () => {
      dialogVisible.value = false
    }
    const handleClose = () => {
      note.value = {
        content: ''
      }
      closeEditPage()
    }
    const editRow = (data) => {
      note.value = data
      showEditPage()
    }
    const deleteRow = async (id) => {
      try {
        const { data: { status }} = await Note.delete(id)
        if (status) throw Error('刪除失敗')
        getNotes()
        ElNotification.success({
          title: 'Success',
          message: '刪除派車備註成功',
        })
      } catch (error) {
        ElNotification.success({
          title: 'Error',
          message: `刪除派車備註失敗${error.message}`,
        })
      }
    }
    const onUpdate = (id) => {
      return Note.update(id, note.value)
    }
    const onCreate = () => {
      return Note.create(note.value)
    }
    const onSubmit = async () => {
      try {
        const { id } = note.value
        let resp = null
        if (id) {
          resp = await onUpdate(id)
        } else {
          resp = await onCreate()
        }
        if (resp.data.status) throw Error('失敗')
        closeEditPage()
        getNotes()
        ElNotification.success({
          title: '成功',
          message: `${id ? '更新' : '新增'}完成`,
        })
      } catch (error) {
        ElNotification.error({
          title: 'Error',
          message: error.message,
        })
      }
    }
    const addNote = () => {
      note.value = {
        content: '',
      }
      showEditPage()
    }
    return {
      note,
      notes,
      editRow,
      deleteRow,
      dialogVisible,
      showEditPage,
      closeEditPage,
      handleClose,
      onSubmit,
      addNote,
    }
  }
}
</script>