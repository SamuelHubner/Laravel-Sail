export default function InputSelect({ value, className = '', children, ...props }) {
    return (
        <div className={`relative inline-block w-full ${className}`}>
            <select {...props} value={value} className={`block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}>
                {children}
            </select>
        </div>
    );
}
