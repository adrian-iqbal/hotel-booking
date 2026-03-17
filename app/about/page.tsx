import Image from "next/image";
import HeaderSection from "../components/HeaderSection";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
    title : "About",
    description :"Who we are"
}

const AboutPage = () => {
  return (
    <div>
      <HeaderSection
        title="About Us"
        subTitle="Learn more about our company and mission"
      />
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="/about-image.jpg"
            alt="about image"
            width={650}
            height={579}
          />
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae repudiandae in laboriosam laudantium iste cupiditate
              placeat aut neque ducimus vero!
            </p>
            <ul className="list-item space-y-6 py-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Our Vision</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas beatae ab sed nemo perferendis id?
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Our Mission</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam, repellat aspernatur. Minus, qui! Autem,
                    obcaecati labore harum quibusdam mollitia ea?
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
