import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found" id="main">
      <div>
        <p className="section-label">404</p>
        <h1 className="section-heading">This page wandered off.</h1>
        <p className="contact-sub">The portfolio is still here, just one click away.</p>
        <Link href="/" className="btn btn-primary">
          Go home
        </Link>
      </div>
    </main>
  );
}
