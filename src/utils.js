export default function formatEntropy(entropy) {
    if (typeof entropy === 'string') {
        entropy = parseFloat(entropy);
    }
    return entropy ? entropy.toFixed(5) : entropy;
}