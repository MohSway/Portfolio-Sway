import { nav, site } from "@/content/site";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="mark" href="#top" aria-label={`${site.name}, home`}>
          SM<span>.</span>
        </a>
        <nav className="navlinks" aria-label="Primary">
          {nav.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-ghost" href="#contact">
          Say hello
        </a>
      </div>
    </header>
  );
}
