import Hero from "./components/hero/hero";
import Main from "./components/main";
export default function Home() {
  return (
    <div>
      <h1>
        <Hero />
        <div className="mt-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold uppercase">Room & Rates</h1>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              quod.
            </p>
          </div>
          <Main />
        </div>
      </h1>
    </div>
  );
}
