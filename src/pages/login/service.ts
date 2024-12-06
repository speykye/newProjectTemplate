import { instance } from 'providers';

// 获取验证码
export async function getCaptcha() {
    const { data } = await instance.get('/authorization-server/oauth/captcha');
    return data;
}

// 登录
export async function toLogin(params: object): Promise<any> {
    const res = await instance.post('/authorization-server/oauth/token?scope=read&grant_type=password', params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic cGNfY2xpZW50OnNtYXJ0X2NvbW11bml0eQ=='
        }
    });
    return res;
}