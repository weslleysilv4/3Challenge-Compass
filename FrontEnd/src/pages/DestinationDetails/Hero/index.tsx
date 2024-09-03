import { NavLink } from "react-router-dom";

interface HeroProps {
  title: string;
  image: string;
}

function Hero(props: HeroProps) {
  return (
    <section className="bg-cover bg-center saturate-50 bg-[url('https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2FTourPackage-header.png?alt=media&token=8e4cacd7-21ba-4500-848e-c12145db6e8b')]">
      <div className="container mx-auto">
        <main className="w-full h-[280px] relative flex flex-col items-center justify-center gap-5">
          <h1 className="text-5xl font-bold text-white">{props.title}</h1>
          <ul>
            <li>
              <NavLink to="/" className="font-bold text-white">
                Home /
              </NavLink>{" "}
              <NavLink to="/destination" className="font-bold text-white">
                Destination /
              </NavLink>{" "}
              <NavLink to="#" className="font-bold text-secondary">
                {props.title}
              </NavLink>
            </li>
          </ul>
        </main>
      </div>
    </section>
  );
}

export default Hero;
