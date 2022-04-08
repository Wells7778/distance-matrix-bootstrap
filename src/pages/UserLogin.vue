<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <form>
          <div class="form-outline mb-4">
            <input
              id="account"
              v-model="account"
              type="email"
              class="form-control"
            >
            <label
              class="form-label"
              for="account"
            >Account</label>
          </div>
          <div class="form-outline mb-4">
            <input
              id="password"
              v-model="password"
              type="password"
              class="form-control"
            >
            <label
              class="form-label"
              for="password"
            >Password</label>
          </div>

          <!-- Submit button -->
          <button
            type="button"
            class="btn btn-primary btn-block mb-4"
            @click="login"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { User } from '../api'
import { ElNotification } from 'element-plus'

export default {
  setup() {
    const router = useRouter()
    const mapStore = inject('mapStore')
    const { signIn, signOut } = mapStore
    const account = ref('')
    const password = ref('')
    const login = async () => {
      try {
        const data = {
          account: account.value,
          password: password.value,
        }
        const { data: { status }} = await User.login(data)
        if (status) throw Error()
        signIn()
        router.push('/')
        ElNotification.success({
          title: '登入成功',
          message: '已成功登入',
        })
      } catch (error) {
        signOut()
        ElNotification.error({
          title: '登入失敗',
          message: '帳號密碼錯誤',
        })
        console.log(error)
      }
    }
    return {
      account,
      password,
      login,
    }
  }
}
</script>