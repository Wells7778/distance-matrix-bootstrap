<template>
  <div class="container-fluid mt-5 pt-3">
    <div class="row">
      <div class="col-8">
        <h1 class="text-danger">
          搜尋地點： {{ query.address }}
        </h1>
        <h3 class="text-muted">
          Google地點： {{ query.geo_location }}
        </h3>
        <router-link
          class="btn btn-primary"
          to="/"
        >
          回搜尋
        </router-link>
        <button
          type="button"
          class="btn btn-info mx-5"
          @click="disableAllLineThrough"
        >
          取消全部刪除線
        </button>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>註記</th>
              <th>編號</th>
              <th>服務網名字</th>
              <th>營業時間</th>
              <th>路徑距離</th>
              <th>常備輪胎規格</th>
              <th
                v-for="c in custom_columns"
                :key="`column-${c.id}`"
              >
                {{ c.name }}
              </th>
              <th>..</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="result in results"
              :key="result.name"
              class="item"
            >
              <td
                :class="showClass(result)"
              >
                {{ result.tag }}
              </td>
              <td
                :class="showClass(result)"
              >
                {{ result.number }}
              </td>
              <td
                :class="showClass(result)"
              >
                {{ result.name }}
              </td>
              <td
                :class="showClass(result)"
              >
                {{ result.business_time }}
              </td>
              <td
                :class="showClass(result)"
              >
                {{ result.distance_text }}
              </td>
              <td
                :class="showClass(result)"
              >
                {{ result.common_tire }}
              </td>
              <td
                v-for="c in custom_columns"
                :key="`column_${c.id}`"
                :class="showClass(result)"
              >
                {{ result[`custom_${c.id}`] }}
              </td>
              <td>
                <button
                  type="button"
                  class="copy btn btn-sm btn-outline-success"
                  @click="copyToClipboard(result)"
                >
                  複製
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-4">
        <h3 class="mt-5 text-muted">
          地圖僅供參考
        </h3>
        <template v-if="query?.latlng">
          <GoogleMap
            :api-key="apiKey"
            style="width: 100%; height: 500px"
            :center="center"
            :zoom="15"
          >
            <Marker :options="{ position: center }" />
          </GoogleMap>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from 'vue'
import { Result, Query, CustomColumn } from '../api'
import { useRoute } from 'vue-router'
import { toClipboard } from '@soerenmartius/vue3-clipboard'
import { GoogleMap, Marker } from 'vue3-google-map'

const custom_columns = ref([])
const getCustomColumns = async () => {
  try {
    const { data: { data }} = await CustomColumn.index()
    custom_columns.value = data
  } catch (error) {
    console.log(error)
  }
}
export default {
  components: {
    GoogleMap,
    Marker,
  },
  setup() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY
    const route = useRoute()
    const query = ref({})
    const results = ref([])
    const getQuery = async () => {
      const id = route.params.id
      const { data: { data } } = await Query.show(id)
      query.value = data
    }
    const getResults = async () => {
      try {
        const id = route.params.id
        const { data: { data }} = await Result.index(id)
        results.value = data.map(result => {
          const classList = []
          if (result.tag === '優') {
            classList.push('text-danger')
          } else if (result.tag === '劣') {
            classList.push('text-secondary')
          } else {
            classList.push('text-info')
          }
          return {
            classList,
            ...result,
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
    const showClass = (item) => {
      return item.classList.join(' ')
    }
    const copyToClipboard = (item) => {
      toClipboard(item.number)
      const classNames =
      [
        'text-line-through',
        'bg-dark'
      ]
      classNames.forEach(className => {
        const index = item.classList.indexOf(className)
        if (index > -1) {
          item.classList.splice(index, 1)
        } else {
          item.classList.push(className)
        }
      })
    }
    const disableAllLineThrough = () => {
      results.value.forEach(item => {
        item.classList = item.classList.filter(c => !['text-line-through', 'bg-dark'].includes(c))
      })
    }
    const center = computed(() => {
      if (!query.value?.latlng) return {
        lat: 25.0391667,
        lng: 121.5641667
      }
      let location = query.value.latlng
      const lat = Number(location.split(',')[0])
      const lng = Number(location.split(',')[1])
      return {
        lat,
        lng,
      }
    })
    getCustomColumns()
    getResults()
    getQuery()
    return {
      apiKey,
      query,
      results,
      showClass,
      copyToClipboard,
      disableAllLineThrough,
      center,
      custom_columns,
    }
  }
}
</script>
