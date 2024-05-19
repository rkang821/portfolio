import { DFIRPost, ITPost, TKPost } from './posts'
import { type SubTabProps } from '@/models/fundamentals'
import { useState } from 'react'

export default function SubTabSection() {
  const tabs: SubTabProps[] = [
    {
      id: 'styled-DFIR',
      label: 'DFIR Overview',
      content: <DFIRPost />,
    },
    {
      id: 'styled-IT',
      label: 'Incident Types',
      content: <ITPost />,
    },
    {
      id: 'styled-TK',
      label: 'DFIR Toolkit',
      content: <TKPost />,
    },
  ]
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }
  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="-mb-px flex flex-wrap text-center text-sm font-medium"
          id="default-styled-tab"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2" role="presentation">
              <button
                className={`inline-block rounded-t-lg border-b-2 p-4 max-sm:mt-5 max-sm:p-2 max-sm:text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 active:text-blue-500 dark:border-blue-300'
                    : 'hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
                id={`${tab.id}-tab`}
                data-tabs-target={`#${tab.id}`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-styled-tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`rounded-lg bg-gray-50 p-4 dark:bg-gray-800 ${
              activeTab === tab.id ? '' : 'hidden'
            }`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {tab.content}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
