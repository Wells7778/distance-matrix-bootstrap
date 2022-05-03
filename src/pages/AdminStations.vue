<template>
  <div>
    <div class="row">
      <div class="col-2">
        <button
          class="btn btn-primary mt-1"
          @click="addStation"
        >
          新增服務網
        </button>
      </div>
      <div class="col-4">
        <div class="input-group mt-1">
          <span
            for=""
            class="input-group-text"
          >搜尋</span>
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="輸入服務網名稱、代號、或註記"
            @input="onSearch"
          >
        </div>
      </div>
      <div class="col-2">
        <button
          class="btn btn-success mt-1"
          @click="createColumn"
        >
          新增欄位
        </button>
      </div>
      <div class="col-2">
        <el-upload
          class="upload"
          :action="uploadUrl"
          :headers="headers"
          :on-success="onUploadSuccess"
          :on-error="onUploadFail"
          :show-file-list="false"
          accept="csv"
        >
          <button
            class="btn btn-info mt-1 mx-1"
          >
            匯入
          </button>
        </el-upload>
        <button
          class="btn btn-warning mt-1"
          @click="downloadCsv"
        >
          匯出
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <el-table
          :data="stations"
          stripe
          style="width: 100%"
        >
          <el-table-column
            prop="tag"
            label="註記"
            header-align="center"
            align="center"
            width="80"
          />
          <el-table-column
            prop="number"
            label="代號"
            header-align="center"
            align="center"
            width="100"
          />
          <el-table-column
            prop="name"
            header-align="center"
            label="名稱"
          />
          <el-table-column
            prop="business_time"
            header-align="center"
            label="營業時間"
          />
          <el-table-column
            prop="latitude"
            header-align="center"
            label="緯度"
          />
          <el-table-column
            prop="longitude"
            header-align="center"
            label="經度"
          />
          <el-table-column
            prop="priority"
            header-align="center"
            align="center"
            label="優先度"
          />
          <el-table-column
            prop="common_tire"
            header-align="center"
            label="常備胎"
            width="300"
          >
            <template #default="scope">
              <div
                class="cell"
                style="white-space: pre-wrap;"
              >
                {{ scope.row.common_tire }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            v-for="column in custom_columns"
            :key="`column_${column.id}`"
            header-align="center"
            :prop="`custom_${column.id}`"
            :label="column.name"
          >
            <template #header>
              <div class="cell">
                {{ column.name }}
                <span>
                  <el-popconfirm
                    title="確認刪除此欄位?"
                    icon-color="red"
                    confirm-button-text="確定"
                    cancel-button-text="取消"
                    @confirm="deleteColumn(column.id)"
                  >
                    <template #reference>
                      <el-icon color="red">
                        <delete />
                      </el-icon>
                    </template>
                  </el-popconfirm>
                </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
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
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="pagination.perPage"
          :total="pagination.total"
          @update:current-page="onNextPage"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <el-dialog
          v-model="dialogVisible"
          title="服務網"
          :before-close="handleClose"
        >
          <el-form
            :model="station"
            label-width="120px"
          >
            <el-form-item label="註記">
              <el-select v-model="station.tag">
                <el-option
                  label="優"
                  value="優"
                />
                <el-option
                  label="劣"
                  value="劣"
                />
                <el-option
                  label="無"
                  value="無"
                />
              </el-select>
            </el-form-item>
            <el-form-item
              label="代號"
              :rules="[{ required: true, message: '請輸入代號' }]"
            >
              <el-input v-model="station.number" />
            </el-form-item>
            <el-form-item
              label="名稱"
              :rules="[{ required: true, message: '請輸入名稱' }]"
            >
              <el-input v-model="station.name" />
            </el-form-item>
            <el-form-item label="營業時間">
              <el-input v-model="station.business_time" />
            </el-form-item>
            <el-form-item
              label="緯度"
              :rules="[{ required: true, message: '請輸入緯度' }]"
            >
              <el-input v-model="station.latitude" />
            </el-form-item>
            <el-form-item
              label="經度"
              :rules="[{ required: true, message: '請輸入經度' }]"
            >
              <el-input v-model="station.longitude" />
            </el-form-item>
            <el-form-item label="優先度，大於0則25K內優先派">
              <el-input v-model="station.priority" />
            </el-form-item>
            <el-form-item label="常備輪胎規格">
              <el-input v-model="station.common_tire" />
            </el-form-item>
            <el-form-item
              v-for="c in custom_columns"
              :key="`${c.id}-form`"
              :label="c.name"
            >
              <el-input
                v-model="station[`custom_${c.id}`]"
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
import { ref, reactive, computed, h } from 'vue'
import { Station, CustomColumn } from '../api'
import _ from 'lodash'
import { ElNotification, ElMessageBox } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'

const stations = ref([])
const custom_columns = ref([])
const search = ref('')
const searchText = ref('')
const pagination = reactive({
  page: 1,
  perPage: 50,
  lastPage: 1,
  total: 0,
})
const uploadUrl = `${import.meta.env.VITE_BASE_URL}admin/stations/upload`
const headers = {
  'Authorization': `Bearer ${localStorage.getItem('token')}`
}
const getCustomColumns = async () => {
  try {
    const { data: { data }} = await CustomColumn.index()
    custom_columns.value = data
  } catch (error) {
    console.log(error)
  }
}
const getStations = async () => {
  try {
    const params = {
      page: pagination.page,
      per_page: pagination.perPage,
    }
    if (searchText.value) {
      params['name_cont'] = searchText.value
      params['tag_eq'] = searchText.value
      params['number_cont'] = searchText.value
      params['m'] = 'or'
    }
    const { data: { data }} = await Station.index(params)
    stations.value = data.data
    pagination.page = data.pagination.page
    pagination.perPage = data.pagination.per_page
    pagination.lastPage = data.pagination.last_page
    pagination.total = data.pagination.total
  } catch (error) {
    console.log(error)
  }
}
const createColumn = async () => {
  try {
    const { value: name} = await ElMessageBox.prompt('請輸入欄位名稱', '新增欄位', {
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    })
    const { data: { status }} = await CustomColumn.create({
      name,
    })
    if (status) throw Error('新增失敗')
    getCustomColumns()
    getStations()
    ElNotification.success({
      title: 'Success',
      message: '新增欄位成功',
    })
  } catch (error) {
    console.log(error)
  }
}
const deleteColumn = async (id) => {
  try {
    const { data: { status }} = await CustomColumn.delete(id)
    if (status) throw Error('刪除失敗')
    getCustomColumns()
    getStations()
    ElNotification.success({
      title: 'Success',
      message: '刪除欄位成功',
    })
  } catch (error) {
    ElNotification.success({
      title: 'Error',
      message: `刪除欄位失敗${error.message}`,
    })
  }
}
const prevPage = () => {
  if (pagination.page > 1) {
    pagination.page--
    getStations()
  }
}
const nextPage = () => {
  if (pagination.page < pagination.lastPage) {
    pagination.page++
    getStations()
  }
}
export default {
  components: {
    Delete
  },
  setup() {
    getCustomColumns()
    getStations()
    const station = ref({
      tag: '',
      number: '',
      name: '',
      business_time: '',
      latitude: '',
      longitude: '',
      priority: '',
      common_tire: '',
    })
    const dialogVisible = ref(false)
    const PAGE_SIZE = 2
    const pages = computed(() => {
      const start = Math.max(1, pagination.page - PAGE_SIZE)
      const end = Math.min(pagination.lastPage, pagination.page + PAGE_SIZE)
      return Array.from({ length: end - start + 1 }, (_, i) => start + i)
    })
    const isFirstPage = computed(() => pagination.page === 1)
    const isLastPage = computed(() => pagination.page === pagination.lastPage)
    const showEditPage = () => {
      dialogVisible.value = true
    }
    const closeEditPage = () => {
      dialogVisible.value = false
    }
    const handleClose = () => {
      station.value = {
        tag: '優',
        number: '',
        name: '',
        business_time: '',
        latitude: '',
        longitude: '',
        priority: 0,
        common_tire: '',
      }
      closeEditPage()
    }
    const editRow = (data) => {
      station.value = data
      showEditPage()
    }
    const deleteRow = async (id) => {
      try {
        const { data: { status }} = await Station.delete(id)
        if (status) throw Error('刪除失敗')
        getCustomColumns()
        search.value = ''
        getStations()
        ElNotification.success({
          title: 'Success',
          message: '刪除服務網成功',
        })
      } catch (error) {
        ElNotification.success({
          title: 'Error',
          message: `刪除服務網失敗${error.message}`,
        })
      }
    }
    const onNextPage = (page) => {
      pagination.page = page
      getStations()
    }
    const onUpdate = (id) => {
      return Station.update(id, station.value)
    }
    const onCreate = () => {
      return Station.create(station.value)
    }
    const onSubmit = async () => {
      try {
        const { id } = station.value
        let resp = null
        if (id) {
          resp = await onUpdate(id)
        } else {
          resp = await onCreate()
        }
        if (resp.data.status) throw Error('失敗')
        closeEditPage()
        getCustomColumns()
        search.value = ''
        getStations()
        ElNotification.success({
          title: '成功',
          message: h('i', { style: 'color: teal' }, `${id ? '更新' : '新增'}完成`),
        })
      } catch (error) {
        console.log(error)
        ElNotification.error({
          title: '失敗',
          message: h('i', { style: 'color: teal' }, '失敗'),
        })
      }
    }
    const addStation = () => {
      station.value = {
        tag: '優',
        number: '',
        name: '',
        business_time: '',
        latitude: '',
        longitude: '',
        priority: 0,
        common_tire: '',
      }
      showEditPage()
    }
    const onSearch = _.debounce(() => {
      searchText.value = search.value
      getStations()
    }, 500)
    const downloadCsv = async () => {
      try {
        const { data } = await Station.download()
        const blob = new Blob(["\uFEFF" + data], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = 'stations.csv'
        link.click()
      } catch (error) {
        console.log(error)
      }
    }
    const onUploadSuccess = (resp) => {
      const successCount = resp.data.success_count
      const failCount = resp.data.fail_count
      const errors = resp.data.errors
      let message = `成功：${successCount}，失敗：${failCount}`
      if (errors.length) {
        message += `，失敗原因：${errors.join(',')}`
      }
      ElNotification.success({
        title: '匯入完成',
        message ,
      })
    }
    const onUploadFail = () => {
      ElNotification.error({
        title: '匯入失敗',
        message: '請確認檔案格式是否正確',
      })
    }
    return {
      uploadUrl,
      headers,
      station,
      stations,
      custom_columns,
      getStations,
      pagination,
      pages,
      isFirstPage,
      isLastPage,
      prevPage,
      nextPage,
      editRow,
      deleteRow,
      onNextPage,
      dialogVisible,
      showEditPage,
      closeEditPage,
      handleClose,
      onSubmit,
      addStation,
      search,
      onSearch,
      createColumn,
      deleteColumn,
      downloadCsv,
      onUploadSuccess,
      onUploadFail,
    }
  }
}
</script>