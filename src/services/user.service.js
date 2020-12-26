import Api from "./api";

const UserService = {
    login: (email, password) => Api.post('/auth/sign_in', {email, password})
    .then((response) => {
        if(response.data.data.uid) {
            localStorage.setItem("userData", JSON.stringify(response.data));
            localStorage.setItem("userHeader", JSON.stringify(response.headers['access-token']));
        }
    }) ,

    register: (email, password, password_confirmation) => Api.post('/auth', {email, password, password_confirmation}),

    logout: () => {
        localStorage.removeItem("userData");
        localStorage.removeItem("userHeader");
    }

}

export default UserService;