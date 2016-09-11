$(function(){
  new Vue({
    el:'#app',
    data:{
      newTodo:'',
      todos:[
        {text:'Add some todos'},
      ]
    },
    methods:{
      addTodo:function(){
        var text=this.newTodo.trim()
        if(text){
          this.todos.push({text:text})
          this.newTodo=''
        }
      },
      removeTodo:function(index){
        this.todos.splice(index,1)
      }
    }
  })

/*双向绑定，渲染列表，处理用户输入*/
//   new Vue({
//   el:'#app',
//   data:{
//     message:'Hello Vue.js!',
//     todos:[
//       {text:'Learn JavaScript'},
//       {text:'Learn Vue.js'},
//       {text:'Build Something Awesome'}
//     ]
//   },
//   methods:{
//     reverseMessage:function(){
//       this.message=this.message.split('').reverse().join('')
//     }
//   }
// })
});
