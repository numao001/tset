const app = new Vue({
  el: "#app",
  data: {
    message: "写真を撮影しました",
    seen: false
  },
  methods: {
    move() {
       const se = new Audio("shutter.wav")
       se.play()
       this.seen = true
       setTimeout(() => {
         this.message = "写真を送信中..."
       },800)
       this.seen = true
       setTimeout(() => {
         this.message = "IPアドレス取得中..."
       },1600)
       this.seen = true
       setTimeout(() => {
         this.message = "IPアドレスを分析中..."
       },2400)
       this.seen = true
       setTimeout(() => {
         this.message = "住所を取得しました..."
       },2600)
       this.seen = true
       setTimeout(() => {
         this.message = "情報を送信中..."
       },4000)
       this.seen = true
       setTimeout(() => {
         location.href = "invoice.html"
       },5000)
    }
  }
})
