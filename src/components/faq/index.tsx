import Image from "next/image";

export default function FAQ() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="mt-5 text-center text-3xl mb-7 font-bold tracking-tight md:text-5xl">
          FAQ
        </h2>
      </div>
      <div className="relative md:w-[844px] bg-white px-6 pt-2 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> What is Veecerts?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Veecert is a decentralized document verification service
                  revolutionizing the way credentials and documents are
                  authenticated. Built on ICP Blockchain, Veecert leverages the
                  inherent security, transparency, and immutability of this
                  technology to provide a seamless and trustworthy verification
                  process.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> What are NFTs?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  NFTs, or Non-Fungible Tokens, are unique digital items that
                  live on a blockchain. Unlike cryptocurrencies like Bitcoin or
                  Ethereum, which are interchangeable (one Bitcoin is always
                  equal to another), NFTs are one-of-a-kind. They're often used
                  to prove ownership of digital assets like art, music, videos,
                  collectibles, or even in-game items.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> What is Metadata?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Metadata is data that describes other data. It gives context
                  or details about a piece of information, helping you
                  understand what it is, how it was created, when, by whom, and
                  more.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> What is batch minting and how do I do it?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Batch minting is the process of creating multiple NFTs at
                  once, instead of minting them one by one. It’s useful if
                  you’re launching a collection or have a large number of tokens
                  to create. To batch mint, you'll typically upload a folder of
                  your media files (images, videos, etc.) along with a metadata
                  file that includes the details for each NFT.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> What is ICP? </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  ICP stands for Internet Computer. It’s a detailed description
                  of the type of company or person who would benefit the most
                  from your product or service—and who brings the most value to
                  your business in return.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Why ICP? </span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  The Internet Computer (ICP) stands out because it allows
                  developers to build fully on-chain applications — not just
                  smart contracts, but the entire backend and frontend — without
                  relying on traditional cloud services. It’s scalable, fast,
                  and offers low-cost computation and storage. With features
                  like chain-key cryptography, reverse gas (users don’t need
                  tokens to interact), and seamless upgrades, ICP opens the door
                  to building secure, user-friendly apps that feel like modern
                  web experiences but run entirely on the blockchain.
                </p>
              </details>
            </div>{" "}
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> What’s the benefit of tokenizing documents?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Tokenizing breaks a document into smaller pieces—like words,
                  phrases, or sentences—so computers can understand and process
                  the text more easily. It’s a key first step in tasks like
                  searching, analyzing, or summarizing documents. By turning
                  text into tokens, systems can recognize patterns, compare
                  meanings, and perform operations like filtering or tagging
                  with much better accuracy.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> How do I get a digital identity?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  To get a digital identity, you’ll usually need to register
                  with a trusted provider, this could be your government, a bank,
                  a private company or a decentralized organization such as
                  Veecerts depending on your location and what service you’re
                  using. The process typically involves verifying your
                  real-world identity by submitting documents like a passport,
                  national ID, or driver’s license but Veecerts makes owning a
                  digital identity on ICP seamless and easy with just a few
                  clicks.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
