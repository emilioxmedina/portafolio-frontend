import Image from "next/image";
import profilePic from "../../public/images/persona icono.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-slate-500 to-slate-800 bg-opacity-50">
        <div className="flex justify-center items-center gap-20 bg-gradient-to-br from-cyan-600 to-emerald-700  p-16 rounded-3xl shadow-md transition ease-in-out delay-150 duration-300 hover:scale-110">
          <div className="flex flex-col text-center">
            <h1 className="text-6xl font-bold text-center">EMILIO MEDINA</h1>
            <h2 className="text-3xl font-sans">Desarrollador Web</h2>
          </div>
          <Image src={profilePic} height={200} width={200} alt="Foto de autor" className="rounded-full"/>
        </div>
      </div>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="m-4 p-16 w-auto bg-gradient-to-b from-gray-900 via-gray-500 to-gray-900 rounded-3xl">
          <h1 className="text-6xl font-bold font-serif text-center">PROYECTOS</h1>
          <div className="flex flex-row gap-4">
            <div className="w-1/3 flex flex-col justify-center items-center gap-3 m-2 mt-16 p-6 bg-gradient-to-r from-blue-900 via-slate-600 to-blue-950 rounded-3xl transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-105">
              <Image src={profilePic} height={200} width={200} alt="Foto de autor" className="rounded-3xl m-auto mb-4"/>
              <h2 className="text-4xl font-bold text-center">Proyecto 1</h2>
              <p>Texto descriptivo del proyecto 1.</p>
              <Link href="#" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-300">ver al repositorio</Link>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center gap-3 m-2 mt-16 p-6 bg-gradient-to-r from-blue-900 via-slate-600 to-blue-950 rounded-3xl transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-105">
              <Image src={profilePic} height={200} width={200} alt="Foto de autor" className="rounded-3xl m-auto mb-4"/>
              <h2 className="text-4xl font-bold text-center">Proyecto 2</h2>
              <p>Texto descriptivo del proyecto 2.</p>
              <Link href="#" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-300">ver al repositorio</Link>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center gap-3 m-2 mt-16 p-6 bg-gradient-to-r from-blue-900 via-slate-600 to-blue-950 rounded-3xl transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-105">
              <Image src={profilePic} height={200} width={200} alt="Foto de autor" className="rounded-3xl m-auto mb-4"/>
              <h2 className="text-4xl font-bold text-center">Proyecto 3</h2>
              <p>Texto descriptivo del proyecto 3.</p>
              <Link href="#" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-300">ver al repositorio</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
      );
}
