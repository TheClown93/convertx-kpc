import { version } from "../../package.json";

export const BaseHtml = ({
  children,
  title = "ConvertX",
  webroot = "",
}: {
  children: JSX.Element;
  title?: string;
  webroot?: string;
}) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="webroot" content={webroot} />
      <title safe>{title}</title>
      <link rel="stylesheet" href={`${webroot}/generated.css`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${webroot}/apple-touch-icon.png?v=kpc-visual-2`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${webroot}/favicon-32x32.png?v=kpc-visual-2`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${webroot}/favicon-16x16.png?v=kpc-visual-2`} />
      <link rel="manifest" href={`${webroot}/site.webmanifest?v=kpc-visual-2`} />
    </head>
    <body class={`flex min-h-screen w-full flex-col bg-neutral-900 text-neutral-200`}>
      {children}
      <footer class="kpc-footer w-full">
        <div class="px-4 py-7 text-center text-xs tracking-[0.08em] text-[#bfa66a] sm:text-sm">
          Eine Einrichtung des Krähenbühl & Partners Consortium
        </div>
      </footer>
    </body>
  </html>
);
