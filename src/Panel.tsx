import React, { ReactElement, useState } from 'react';
import { APP_COLLAPSE_WIDTH, APP_EXTEND_WIDTH } from './const';
import Button from './components/Button';
import classNames from 'classnames';
export default function Panel({ onWidthChange, initialEnabled }: { onWidthChange: (value: number) => void, initialEnabled: boolean }): ReactElement {
  const [enabled, setEnabled] = useState(initialEnabled);
  const [sidePanelWidth, setSidePanelWidth] = useState(enabled ? APP_EXTEND_WIDTH : APP_COLLAPSE_WIDTH);
  const [tabIndex, setTabIndex] = useState(0);

  function handleOnToggle(enabled: boolean) {
    const value = enabled ? APP_EXTEND_WIDTH : APP_COLLAPSE_WIDTH;
    setSidePanelWidth(value);
    onWidthChange(value);

    window['chrome'].storage?.local.set({ enabled });
  }

  function openPanel(force?: boolean) {
    const newValue = force || !enabled;
    setEnabled(newValue);
    handleOnToggle(newValue);
  }

  return (
    <div className="flex flex-row font-sans">
      <div
        style={{
          width: sidePanelWidth - 5,
          boxShadow: '0px 0px 5px #0000009e',
        }}
        className="absolute top-0 right-0 bottom-0 z-max bg-[#F5F8FA] ease-in-out duration-300 overflow-hidden"
      >
        <section className="bg-gray-50 dark:bg-gray-900 h-full">
          <div className="flex flex-col h-full mx-4">
            <div className="flex flex-row justify-end items-center h-16 mr-3">
              <svg width="35" height="35" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ padding: '5px' }}>
                <path d="M14.2448 4.49687C13.801 2.66771 11.199 2.66771 10.7552 4.49687C10.4677 5.67917 9.11354 6.23958 8.07604 5.60625C6.46771 4.62708 4.62812 6.46771 5.60729 8.075C5.75448 8.31641 5.84259 8.58916 5.86445 8.87106C5.8863 9.15295 5.84129 9.43603 5.73307 9.69724C5.62485 9.95845 5.45648 10.1904 5.24167 10.3743C5.02685 10.5581 4.77167 10.6886 4.49687 10.7552C2.66771 11.199 2.66771 13.801 4.49687 14.2448C4.77142 14.3116 5.02634 14.4422 5.24091 14.626C5.45548 14.8098 5.62365 15.0417 5.73174 15.3027C5.83984 15.5638 5.88481 15.8467 5.863 16.1284C5.8412 16.4101 5.75323 16.6826 5.60625 16.924C4.62708 18.5323 6.46771 20.3719 8.075 19.3927C8.31641 19.2455 8.58916 19.1574 8.87106 19.1356C9.15295 19.1137 9.43603 19.1587 9.69724 19.2669C9.95845 19.3752 10.1904 19.5435 10.3743 19.7583C10.5581 19.9731 10.6886 20.2283 10.7552 20.5031C11.199 22.3323 13.801 22.3323 14.2448 20.5031C14.3116 20.2286 14.4422 19.9737 14.626 19.7591C14.8098 19.5445 15.0417 19.3764 15.3027 19.2683C15.5638 19.1602 15.8467 19.1152 16.1284 19.137C16.4101 19.1588 16.6826 19.2468 16.924 19.3937C18.5323 20.3729 20.3719 18.5323 19.3927 16.925C19.2455 16.6836 19.1574 16.4108 19.1356 16.1289C19.1137 15.847 19.1587 15.564 19.2669 15.3028C19.3752 15.0416 19.5435 14.8096 19.7583 14.6257C19.9731 14.4419 20.2283 14.3114 20.5031 14.2448C22.3323 13.801 22.3323 11.199 20.5031 10.7552C20.2286 10.6884 19.9737 10.5578 19.7591 10.374C19.5445 10.1902 19.3764 9.95832 19.2683 9.69727C19.1602 9.43622 19.1152 9.15334 19.137 8.87164C19.1588 8.58993 19.2468 8.31735 19.3937 8.07604C20.3729 6.46771 18.5323 4.62812 16.925 5.60729C16.6836 5.75448 16.4108 5.84259 16.1289 5.86445C15.847 5.8863 15.564 5.84129 15.3028 5.73307C15.0416 5.62485 14.8096 5.45648 14.6257 5.24167C14.4419 5.02685 14.3114 4.77167 14.2448 4.49687Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.7097 14.7097C15.2958 14.1237 15.625 13.3288 15.625 12.5C15.625 11.6712 15.2958 10.8763 14.7097 10.2903C14.1237 9.70424 13.3288 9.375 12.5 9.375C11.6712 9.375 10.8763 9.70424 10.2903 10.2903C9.70424 10.8763 9.375 11.6712 9.375 12.5C9.375 13.3288 9.70424 14.1237 10.2903 14.7097C10.8763 15.2958 11.6712 15.625 12.5 15.625C13.3288 15.625 14.1237 15.2958 14.7097 14.7097Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg width="35" height="35" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ padding: '5px' }}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.36623 5.36626C5.60064 5.13192 5.91852 5.00028 6.24998 5.00028C6.58143 5.00028 6.89932 5.13192 7.13373 5.36626L12.5 10.7325L17.8662 5.36626C17.9815 5.24687 18.1195 5.15164 18.272 5.08613C18.4245 5.02062 18.5885 4.98614 18.7545 4.9847C18.9205 4.98325 19.085 5.01488 19.2387 5.07773C19.3923 5.14058 19.5319 5.2334 19.6492 5.35077C19.7666 5.46813 19.8594 5.6077 19.9223 5.76132C19.9851 5.91494 20.0167 6.07954 20.0153 6.24551C20.0138 6.41149 19.9794 6.57551 19.9139 6.72802C19.8483 6.88052 19.7531 7.01845 19.6337 7.13376L14.2675 12.5L19.6337 17.8663C19.8614 18.102 19.9874 18.4178 19.9846 18.7455C19.9817 19.0733 19.8503 19.3868 19.6185 19.6185C19.3867 19.8503 19.0732 19.9818 18.7455 19.9846C18.4177 19.9874 18.102 19.8615 17.8662 19.6338L12.5 14.2675L7.13373 19.6338C6.89797 19.8615 6.58222 19.9874 6.25448 19.9846C5.92673 19.9818 5.61321 19.8503 5.38145 19.6185C5.14969 19.3868 5.01823 19.0733 5.01538 18.7455C5.01254 18.4178 5.13853 18.102 5.36623 17.8663L10.7325 12.5L5.36623 7.13376C5.13189 6.89935 5.00024 6.58147 5.00024 6.25001C5.00024 5.91855 5.13189 5.60067 5.36623 5.36626Z" fill="#6B7280" />
              </svg>

            </div>
            <div className="flex flex-row ml-3 items-center">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 15.5L8 12.5M8 12.5L11 9.5M8 12.5H16M3 12.5C3 11.3181 3.23279 10.1478 3.68508 9.05585C4.13738 7.96392 4.80031 6.97177 5.63604 6.13604C6.47177 5.30031 7.46392 4.63738 8.55585 4.18508C9.64778 3.73279 10.8181 3.5 12 3.5C13.1819 3.5 14.3522 3.73279 15.4442 4.18508C16.5361 4.63738 17.5282 5.30031 18.364 6.13604C19.1997 6.97177 19.8626 7.96392 20.3149 9.05585C20.7672 10.1478 21 11.3181 21 12.5C21 14.8869 20.0518 17.1761 18.364 18.864C16.6761 20.5518 14.3869 21.5 12 21.5C9.61305 21.5 7.32387 20.5518 5.63604 18.864C3.94821 17.1761 3 14.8869 3 12.5Z" stroke="#6C2BD9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="ml-2 text-gray-900">User Settings</p>
            </div>

            <div className="flex flex-col justify-center items-center mt-7">
              <img className="rounded-full w-40 h-40 object-right object-cover" src="https://s3-alpha-sig.figma.com/img/eaf7/1f28/617a2add318b2cf989cf12f12aee3fcd?Expires=1678060800&Signature=jpuFIjqba~RlvjOMFC00C0HR2NHZzE~keymTzMk9~OZDQwYqQ-I07Q-sv~ynKD11XpGjWr1cFLO0nPv7R2rUZ~OWG~uRf6DWTtG8sc209MyOD3feeh9xTccY2J8tLgoHWCQrOgZCVcq0-7MBY8D49QDz4fgAPDhuBHcMwYfXdvQwSAFqEDZEjotxs3-iN5icqvj0QqCjWsS3ywvftVtvJgql7SY396-3C8LxNh3wnNunFmjox9Cnayjbf7P-99jfBzixxuGLIXhEtmwbhF2ESgyoWcHl7f0M-VgYiKi52vk35NqMGMUFoq7SxOo1OVlmU8ZEZpFb09SttCV9mXHpjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Rounded avatar" />

              <p className=" text-gray-900 mt-1">Sandra Silva</p>    <div className="flex  mt-1 justify-center items-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.75C2.60218 3.75 2.22064 3.90804 1.93934 4.18934C1.65804 4.47064 1.5 4.85218 1.5 5.25V11.25C1.5 11.6478 1.65804 12.0294 1.93934 12.3107C2.22064 12.592 2.60218 12.75 3 12.75H12C12.3978 12.75 12.7794 12.592 13.0607 12.3107C13.342 12.0294 13.5 11.6478 13.5 11.25V5.25C13.5 4.85218 13.342 4.47064 13.0607 4.18934C12.7794 3.90804 12.3978 3.75 12 3.75H10.8105C10.6116 3.74996 10.4209 3.67091 10.2802 3.53025L9.4395 2.6895C9.15826 2.40818 8.77679 2.25008 8.379 2.25H6.621C6.22321 2.25008 5.84174 2.40818 5.5605 2.6895L4.71975 3.53025C4.57913 3.67091 4.3884 3.74996 4.1895 3.75H3ZM7.5 10.5C7.79547 10.5 8.08806 10.4418 8.36104 10.3287C8.63402 10.2157 8.88206 10.0499 9.09099 9.84099C9.29992 9.63206 9.46566 9.38402 9.57873 9.11104C9.6918 8.83806 9.75 8.54547 9.75 8.25C9.75 7.95453 9.6918 7.66194 9.57873 7.38896C9.46566 7.11598 9.29992 6.86794 9.09099 6.65901C8.88206 6.45008 8.63402 6.28434 8.36104 6.17127C8.08806 6.0582 7.79547 6 7.5 6C6.90326 6 6.33097 6.23705 5.90901 6.65901C5.48705 7.08097 5.25 7.65326 5.25 8.25C5.25 8.84674 5.48705 9.41903 5.90901 9.84099C6.33097 10.2629 6.90326 10.5 7.5 10.5V10.5Z" fill="#7B7B7B" />
                </svg>

                <p className=" text-purple-600">  Edit Profile Picture</p>
              </div>
            </div>


            <div className="mt-5">
              <label htmlFor="fName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  className="border bg-[#F9FAFB] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Sandra"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00002 5.85871L5.64646 5.50515L3.07072 2.92941C3.0707 2.92939 3.07068 2.92937 3.07066 2.92935C3.05192 2.91064 3.02651 2.90013 3.00002 2.90013C2.97353 2.90013 2.94812 2.91064 2.92937 2.92935C2.92935 2.92937 2.92934 2.92939 2.92932 2.92941M6.00002 5.85871L2.57582 3.4242C2.46334 3.31168 2.40015 3.1591 2.40015 3C2.40015 2.8409 2.46334 2.68832 2.57582 2.5758L2.92932 2.92941M6.00002 5.85871L6.35357 5.50515L8.92937 2.92935L8.92942 2.92941L8.93546 2.92316C8.94469 2.91361 8.95572 2.90599 8.96792 2.90075L8.77058 2.44134L8.96792 2.90075C8.98012 2.89551 8.99324 2.89275 9.00652 2.89263C9.0198 2.89252 9.03297 2.89505 9.04526 2.90007C9.05755 2.9051 9.06871 2.91253 9.0781 2.92192C9.08749 2.93131 9.09492 2.94247 9.09994 2.95476C9.10497 2.96705 9.1075 2.98022 9.10739 2.9935C9.10727 3.00677 9.10451 3.0199 9.09927 3.0321C9.09403 3.0443 9.08641 3.05533 9.07686 3.06456L9.07681 3.0645L9.07066 3.07065L6.49486 5.64645L6.14131 6L6.49486 6.35355L9.0663 8.92499C9.08343 8.94364 9.09286 8.96812 9.09264 8.9935C9.09241 9.01972 9.0819 9.0448 9.06335 9.06334C9.04482 9.08188 9.01973 9.0924 8.99351 9.09262C8.96814 9.09284 8.94366 9.08341 8.92501 9.06629L6.35357 6.49485L6.00002 6.14129L5.64646 6.49485L3.07503 9.06628C3.05638 9.08341 3.0319 9.09284 3.00652 9.09262C2.9803 9.0924 2.95522 9.08188 2.93668 9.06334C2.91814 9.0448 2.90762 9.01972 2.90739 8.9935C2.90717 8.96812 2.91661 8.94364 2.93374 8.92499L5.50517 6.35355L5.85873 6L5.50517 5.64645L2.92943 3.0707L2.57589 3.42413L2.92937 3.07065M6.00002 5.85871L2.92937 3.07065M2.92932 2.92941C2.91064 2.94815 2.90015 2.97353 2.90015 3C2.90015 3.02649 2.91066 3.0519 2.92937 3.07065M2.92932 2.92941L2.92937 3.07065" fill="#111928" stroke="#6B7280" />
                  </svg>
                </div>
              </div>
            </div> <div className="mt-5">
              <label htmlFor="lName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  className="bg-[#F9FAFB] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Silva"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00002 5.85871L5.64646 5.50515L3.07072 2.92941C3.0707 2.92939 3.07068 2.92937 3.07066 2.92935C3.05192 2.91064 3.02651 2.90013 3.00002 2.90013C2.97353 2.90013 2.94812 2.91064 2.92937 2.92935C2.92935 2.92937 2.92934 2.92939 2.92932 2.92941M6.00002 5.85871L2.57582 3.4242C2.46334 3.31168 2.40015 3.1591 2.40015 3C2.40015 2.8409 2.46334 2.68832 2.57582 2.5758L2.92932 2.92941M6.00002 5.85871L6.35357 5.50515L8.92937 2.92935L8.92942 2.92941L8.93546 2.92316C8.94469 2.91361 8.95572 2.90599 8.96792 2.90075L8.77058 2.44134L8.96792 2.90075C8.98012 2.89551 8.99324 2.89275 9.00652 2.89263C9.0198 2.89252 9.03297 2.89505 9.04526 2.90007C9.05755 2.9051 9.06871 2.91253 9.0781 2.92192C9.08749 2.93131 9.09492 2.94247 9.09994 2.95476C9.10497 2.96705 9.1075 2.98022 9.10739 2.9935C9.10727 3.00677 9.10451 3.0199 9.09927 3.0321C9.09403 3.0443 9.08641 3.05533 9.07686 3.06456L9.07681 3.0645L9.07066 3.07065L6.49486 5.64645L6.14131 6L6.49486 6.35355L9.0663 8.92499C9.08343 8.94364 9.09286 8.96812 9.09264 8.9935C9.09241 9.01972 9.0819 9.0448 9.06335 9.06334C9.04482 9.08188 9.01973 9.0924 8.99351 9.09262C8.96814 9.09284 8.94366 9.08341 8.92501 9.06629L6.35357 6.49485L6.00002 6.14129L5.64646 6.49485L3.07503 9.06628C3.05638 9.08341 3.0319 9.09284 3.00652 9.09262C2.9803 9.0924 2.95522 9.08188 2.93668 9.06334C2.91814 9.0448 2.90762 9.01972 2.90739 8.9935C2.90717 8.96812 2.91661 8.94364 2.93374 8.92499L5.50517 6.35355L5.85873 6L5.50517 5.64645L2.92943 3.0707L2.57589 3.42413L2.92937 3.07065M6.00002 5.85871L2.92937 3.07065M2.92932 2.92941C2.91064 2.94815 2.90015 2.97353 2.90015 3C2.90015 3.02649 2.91066 3.0519 2.92937 3.07065M2.92932 2.92941L2.92937 3.07065" fill="#111928" stroke="#6B7280" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <p className="mt-5 mb-3 text-gray-900">Email</p>
              <p className="text-xl font-bold text-gray-900"> sandrea@gmail.com</p>
              <button type="button" className="mt-2 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99999 6.2V4.6C1.99999 3.53913 2.42142 2.52172 3.17157 1.77157C3.92171 1.02143 4.93913 0.599998 5.99999 0.599998C7.06086 0.599998 8.07828 1.02143 8.82842 1.77157C9.57857 2.52172 9.99999 3.53913 9.99999 4.6V6.2C10.4243 6.2 10.8313 6.36857 11.1314 6.66863C11.4314 6.96869 11.6 7.37565 11.6 7.8V11.8C11.6 12.2243 11.4314 12.6313 11.1314 12.9314C10.8313 13.2314 10.4243 13.4 9.99999 13.4H1.99999C1.57565 13.4 1.16868 13.2314 0.868623 12.9314C0.568565 12.6313 0.399994 12.2243 0.399994 11.8V7.8C0.399994 7.37565 0.568565 6.96869 0.868623 6.66863C1.16868 6.36857 1.57565 6.2 1.99999 6.2ZM8.39999 4.6V6.2H3.59999V4.6C3.59999 3.96348 3.85285 3.35303 4.30294 2.90294C4.75303 2.45285 5.36347 2.2 5.99999 2.2C6.63651 2.2 7.24696 2.45285 7.69705 2.90294C8.14714 3.35303 8.39999 3.96348 8.39999 4.6Z" fill="#1F2A37" />
                </svg>

                <span className="ml-3">Change Email</span>
              </button>
            </div>
            <div>
              <p className="mt-3 mb-2 text-gray-900">Password</p>
              <button type="button" className=" text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99999 6.2V4.6C1.99999 3.53913 2.42142 2.52172 3.17157 1.77157C3.92171 1.02143 4.93913 0.599998 5.99999 0.599998C7.06086 0.599998 8.07828 1.02143 8.82842 1.77157C9.57857 2.52172 9.99999 3.53913 9.99999 4.6V6.2C10.4243 6.2 10.8313 6.36857 11.1314 6.66863C11.4314 6.96869 11.6 7.37565 11.6 7.8V11.8C11.6 12.2243 11.4314 12.6313 11.1314 12.9314C10.8313 13.2314 10.4243 13.4 9.99999 13.4H1.99999C1.57565 13.4 1.16868 13.2314 0.868623 12.9314C0.568565 12.6313 0.399994 12.2243 0.399994 11.8V7.8C0.399994 7.37565 0.568565 6.96869 0.868623 6.66863C1.16868 6.36857 1.57565 6.2 1.99999 6.2ZM8.39999 4.6V6.2H3.59999V4.6C3.59999 3.96348 3.85285 3.35303 4.30294 2.90294C4.75303 2.45285 5.36347 2.2 5.99999 2.2C6.63651 2.2 7.24696 2.45285 7.69705 2.90294C8.14714 3.35303 8.39999 3.96348 8.39999 4.6Z" fill="#1F2A37" />
                </svg>
                <span className="ml-3">Change Password</span>
              </button>
            </div>

            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 mb-2 mx-4 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Save</button>
            <div className="flex justify-center items-center mt-auto mb-5">
              <p className="text-purple-600 mr-2">Terms & Condition</p>
              <p> | </p>
              <p className="text-purple-600 ml-2">Privacy Policy</p>
            </div>
          </div>
        </section>


      </div>
      <div className={classNames('absolute top-[30%] right-[390px] w-[50px] z-1000000000000000 flex flex-col justify-center items-center p-1 bg-[#6C2BD9] rounded-2xl ease-in-out duration-300', {
        'right-[-10px]': !enabled,
      })}>
        <Button className="pr-4 rounded-full" active={enabled} onClick={() => openPanel()}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#FFF"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  enabled
                    ? 'M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25'
                    : 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15'
                }
              />
            </svg>
          </span>
        </Button>
        <Button className="pr-4 rounded-full" active={enabled} onClick={() => openPanel()}>
          <span>
            <svg className="w-6 h-6" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6L22 18M10 18L22 6L10 18Z" stroke="#F6F2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </span>
        </Button>
      </div>
    </div>
  );
}
