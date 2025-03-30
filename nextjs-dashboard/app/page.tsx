import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image'
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Place the AcmeLogo at the top */}
      
      <div className="  items-end rounded-lg bg-purple-500 p-20 md:h-50">
      <div className="flex justify-center mb-6 ">
        <AcmeLogo />
      </div>
      </div>
      <div className={styles.shape} />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-purple-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={` ${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Inwi web application.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-purple-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>

          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-purple-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
        src="/hero-desktop.png"
        width={2000}
        height={800}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        </div>
      </div>
    </main>
  );
}