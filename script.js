function loadEvent() {

    let p1Score = 0;
    let p2Score = 0;

    const card = `
        <div id="card">
            <img src="https://royaltennisclub.com/wp-content/uploads/2018/06/mainpic_pingpong.jpg" alt="ping pong thingies">
            <h2><span id="p1Span">${p1Score}</span> to <span id="p2Span">${p2Score}</span></h2>
            <p>use the buttons to keep score.</p>

            <label for="playTo">Playing To</label>
            <select name="playTo" id="playTo">
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>

            <div id="buttonsDiv">
                <button id="p1Btn">+1 Player One</button>
                <button id="p2Btn">+1 Player Two</button>
                <button id="resetBtn">Reset</button>
            </div>
        </div>
    `;

    document.querySelector('body').insertAdjacentHTML('afterbegin', card);

    const p1Span = document.getElementById('p1Span');
    const p2Span = document.getElementById('p2Span');

    const p1Btn = document.getElementById('p1Btn');
    const p2Btn = document.getElementById('p2Btn');

    const disableButtons = () => {
        p1Btn.disabled = true;
        p2Btn.disabled = true;
    }

    const enableButtons = () => {
        p1Btn.disabled = false;
        p2Btn.disabled = false;

        p1Span.removeAttribute('class');
        p2Span.removeAttribute('class');
    }

    const checkForWin = (p1, p2) => {
        let p1Span = document.getElementById('p1Span');
        let p2Span = document.getElementById('p2Span');

        const playTo = document.getElementById('playTo');

        if(p1 == playTo.value) {
            p1Span.classList.add('winner');
            p2Span.classList.add('loser');
            disableButtons();
        } else if(p2 == playTo.value) {
            p2Span.classList.add('winner');
            p1Span.classList.add('loser');
            disableButtons();
        }
    }

    const updateScore = (e) => {
        const et = e.target;

        let p1Span = document.getElementById('p1Span');
        let p2Span = document.getElementById('p2Span');

        if(et === p1Btn) {
            console.log(p1Span);
            p1Score++;
            p1Span.innerText = p1Score;
        } else if(et === p2Btn) {
            p2Score++; 
            p2Span.innerText = p2Score;
        } else {
            p1Score = 0;
            p1Span.innerText = p1Score;
            p2Score = 0;
            p2Span.innerText = p2Score;
            enableButtons();
        }

        checkForWin(p1Score, p2Score);
    }

    const buttons = document.querySelectorAll('button');
    for (const btn of buttons) {
        btn.addEventListener('click', updateScore)
    };
};

window.addEventListener("load", loadEvent);