export function idGenerator () {
    const randomId = (Math.random() * Math.floor(Math.random() * Date.now())).toString();
    return randomId;
}