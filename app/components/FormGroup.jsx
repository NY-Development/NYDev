import React from 'react';

const FormGroup = ({ label, id, children }) => (
    <div className="space-y-2">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            {label}
        </label>
        {children && (
            <div className="group">
                {
                    // Map over children (input/textarea) to apply the dynamic Tailwind classes
                    React.Children.map(children, child =>
                        React.cloneElement(child, {
                            // The class list is applied directly to the input/textarea
                            className: `
                                w-full p-3 rounded-lg text-gray-900 dark:text-gray-100 
                                border border-gray-300 dark:border-gray-700 
                                bg-gray-50 dark:bg-gray-900 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                                transition duration-150 ease-in-out
                            `
                        })
                    )
                }
            </div>
        )}
    </div>
);

export default FormGroup;