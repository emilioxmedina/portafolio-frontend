import Image from "next/image";
import profilePic from "../../public/images/persona icono.jpg"

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
      <div>
        <h1>prueba</h1>
      </div>
    </main>
      );
}
