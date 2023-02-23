import React, { ReactElement, useState } from 'react';
import { APP_COLLAPSE_WIDTH, APP_EXTEND_WIDTH } from './const';
import Button from './components/Button';
import classNames from 'classnames';
import { Appbarbutton } from './components/Appbarbutton';
import { AvatarImageCard } from './components/AvatarImageCard';
import { FormButton } from './components/FormButton';
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
            <Appbarbutton />
            <div className="flex flex-row ml-3 items-center">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 15.5L8 12.5M8 12.5L11 9.5M8 12.5H16M3 12.5C3 11.3181 3.23279 10.1478 3.68508 9.05585C4.13738 7.96392 4.80031 6.97177 5.63604 6.13604C6.47177 5.30031 7.46392 4.63738 8.55585 4.18508C9.64778 3.73279 10.8181 3.5 12 3.5C13.1819 3.5 14.3522 3.73279 15.4442 4.18508C16.5361 4.63738 17.5282 5.30031 18.364 6.13604C19.1997 6.97177 19.8626 7.96392 20.3149 9.05585C20.7672 10.1478 21 11.3181 21 12.5C21 14.8869 20.0518 17.1761 18.364 18.864C16.6761 20.5518 14.3869 21.5 12 21.5C9.61305 21.5 7.32387 20.5518 5.63604 18.864C3.94821 17.1761 3 14.8869 3 12.5Z" stroke="#6C2BD9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="ml-2 text-gray-900">User Settings</p>
            </div>

            <AvatarImageCard />


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
              <FormButton text="Change email" />
            </div>
            <div>
              <p className="mt-3 mb-2 text-gray-900">Password</p>
              <FormButton text="Change password" />
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
