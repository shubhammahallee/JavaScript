function sendusername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Urvi");
            resolve();
        }, 1000);
    });
}

function sendpassword() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Urvi123");
            resolve();
        }, 1000);
    });
}

function click() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Click");
            resolve();
        }, 1000);
    });
}

async function main() {

    await sendusername();
    await sendpassword();
    await click();

}

main();
