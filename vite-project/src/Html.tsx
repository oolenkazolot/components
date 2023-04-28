interface IHtml {
  children: JSX.Element;
  title: string;
}

export function Html({ children, title }: IHtml) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </head>
      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
}
