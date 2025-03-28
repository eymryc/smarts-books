import { Head } from '@inertiajs/react';
import WebsiteHeader from './WebsiteHeader';
import WebsiteFooter from './WebsiteFooter';

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <>
      <Head title="Smarts Books">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>

      {/* Header */}
      <WebsiteHeader />

      {/* Main */}
      <main className='container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 flex'>
        {children}
      </main>

      {/* Footer */}
      <WebsiteFooter />
    </>
  );
}
