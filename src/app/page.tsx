'use client'
import { Dialog, Transition } from '@headlessui/react'
import { sampleData, tableHead } from './data'
import { Fragment, useState, useReducer } from 'react'

interface dataType {
  Year: number
  Make: string
  Model: string
  Color: string
  VIN: string
  LicenseNumber: string
  LicenseState: string
  TowDate: string
  GridForPricing: string
  Total: string
  // Image: string
}

export default function Home(): JSX.Element {
  const reducer = (state: any, action: any) => ({ ...state, ...action })
  const [isOpen, setIsOpen] = useState(false)

  const initialState = {
    Year: '',
    Make: '',
    Model: '',
    Color: '',
    VIN: '',
    LicenseNumber: '',
    LicenseState: '',
    TowDate: '',
    GridForPricing: '',
    Total: '',
  }

  const [
    {
      Year,
      Make,
      Model,
      Color,
      VIN,
      LicenseNumber,
      LicenseState,
      TowDate,
      GridForPricing,
      Total,
    },
    dispatchState,
  ] = useReducer(reducer, initialState)

  const closeModal = (): void => {
    setIsOpen(false)
  }

  const openModal = (): void => {
    setIsOpen(true)
  }

  console.table({
    Year,
    Make,
    Model,
    Color,
    VIN,
    LicenseNumber,
    LicenseState,
    TowDate,
    GridForPricing,
    Total,
  })

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
        <div className="pb-4 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-5">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>

            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
            <button
              onClick={openModal}
              className="font-medium text-green-600 dark:text-green-500 hover:underline"
            >
              Add
            </button>
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableHead.map((item) => (
                <th key={item} scope="col" className="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleData.map((item: dataType, idx) => (
              <tr
                key={idx}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.Year}
                </th>
                <td className="px-6 py-4">{item.Make}</td>
                <td className="px-6 py-4">{item.Model}</td>
                <td className="px-6 py-4">{item.Color}</td>
                <td className="px-6 py-4">{item.VIN}</td>
                <td className="px-6 py-4">{item.LicenseNumber}</td>
                <td className="px-6 py-4">{item.LicenseState}</td>
                <td className="px-6 py-4">{item.TowDate}</td>
                <td className="px-6 py-4">{item.GridForPricing}</td>
                <td className="px-6 py-4">{item.Total}</td>
                {/* <td className="px-6 py-4">{item.Image}</td> */}
                <td className="px-6 py-4 flex gap-3">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="min-w-[500px] transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <form>
                    {tableHead.map((item) => (
                      <div
                        key={item}
                        className="relative z-0 w-full mb-6 group"
                      >
                        <input
                          type="text"
                          name={item}
                          id={item}
                          onChange={(e) =>
                            dispatchState({
                              [item]: e.target.value,
                            })
                          }
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          required
                        />
                        <label
                          htmlFor={item}
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
