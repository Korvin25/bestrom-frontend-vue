import { createStore } from 'vuex'
import clients from "@/store/modules/clients"
import partners from "@/store/modules/partners"
import news from "@/store/modules/news"
import history from "@/store/modules/history";
import vacancy from "@/store/modules/vacancy";
import product from "@/store/modules/product";
import filters from "@/store/modules/filters";
import page from "@/store/modules/page";

export default createStore({
    modules: {
        clients, partners, news, history, vacancy, product, filters, page
    }
})
