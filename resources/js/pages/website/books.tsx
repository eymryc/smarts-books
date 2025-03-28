import WebsiteLayout from "@/layouts/website/websiteLayout";
import BookCover from "@/public/media/books/img.webp";


export default function Books() {
   return (
     <WebsiteLayout>
           <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-8 py-20">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <div key={item} className="shadow-lg hover:shadow-xl transition-shadow p-8 rounded">
                            <div>
                                <h1 className="text-gray-600 font-medium flex justify-center">Amazone</h1>
                                <span className="flex justify-center text-xs text-center text-gray-400">Anthropologie amérindienne - Franz</span>
                            </div>
                            <div className="mt-3 flex justify-center">
                                <img src={BookCover} alt="Logo" />
                            </div>
                            <div className="flex justify-center mt-2 text-red-500 font-semibold">
                                <span>13 000 XOF</span>
                            </div>
                            <button className="mt-2 w-full bg-red-500 text-white py-2 px-2 text-sm rounded hover:bg-red-600 transition-colors">
                                Commander
                            </button>
                        </div>
                    ))}
                </div>
         </WebsiteLayout>
   )
 }
 