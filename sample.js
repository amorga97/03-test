export function strictEquals(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) {
        return false;
    } else if (
        (Object.is(a, 0) && Object.is(b, -0)) ||
        (Object.is(a, -0) && Object.is(b, 0))
    ) {
        return true;
    }
    return Object.is(a, b);
}
