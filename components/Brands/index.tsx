import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "TIG",
    href: "https://www.theintgen.com/",
    image: "/images/brands/tig.jpg",
  },
  {
    id: 2,
    name: "Black Cab",
    href: "https://www.blackcab.co.in/",
    image: "/images/brands/blackcab.png",
  },
  // {
  //   id: 3,
  //   name: "PARS",
  //   href: "https://intermontlife.com/",
  //   image: "/images/brands/lineicons.svg",
  // },
  // {
  //   id: 4,
  //   name: "GrayGrids",
  //   href: "https://graygrids.com",
  //   image: "/images/brands/graygrids.svg",
  // },
  // {
  //   id: 5,
  //   name: "TailAdmin",
  //   href: "https://tailadmin.com",
  //   image: "/images/brands/tailadmin.svg",
  // },
];

const Brands = () => {
  return (
    <section className="w-screen justify-center md:flex">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center gap-2 rounded-md bg-dark py-2 px-8 dark:bg-primary dark:bg-opacity-5 "
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex p-2 text-center text-xl">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} width={60} height={60} />
        {/* <div>{name}</div> */}
      </a>
    </div>
  );
};
