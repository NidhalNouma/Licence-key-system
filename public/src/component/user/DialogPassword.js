
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from '../Button'
import Input from '../Input'

export default function Example({ open, setOpen, data }) {
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
                                                       Change password
                                                  </Dialog.Title>
                                                  <div className="mt-2">
                                                       <br />
                                                       <div className="flex flex-col justify-center items-center">
                                                            <Input label="Current Password" type="password" value={data.cpassword} setValue={data.setCPassword} />
                                                            <Input label="New Password" type="password" value={data.npassword} setValue={data.setNPassword} />
                                                            <Input label="Confirm Password" type="password" value={data.cnpassword} setValue={data.setCNPassword} />
                                                       </div>
                                                       {data.error && <span className="text-red-500">{data.error}</span>}
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-lg">
                                        <Button text={"Submit"} onClick={async () => {
                                             await data.submit().then((r) => {
                                                  if (r) {
                                                       setOpen(false);
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
