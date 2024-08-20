import axios from "axios";

export async function login(email, password) {
  const response = await axios.post(
    "https://edugenius-api.onrender.com/api/v1/user/login",
    {
      email: email,
      password: password,
    }
  );
  return response;
}

export async function getCourse() {
    const token=localStorage.getItem("token")
  const response = await axios.get(
    "https://edugenius-api.onrender.com/api/v1/Course",
    {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
  );
  return response;
}
