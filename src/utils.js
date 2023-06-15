export function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}
export function onlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]*$/.test(str);
}
export const isCardNumErr = (cardNum) => {
    if (containsOnlyNumbers(cardNum)) {
        if (String(cardNum)?.split(" ").join("").length === 16) {
            return true;
        }
        return false;
    }
    return false;
};
