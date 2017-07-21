export class Test {
    constructor() {
        this.doSomething = async(a) => {
            const x = await Promise.resolve('' + a);
            console.log(x);
        };
    }
}