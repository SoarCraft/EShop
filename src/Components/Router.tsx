import { useMemoizedFn, useMount } from "ahooks";
import { createContext, useContext, useState } from "react";
import { Combine } from "~/Helpers/Path";

/**
 * @author Aloento
 * @since 0.5.0 MusiLand
 * @version 0.2.0
 */
interface IRouter {
  Paths: readonly string[],
  Search: URLSearchParams,
  readonly Put: (search: URLSearchParams) => void,
  readonly Nav: (...paths: readonly (string | false | undefined)[]) => void,
  readonly Rep: (...paths: readonly (string | false | undefined)[]) => void,
  readonly Reload: (bool: boolean) => void,
}

/**
 * @author Aloento
 * @since 0.5.0 MusiLand
 * @version 0.1.0
 */
const Router = createContext({} as IRouter);

/**
 * @author Aloento
 * @since 0.5.0 MusiLand
 * @version 0.1.0
 */
export function useRouter() {
  return useContext(Router);
}

/**
 * @author Aloento
 * @since 0.5.0 MusiLand
 * @version 0.1.0
 */
let reload = false;

/**
 * @author Aloento
 * @since 0.5.0 MusiLand
 * @version 0.2.1
 */
export function BrowserRouter({ children }: { children: JSX.Element }): JSX.Element {
  const [router, setRouter] = useState<IRouter>(() => ({
    Paths: location.pathname.split("/").filter(x => x),
    Search: new URLSearchParams(location.search),
    Put(search) {
      history.pushState(null, "", `${location.pathname}${search.size ? "?" : ""}${search.toString()}`);
      setRouter({ ...router, Search: new URLSearchParams(search) });
    },
    Nav: (...p) => nav(Combine(p)),
    Rep: (...p) => rep(Combine(p)),
    Reload: (bool) => reload = bool
  }));

  const update = useMemoizedFn((path: string) => {
    router.Paths = path.split("/").filter(x => x);
    setRouter({ ...router });
  });

  const nav = useMemoizedFn((path: string) => {
    history.pushState(null, "", path);
    update(path);
  });

  const rep = useMemoizedFn((path: string) => {
    history.replaceState(null, "", path);
    update(path);
  });

  useMount(() => {
    if (location.pathname === "/")
      if (location.search.startsWith("?/"))
        rep(location.search.substring(2));

    addEventListener("click", e => {
      const target = (e.target as HTMLElement)?.closest("a");

      if (target) {
        if (target.origin !== location.origin) {
          target.target = "_blank";
          return;
        }

        if (reload)
          return;

        e.preventDefault();
        nav(target.pathname);
      }
    });

    addEventListener("popstate", e => {
      if (reload)
        location.reload();

      e.preventDefault();
      update(location.pathname);
    });
  });

  return (
    <Router.Provider value={{ ...router }}>
      {children}
    </Router.Provider>
  );
}
