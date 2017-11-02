function m() {
    let ret = {};
    arguments.map((argument) => {
        Object.assign(ret, argument);
    });
    return ret;
}

function formatEntropy(entropy) {
    if (typeof entropy === 'string') {
        entropy = parseFloat(entropy);
    }
    return entropy ? entropy.toFixed(5) : entropy;
}

export default formatEntropy;
