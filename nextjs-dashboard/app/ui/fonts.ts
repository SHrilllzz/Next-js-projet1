import { Inter, Lusitana } from 'next/font/google';

// Configure the Inter font
export const inter = Inter({ subsets: ['latin'] });

// Configure the Lusitana font
export const lusitana = Lusitana({
    weight: ['400', '700'], // Specify the weights you want to use
    subsets: ['latin'],      // Specify the subsets you want to include
});
