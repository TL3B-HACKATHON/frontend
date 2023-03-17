import axios from "axios";


// using axios send get request to "autorizations/current/patients"
async function getPatients() {
    let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyYmE3Y2M1NC04NGRiLTQzNjctOGE3OC1jYTAyZDU0M2I3NzkiLCJlbWFpbCI6InN1cGVyYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjc5MDI0NTYyLCJleHAiOjE2ODI2MjQ1NjJ9.eyViCU1IjUHQqEUaK7cJ_Vxv0WjH0erG_su2-uBTmOk";

const response = await axios.get("https://jjgbdx-ip-108-142-127-87.tunnelmole.com/autorizations/current/patients", {
    headers: {
        Authorization: `Bearer ${accessToken}`
    }

});

return response.data
}

export default getPatients;