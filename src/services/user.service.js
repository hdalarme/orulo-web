import Api from "./api";

const UserService = {
    login: (email, password) => Api.post('/auth/sign_in', {email, password})
    .then((response) => {
        if(response.data.data.uid) {
            sessionStorage.setItem("userData", JSON.stringify(response.data));
            sessionStorage.setItem("userHeader", JSON.stringify(response.headers['access-token']));
        }
    }) ,

    register: (email, password, password_confirmation) => Api.post('/auth', {email, password, password_confirmation}),

    logout: () => {
        //sessionStorage.removeItem("userData");
        //sessionStorage.removeItem("userHeader");
    }

}

export default UserService;