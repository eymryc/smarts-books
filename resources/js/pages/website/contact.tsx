
import WebsiteLayout from "@/layouts/website/websiteLayout";
export default function Contact() {
   return (
      <WebsiteLayout>
         <div className="w-full isolate pb-10">
            {/* <div
               aria-hidden="true"
               className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            >
               <div
                  style={{
                     clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
               />
            </div> */}
            {/* <div className="mx-auto max-w-xl text-center">
               <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2>
               <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
            </div> */}
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
               <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                     <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                        Prénom(s)
                     </label>
                     <div className="mt-2.5">
                        <input
                           id="first-name"
                           name="first-name"
                           type="text"
                           autoComplete="given-name"
                           placeholder="Prénoms"
                           className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                     </div>
                  </div>
                  <div>
                     <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                        Nom
                     </label>
                     <div className="mt-2.5">
                        <input
                           id="last-name"
                           placeholder="Nom"
                           name="last-name"
                           type="text"
                           autoComplete="family-name"
                           className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                     </div>
                  </div>
                  <div className="sm:col-span-2">
                     <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                        Email
                     </label>
                     <div className="mt-2.5">
                        <input
                           id="email"
                           name="email"
                           type="email"
                           placeholder="Email"
                           autoComplete="email"
                           className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                     </div>
                  </div>
                  <div className="sm:col-span-2">
                     <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                        Téléphone
                     </label>
                     <div className="mt-2.5">
                        <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                           <input
                              id="phone-number"
                              name="phone-number"
                              type="text"
                              placeholder="123-456-7890"
                              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="sm:col-span-2">
                     <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                        Message
                     </label>
                     <div className="mt-2.5">
                        <textarea
                           id="message"
                           name="message"
                           placeholder="Message"
                           rows={4}
                           className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                           defaultValue={''}
                        />
                     </div>
                  </div>
               </div>
               <div className="mt-10">
                  <button
                     type="submit"
                     className="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                     Me contacter
                  </button>
               </div>
            </form>
         </div>
      </WebsiteLayout>
   )
}
