
function gamebord (dimension=8) {
    const board = {};

    for (let x = 0; x < dimension; x++) {
        board[x] = [];
        for (let y = 0; y < dimension; y++) {
            board[x].push(y)
        };
    };

    function checkPossibleMove ([x,y], [x_desired, y_desired]) {

        if ((x===x_desired) && (y===y_desired)) {
            console.log(x_desired, y_desired);
            return;
        } else {
            console.log(x, y);
            const nextBoardPosition = [
                [x+1, y+2], [x+1, y-2], [x-1, y+2], [x-1, y-2],
                [x+2, y+1], [x+2, y-1], [x-2, y+1], [x-2, y-1]
            ];

            nextBoardPosition.forEach((position) => {
                if ((position[0] >= 0) && (position[0] < 8) && (position[1] >= 0) && (position[1] < 8)) {
                    return checkPossibleMove([position[0], position[1]], [x_desired, y_desired]) + 1
                };
            });
        }
     
    };

    return {board, checkPossibleMove};
};

const game = gamebord()
game.checkPossibleMove([0,0], [2, 1])