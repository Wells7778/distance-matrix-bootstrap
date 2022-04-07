<template>
  <div class="container mt-5 pt-3">
    <div class="row">
      <h1>米其林服務網搜尋</h1>
    </div>
    <div class="row">
      <div class="col-10">
        <div class="input-group my-3">
          <input
            ref="addressRef"
            v-model="searchText"
            type="text"
            class="form-control"
            placeholder="請輸入搜尋地址或地標"
            autofocus
            required
          >
          <input
            v-model="latlng"
            type="text"
            hidden
          >
          <button
            type="button"
            class="btn btn-primary"
            @click="newQuery"
          >
            搜尋
          </button>
        </div>
      </div>
      <!-- Button trigger modal -->
      <div class="col-2">
        <button
          type="button"
          class="btn btn-warning btn-lg"
          @click="showNoteModal"
        >
          派遣注意事項
        </button>
      </div>
      <hr>
      <div class="row">
        <div class="col-12">
          <h3>國道速查</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label
                class="input-group-text"
                for="inputGroupSelect01"
              >{{ targetInterchange }}</label>
            </div>
            <select
              v-model="freewayId"
              class="form-select"
              @change="getInterchanges"
            >
              <option
                disabled
                value=""
              >
                請選擇國道
              </option>
              <option
                v-for="item in freeways"
                :key="item.name"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
            <select
              v-model="direction"
              class="form-select"
            >
              <option
                disabled
                value=""
              >
                請選擇方向
              </option>
              <option
                v-for="item in directions"
                :key="item"
                :value="item"
              >
                {{ item }}
              </option>
            </select>
            <input
              v-model.number="exitKm"
              class="form-control"
              type="number"
              placeholder="請輸入公里數"
            >
            <button
              class="btn btn-primary"
              :disabled="disableFindInterchange"
              @click="findInterchange"
            >
              速查座標
            </button>
            <button
              class="btn btn-success"
              :disabled="disableLookupFreeway"
              @click="lookupFreeways"
            >
              查國道表
            </button>
          </div>
        </div>
      </div>
      <p
        id="freeway-alert"
        class="text-danger text-center"
      >
        {{ alertTextKm }}
      </p>
      <hr>
      <h3>國道交流道＆服務區速查</h3>
      <div class="input w-75">
        <input
          v-model="searchInterchange"
          type="text"
          placeholder="請輸入交流道與服務區會有自動完成提示"
          class="form-control border-info interchange"
          @input="onFilterInterchanges"
          @keydown.down.prevent="onArrowDown"
          @keydown.up.prevent="onArrowUp"
          @keydown.enter.prevent="onEnter"
        >
        <ul
          v-show="isOpen"
          class="list-group mb-3"
        >
          <li
            v-for="(item, index) in filterInterchanges"
            :key="`${item}-search`"
            class="list-group-item"
            :class="{ 'active': index === arrowCounter }"
            @click="setResult(item)"
            @mouseover="arrowCounter = index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <hr>
      <h3>搜尋紀錄</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>搜尋名稱</th>
            <th>地址</th>
            <th>搜尋時間</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="query in queries"
            :key="query.id"
          >
            <td>{{ query.address }}</td>
            <td>{{ query.geo_location }}</td>
            <td>{{ formatTime(query.created_at) }}</td>
            <td>
              <router-link
                :to="`/results/${query.id}`"
                class="btn btn-primary"
              >
                顯示
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="row"
      >
        <div class="col">
          <div
            ref="freewayModalRef"
            class="modal"
            tabindex="-1"
          >
            <div
              class="modal-dialog modal-lg"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h4
                    class="modal-title text-dark"
                  >
                    {{ freeway?.name }}
                  </h4>
                </div>
                <div class="modal-body">
                  <table class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th style="width: 20%;">
                          交流道
                        </th>
                        <th style="width: 10%;">
                          K數
                        </th>
                        <th>交流道快選</th>
                        <th>北上預告出口</th>
                        <th>南下預告出口</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, key) in interchanges"
                        :key="key"
                      >
                        <td>{{ item.name }}</td>
                        <td>{{ item.exit_km }}</td>
                        <td>
                          <button
                            v-if="item.coords_north_west !== ''"
                            class="btn btn-success btn-sm mb-2"
                            @click="setInterChange(key,'N')"
                          >
                            {{ item.name }}{{ directions[0] }}出口
                          </button><br>
                          <button
                            v-if="item.coords_south_east !== ''"
                            class="btn btn-primary btn-sm"
                            @click="setInterChange(key,'S')"
                          >
                            {{ item.name }}{{ directions[1] }}出口
                          </button>
                        </td>
                        <td>{{ item.city_north_west }}</td>
                        <td>{{ item.city_south_east }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div
            ref="noteModalRef"
            class="modal fade"
            tabindex="-1"
            role="dialog"
            aria-labelledby="noteModalLabel"
            aria-hidden="true"
          >
            <div
              class="modal-dialog modal-lg"
              role="document"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h4
                    class="modal-title text-dark"
                  >
                    派遣注意事項
                  </h4>
                </div>
                <div class="modal-body">
                  <table class="table table-hover table-bordered">
                    <thead class="thead-light">
                      <tr>
                        <th>項次</th>
                        <th style="width: 90%;">
                          注意事項
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(note, index) in notes"
                        :key="note"
                      >
                        <td>{{ index + 1 }}</td>
                        <td>{{ note.content }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="closeNoteModal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div
            ref="checkModalRef"
            class="modal fade"
            tabindex="-1"
            role="dialog"
            aria-labelledby="checkModalLabel"
            aria-hidden="true"
          >
            <div
              class="modal-dialog modal-lg"
              role="document"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <h4
                    class="modal-title text-dark"
                  >
                    請確認搜尋地點是否有誤
                  </h4>
                </div>
                <div class="modal-body">
                  <h5>搜尋地點為：{{ queryResult.address }}</h5>
                  <h5>Google回傳地點為：{{ queryResult.geo_location }}</h5>
                  <h5 class="text-danger text-right">
                    是否正確？
                  </h5>
                  <template v-if="queryResult?.latlng">
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
                <div class="modal-footer">
                  <button
                    class="btn btn-secondary"
                    @click="closeCheckModal"
                  >
                    取消
                  </button>
                  <button
                    class="btn btn-primary"
                    @click="createQuery"
                  >
                    開始搜尋
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Freeway, Interchange, Note, Query } from '../api'
import { Modal } from 'bootstrap'
import { useRouter } from 'vue-router'
import { GoogleMap, Marker } from 'vue3-google-map'

const freeways = ref([])
const interchanges = ref([])
const allInterchanges = ref([])
const notes = ref([])
const queries = ref([])
const freewayId = ref('')
const minKm = ref(null)
const maxKm = ref(null)
const getFreeways = async () => {
  try {
    const { data: { data } } = await Freeway.index()
    freeways.value = data
  } catch (error) {
    console.log(error)
  }
}
const getInterchanges = async () => {
  try {
    const { data: { data } } = await Interchange.index(freewayId.value)
    interchanges.value = data
    minKm.value = interchanges.value[0].exit_km
    maxKm.value = interchanges.value[interchanges.value.length - 1].exit_km
  } catch (error) {
    console.log(error)
  }
}
const getAllInterchanges = async () => {
  try {
    const { data: { data }} = await Interchange.all()
    allInterchanges.value = data
  } catch (error) {
    console.log(error)
  }
}
const getNotes = async () => {
  try {
    const { data: { data } } = await Note.index()
    notes.value = data
  } catch (error) {
    console.log(error)
  }
}
const getQueries = async () => {
  try {
    const { data: { data } } = await Query.index()
    queries.value = data
  } catch (error) {
    console.log(error)
  }
}
export default {
  components: {
    GoogleMap,
    Marker,
  },
  setup () {
    getFreeways()
    getAllInterchanges()
    getNotes()
    getQueries()
    const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY
    const router = useRouter()
    const searchText = ref('')
    const searchInterchange = ref('')
    const latlng = ref('')
    const direction = ref('')
    const exitKm = ref(null)
    const isOpen = ref(false)
    const isLoading = ref(false)
    const arrowCounter = ref(-1)
    const filterInterchanges = ref([])
    const targetInterchange = ref('')
    const freewayModalRef = ref(null)
    const noteModalRef = ref(null)
    const addressRef = ref(null)
    const checkModalRef = ref(null)
    const queryResult = ref({})
    let freewayModal = null
    let noteModal = null
    let checkModal = null
    const freeway = computed(() => {
      return freeways.value.find(item => item.id === freewayId.value)
    })
    const directions = computed(() => {
      if (!freeway.value) return ['']
      if (['國一', '汐止－楊梅高架', '國三', '國三甲', '國五'].includes(freeway.value.name)) {
        return ['北上', '南下']
      }
      return ['東向', '西向']
    })
    const alertTextKm = computed(() => {
      if (!interchanges.value.length) return ''
      return `公里數請輸入${minKm.value}KM ～ ${maxKm.value}KM`
    })
    const disableFindInterchange = computed(() => {
      if (!freeway.value) return true
      if (!direction.value) return true
      if (!exitKm.value) return true
      if (exitKm.value < minKm.value || exitKm.value > maxKm.value) return true
      return false
    })
    const disableLookupFreeway = computed(() => {
      if (!freeway.value) return true
      return false
    })
    const center = computed(() => {
      if (!Object.keys(queryResult.value).length) return {
        lat: 25.0391667,
        lng: 121.5641667
      }
      let location = queryResult.value.latlng
      const lat = Number(location.split(',')[0])
      const lng = Number(location.split(',')[1])
      return {
        lat,
        lng,
      }
    })
    const onFilterInterchanges = _.debounce(() => {
      isOpen.value = !!searchInterchange.value
      if (!allInterchanges.value.length) {
        filterInterchanges.value = ['查無交流道＆服務區資料']
      } else {
        filterInterchanges.value = allInterchanges.value.map(item => item.name).filter(item => item.indexOf(searchInterchange.value) > -1)
      }
    }, 500)
    const handleClickOutside = (event) => {
      const list = document.querySelector('.list-group')
      if (!list.contains(event.target)) {
        isOpen.value = false
        arrowCounter.value = -1
      }
    }
    const onArrowDown = () => {
      if (arrowCounter.value < filterInterchanges.value.length) {
        arrowCounter.value += 1
      }
    }
    const onArrowUp = () => {
      if (arrowCounter.value > 0) {
        arrowCounter.value -= 1
      }
    }
    const setSearch = (interchange) => {
      searchText.value = interchange.name
      latlng.value = interchange.coords_north_west
      arrowCounter.value = -1
      searchInterchange.value = ''
      isOpen.value = false
      addressRef.value.focus()
    }
    const onEnter = () => {
      if (isOpen.value) {
        searchText.value = filterInterchanges.value[arrowCounter.value]
        const result = allInterchanges.value.find(item => item.name === searchText.value)
        setSearch(result)
      }
    }
    const setResult = (resultText) => {
      const result = allInterchanges.value.find(item => item.name === resultText)
      setSearch(result)
    }
    const findInterchange = () => {
      if (disableFindInterchange.value) return
      const _arr = interchanges.value.filter(interchange => {
        return !['服務區', '休息站'].includes(interchange.name.slice(-3))
      })
      let result = null
      if (directions.value[0] === '北上') {
        result = _arr.filter(item => item.exit_km >= exitKm.value && item.coords_north_west !== '')[0]
      } else {
        const arr = _arr.filter(item => item.exit_km <= exitKm.value && item.coords_south_east !== '')
        result = arr[arr.length - 1]
      }
      if (result) setResult(result.name)
      targetInterchange.value = result.name
    }
    const showModal = () => {
      freewayModal.show()
    }
    const closeModal = () => {
      freewayModal.hide()
    }
    const lookupFreeways = () => {
      showModal()
    }
    const showNoteModal = () => {
      noteModal.show()
    }
    const closeNoteModal = () => {
      noteModal.hide()
    }
    const showCheckModal = () => {
      checkModal.show()
    }
    const closeCheckModal = () => {
      checkModal.hide()
    }
    const setInterChange = (index, dir) => {
      const item = interchanges.value[index]
      let coords = ''
      searchText.value = item.name
      if(dir === 'N') {
        coords = item.coords_north_west
      } else {
        coords = item.coords_south_east
      }
      latlng.value = coords
      closeModal()
      addressRef.value.focus()
    }
    const newQuery = async () => {
      if (!searchText.value) return
      try {
        const params = {
          address: searchText.value,
        }
        const { data: { data }} = await Query.new(params)
        queryResult.value = data
        showCheckModal()
      } catch (error) {
        console.log(error)
      }
    }
    const createQuery = async () => {
      if (!Object.keys(queryResult).length) return
      try {
        const params = {
          ...queryResult.value,
        }
        const { data: { data: { id } }} = await Query.create(params)
        closeCheckModal()
        router.push(`/results/${id}`)
      } catch (error) {
        console.log(error)
      }
    }
    const formatTime = (time) => {
      const date = new Date(time)
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const minute = date.getMinutes()
      return `${month}/${day} ${hour}:${minute}`
    }
    onMounted(() => {
      freewayModal = new Modal(freewayModalRef.value, {})
      noteModal = new Modal(noteModalRef.value, {})
      checkModal = new Modal(checkModalRef.value, {})
      document.addEventListener('click', handleClickOutside)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })
    return {
      searchText,
      searchInterchange,
      latlng,
      exitKm,
      alertTextKm,
      direction,
      directions,
      freewayId,
      freeway,
      freeways,
      queries,
      getInterchanges,
      interchanges,
      notes,
      result: '',
      search: '',
      results: [],
      isOpen,
      arrowCounter,
      isLoading,
      filterInterchanges,
      disableFindInterchange,
      disableLookupFreeway,
      onArrowDown,
      onArrowUp,
      onEnter,
      setResult,
      onFilterInterchanges,
      findInterchange,
      targetInterchange,
      lookupFreeways,
      showModal,
      closeModal,
      freewayModalRef,
      freewayModal,
      noteModalRef,
      noteModal,
      setInterChange,
      showNoteModal,
      closeNoteModal,
      addressRef,
      checkModal,
      checkModalRef,
      showCheckModal,
      closeCheckModal,
      newQuery,
      queryResult,
      createQuery,
      formatTime,
      apiKey,
      center
    }
  }
}
</script>
<style scoped>
input.interchange {
  border-width: 3px;
}

#note-button {
  position: fixed;
  right: 100px;
  top: 100px;
  border-radius: 20px;
  box-shadow: 4px 4px 3px rgba(20%, 20%, 40%, 0.5);
}
</style>