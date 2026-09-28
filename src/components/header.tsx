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
      <ul class="flex items-center gap-4">
        {!hideHistory && (
          <li>
            <a
              class="kpc-nav-link transition-colors hover:underline"
              href={`${webroot}/history`}
            >
              History
            </a>
          </li>
        )}
        {!allowUnauthenticated ? (
          <li>
            <a
              class="kpc-nav-link transition-colors hover:underline"
              href={`${webroot}/account`}
            >
              Account
            </a>
          </li>
        ) : null}
        {!allowUnauthenticated ? (
          <li>
            <a
              class="kpc-nav-link transition-colors hover:underline"
              href={`${webroot}/logoff`}
            >
              Logout
            </a>
          </li>
        ) : null}
      </ul>
    );
  } else {
    rightNav = (
      <ul class="flex items-center gap-4">
        <li>
          <a
            class="kpc-nav-link transition-colors hover:underline"
            href={`${webroot}/login`}
          >
            Login
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
    <header class="w-full px-4 py-3 sm:py-4">
      <nav class={`kpc-brand-nav mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-sm px-4 py-3 sm:px-5`}>
        <ul>
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
