import Image from "next/image";
import banner from "../assets/images/banner.png";
import w1 from "../assets/images/w1.png";
import w2 from "../assets/images/w2.png";
import w3 from "../assets/images/w3.png";
import w4 from "../assets/images/w4.png";
import w5 from "../assets/images/w5.png";
import { Montserrat } from "next/font/google";
import { FaFaceGrinBeam } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-zinc-950 flex-col montserrat text-white items-center">
      <div className="relative max-w-5xl md:mt-8 md:rounded-lg overflow-hidden">
        <Image src={banner} alt="" className="h-full w-full object-cover" />
        <div className="absolute w-full md:hidden h-1/3 bg-gradient-to-b from-transparent to-zinc-950 bottom-0 left-0"></div>
      </div>
      <div className="flex px-8 flex-col pb-8 max-w-4xl w-full mt-8">
        <div className="flex flex-col">
          <div className="flex gap-4 items-center font-bold text-2xl ">
            <FaFaceGrinBeam />
            <h1>BEM VINDO</h1>
          </div>
          <div className="mt-3">
            <p className="font-light text-sm leading-tight">
              Aqui, mergulhamos nas <b className="font-bold">histórias inspiradoras</b> de
              mulheres que, apesar de muitas vezes esquecidas, deixaram uma marca
              indelével no mundo da
              <b className="font-bold"> ciência</b>. Enquanto figuras masculinas costumam
              dominar as narrativas históricas, este espaço destaca a notável{" "}
              <b className="font-bold">contribuição feminina</b> que moldou e continua a
              moldar o panorama científico.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-16">
          <div className="flex gap-4 uppercase items-center font-bold text-xl ">
            <div className="h-6 w-1 bg-indigo-800 rounded-full"></div>
            <h1>Conheça as cientistas</h1>
          </div>
          <div className="mt-2">
            <p className="font-light text-sm leading-tight">
              Essa seção é dedicada a destacar algumas das{" "}
              <b className="font-bold">mulheres notáveis</b> na ciência, revelando suas
              contribuições incríveis e histórias inspiradoras.
            </p>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <Image
            src={w1}
            alt=""
            className="rounded-lg max-w-[10rem] w-1/4 h-max object-cover"
          />
          <div className="">
            <div className="flex leading-tight gap-4 uppercase items-center font-semibold text-lg ">
              <h1>Katherine Johnson</h1>
            </div>
            <div className="max-w-[28rem]">
              <p className="font-light text-xs leading-tight">
                Katherine Johnson, uma matemática, física e cientista norte-americana,
                nasceu em White Sulphur Springs, Virgínia Ocidental, EUA. Sua notável
                contribuição para a aeronáutica e explorações espaciais dos Estados Unidos
                inclui um papel crucial na área de computação da NASA. Katherine faleceu
                aos 101 anos em 24 de fevereiro de 2020.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="uppercase montserrat text-xl font-semibold">
            Legado e realizações
          </h1>
          <div className="border items-center max-w-lg border-white border-opacity-60 bg-white bg-opacity-5 rounded-lg flex py-3 px-4 gap-4 mt-4">
            <div className="w-3 h-3 rounded-full flex-shrink-0 bg-indigo-800"></div>
            <p className="font-light leading-tight text-xs uppercase">
              Participação vital na corrida espacial, calculando trajetórias para a missão
              Apollo 11.
            </p>
          </div>
          <div className="border items-center max-w-lg border-white border-opacity-60 bg-white bg-opacity-5 rounded-lg flex py-3 px-4 gap-4 mt-4">
            <div className="w-3 h-3 rounded-full flex-shrink-0 bg-indigo-800"></div>
            <p className="font-light leading-tight text-xs uppercase">
              Recebeu a Medalha Presidencial da Liberdade em 2015, em reconhecimento por
              suas contribuições pioneiras.
            </p>
          </div>
        </div>
        <div className="mt-12 flex gap-4">
          <Image
            src={w2}
            alt=""
            className="rounded-lg max-w-[10rem] w-1/4 h-max object-cover"
          />
          <div className="">
            <div className="flex leading-tight gap-4 uppercase items-center font-semibold text-lg ">
              <h1>Marie Curie</h1>
            </div>
            <div className="max-w-[28rem]">
              <p className="font-light text-xs leading-tight">
                Marie Curie, nascida em 1867, foi a primeira mulher a ganhar dois Prêmios
                Nobel (Física e Química). Sua descoberta dos elementos polônio e rádio
                revolucionou o entendimento da radioatividade. Apesar dos desafios como
                mulher na ciência, sua determinação e colaboração com Pierre Curie
                destacaram-se. Seu legado inspira, mostrando a importância das mulheres na
                ciência.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="uppercase montserrat text-xl font-semibold">
            Legado e realizações
          </h1>
          <div className="border items-center max-w-lg border-white border-opacity-60 bg-white bg-opacity-5 rounded-lg flex py-3 px-4 gap-4 mt-4">
            <div className="w-3 h-3 rounded-full flex-shrink-0 bg-indigo-800"></div>
            <p className="font-light leading-tight text-xs uppercase">
              Descoberta dos elementos polônio e rádio.
            </p>
          </div>
          <div className="border items-center max-w-lg border-white border-opacity-60 bg-white bg-opacity-5 rounded-lg flex py-3 px-4 gap-4 mt-4">
            <div className="w-3 h-3 rounded-full flex-shrink-0 bg-indigo-800"></div>
            <p className="font-light leading-tight text-xs uppercase">
              Desenvolvimento da teoria da radioatividade.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-16">
          <div className="flex gap-4 uppercase items-center font-bold text-xl ">
            <div className="h-6 w-1 bg-indigo-800 rounded-full"></div>
            <h1>Outras cientistas</h1>
          </div>
          <div className="mt-2">
            <p className="font-light text-sm leading-tight">
              Destacamos também outras{" "}
              <b className="font-bold">cientistas extraordinárias</b> que contribuíram
              significativamente para diversas áreas científicas:
            </p>
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-4 mt-4">
              <Image src={w4} alt="" className="w-1/4 rounded-full h-max max-w-[7rem]" />
              <div className="flex flex-col">
                <div className="flex gap-4 md:text-xl uppercase items-center font-semibold text-lg ">
                  <h1>Sônia Guimarães</h1>
                </div>
                <div className="max-w-[28rem]">
                  <p className="font-light text-xs md:text-base md:leading-tight leading-tight">
                    Cientista brasileira notável, Sônia Guimarães desafiou barreiras e
                    inspirou gerações. Sua trajetória única na ciência e defesa pela
                    inclusão a tornam uma figura inspiradora no cenário científico.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Image src={w3} alt="" className="w-1/4 rounded-full h-max max-w-[7rem]" />
              <div className="flex flex-col">
                <div className="flex md:text-xl gap-4 uppercase items-center font-semibold text-lg ">
                  <h1>Anita Canavarro</h1>
                </div>
                <div className="max-w-[28rem]">
                  <p className="font-light text-xs  md:text-base md:leading-tight leading-tight">
                    É mestra e doutora em Ciências, licenciada e bacharel em Química pela
                    Universidade Federal do Rio de Janeiro. Sua área de atuação é a
                    química bioinorgânica medicinal.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Image src={w5} alt="" className="w-1/4 rounded-full h-max max-w-[7rem]" />
              <div className="flex flex-col">
                <div className="flex md:text-xl gap-4 uppercase items-center font-semibold text-lg ">
                  <h1>Jane Goodall</h1>
                </div>
                <div className="max-w-[28rem]">
                  <p className="font-light text-xs md:text-base md:leading-tight leading-tight">
                    Primatóloga britânica conhecida por seu trabalho pioneiro com
                    chimpanzés na Tanzânia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-16">
          <div className="flex gap-4 uppercase items-center font-bold text-xl ">
            <div className="h-6 w-1 bg-indigo-800 rounded-full"></div>
            <h1>Inspiração para o futuro</h1>
          </div>
          <div className="mt-2">
            <p className="font-light text-sm leading-tight">
              Estas mulheres são apenas algumas das muitas cientistas talentosas cujas
              contribuições moldaram o mundo. Encorajamos você a explorar mais, aprender
              sobre outras cientistas e inspirar-se em suas jornadas notáveis.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
