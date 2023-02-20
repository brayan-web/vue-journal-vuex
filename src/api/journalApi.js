
import axios from 'axios';



const journalAPi = axios.create({
    baseURL: 'https://vue-demos-2bca6-default-rtdb.firebaseio.com'
})

export default journalAPi;