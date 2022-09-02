const positions = [[0,0], [0,1], [0,2],
                   [1,2], [2,2], [2,1],
                   [2,0], [1,0]];

let numbers = {
    1: 0, 2: 1, 3: 2,
    6: 3, 9: 4, 8: 5,
    7: 6, 4: 7
};

// get all surround buttons
const surroundButtons = Array.from(document.querySelectorAll('.surround-buttons'))


/**
 * Rotates the grid labels in a clockwise or anticlockwise direction
 * depending on the button clicked.
 * @param {event.target}
 * */ 
const rotateGrid = ({target}) => {
    const nextPositions = {};
    surroundButtons.forEach(el => {
        // get the digit
        const digit = el.textContent;
        // find the present position
        const presentPosition = numbers[digit];
        
        let nextPosition;
        if (target.className === 'mid-button') {
            nextPosition = presentPosition != 7 ? presentPosition + 1 : 0;
        } else {
            nextPosition = presentPosition != 0 ? presentPosition - 1 : 7;
        }
        
        nextPositions[digit] = nextPosition;
    });

    for (const [k,v] of Object.entries(nextPositions)) {
        // k = the digit itself
        // v = its new position index to reference positions
        document.querySelector(`.row${positions[v][0]}-col${positions[v][1]}`)
        .textContent = k;
    }
    numbers = nextPositions;
};

document.querySelector('.mid-button').addEventListener('click', rotateGrid);
surroundButtons.forEach(el => el.addEventListener('click', rotateGrid));