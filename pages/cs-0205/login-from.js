import { useState } from 'react'

export default function LoginFrom() {
  //使用物件狀態來對應表單的欄位值
  const [user, setUser] = useState({
    //使用欄位的名稱'name'作為物件屬性名稱
    username: '',
    password: '',
  })

  //錯誤訊息用的狀態
  const [errors, setErrors] = useState({
    //使用欄位的名稱'name'作為物件屬性名稱
    username: '',
    password: '',
  })

  //一般欄位填寫時，共用的onChange處理函式
  const handleFieldChange = (e) => {
    console.log(e.target.type, e.target.name, e.target.value)

    //計算得來的屬性名稱 computed property(ES6)
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // 實作送出表單
  const handleSubmit = (e) => {
    //取消表單預設行為，使用js作進一步檢查和fetch的方式送出表單
    e.preventDefault()

    //e.target指的是事件觸發時的表單物件
    console.log(e.target)

    //用狀態獲得值來作每個欄位檢查

    let hasErrors = false
    const newError = {
      username: '',
      password: '',
    }

    if (!user.username) {
      newError.username = '帳號為必填'
      hasErrors = true
    }

    if (!user.password) {
      newError.password = '密碼為必填'
      hasErrors = true
    }

    if (hasErrors) {
      setErrors(newError)
      return // 因為有錯誤訊息，跳出送出函式
    }

    // 使用FormData物件介面來存取值
    const formData = new FormData(e.target)

    // 錯誤訊息的集中陣列

    console.log(formData.get('username'))
    console.log(formData.get('password'))
  }
  return (
    <>
      <h1>會員登入</h1>
      <form onSubmit={handleSubmit}>
        <div>
          帳號:
          <input
            type="text"
            // 在form表單標記中，記得使用name屬性來定義欄位名稱
            name="username"
            // 這是html5的驗證屬性，只能在form標記中使用
            // required
            value={user.username}
            onChange={handleFieldChange}
          />
        </div>
        <div style={{ minHeight: '1em' }}>
          {errors.username ? errors.username : ''}
        </div>
        <div>
          密碼:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleFieldChange}
            // required
            // minLength={6}
            // maxLength={12}
          />
          <button>SHOW</button>
        </div>
        <div style={{ minHeight: '1em' }}>
          {errors.password ? errors.password : ''}
        </div>
        <div>
          <button
            type="submit"
            // 錯誤 實作在按鈕事件裡
            // onClick={handleSubmit}
          >
            登入
          </button>
        </div>
      </form>
    </>
  )
}
