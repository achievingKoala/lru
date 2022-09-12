console.log(10)

var person = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
    fullName : function() 
	{
       return this.firstName + " " + this.lastName;
    }
};

// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     id : 5566,
//     fullName : function() 
// 	{
//        return this.firstName + " " + this.lastName;
//     }
// };

console.log(person.fullName())

var myMap = new Object()
myMap["age2"] =  9999
console.log(myMap)


new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
      array1:["one","two","three"],
      addItem:"",
      capacity:5,
      myMap:null,
      mk:"88",
      mapValue:"99dfds",
      queryKey:null,
      queryRes: ""
    },
    created: function(){
        // this.myMap["age"] =  333
        this.myMap = new Map()
        console.log(myMap)
        // console.log(23113)
    },
    watch:{
        capacity: function() {
            while(this.myMap.size > this.capacity ) {//超过容量   
                this.myMap.delete(this.myMap.keys().next().value);//得到最前面的key并删除此键值对
            }     
        }
    },
    methods:{
        getFromMap: function(){
            if (this.myMap.has(this.queryKey)) {
                this.queryRes = this.myMap.get(this.queryKey)
                this.myMap.delete(this.queryKey);
                this.myMap.set(this.queryKey, this.queryRes);
                return 
            }
            this.queryRes = "无"
        },
        addArray: function() {
            while (this.array1.length >= this.capacity) {
                this.array1.pop()
            }
            this.array1.unshift(this.addItem)
            this.addItem = ""
        },
        refreshArray: function() {
            this.array1 = new Array()
            this.capacity = 5
        },
        addMapNode: function() {
            if(this.myMap.has(this.mk)) {
                this.myMap.delete(this.mk)//为了将最近使用过的放在最后面
            }
            this.myMap.set(this.mk, this.mapValue)
            this.mk = null
            this.mapValue = null
            console.log("------>",this.capacity)
            if(this.myMap.size > this.capacity ) {//超过容量
                
                this.myMap.delete(this.myMap.keys().next().value);//得到最前面的key并删除此键值对
            }
            // this.myMap.set(this.mk,this.mapValue)
            console.log(this.myMap)
        },
        delete: function () {
            
        }
    }
})