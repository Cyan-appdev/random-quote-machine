import { FaQuoteLeft, FaXTwitter } from "react-icons/fa6";
import { fetchData } from "../lib/fetchData";
import { useEffect, useState } from "react";

function QuoteBox() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = async () => {
    const result = await fetchData();
    setQuote(result);
  };

  return (
    <div
      id="quote-box"
      className="relative flex w-[550px] flex-col gap-8 rounded-lg bg-white/85 p-10 pt-20 shadow-lg"
    >
      <FaQuoteLeft className="absolute left-4 top-4 text-5xl" />

      <div className=" flex flex-col gap-4 text-black">
        <span id="text" className={`text-center text-3xl font-semibold`}>
          {quote.content}
        </span>
        <p id="author" className="text-right">
          {typeof quote.author === "string" ? `- ${quote.author}` : ""}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <a
            id="tweet-quote"
            title="tweet this quote!"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + quote.content + '" ' + quote.author)}`}
            className="rounded px-4 py-2 shadow-md  "
          >
            <FaXTwitter className="h-full text-lg" />
          </a>
        </div>
        <button
          id="new-quote"
          className="h-10 rounded bg-slate-900 px-4 text-white shadow-md"
          onClick={handleClick}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
