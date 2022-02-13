if (!fetch) {
    var fetch = require('./test/node-fetch')(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

const body = JSON.stringify({ color: "green" })
fetch("/colors/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ color: "green" })
})
    .then(res => res.json())
    .then(resBody => resBody.name)


async function updateMyColor() {
    const response = await fetch("/colors/1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ color: "green" })
    })
    const res = await response.json();
    console.log(res)
}

updateMyColor()
