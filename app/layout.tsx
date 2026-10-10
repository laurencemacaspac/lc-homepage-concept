import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'LC | Where Mortgage Talent Connects', description:'Independent homepage design concept for LC, the private talent marketplace for mortgage professionals.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
