<template>
  <div>
    <el-tabs
      v-model="freewayId"
    >
      <el-tab-pane
        v-for="freeway in freeways"
        :key="freeway.id"
        :label="freeway.name"
        :name="freeway.id"
      />
    </el-tabs>
    <div class="row">
      <div class="col-3">
        <h1 class="mr-2">
          交流道清單
        </h1>
      </div>
      <div class="col-2">
        <button
          class="btn btn-primary mt-1"
          @click="addInterchange"
        >
          新增交流道
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <el-table
          :data="interchanges"
          stripe
          style="width: 100%"
        >
          <el-table-column
            prop="name"
            header-align="center"
            align="center"
            label="名稱"
          />
          <el-table-column
            prop="exit_km"
            label="公里數"
            header-align="center"
            align="center"
            width="80"
          />
          <el-table-column
            prop="city_north_west"
            label="北上預告出口"
            header-align="center"
            align="center"
          />
          <el-table-column
            prop="city_south_east"
            label="南下預告出口"
            header-align="center"
            align="center"
          />
          <el-table-column
            prop="coords_north_west"
            label="北上交流道座標"
            header-align="center"
            align="center"
          />
          <el-table-column
            prop="coords_south_east"
            label="南下交流道座標"
            header-align="center"
            align="center"
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
            :model="interchange"
            label-width="150px"
          >
            <el-form-item
              label="名稱"
              :rules="[{ required: true, message: '請輸入名稱' }]"
            >
              <el-input v-model="interchange.name" />
            </el-form-item>
            <el-form-item
              label="公里數"
              :rules="[
                { required: true, message: '請輸入公里數' },
                { type: 'number', message: '只能輸入數字' }
              ]"
            >
              <el-input v-model="interchange.exit_km" />
            </el-form-item>
            <el-form-item
              label="北上(東向)預告出口"
            >
              <el-input v-model="interchange.city_north_west" />
            </el-form-item>
            <el-form-item
              label="南下(西向)預告出口"
            >
              <el-input v-model="interchange.city_south_east" />
            </el-form-item>
            <el-form-item
              label="北上(東向)交流道座標"
            >
              <el-input v-model="interchange.coords_north_west" />
            </el-form-item>
            <el-form-item
              label="南下(西向)交流道座標"
            >
              <el-input v-model="interchange.coords_south_east" />
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
import { ref, watch } from 'vue'
import { Freeway, Interchange } from '../api'
import { ElNotification } from 'element-plus'

const freeways = ref([])
const freewayId = ref(1)
const interchanges = ref([])
const interchange = ref({})
const getFreeways = async () => {
  try {
    const { data: { data }} = await Freeway.index()
    freeways.value = data
  } catch (error) {
    console.log(error)
  }
}
const getInterchanges = async () => {
  try {
    const { data: { data } } = await Interchange.index(freewayId.value)
    interchanges.value = data
  } catch (error) {
    console.log(error)
  }
}
export default {
  setup() {
    getFreeways()
    getInterchanges()
    watch(freewayId, async () => {
      await getInterchanges()
    })
    const dialogVisible = ref(false)
    const showEditPage = () => {
      dialogVisible.value = true
    }
    const closeEditPage = () => {
      dialogVisible.value = false
    }
    const handleClose = () => {
      interchange.value = {
        name: '',
        exit_km: 0,
        city_north_west: '',
        city_south_east: '',
        coords_north_west: '',
        coords_south_east: '',
      }
      closeEditPage()
    }
    const editRow = (data) => {
      interchange.value = data
      showEditPage()
    }
    const deleteRow = async (id) => {
      try {
        const { data: { status }} = await Interchange.delete(id)
        if (status) throw Error('刪除失敗')
        getInterchanges()
        ElNotification.success({
          title: 'Success',
          message: '刪除交流道成功',
        })
      } catch (error) {
        ElNotification.success({
          title: 'Error',
          message: `刪除交流道失敗${error.message}`,
        })
      }
    }
    const onUpdate = (id) => {
      return Interchange.update(id, interchange.value)
    }
    const onCreate = () => {
      return Interchange.create({
        freeway_id: freewayId.value,
        ...interchange.value
      })
    }
    const onSubmit = async () => {
      try {
        const { id } = interchange.value
        let resp = null
        if (id) {
          resp = await onUpdate(id)
        } else {
          resp = await onCreate()
        }
        if (resp.data.status) throw Error('失敗')
        closeEditPage()
        getInterchanges()
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
    const addInterchange = () => {
      interchange.value = {
        name: '',
        exit_km: 0,
        city_north_west: '',
        city_south_east: '',
        coords_north_west: '',
        coords_south_east: '',
      }
      showEditPage()
    }
    return {
      freeways,
      interchanges,
      interchange,
      freewayId,
      editRow,
      deleteRow,
      dialogVisible,
      showEditPage,
      closeEditPage,
      handleClose,
      onSubmit,
      addInterchange,
    }
  }
}
</script>