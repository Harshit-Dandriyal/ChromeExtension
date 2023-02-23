import React from 'react'

type Props = {}

export const AvatarImageCard = (props: Props) => {
    return (
        <div className="flex flex-col justify-center items-center mt-7">
            <img className="rounded-full w-40 h-40 object-right object-cover" src="https://s3-alpha-sig.figma.com/img/eaf7/1f28/617a2add318b2cf989cf12f12aee3fcd?Expires=1678060800&Signature=jpuFIjqba~RlvjOMFC00C0HR2NHZzE~keymTzMk9~OZDQwYqQ-I07Q-sv~ynKD11XpGjWr1cFLO0nPv7R2rUZ~OWG~uRf6DWTtG8sc209MyOD3feeh9xTccY2J8tLgoHWCQrOgZCVcq0-7MBY8D49QDz4fgAPDhuBHcMwYfXdvQwSAFqEDZEjotxs3-iN5icqvj0QqCjWsS3ywvftVtvJgql7SY396-3C8LxNh3wnNunFmjox9Cnayjbf7P-99jfBzixxuGLIXhEtmwbhF2ESgyoWcHl7f0M-VgYiKi52vk35NqMGMUFoq7SxOo1OVlmU8ZEZpFb09SttCV9mXHpjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Rounded avatar" />

            <p className=" text-gray-900 mt-1">Sandra Silva</p>    <div className="flex  mt-1 justify-center items-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C2.60218 3.75 2.22064 3.90804 1.93934 4.18934C1.65804 4.47064 1.5 4.85218 1.5 5.25V11.25C1.5 11.6478 1.65804 12.0294 1.93934 12.3107C2.22064 12.592 2.60218 12.75 3 12.75H12C12.3978 12.75 12.7794 12.592 13.0607 12.3107C13.342 12.0294 13.5 11.6478 13.5 11.25V5.25C13.5 4.85218 13.342 4.47064 13.0607 4.18934C12.7794 3.90804 12.3978 3.75 12 3.75H10.8105C10.6116 3.74996 10.4209 3.67091 10.2802 3.53025L9.4395 2.6895C9.15826 2.40818 8.77679 2.25008 8.379 2.25H6.621C6.22321 2.25008 5.84174 2.40818 5.5605 2.6895L4.71975 3.53025C4.57913 3.67091 4.3884 3.74996 4.1895 3.75H3ZM7.5 10.5C7.79547 10.5 8.08806 10.4418 8.36104 10.3287C8.63402 10.2157 8.88206 10.0499 9.09099 9.84099C9.29992 9.63206 9.46566 9.38402 9.57873 9.11104C9.6918 8.83806 9.75 8.54547 9.75 8.25C9.75 7.95453 9.6918 7.66194 9.57873 7.38896C9.46566 7.11598 9.29992 6.86794 9.09099 6.65901C8.88206 6.45008 8.63402 6.28434 8.36104 6.17127C8.08806 6.0582 7.79547 6 7.5 6C6.90326 6 6.33097 6.23705 5.90901 6.65901C5.48705 7.08097 5.25 7.65326 5.25 8.25C5.25 8.84674 5.48705 9.41903 5.90901 9.84099C6.33097 10.2629 6.90326 10.5 7.5 10.5V10.5Z" fill="#7B7B7B" />
                </svg>

                <p className=" text-purple-600">  Edit Profile Picture</p>
            </div>
        </div>
    )
}
