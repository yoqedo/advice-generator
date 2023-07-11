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

// Attribution
document.querySelector('.attribution-circle').addEventListener('mouseenter', function () {
    document.querySelector('.attribution-content').classList.add('attribution-content-active')
    console.log('hovering')
})

document.querySelector('.attribution-content').addEventListener('mouseleave', function () {
    document.querySelector('.attribution-content').classList.remove('attribution-content-active')
    console.log('hovering')
})

