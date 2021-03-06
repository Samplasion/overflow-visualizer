import React from "react";

interface VisualizerProps {
    number: number,
    bits: number,
    maxBits?: number,
    twos: boolean
}

const coloredSpan = (n: string) => {
    return n == "0" ? <span className="text-red-300">0</span> : <span className="text-blue-400">1</span>
}

const Visualizer: React.FC<VisualizerProps> = ({ number, bits, maxBits = 32, twos }) => {
    let binary = number.toString(2);
    const negative = binary.startsWith("-");
    if (!negative && twos) binary = `+${binary}`;
    const binl = binary.length - (+negative);
    return (
        <div className="flex flex-row justify-center overflow-x-scroll">
            {binary.padStart(maxBits, "0").split("").map((bit, arrIndex, binary) => {
                const index = binary.length - arrIndex;
                return <span className={"flex flex-row justify-center text-center items-center text-lg font-light bg-yellow-800 " + (index == 1 ? "rounded-r " : (arrIndex == 0) ? "rounded-l " : "") + (index <= binl ? "font-extrabold" : "font-thin")}>
                    <span className={"w-7 px-2 py-4 " + (index <= bits ? "bg-yellow-600 " : " ") + (bits == index ? "rounded-l " : " ") + (index == 1 ? "rounded-r " : " ")}>
                        {twos ? (
                            bit == "-" && index >= bits ? coloredSpan("0") : index === binl ? (negative && index >= bits ? 1 : coloredSpan(bit)) : (index == bits ? coloredSpan(bit) : bit)
                        ) : bit}
                    </span>
                </span>
            })}
        </div>
    )
}

export default Visualizer;