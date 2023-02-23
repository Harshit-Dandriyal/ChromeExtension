import React from 'react'

type Props = {}

export const FormButton = ({ text }) => {
    return (
        <button type="button" className="mt-2 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99999 6.2V4.6C1.99999 3.53913 2.42142 2.52172 3.17157 1.77157C3.92171 1.02143 4.93913 0.599998 5.99999 0.599998C7.06086 0.599998 8.07828 1.02143 8.82842 1.77157C9.57857 2.52172 9.99999 3.53913 9.99999 4.6V6.2C10.4243 6.2 10.8313 6.36857 11.1314 6.66863C11.4314 6.96869 11.6 7.37565 11.6 7.8V11.8C11.6 12.2243 11.4314 12.6313 11.1314 12.9314C10.8313 13.2314 10.4243 13.4 9.99999 13.4H1.99999C1.57565 13.4 1.16868 13.2314 0.868623 12.9314C0.568565 12.6313 0.399994 12.2243 0.399994 11.8V7.8C0.399994 7.37565 0.568565 6.96869 0.868623 6.66863C1.16868 6.36857 1.57565 6.2 1.99999 6.2ZM8.39999 4.6V6.2H3.59999V4.6C3.59999 3.96348 3.85285 3.35303 4.30294 2.90294C4.75303 2.45285 5.36347 2.2 5.99999 2.2C6.63651 2.2 7.24696 2.45285 7.69705 2.90294C8.14714 3.35303 8.39999 3.96348 8.39999 4.6Z" fill="#1F2A37" />
            </svg>

            <span className="ml-3">{text}</span>
        </button>
    )
}
