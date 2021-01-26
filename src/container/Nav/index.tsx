import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">
        <a>top</a>
      </Link>
      <Link href="/test">
        <a>test</a>
      </Link>
    </nav>
  );
}
