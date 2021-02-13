import React from 'react';
import { useTranslation } from 'react-i18next';
import Visualizer from './components/visualizer';
import strings from './strings';

function App() {
    const [number, setNumberRaw] = React.useState(0);
    const [bits, setBitsRaw] = React.useState(8);
    const [twos, setTwos] = [false, () => void 0];// React.useState(false);
    const maxBits = 31;
    const [lower, upper] = [twos ? -(2**maxBits) : 0, 2**maxBits-1];
    const [t] = useTranslation();

    const setNumber = (n: number) => {
        if (n < lower) {
            n = upper;
        }
        if (n > upper) {
            n = lower;
        }
        return setNumberRaw(n);
    }
    const setBits = (b: number) => {
        if (b < 1) b = 1;
        if (b > maxBits) b = maxBits;
        return setBitsRaw(b);
    }
    return (
        <div className="flex flex-col min-h-full py-8 items-center justify-center text-white bg-gradient-to-br from-primary-800 to-yellow-900">
            <a href="/">
                <div className="w-full flex flex-col items-center mb-8">
                    <div className="font-thin text-4xl md:text-7xl">{t("title")}</div>
                    <div className="font-light text-xl md:text-4xl">{t(`subtitle${twos ? "S" : "Uns"}igned`, { bits: maxBits })}</div>
                </div>
            </a>
            <p className="mt-6 w-full px-8">
                <Visualizer number={number} bits={bits} maxBits={maxBits} twos={twos} /><br />
            </p>
            <div className="mt-4 flex flex-col md:flex-row items-center justify-around w-full">
                <div className="flex flex-col items-center w-1/3">
                    <div className="text-2xl font-bold">
                        {t("number")}
                    </div>
                    <div className="self-center">
                        {number}
                    </div>
                    <div className="text-2xl font-bold mt-4">
                        {t("storedNumber")}
                    </div>
                    <div className="self-center">
                        {number & (2**bits - 1)}
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex flex-col items-center mt-4 md:mt-0">
                        <div className="text-2xl font-bold">
                            {t("bits")}
                        </div>
                        <div className="flex flex-row justify-center">
                            <input min={1} max={maxBits} type="range" className="bg-gray-900 border border-gray-800 rounded" value={bits} onChange={input => setBits(parseInt(input.target.value))} />
                            <span className="ml-4 font-medium">{bits}</span>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                        <div className="text-2xl font-bold">
                            {t("number")}
                        </div>
                        <div className="flex flex-row justify-center">
                            <button className="py-2 px-4 bg-primary-600 hover:bg-primary-700 text-wide rounded ml-2" onClick={() => setNumber(number >> 1)}>»</button>
                            <button className="py-2 px-4 bg-primary-600 hover:bg-primary-700 text-wide rounded mx-2" onClick={() => setNumber(number - 1)}>-</button>
                            <input /* min={lower} max={upper} */ type="number" className="bg-gray-900 border border-gray-800 rounded px-4" value={number} onChange={input => setNumber(parseInt(input.target.value))} />
                            <button className="py-2 px-4 bg-primary-600 hover:bg-primary-700 text-wide rounded mx-2" onClick={() => setNumber(number + 1)}>+</button>
                            <button className="py-2 px-4 bg-primary-600 hover:bg-primary-700 text-wide rounded mr-2" onClick={() => setNumber(number << 1)}>«</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/3 items-center mt-4 md:mt-0">
                    <div className="text-2xl font-bold text-center">
                        {t("maxWithBits", { count: bits })}
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
