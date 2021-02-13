import React from 'react';
import Visualizer from './components/visualizer';

function App() {
    const [number, setNumberRaw] = React.useState(0);
    const [bits, setBitsRaw] = React.useState(8);
    const [twos, setTwos] = [false, () => void 0];// React.useState(false);
    const [lower, upper] = [twos ? -(2**32) : 0, 2**32-1];
    const setNumber = (n: number) => {
        if (n < lower) n = upper;
        if (n >= upper) n = lower;
        return setNumberRaw(n);
    }
    const setBits = (b: number) => {
        if (b < 1) b = 1;
        if (b > 32) b = 32;
        return setBitsRaw(b);
    }
    return (
        <div className="flex flex-col min-h-full py-8 items-center justify-center text-white bg-gradient-to-br from-primary-800 to-yellow-900">
            <a href="/">
                <div className="w-full flex flex-col items-center mb-8">
                    <div className="font-thin text-4xl md:text-7xl">Overflow Visualizer</div>
                    <div className="font-light text-xl md:text-4xl">32-bit {twos ? "" : "un"}signed int</div>
                </div>
            </a>
            <p className="mt-6 w-full px-8">
                <Visualizer number={number} bits={bits} twos={twos} /><br />
            </p>
            <div className="mt-4 flex flex-col md:flex-row items-center justify-around w-full">
                <div className="flex flex-col items-center w-1/3">
                    <div className="text-2xl font-bold">
                        Number
                    </div>
                    <div className="self-center">
                        {number}
                    </div>
                    <div className="text-2xl font-bold mt-4">
                        Stored number
                    </div>
                    <div className="self-center">
                        {number & (2**bits - 1)}
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex flex-col items-center mt-4 md:mt-0">
                        <div className="text-2xl font-bold">
                            Bits
                        </div>
                        <div className="flex flex-row justify-center">
                            <input min={1} max={32} type="range" className="bg-gray-900 border border-gray-800 rounded" value={bits} onChange={input => setBits(parseInt(input.target.value))} />
                            <span className="ml-4 font-medium">{bits}</span>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                        <div className="text-2xl font-bold">
                            Number
                        </div>
                        <div className="flex flex-row justify-center">
                            <button className="py-2 px-4 bg-primary-600 hover:bg-primary-700 text-wide rounded mx-2" onClick={() => setNumber(number - 1)}>-</button>
                            <input min={lower} max={upper} type="number" className="bg-gray-900 border border-gray-800 rounded" value={number} onChange={input => setNumber(parseInt(input.target.value))} />
                            <button className="py-2 px-4 bg-primary-600 hover:bg-primary-700 text-wide rounded mx-2" onClick={() => setNumber(number + 1)}>+</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/3 items-center mt-4 md:mt-0">
                    <div className="text-2xl font-bold text-center">
                        Max number with {bits} bit{bits == 1 ? "" : "s"}
                    </div>
                    <div className="self-center">
                        {(2**bits - 1)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
