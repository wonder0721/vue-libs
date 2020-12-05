export function throttle(fn, timeout = 200) {
    let isRun = false;
    return function (...args) {
        if (isRun) return
        isRun = true;
        let timer = setTimeout(() => {
            fn.apply(this, args);
            clearTimeout(timer)
            isRun = false;
        }, timeout)
    }
}

export function timeout(delay = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(`${delay} ms later`);
            resolve(`${delay} ms later`);
        }, delay)
    })
}