import { Test } from './Test';

const t = new Test();

async function start() {
    const res = await t.doSomething('whatever');
    return res;
}

start();