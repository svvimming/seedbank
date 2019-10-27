import get from "lodash/get";
import axios from "axios";

const app = axios.create({
  // baseURL: process.env.NODE_ENV === 'prod' ? 'wh464179.ispot.cc' : 'http://localhost:3000'
  baseURL: 'https://3ecologies-seedbank.com'
});

// axios consumes rejected API responses by default,
// so the configuration below intercepts the those
// responses and passes them down to the function that
// uses our custom "app" axios configuration.
app.interceptors.response.use(
  response => response,
  error => {
    const err = get(error, ["response", "data", "err"]);

    // "err" refers to the response returned from the API when
    // a response is rejected. "err" can be named anything, but it
    // must be consistent across all your API routes (for example, see
    // anarchive/routes/api => verify route => "catch" sends the "err")
    return Promise.reject(err ? err : error.message);
  }
);

export default app;