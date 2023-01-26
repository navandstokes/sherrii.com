import "lib/globals.css"
import Script from "next/script"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
            <Script
                data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
                src={process.env.NEXT_PUBLIC_UMAMI_WEBSITE}
            />
        </html>
    )
}
