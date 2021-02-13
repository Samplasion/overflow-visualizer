import React from "react";

interface VisualizerProps {
    number: number,
    bits: number,
    maxBits?: number,
    twos: boolean
}

const Visualizer: React.FC<VisualizerProps> = ({ number, bits, maxBits = 32, twos }) => {
    const binary = number.toString(2);
    const negative = binary.startsWith("-");
    const binl = binary.length - (+negative);
    return (
        <div className="flex flex-row justify-center overflow-x-scroll">
            {binary.padStart(maxBits, "0").split("").map((bit, arrIndex, binary) => {
                const index = binary.length - arrIndex;
                return <>
                    <span className={"items-center px-2 py-4 w-7 text-lg font-light " + (index == 1 ? "rounded-r " : arrIndex == 0 ? "rounded-l " : "") + (index <= bits ? "bg-yellow-600 " : "bg-yellow-800 ") + (index <= binl ? "font-extrabold" : "font-thin")}>
                        {twos ? (
                            bit == "-" ? "0" : index === binl ? (negative ? <span className="text-blue-400">1</span> : <span className="text-red-300">0</span>) : bit
                        ) : bit}
                    </span>
                </>
            })}
        </div>
    )
}

export default Visualizer;