function solution(players, callings) {
    var answer = [];

    let map = new Map();

    for (let i = 0; i < players.length; i++) {
        map.set(players[i], i);
    }

    for (let i = 0; i < callings.length; i++) {
        let currentIdx = map.get(callings[i]); // 3
        let front = players[currentIdx - 1]; // "poe"
        let current = players[currentIdx];

        players[currentIdx] = front;
        players[currentIdx - 1] = current;
        // players[currentIdx - 1] = players[currentIdx];

        map.set(current, map.get(current) - 1);
        map.set(front, map.get(front) + 1);
        // console.log(players);
        // console.log(map);
    }

    return players;
}