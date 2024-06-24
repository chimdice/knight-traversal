function knightMoves(start, end) {
    const postionMap = {};

    for (let x=0; x<8;x++) {
        for (let y=0; y<8;y++) {
            const squareCode = (8*y)+x
            postionMap[squareCode] = [];

            const nextBoardPosition = [
                [x+1, y+2], [x+1, y-2], [x-1, y+2], [x-1, y-2],
                [x+2, y+1], [x+2, y-1], [x-2, y+1], [x-2, y-1]
            ];

            nextBoardPosition.forEach((position) => {
                if ((position[0] >= 0)&&(position[1] >= 0)&&(position[0] < 8)&&(position[1] < 8)) {
                    postionMap[squareCode].push((8*position[1])+position[0]);
                };
            });
        };
    };

    const queue = [];
    const visited = [];
    let startSquare = (8*start[1]) + start[0];
    let endSquare = (8*end[1]) + end[0];
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
            foundEnd = true;
        } else {
            const nextPositions = postionMap[''+nextFront];
            nextPositions.forEach((item) => {
                queue.push([nextFront, item, currentPosition+1])
            })
            queue.splice(0,1);
        };
    };

    const path = [];

    let currentLocation = visited.pop()[0];
    path.push(currentLocation)

    while (visited.length > 0) {
        let checkPosiiton = visited.pop();
        if (checkPosiiton[1] === currentLocation) {
            currentLocation = checkPosiiton[0];
            path.push(currentLocation);
        };
    };

    console.log(`You made it in ${path.length -1} moves! Here's your path:`);
    while (path.length > 0) {
        const location = path.pop();
        const xValue = location%8;
        const yValue = (location-xValue)/8;
        console.log([xValue, yValue])
    }


};

knightMoves([3,3],[4,3])