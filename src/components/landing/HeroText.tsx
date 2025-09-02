import Link from "next/link";

export default function HeroText() {
  return (
    <div className="container flex items-center justify-center lg:justify-start mt-36">
      <div className="flex flex-wrap flex-col items-center justify-center lg:items-start gap-6 px-4 md:px-0">
        <h3 className="text-sm tracking-[14px] bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
          NOVO
        </h3>
        <h1 className="text-6xl font-bold text-white text-center md:text-start md:w-3/5">
          XX99 Mark II Headphones
        </h1>
        <p className="text-gray-500 font-semibold text-center w-4/5  md:text-start md:w-1/2 mb-2">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </p>

        <Link
          href={"/headphones/xx99-mark-two-headphones"}
          className="w-fit  text-white font-bold color-white bg-orange-500 py-4 px-7
        ">
            Ver Produto
        </Link>
      
      </div>
    </div>
  );
}
