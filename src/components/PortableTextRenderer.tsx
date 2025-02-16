import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@sanity/types";
import { BiLinkExternal, BiSolidQuoteRight } from "react-icons/bi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import HashScroll from "./HashScroll";
import Link from "next/link";

// ✨ Define Custom Portable Text Components
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-2 mb-6 text-lg leading-relaxed">{children}</p>
    ),

    h2: ({ children }) => {
      const id = children
        ?.toString()
        .toLowerCase()
        .replaceAll(/[^-\w]+/g, "-")
        .replaceAll(/--+/g, "-")
        .replace(/^-|-$/g, "");
      return (
        <h2
          id={id}
          className="relative font-bold tracking-tight dark:text-gray-100 text-gray-700 lg:text-4xl text-3xl my-8"
        >
          <HashScroll text={children} />
        </h2>
      );
    },

    h3: ({ children }) => {
      const id = children
        ?.toString()
        .toLowerCase()
        .replaceAll(/[^-\w]+/g, "-")
        .replaceAll(/--+/g, "-")
        .replace(/^-|-$/g, "");
      return (
        <h3
          id={id}
          className="relative block lg:font-bold font-semibold tracking-tight lg:text-3xl text-2xl dark:text-gray-100 text-gray-700 my-6"
        >
          <HashScroll text={children} />
        </h3>
      );
    },

    h4: ({ children }) => {
      const id = children
        ?.toString()
        .toLowerCase()
        .replaceAll(/[^-\w]+/g, "-")
        .replaceAll(/--+/g, "-")
        .replace(/^-|-$/g, "");
      return (
        <h4
          id={id}
          className="relative inline-block font-semibold tracking-tight text-xl dark:text-gray-100 text-gray-700 mb-2 mt-4"
        >
          <HashScroll text={children} />
        </h4>
      );
    },

    blockquote: ({ children }) => (
      <blockquote className="relative overflow-hidden tracking-tight text-lg my-8 lg:py-6 lg:pl-6 pr-12 p-4 border-l-4 dark:border-gray-800 border-gray-300 rounded-md">
        <BiSolidQuoteRight
          className="text-5xl absolute -top-4 -right-4 -rotate-12 dark:text-gray-800 text-gray-300 opacity-30"
          aria-hidden="true"
        />
        {children}
      </blockquote>
    ),

    callout: ({ children }) => (
      <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-30 border border-blue-300 dark:border-blue-700 rounded-lg">
        <IoMdInformationCircleOutline className="text-2xl text-blue-500 dark:text-blue-300 mt-1" />
        <p className="text-blue-900 dark:text-blue-200 text-lg">{children}</p>
      </div>
    ),
  },

  marks: {
    em: ({ children }) => (
      <em className="font-montserrat font-medium italic">{children}</em>
    ),

    strong: ({ children }) => (
      <strong className="font-bold dark:text-gray-300 text-gray-700">
        {children}
      </strong>
    ),

    link: ({ children, value }) => {
      return (
        <Link
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-blue-400 text-blue-500 hover:underline"
        >
          {children} <BiLinkExternal className="inline" aria-hidden="true" />
        </Link>
      );
    },

    code: ({ children }) => (
      <code className="py-[0.15rem] px-1 rounded-sm font-medium bg-gray-200 dark:bg-gray-800 text-red-500 dark:text-red-400">
        {children}
      </code>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 space-y-2 text-lg">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 space-y-2 text-lg">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },

  //   types: {
  //     image: ({ value }) => (
  //       <div className="flex justify-center my-6">
  //         <Image
  //           src={value.asset.url}
  //           alt={value.alt || "Image"}
  //           width={800}
  //           height={600}
  //           className="rounded-md shadow-md"
  //         />
  //       </div>
  //     ),
  //   },
};

// ✨ Reusable PortableText Component
interface Props {
  content: PortableTextBlock[];
}

const PortableTextRenderer: React.FC<Props> = ({ content }) => {
  return <PortableText value={content} components={components} />;
};

export default PortableTextRenderer;
