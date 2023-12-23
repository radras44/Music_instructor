import FFT from "fft-js"

function getParams (signal) {
    if(!signal instanceof Float32Array && signal instanceof Int16Array) return
    const spec = FFT.fft(signal)
    const mags = FFT.util.fftMag(spec)
    const freqs = FFT.util.fftFreq(signal,44100)
}