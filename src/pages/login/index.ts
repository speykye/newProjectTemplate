import { Vue } from 'vue-class-component';
import { getCaptcha, toLogin } from './service';
import { Encryption, RSAencryption, getPublicKey } from 'providers';
import { useRouter } from 'vue-router';

export default class LoginComponent extends Vue {
    public captcha: string = '';
    public token: string = '';
    public pubKey: string = '';
    public code: string = '';
    public router = useRouter();

    getImg() {
        getCaptcha().then(({ image, token, pubKey }) => {
            this.captcha = `data:image/png;base64, ${image}`;
            this.token = token;
            this.pubKey = pubKey;
        });
    }

    login() {
        const params = {
            username: '15645101122',
            password: Encryption('9413@qFDW'),
            captcha: RSAencryption(this.code, this.pubKey),
            token: this.token,
            userType: 'sys'
        };
        toLogin(params).then(({ access_token }: any) => {
            sessionStorage.setItem('token', `Bearer ${String(access_token)}`);
            getPublicKey();
            this.router.push({path: '/home'});
        });
    }

    mounted(): void {
        this.getImg();
    }
}