const ROOT = document.getElementById("root");

async function wait(timeIn_ms) {
    return new Promise((resolve) => setTimeout(resolve, timeIn_ms))
}

async function streamFile(url) {
    const response = await fetch(url);
    const { body } = response;
    const reader = body.getReader();

    while (true) {
        const { value, done } = await reader.read();
        const string = new TextDecoder("utf-8").decode(value);

        string.split("").forEach(async (char) => {
            await wait(10);
            ROOT.textContent += char;
        })

        if (done) {
            break;
        }
    }
}

streamFile("/api/streamfile/2");