
const app = new Vue({
    el: '#app',
    data: {
        message: '你好',
        books:[
            {
                id:1,
                name:'《算法导论》',
                date:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《UNIX编程艺术》',
                date:'2006-2',
                price:59.00,
                count:1
            },
            {
                id:3,
                name:'《编程珠玑》',
                date:'2008-10',
                price:39.00,
                count:1
            },
            {
                id:4,
                name:'《代码大全》',
                date:'2006-3',
                price:128.00,
                count:1
            }
        ]
    },
    methods:{
        getFinalPrice(price){
            return '￥' + price.toFixed(2)
        },
        decrement(index){
            console.log('decrement', index);
            this.books[index].count--
        },
        increment(index) {
            console.log('increment', index);
            this.books[index].count++
        },
        removeItem(index){
            this.books.splice(index,1)
        }

    },
    computed:{

        totalPrice(){
            let lastPrice = 0
            // for (let i = 0; i < this.books.length; i++){
            //     lastPrice += this.books[i].price * this.books[i].count
            // }
            for (let book of this.books) {
                lastPrice += book.price * book.count
            }
            return lastPrice

            //for(let book in/of this.books)
            //reduce

        }
    },
    filters:{
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    }
})
