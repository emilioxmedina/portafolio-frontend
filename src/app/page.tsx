import Image from "next/image";
import profilePic from "../../public/images/persona icono.jpg"
import hotelPic from "../../public/images/hotel.jpeg"
import healthPic from "../../public/images/health.png"
import snakePic from "../../public/images/snake.jpeg"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-slate-500 to-slate-800 bg-opacity-50 rounded-b-3xl">
        <div className="flex flex-col md:flex-row justify-center items-center gap-20 bg-gradient-to-br from-cyan-600 to-emerald-700 py-10 sm:p-10 md:p-16 m-4 rounded-3xl shadow-md transition ease-in-out delay-150 duration-300 md:hover:scale-110">
          <div className="flex flex-col text-center">
            <h1 className="text-6xl font-bold text-center">EMILIO MEDINA</h1>
            <h2 className="text-3xl font-sans">Desarrollador Web</h2>
          </div>
          <Image src={profilePic} height={200} width={200} alt="Foto de autor" className="rounded-full"/>
        </div>
      </div>
      <div className="h-min-screen w-full flex justify-center items-center md:p-8">
        <div className="m-4 md:p-10 w-auto bg-gradient-to-b from-gray-900 via-gray-500 to-gray-900 rounded-3xl">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-center py-8">PROYECTOS</h1>
          <div className="flex flex-col justify-center items-center p-4 md:items-stretch gap-4 md:flex-row">
            <div className="md:w-1/3 flex flex-col justify-center items-center md:gap-2 m-2 p-4 bg-gradient-to-r from-blue-900 via-slate-600 to-blue-950 rounded-3xl transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-105">
              <Image src={hotelPic} height={350} width={350} alt="Hotel App API" className="rounded-3xl m-auto mb-4"/>
              <h2 className="text-xl font-bold text-center">HOTEL APP API</h2>
              <p className="text-center font-serif">Una API creada para el manejo de cuartos, reservaciones y pagos de un hotel.</p>
              <Link href="https://github.com/emilioxmedina/Hotel-App-Backend" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-300" target="_blank">ver al repositorio</Link>
            </div>
            <div className="md:w-1/3 flex flex-col justify-center items-center md:gap-2 m-2 p-4 bg-gradient-to-r from-blue-900 via-slate-600 to-blue-950 rounded-3xl transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-105">
              <Image src={healthPic} height={300} width={300} alt="Salud en el territorio guatemalteco" className="rounded-3xl m-auto mb-4"/>
              <h2 className="text-xl font-bold text-center">SALUD EN EL TERRITORIO GUATEMALTECO</h2>
              <p className="text-center font-serif">Pagina web informativa respecto a las condiciones de salud en Guatemala.</p>
              <Link href="https://github.com/Josecc12/Hackfest-2022" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-300" target="_blank">ver al repositorio</Link>
            </div>
            <div className="md:w-1/3 flex flex-col justify-center items-center md:gap-2 m-2 p-4 bg-gradient-to-r from-blue-900 via-slate-600 to-blue-950 rounded-3xl transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-105">
              <Image src={snakePic} height={300} width={300} alt="Snake Game" className="rounded-3xl m-auto mb-4"/>
              <h2 className="text-xl font-bold text-center">SNAKE GAME</h2>
              <p className="text-center font-serif">Imitacion del famoso juego de una serpiente que crece cada vez que se alimenta de una fruta en la pista de juego.</p>
              <Link href="https://github.com/Josecc12/Snake" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-300" target="_blank">ver al repositorio</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center md:p-8 bg-gradient-to-br from-cyan-600 to-emerald-700 rounded-lg md:rounded-2xl">
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-center p-6">EXPERIENCIA Y EDUCACIÓN</h1>
        <div className="flex flex-row gap-5 w-full justify-between items-stretch">
          <div className="flex flex-col w-full gap-1 p-2 border border-b-2 border-t-0 border-r-0">
            <h2 className="font-serif font-semibold text-2xl">Laboral</h2>
          </div>
          <div className="flex flex-col w-full gap-1 p-2 border border-b-2 border-t-0 border-r-0">
            <h2 className="font-serif font-semibold text-2xl">Académica</h2>
          </div>
        </div>
      </div>
    </main>
      );
}
