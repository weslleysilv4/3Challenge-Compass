type CardGuidesProps = {
  date?: string;
  author?: string;
  title?: string;
};
function CardGuides({ date, author, title }: CardGuidesProps) {
  return (
    <a href="#">
      <div className="w-[448px] h-[136px]">
        <div className="flex flex-row items-center justify-center gap-5">
          <figure className="w-[172px] h-[136px]">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fjake-blucker-tMzCrBkM99Y-unsplash.jpg?alt=media&token=f3e7ec6d-f8d9-429c-a4fd-c99d501158dc"
              alt=""
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="flex flex-col gap-2 w-[256px]">
            <span className="text-tertiary font-light">
              {date} - {author}
            </span>
            <h6 className="text-primary font-bold text-lg">{title}</h6>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CardGuides;
