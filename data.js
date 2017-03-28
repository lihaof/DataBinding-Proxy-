class Von{
  constructor(config){
    this.$el = config.el
    this.$data = config.data()
    this.$tpl = config.template.bind(this.$data)
    const self = this    
    this.dom = document.querySelector(self.$el)
    this.$binding = new Proxy(this.$data,{
      set(target,prop,value){       
        target[prop] = value
        self._render()
        return true
      }
    })
    this._render()
  }
  _render(){
    this.dom.innerHTML = this.$tpl()
  }
}

const app = new Von({
  el: '#app',
  data() {
    return{
      a: 1,
      b: 2
    }   
  },
  template(){
    const sum = this.a + this.b
    return `<div>Hello ${sum}</div>`
  }
})
