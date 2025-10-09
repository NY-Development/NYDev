const ContactDetail = ({ Icon, title, text, link }) => (
    <div className="flex items-start space-x-4">
        <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
        <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {title}
            </h3>
            <a 
                href={link} 
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
                {text}
            </a>
        </div>
    </div>
);

export default ContactDetail;