import Form from "@Components/Form";

function Hero() {
  return (
    <section className="bg-center bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e')]">
      <div className="container mx-auto">
        <main className="relative w-full h-[527px] flex flex-col">
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <h2 className="text-3xl font-secondary text-secondary mb-4">
                Save 15% off in Worldwide
              </h2>
              <h1 className="text-5xl font-bold text-white mb-2">
                Travel & Adventures
              </h1>
              <p className="text-white font-semibold">
                Find awesome hotel, tour, car and activities in London
              </p>
            </div>
          </div>
          <Form />
        </main>
      </div>
    </section>
  );
}

export default Hero;
