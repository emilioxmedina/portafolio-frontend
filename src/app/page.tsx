import Image from "next/image";
import profilePic from "../../public/images/profile.jpg";
import hotelPic from "../../public/images/hotel.jpeg";
import healthPic from "../../public/images/health.png";
import snakePic from "../../public/images/snake.jpeg";
import Link from "next/link";
import findAll from "@/actions/findAll";

export default async function Home() {
  const response = await findAll();

  return (
    <main className="bg-gradient-to-br from-slate-200 via-slate-300 to-slate-100 bg-opacity-50 text-gray-500">
      <header>
        <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-end lg:py-6">
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <button
              className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              data-twe-collapse-init
              data-twe-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div
              className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContent1"
              data-twe-collapse-item
            >
              <ul
                className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
                data-twe-navbar-nav-ref
              >
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                    href="#main"
                    data-twe-nav-link-ref
                  >
                    Inicio
                  </a>
                </li>
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#proyects"
                    data-twe-nav-link-ref
                  >
                    Proyectos
                  </a>
                </li>
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#experience"
                    data-twe-nav-link-ref
                  >
                    Experiencia y educación
                  </a>
                </li>
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#blog"
                    data-twe-nav-link-ref
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div
        id="main"
        className="w-full h-screen flex justify-center items-center"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-20 bg-gradient-to-br from-cyan-600 to-emerald-700 py-10 sm:p-10 md:p-16 m-4 rounded-3xl shadow-md transition ease-in-out delay-150 duration-300 md:hover:scale-110">
          <div className="flex flex-col text-center">
            <h1 className="text-6xl font-bold text-center text-slate-300">
              EMILIO MEDINA
            </h1>
            <h2 className="text-3xl font-sans text-slate-300">
              Desarrollador Web
            </h2>
          </div>
          <Image
            src={profilePic}
            height={300}
            width={300}
            alt="Foto de autor"
            className="rounded-full"
          />
        </div>
      </div>
      <div
        id="proyects"
        className="h-auto md:h-screen md:p-10 mx-4 border-y-2 border-gray-400"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-center py-8">
          PROYECTOS
        </h1>
        <div className="flex flex-col justify-center items-center p-4 md:items-stretch gap-4 md:flex-row">
          <div className="md:w-1/3 flex flex-col justify-center items-center md:gap-2 m-2 p-4 bg-gradient-to-r from-slate-400 to-blue-300 rounded-3xl transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-105">
            <Image
              src={hotelPic}
              height={350}
              width={350}
              alt="Hotel App API"
              className="rounded-3xl m-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center">HOTEL APP API</h2>
            <p className="text-center font-serif">
              Una API creada para el manejo de cuartos, reservaciones y pagos de
              un hotel.
            </p>
            <Link
              href="https://github.com/emilioxmedina/Hotel-App-Backend"
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-300"
              target="_blank"
            >
              ver al repositorio
            </Link>
          </div>
          <div className="md:w-1/3 flex flex-col justify-center items-center md:gap-2 m-2 p-4 bg-gradient-to-r from-slate-400 to-blue-300 rounded-3xl transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-105">
            <Image
              src={healthPic}
              height={300}
              width={300}
              alt="Salud en el territorio guatemalteco"
              className="rounded-3xl m-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center">
              SALUD EN EL TERRITORIO GUATEMALTECO
            </h2>
            <p className="text-center font-serif">
              Pagina web informativa respecto a las condiciones de salud en
              Guatemala.
            </p>
            <Link
              href="https://github.com/Josecc12/Hackfest-2022"
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-300"
              target="_blank"
            >
              ver al repositorio
            </Link>
          </div>
          <div className="md:w-1/3 flex flex-col justify-center items-center md:gap-2 m-2 p-4 bg-gradient-to-r from-slate-400 to-blue-300 rounded-3xl transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-105">
            <Image
              src={snakePic}
              height={300}
              width={300}
              alt="Snake Game"
              className="rounded-3xl m-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center">SNAKE GAME</h2>
            <p className="text-center font-serif">
              Imitacion del famoso juego de una serpiente que crece cada vez que
              se alimenta de una fruta en la pista de juego.
            </p>
            <Link
              href="https://github.com/Josecc12/Snake"
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-300"
              target="_blank"
            >
              ver al repositorio
            </Link>
          </div>
        </div>
      </div>
      <div
        id="experience"
        className="flex flex-col justify-center items-center md:p-8 mx-4 border-b-2 border-gray-400"
      >
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-center p-6">
          EXPERIENCIA Y EDUCACIÓN
        </h1>
        <div className="flex flex-col md:flex-row w-full space-y-6 justify-center md:justify-evenly items-center md:items-stretch">
          <div className="flex flex-col m-5 md:m-0 md:w-1/3 gap-1 p-2 border border-slate-500 border-b-2 border-t-0 border-r-0">
            <h2 className="font-serif font-semibold text-2xl">Laboral</h2>
            <p className="text-center font-serif">
              Actual - Desarrollador de software en CARI Latinoamerica.
            </p>
          </div>
          <div className="flex flex-col m-5 md:m-0 md:w-1/3 gap-1 p-2 border border-slate-500 border-b-2 border-t-0 border-r-0">
            <h2 className="font-serif font-semibold text-2xl">Académica</h2>
            <p className="text-center font-serif">
              Actualmente - Estudiante de Ingeniería en Sistemas en Universidad
              Landivar Campus Quetzaltenango.
            </p>
          </div>
        </div>
      </div>
      <div id="blog" className="m-5 p-4">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-center p-6 border border-gray-400">
          BLOG
        </h1>
        <ul className="my-8">
          {response.data.map((post, key) => (
            <div key={key} className="my-1 mx-2">
              <li className="text-xl md:text-3xl font-bold font-serif text-center p-2">
                {post.attributes.Title}{" "}
              </li>
              <li className="text-justify text-lg font-serif md:w-1/2 md:mx-auto h-auto my-4">
                {post.attributes.Body}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="m-5 p-4">
        <h1 className="text-md md:text-lg font-bold font-serif text-center p-6 border border-gray-400">
          Portafolio de Emilio Medina
        </h1>
      </div>
    </main>
  );
}
