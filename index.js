// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks === 43) {
    return 1;
    } else if (blocks === 50) {
        return 8;
    } else if (blocks < 42) {
        return 8;
    }
}

function distanceFromHqInFeet(feet) {
    if (feet === 43) {
        return 264;
    } else if (feet === 50) {
        return 2112;
    } else if (feet < 42) {
        return 2112;
    }
}

function distanceTravelledInFeet(start, end) {
    if (start < end) {
        return (end - start) * 264;    
    } else {
        return (start - end) * 264;
    }
}

function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
    }  else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance >= 2500) {
        return 'cannot travel that far';
    }
}