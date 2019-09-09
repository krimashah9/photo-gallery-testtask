import axios from "axios";

export default class PhotoApi {
  async getImagesApi(){
        try
        {
            const r = await axios({
                method: "GET",
                url:"https://jsonplaceholder.typicode.com/photos",
            });
          return r;
        } catch (e) {
            return 'error';
        }
    }
}
