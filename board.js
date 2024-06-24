function knightMoves(start, end) {
    const postionMap = {};

    for (let x=0; x<8;x++) {
        for (let y=0; y<8;y++) {
            const squareCode = (8*x)+y
            postionMap[squareCode] = [];

            const nextBoardPosition = [
                [x+1, y+2], [x+1, y-2], [x-1, y+2], [x-1, y-2],
                [x+2, y+1], [x+2, y-1], [x-2, y+1], [x-2, y-1]
            ];

            nextBoardPosition.forEach((position) => {
                if ((position[0] >= 0)&&(position[1] >= 0)&&(position[0] < 8)&&(position[1] < 8)) {
                    postionMap[squareCode].push((8*position[0])+position[1]);
                };
            });
        };
    };

    const queue = [];
    const visited = [];
    let startSquare = (8*start[0]) + start[1];
    let endSquare = (8*end[0]) + end[1];
    let foundEnd = false;

    const nextPositions = postionMap[''+startSquare];
    nextPositions.forEach((item) => {
        queue.push([startSquare, item, 1])
    })


    while (! foundEnd) {
        visited.push(queue[0]);
        let currentFront = queue[0][0];
        let nextFront = queue[0][1];
        let currentPosition = queue[0][2];

        if (currentFront === endSquare) {
            console.log(currentPosition)
            foundEnd = true;
        } else {
            const nextPositions = postionMap[''+nextFront];
            nextPositions.forEach((item) => {
                queue.push([nextFront, item, currentFront+1])
            })
            queue.splice(0,1);
        };
    };

    console.log(visited)

};

knightMoves([0,0],[3,2])