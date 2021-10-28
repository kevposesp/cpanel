import { createStore } from 'vuex'
import jwt_decode from "jwt-decode"

export default createStore({
    state: {
        token: null,
        typeUser: null,
        accessComponent: false,
        invoice: {
            create: {
                users: {}
            },
            createitem: {
                users: {},
                products: {},
                prices: {}
            },
            invoicesPersonal: {}
        },
        product: {
            createprice: {
                products: {}
            }
        },
        payment: {
            list: {}
        }
    },
    getters: {
        token: state => state.token,
        typeUser: state => state.typeUser,
        accessComponent: state => state.accessComponent,
        invoiceCreate: state => state.invoice.create,
        invoiceCreateItem: state => state.invoice.createitem,
        productCreatePrice: state => state.product.createprice,
        listPaymentMethods: state => state.payment.list,
        listPersonalInvoices: state => state.invoice.invoicesPersonal
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
        },
        setTypeUser(state, payload) {
            state.typeUser = payload
            if(payload == "admin"){
                state.accessComponent = true
            } else {
                state.accessComponent = false
            }
        }
    },
    actions: {
        async login({ commit }, user) {
            try {

                const res = await fetch('http://localhost:4000/auth/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                const resBD = await res.json()
                commit('setToken', "Token " + resBD.data.token)
                localStorage.setItem('Authorization', "Token " + resBD.data.token)
                var t = jwt_decode(resBD.data.token)
                commit('setTypeUser', t.typeUser)
            } catch (error) {
                console.log(error)
            }
        },
        getToken({ commit }) {
            if (localStorage.getItem('Authorization')) {
                commit('setToken', localStorage.getItem('Authorization'))
                var u = localStorage.getItem('Authorization').split(" ")
                var t = jwt_decode(u[1])
                commit('setTypeUser', t.typeUser)
            } else {
                commit('setToken', null)
            }
        },
        signOff({ commit }) {
            localStorage.removeItem('Authorization')
            commit('setToken', null)
        },
        async signup({}, user){
            try{
                const res = await fetch("http://localhost:4000/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
            } catch(error) {
                console.log(error)
            }
            
        },
        async getUsers({}, from){
            const res = await fetch("http://localhost:4000/user/get", {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                Authorization: this.state.token,
                },
            }).then((response) => response.json())
            if(from == "createinvoice"){
                this.state.invoice.create.users = res.users
            } else if(from == "createinvoiceitem"){
                this.state.invoice.createitem.users = res.users
            }
            
        },
        async createInvoice({},idUser){
            const res = await fetch("http://localhost:4000/invoice/create", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Authorization: this.state.token,
                },
                body: JSON.stringify({idUser: idUser})
            }).then((response) => response.json())
            console.log(res.data)
        },
        async createInvoiceItem({}, item) {
            const res = await fetch("http://localhost:4000/invoice/create-item", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: this.state.token,
              },
              body: JSON.stringify( item ),
            }).then((response) => response.json());
            console.log(res.data)
        },
        async getProducts({}, from){
            const res = await fetch("http://localhost:4000/product/products-all", {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                Authorization: this.state.token,
                },
            }).then((response) => response.json())
            if(from == "createinvoiceitem"){
                this.state.invoice.createitem.products = res.data.products.data
            } else if(from == "createprice"){
                this.state.product.createprice.products = res.data.products.data
            }
        },
        async getPricesProduct({}, item){
            const res = await fetch("http://localhost:4000/product/prices-all", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Authorization: this.state.token,
                },
                body: JSON.stringify({ idProduct: item.id })
            }).then((response) => response.json())
            if(item.from == "createinvoiceitem"){
                this.state.invoice.createitem.prices = res.data.prices.data
            }
        },
        async createPrice({}, item) {
            const res = await fetch("http://localhost:4000/product/create-price", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: this.state.token,
              },
              body: JSON.stringify({
                idProduct: item.idProduct,
                price: item.price,
              }),
            }).then((response) => response.json());
            console.log(res.data);
          },
        async createMethodPayment({}, card){
            const res = await fetch('http://localhost:4000/payment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.state.token
                },
                body: JSON.stringify(card)
            })
            console.log(res)
        },
        async getPaymentMethods() {
            const res = await fetch("http://localhost:4000/payment/list", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: this.state.token,
              },
            }).then((response) => response.json());
            this.state.payment.list = res.data.data;
        },
        async createProduct({}, product){
            const res = await fetch("http://localhost:4000/product/create", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Authorization: this.state.token,
                },
                body: JSON.stringify({name: product.name, description: product.description})
            }).then((response) => response.json())
            console.log(res.data)
        },
        async getPersonalInvoices(){
            const res = await fetch("http://localhost:4000/invoice/get-personal-invoices", {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                Authorization: this.state.token,
                },
            }).then((response) => response.json())
            this.state.invoice.invoicesPersonal = res.data
        },
    },
    modules: {}
})