import { Vue } from 'vue-class-component';

export default class HomeComponents extends Vue {
    public index: number = 0;
    public router = useRouter();
    public onInput = this.$debounce((val: any) => {

    });
    
    mounted(): void {
        console.log(import.meta.env.VITE_ENCRYPT);
    }
}
