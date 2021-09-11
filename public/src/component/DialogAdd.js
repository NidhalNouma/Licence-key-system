import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Datepicker from "./Datepicker"
import Button from './Button'
import { v4 as uuidv4 } from 'uuid';

export default function Example({ open, setOpen, uid, setKeys }) {
     const cancelButtonRef = useRef(null)

     return (
          <Transition.Root show={open} as={Fragment}>
               <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                         <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                         >
                              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                         </Transition.Child>

                         {/* This element is to trick the browser into centering the modal contents. */}
                         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                              &#8203;
                         </span>
                         <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                              enterTo="opacity-100 translate-y-0 sm:scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                         >
                              <div className="inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                   <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg">
                                        <div className="sm:flex sm:items-start">
                                             <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                                       New Key
                                                  </Dialog.Title>
                                                  <div className="mt-2">
                                                       <div>
                                                            <Button text="Auto Generate" onClick={() => uid.setKey(uuidv4())} />
                                                            <span className="font-bold">{uid.key}</span>
                                                       </div>
                                                       <br />
                                                       <div>
                                                            <h3 className="mb-2 text-lg leading-6 font-medium text-gray-900">
                                                                 Expire on
                                                            </h3>
                                                            <Datepicker startDate={uid.date} setStartDate={uid.setDate} />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-lg">
                                        {/* <button
                                             type="button"
                                             className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 sm:ml-3 sm:w-auto sm:text-sm"
                                             onClick={() => setOpen(false)}
                                        >
                                             Add
                                        </button> */}
                                        <Button text="Add" onClick={async () => {
                                             await uid.submit().then((r) => {
                                                  if (r) {
                                                       setOpen(false);
                                                       setKeys(r);
                                                  }
                                             })
                                        }} />
                                        <button
                                             type="button"
                                             className="mr-3 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                             onClick={() => setOpen(false)}
                                             ref={cancelButtonRef}
                                        >
                                             Cancel
                                        </button>
                                   </div>
                              </div>
                         </Transition.Child>
                    </div>
               </Dialog>
          </Transition.Root>
     )
}
