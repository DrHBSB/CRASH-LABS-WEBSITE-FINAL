import React from 'react';

interface ScrollableTableProps {
    headers: string[];
    rows: Array<{
        cells: string[];
        highlight?: boolean;
        highlightColor?: string;
    }>;
    className?: string;
}

/**
 * ScrollableTable component
 * Uses a robust, standard pattern for responsive tables.
 * - Outer container: rounded, bordered, manages visual boundary.
 * - Scroll container: w-full, overflow-x-auto, STRICTLY manages scrolling.
 * - Table: min-w-full to ensure it fills space or expands as needed.
 */
const ScrollableTable: React.FC<ScrollableTableProps> = ({ headers, rows, className = '' }) => {
    return (
        <div className={`mb-8 md:mb-12 w-full max-w-full ${className}`}>
            <div className="flex flex-col w-full">
                {/* Visual container with border/radius */}
                <div className="w-full border border-gray-200 rounded-lg md:rounded-xl shadow-sm bg-white overflow-hidden">
                    {/* SCROLL CONTAINER - The critical part */}
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    {headers.map((header, i) => (
                                        <th
                                            key={i}
                                            className="py-3 px-4 md:py-4 md:px-6 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500 whitespace-nowrap"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                {rows.map((row, i) => (
                                    <tr
                                        key={i}
                                        className={row.highlight && row.highlightColor === 'brand-blue' ? 'bg-brand-blue/5' : 'bg-white'}
                                    >
                                        {row.cells.map((cell, j) => (
                                            <td
                                                key={j}
                                                className={`py-3 px-4 md:py-4 md:px-6 text-xs md:text-sm whitespace-nowrap ${j === 0 ? 'font-medium' : 'text-right'
                                                    } ${row.highlight && row.highlightColor === 'brand-blue'
                                                        ? 'text-brand-blue'
                                                        : 'text-navy-900'
                                                    }`}
                                            >
                                                {cell.includes('NEW') ? (
                                                    <span className="flex items-center gap-1 md:gap-2">
                                                        {cell.replace(' NEW', '')}
                                                        <span className="px-1.5 md:px-2 py-0.5 bg-brand-blue text-white text-[8px] md:text-[9px] rounded-full uppercase tracking-wide">
                                                            New
                                                        </span>
                                                    </span>
                                                ) : (
                                                    cell
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Mobile scroll indicator */}
            <div className="md:hidden text-center mt-2">
                <p className="text-[10px] text-gray-400 italic">← Swipe to see more →</p>
            </div>
        </div>
    );
};

export default ScrollableTable;
