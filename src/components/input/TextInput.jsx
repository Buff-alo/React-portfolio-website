import React from 'react'

const TextInput = ({
    isDarkMode,
    value,
    handleInputChange,
    textarea,
    label,
    type = 'text',
    required = false,
    error,
    id,
    rows = 4,
    minLength,
    maxLength,
}) => {
    const InputComponent = textarea ? "textarea" : "input";
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="relative">
            <InputComponent
                id={inputId}
                type={textarea ? undefined : type}
                rows={textarea ? rows : undefined}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
                className={`w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none resize-none ${isDarkMode
                        ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800/70"
                        : "bg-white/80 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white/70"
                    } ${error ? 'border-red-500' : ''} focus:ring-2 focus:ring-blue-500/20`}
                value={value}
                onChange={({ target }) => handleInputChange(target.value)}
            />
            <label
                htmlFor={inputId}
                className={`text-sm absolute left-4 top-2 pointer-events-none origin-left transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
            >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {error && (
                <p className="text-red-500 text-xs mt-1 pl-1">{error}</p>
            )}
        </div>
    )
}

export default TextInput