import { useForm } from '@inertiajs/react';
import { FormEventHandler } from "react";
import Slide from "../public/media/books/side/slider1.webp";
import BookCover from "../public/media/books/img.webp";
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import InputError from '@/components/input-error';
import WebsiteLayout from '@/layouts/website/websiteLayout';




type BookRequestForm = {
    first_name: string;
    last_name: string;
    affiliation: string;
    country: string;
    city: string;
    phone: string;
    email: string;
    book_title: string;
    publisher: string;
    edition_number: string;
    book_link: string;
};

export default function Welcome({ status }: { status?: string }) {

    const { data, setData, post, processing, errors, reset } = useForm<Required<BookRequestForm>>({
        first_name: '',
        last_name: '',
        affiliation: '',
        country: '',
        city: '',
        phone: '',
        email: '',
        book_title: '',
        publisher: '',
        edition_number: '',
        book_link: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('books-requests'), {
            onFinish: () => reset('first_name', 'last_name', 'affiliation', 'country', 'city', 'phone', 'email', 'book_title', 'publisher', 'edition_number', 'book_link'),
        });
    };

    return (
        <WebsiteLayout>
            <div className='main'>
                <div className="mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
                        <div className="col-span-1 lg:col-span-2 bg-[#000000] rounded flex items-center justify-center h-auto">
                            <div className="w-full h-full py-4 flex items-center justify-center">
                                <img src={Slide} alt="Logo" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-2 md:h-full bg-white p-4 border-2 border-gray-200 rounded-lg">
                            <h2 className="text-lg font-bold text-red-500 mb-2">Formulaire de demande</h2>
                            {status && <div className="mb-4 text-sm text-justify text-green-600">{status}</div>}
                            <form onSubmit={submit}>
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Prénoms</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="first_name"
                                                autoFocus

                                                required
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                                placeholder="Ex: Dupont Jean"
                                                autoComplete="first_name"
                                                value={data.first_name}
                                                onChange={(e) => setData('first_name', e.target.value)}
                                                disabled={processing}
                                            />
                                            <InputError message={errors.first_name} className="mt-2" />

                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Prénoms</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="last_name"
                                                required

                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                                placeholder="Ex: Dupont Jean"
                                                autoComplete="last_name"
                                                value={data.last_name}
                                                onChange={(e) => setData('last_name', e.target.value)}
                                                disabled={processing}
                                            />
                                            <InputError message={errors.last_name} className="mt-2" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="affiliation" className="block text-sm font-medium text-gray-700 mb-1">Affiliation ou institution d&apos;attachement</label>
                                        <input
                                            type="text"
                                            id="affiliation"
                                            name="affiliation"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                            placeholder="Ex: Université de Paris"
                                            autoComplete="affiliation"
                                            value={data.affiliation}
                                            onChange={(e) => setData('affiliation', e.target.value)}
                                            disabled={processing}
                                        />
                                        <InputError message={errors.affiliation} className="mt-2" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <div>
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Pays</label>
                                            <input
                                                type="text"
                                                id="country"
                                                name="country"
                                                required

                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                                placeholder="Ex: France"
                                                autoComplete="country"
                                                value={data.country}
                                                onChange={(e) => setData('country', e.target.value)}
                                                disabled={processing}
                                            />
                                            <InputError message={errors.country} className="mt-2" />
                                        </div>
                                        <div>
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                                            <input
                                                type="text"
                                                id="city"
                                                name="city"
                                                required

                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                                placeholder="Ex: Paris"
                                                autoComplete="city"
                                                value={data.city}
                                                onChange={(e) => setData('city', e.target.value)}
                                                disabled={processing}
                                            />
                                            <InputError message={errors.city} className="mt-2" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required

                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                                placeholder="Ex: +33 1 23 45 67 89"
                                                autoComplete="phone"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                                disabled={processing}
                                            />
                                            <InputError message={errors.phone} className="mt-2" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                                placeholder="Ex: email@exemple.com"
                                                autoComplete="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                disabled={processing}
                                            />
                                            <InputError message={errors.email} className="mt-2" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700 mb-1">Intitulé de l&apos;ouvrage</label>
                                        <input
                                            type="text"
                                            id="bookTitle"
                                            name="book_title"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                            placeholder="Ex: Histoire de la littérature française"
                                            autoComplete="book_title"
                                            value={data.book_title}
                                            onChange={(e) => setData('book_title', e.target.value)}
                                            disabled={processing}
                                        />
                                        <InputError message={errors.book_title} className="mt-2" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <div>
                                            <label htmlFor="publisher" className="block text-sm font-medium text-gray-700 mb-1">Maison d&apos;édition</label>
                                            <input
                                                type="text"
                                                id="publisher"
                                                name="publisher"
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                                placeholder="Ex: Gallimard"
                                                autoComplete="publisher"
                                                value={data.publisher}
                                                onChange={(e) => setData('publisher', e.target.value)}
                                                disabled={processing}
                                            />
                                            <InputError message={errors.publisher} className="mt-2" />
                                        </div>
                                        <div>
                                            <label htmlFor="editionNumber" className="block text-sm font-medium text-gray-700 mb-1">Numéro d&apos;édition</label>
                                            <input
                                                type="text"
                                                id="editionNumber"
                                                name="edition_number"
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                                placeholder="Ex: 3ème édition"
                                                autoComplete="edition_number"
                                                value={data.edition_number}
                                                onChange={(e) => setData('edition_number', e.target.value)}
                                                disabled={processing}
                                            />
                                            <InputError message={errors.edition_number} className="mt-2" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="bookLink" className="block text-sm font-medium text-gray-700 mb-1">Lien de l&apos;ouvrage (si disponible)</label>
                                        <input
                                            type="url"
                                            id="bookLink"
                                            name="book_link"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                            placeholder="Ex: https://www.exemple.com/livre"
                                            autoComplete="book_link"
                                            value={data.book_link}
                                            onChange={(e) => setData('book_link', e.target.value)}
                                            disabled={processing}
                                        />
                                        <InputError message={errors.book_link} className="mt-2" />
                                    </div>

                                    <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                        Valider
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="books">
                    <h1 className="text-xl text-red-400 uppercase flex justify-center md:justify-end font-bold mb-4">Livres disponibles</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-8">
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
                </div>

                <div className="py-8 mt-12 border-t border-gray-200 newslatter">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Inscrivez-vous à notre newsletter</h2>
                        <p className="text-gray-600 mt-2">Recevez les dernières nouvelles et offres spéciales</p>
                    </div>
                    <div className="max-w-md mx-auto">
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none"
                            />
                            <button className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition-colors">
                                S&apos;inscrire
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}
