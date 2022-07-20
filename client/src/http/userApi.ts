import { $authHost, $host } from "./index";

class UserApi {
    registration = async (params: registrationParams) => {
        const response = await $host
            .post('api/user/registration',
                { ...params, role: 'ADMIN' });
        return response;
    }
}

export default new UserApi();

interface registrationParams {
    email: string,
    password: string,
}