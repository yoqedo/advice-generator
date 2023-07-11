const adviceId = document.querySelector('.adviceId')
const adviceText = document.querySelector('.advice')
const btn = document.querySelector('button')


async function populate() {
    const requestURL = "https://api.adviceslip.com/advice";
    // const request = new Request(requestURL);
    const response = await fetch(requestURL);
    const data = await response.json();

    console.log(data.slip.advice);

    adviceId.textContent = `ADVICE #${data.slip.id}`
    adviceText.textContent = `"${data.slip.advice}"`
}

btn.addEventListener('click', populate)

populate()

