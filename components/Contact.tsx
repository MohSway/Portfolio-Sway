import { contact, footer, site } from "@/content/site";
import { Emphasized } from "./Emphasized";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <span className="mono">{contact.availability}</span>
        <h2 className="display" style={{ marginTop: "20px" }}>
          <Emphasized {...contact.headline} />
        </h2>
        <div className="cta" style={{ justifyContent: "center" }}>
          <a className="btn btn-primary" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="btn btn-ghost" href={site.linkedin}>
            {contact.linkedinLabel}
          </a>
          <a className="btn btn-ghost" href={site.tiinkrUrl}>
            {contact.tiinkrLabel}
          </a>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: "120px" }}>
        <div className="foot">
          <span>{footer.copyright}</span>
          <span>{footer.builtWith}</span>
        </div>
      </div>
    </section>
  );
}
