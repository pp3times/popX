import http from "k6/http";
import { sleep } from "k6";

const PRODUCTION_URL = "http://inspired-it.th1.proen.cloud";

const GET_VALUE_0 = `${PRODUCTION_URL}/api/getValue/getValue_Klang.php`;
const GET_VALUE_1 = `${PRODUCTION_URL}/api/getValue/getValue_Esan.php`;
const GET_VALUE_2 = `${PRODUCTION_URL}/api/getValue/getValue_Nuea.php`;
const GET_VALUE_3 = `${PRODUCTION_URL}/api/getValue/getValue_Tai.php`;
const UPDATE_ID_0 = `${PRODUCTION_URL}/api/updateValue/UPDATE_ID_0.php`;
const UPDATE_ID_1 = `${PRODUCTION_URL}/api/updateValue/UPDATE_ID_1.php`;
const UPDATE_ID_2 = `${PRODUCTION_URL}/api/updateValue/UPDATE_ID_2.php`;
const UPDATE_ID_3 = `${PRODUCTION_URL}/api/updateValue/UPDATE_ID_3.php`;

export const options = {
  stages: [
    { duration: "30s", target: 10 },
    { duration: "2m30s", target: 100 },
    { duration: "5m00s", target: 500 },
  ],
};

const testLoadWeb = () => {
  const response = http.batch([
    ["GET", PRODUCTION_URL, null, { tags: { ctype: "html" } }],
    ["GET", GET_VALUE_0, null, { tags: { ctype: "html" } }],
    ["GET", GET_VALUE_1, null, { tags: { ctype: "html" } }],
    ["GET", GET_VALUE_2, null, { tags: { ctype: "html" } }],
    ["GET", GET_VALUE_3, null, { tags: { ctype: "html" } }],
    ["GET", UPDATE_ID_0, null, { tags: { ctype: "html" } }],
    ["GET", UPDATE_ID_1, null, { tags: { ctype: "html" } }],
    ["GET", UPDATE_ID_2, null, { tags: { ctype: "html" } }],
    ["GET", UPDATE_ID_3, null, { tags: { ctype: "html" } }],
  ]);

  sleep(1);
};

export default testLoadWeb;
