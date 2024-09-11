import localFont from 'next/font/local';
import config from '@/config';
import './globals.css';
import { cn } from '@/lib/utils';

console.log(config);

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-sans',
	weight: '100 900'
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-mono',
	weight: '100 900'
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head></head>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased text-text',
					geistMono.variable
				)}>
				{children}
			</body>
		</html>
	);
}
