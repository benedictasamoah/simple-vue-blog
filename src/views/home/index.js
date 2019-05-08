import axios from "axios";
import VueDisqus from 'vue-disqus'

Vue.use(VueDisqus)
export default {
    data () {
        return {
            articles: {},
            display: {},
            position: 0
        }
    },
    created () {
    // define endpoint to retrieve data
    const endpoint = 'https://picsum.photos/v2/list'
    // define `self` a global variable and pass `this` instance to self to be able to access it in closures
    const self = this
    axios
        .get(endpoint)
        .then(function(resp) {
          // define array
          self.articles = resp.data
          // call the navigate function
          self.navigate(self.articles, self.position)
        })
        .catch(function(error) {
            return error
        });
    },
    methods: {
        navigate(array, position) {
            // A function to calculate pagination
            // position starts with 0 because pages logically start with 1, but technically with 0
            this.display = array.slice(position * 3, (position + 1) * 3);
        },
        action (x) {
            // a function to set pagination position
            x === 'next' ? this.position+=1 : this.position-=1
            this.navigate(this.articles, this.position)
        }
    }
}