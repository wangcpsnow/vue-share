export const mixin = (source, target) => {
    for (var key in target) {
        if (target.hasOwnProperty(key)) {
            source[key] = target[key]
        }
    }
    return source;
}