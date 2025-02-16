import Link from "next/link";

export const slugify = (id: string) => {
  return id
    ?.toString()
    .toLowerCase()
    .replace(/[^-\w]+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-|-$/g, "");
};

type props = {
  text: React.ReactNode;
  event?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function HashScroll({ text, event }: props) {
  const id = slugify(text?.toString() || "");

  return (
    <Link onClick={event} href={`#${id}`}>
      {text}
    </Link>
  );
}
