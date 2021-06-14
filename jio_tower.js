function runProgram(input) {
    input = input.trim().split("\n");
    let [length, towersCount] = input[0].trim().split(" ").map(Number);
    let positions = input[1].trim().split(" ").map(Number).sort((a, b) => {
        if (a - b < 0) return -1;
        else if (a - b > 0) return 1;
        return 0;
    });
    let minRange = 0;
    let low = 0,
        high = positions[length - 1];
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (check(mid)) {
            minRange = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    function check(range) {
        let towerPosition = positions[0] + range;
        let towersLeft = towersCount - 1;
        for (let i = 0; i < length; i++) {
            // if (towersLeft < 0) {
            //     flag = false;
            //     break;
            // }
            let difference = Math.abs(towerPosition - positions[i]);
            if (difference <= range) {
                continue;
            } else {
                towerPosition = positions[i] + range;
                towersLeft--;
            }
        }
        if (towersLeft >= 0) return true;
        return false
    }
    console.log(minRange)
}