type QuoteProps = {
  quote: string;
  author: string;
  occupation: string;
};
function Quote({ quote, author, occupation }: QuoteProps) {
  return (
    <div className="text-center w-[482px]">
      <blockquote cite={author} className="text-primary font-bold text-lg mb-6">
        {quote}
      </blockquote>
      <span className=" text-tertiary">
        -By {author}, {occupation}
      </span>
    </div>
  );
}

export default Quote;
