export class HomeController {
    public contextApp;
    private accountability = {}

    constructor(props: {
        router: any,
        contextApp: {
            services: any
            exceptions: any
            env: any
            database: any
            emitter: any
            logger: any
            getSchema: any
        }
    }) {

        const {
            router
        } = props
        this.contextApp = props.contextApp

        router.post("/CUSTOM_URL", (req: any, res: any) => this.homeData(req, res))
    }

    public homeData(req: any, res: any): any {
        return res.end("ABC");
    }
}