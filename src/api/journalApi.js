import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-d1020-default-rtdb.europe-west1.firebasedatabase.app',
})

export default journalApi