function solution(park, routes) {
    let h = park.length;
    let w = park[0].length;
    let x = 0;
    let y = 0;
    var answer = [];
    let start = [];
    let nav = {
        S: [1, 0],
        N: [-1, 0],
        W: [0, -1],
        E: [0, 1],
    };
    // console.log('nav', nav['N']);

    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            // console.log(park[i][j])
            if (park[i][j] == 'S') {
                start = [i, j];
            }
        }
    }

    [x, y] = start;
    // console.log(x, y);
    let stepX = x;
    let stepY = y;
    for (let i = 0; i < routes.length; i++) {
        let [direction, move] = routes[i].split(' ');
        let flag = 0;
        for (let k = 0; k < move; k++) {
            stepX += nav[direction][0];
            stepY += nav[direction][1];
            if (stepX >= h || stepX <= -1 || stepY >= w || stepY <= -1 || park[stepX][stepY] == 'X') {
                flag = 1;
                stepX = x;
                stepY = y;
                break;
            }
        }

        if (flag == 0) {
            x += nav[direction][0] * move;
            y += nav[direction][1] * move;
        }
    }
    answer = [x, y];
    return answer;
    // console.log(j, i);
}