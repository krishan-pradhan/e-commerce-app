import Link from "next/link";

export default function NotFound() {
  return (
    <div className="global">
      <h2 className="lg:text-3xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}