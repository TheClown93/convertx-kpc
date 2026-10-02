export const Header = ({
  loggedIn,
  accountRegistration,
  allowUnauthenticated,
  hideHistory,
  webroot = "",
}: {
  loggedIn?: boolean;
  accountRegistration?: boolean;
  allowUnauthenticated?: boolean;
  hideHistory?: boolean;
  webroot?: string;
}) => {
  let rightNav: JSX.Element;
  if (loggedIn) {
    rightNav = (
      <ul class="kpc-nav-list flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {!hideHistory && (
          <li>
            <a
              class="kpc-nav-link transition-colors hover:underline"
              href={`${webroot}/history`}
            >Verlauf</a>
          </li>
        )}
        {!allowUnauthenticated ? (
          <li>
            <a
              class="kpc-nav-link transition-colors hover:underline"
              href={`${webroot}/account`}
            >Konto</a>
          </li>
        ) : null}
        {!allowUnauthenticated ? (
          <li>
            <a
              class="kpc-nav-link transition-colors hover:underline"
              href={`${webroot}/logoff`}
            >Abmelden</a>
          </li>
        ) : null}
      </ul>
    );
  } else {
    rightNav = (
      <ul class="kpc-nav-list flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <li>
          <a
            class="kpc-nav-link transition-colors hover:underline"
            href={`${webroot}/login`}
          >
            Anmelden
          </a>
        </li>
        {accountRegistration ? (
          <li>
            <a
              class="kpc-nav-link transition-colors hover:underline"
              href={`${webroot}/register`}
            >
              Register
            </a>
          </li>
        ) : null}
      </ul>
    );
  }

  return (
    <header class="kpc-masthead w-full px-4 pt-6 pb-4 sm:px-6 sm:pt-10" data-kpc-ornamental-header="v6">
      <nav class={`kpc-brand-nav mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 px-4 py-3 sm:px-5`}>
        <ul class="kpc-brand-logo">
          <li>
            <a class="inline-flex items-center" href={`${webroot}/`} aria-label="ConvertX home">
              <img
                class="kpc-wordmark"
                src={`${webroot}/kpc-consortium-wordmark.png`}
                alt="KPC Consortium ConvertX"
              />
            </a>
          </li>
        </ul>
        {rightNav}
      </nav>
    </header>
  );
};
