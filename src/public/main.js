const ROOT = document.getElementById("root");

async function wait(timeIn_ms) {
    return new Promise((resolve) => setTimeout(resolve, timeIn_ms))
}

async function streamFile(url) {
    const response = await fetch(url);
    const { body } = response;
    const reader = body.getReader();

    const utf8 = new TextDecoder("utf-8");

    while (true) {
        const { value, done } = await reader.read();
        if (done || !value) break;

        const charPairs = [];
        for (let i = 0; i < value.length; i++) {
            if (i % 2 !== 0) continue;
            const uintArr = new Uint8Array(2);
            uintArr[0] = value[i];
            uintArr[1] = value[i + 1];

            await wait(0);
            ROOT.textContent += utf8.decode(uintArr);
        }
    }
}

streamFile("/api/streamfile/2");