import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => {

    return (
      <>
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
          <nav className="row-span-2 py-8 px-4">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/recomms">Recommendations</Link></li>
            </ul>
          </nav>
          <header className='shadow-md p-4'>
            <h1>RRRead</h1>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
        <TanStackRouterDevtools />
      </>
    )
  }
})
