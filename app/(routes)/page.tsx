"use client";
import BarChartHome from "@/components/BarChartHome/BarChartHome";
import PieChartHome from "@/components/PieChartHome/PieChartHome";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Ellipsis, Plus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full px-7">
      <div className="grid grid-cols-12">
        <div className="flex flex-col py-8 px-16 justify-start col-span-7 gap-y-4">
          <h1 className="text-white text-3xl font-mono">Welcome to Next.js!</h1>
          <div className="flex items-center justify-between gap-x-4">
            <button className="py-2 px-4 bg-slate-200/50 text-white rounded-xl text-xl font-bold">
              All
            </button>
            <button className="py-2 px-4 bg-slate-200/50 text-white rounded-xl text-xl font-bold">
              Withdrowal
            </button>
            <button className="py-2 px-4 bg-slate-200/50 text-white rounded-xl text-xl font-bold">
              Savings
            </button>
            <button className="py-2 px-4 bg-slate-200/50 text-white rounded-xl text-xl font-bold">
              Deposit
            </button>
          </div>
          <div className="mb-8">
            <BarChartHome />
          </div>
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-7 rounded-xl shadow-xl">
              <PieChartHome />
            </div>
            <div className="col-span-5 flex flex-col gap-y-5 text-white">
              <div className="bg-primary/30 rounded-xl shadow-xl flex flex-col gap-y-2 p-4">
                <div className="flex justify-between">
                  <span className="text-xl">Income</span>
                  <Ellipsis />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col items-start gap-y-3">
                    <span className="text-2xl font-bold">$2.240</span>
                    <span className="text-white/60">This weeks income</span>
                  </div>
                  <span className="py-2 px-4 bg-green-400 text-white rounded-xl">
                    +12%
                  </span>
                </div>
              </div>
              <div className="bg-primary/30 rounded-xl shadow-xl flex flex-col gap-y-2 p-4 text-white">
                <div className="flex justify-between">
                  <span className="text-xl">Expense</span>
                  <Ellipsis />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col items-start gap-y-3">
                    <span className="text-2xl font-bold">$1.750</span>
                    <span className="text-white/60">This weeks income</span>
                  </div>
                  <span className="py-2 px-4 bg-purple-400 text-white rounded-xl">
                    +12%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <div className="bg-orange-300/20 rounded-xl  shadow-2xl p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white text-2xl font-mono ">My card</span>
              <span className="text-white text-sm font-mono flex items-center">
                View all <ChevronRight strokeWidth={2} />{" "}
              </span>
            </div>
            <div className="p-2 flex flex-col  relative z-0 h-80">
              <div className=" h-20 rounded-t-xl w-full absolute top-0 z-10 px-4 shadow-xl">
                <div className="bg-primary/20 h-20 rounded-t-xl w-full"></div>
              </div>
              <div className="h-20 w-full absolute top-4 z-20 px-2 shadow-xl">
                <div className="bg-primary/40 h-20 rounded-t-xl w-full"></div>
              </div>
              <div className="bg-primary/80 rounded-t-xl mt-6 flex flex-col w-full z-30 absolute h-60 p-3 ">
                <div className="flex items-center relative h-full">
                  <Plus
                    strokeWidth={2}
                    className="absolute top-0 right-0 text-primary rounded-full h-8 w-8 bg-white"
                  />
                  <div className="flex items-start justify-center w-full flex-col text-white gap-y-4">
                    <span className="text-xl">Total Balance</span>
                    <span className="text-3xl font-bold font-mono">
                      $22,350.50
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bg-orange-800/80 opacity-95 rounded-xl -top-32 w-full z-50 py-2">
              <div className="blur-0 px-16 py-2 flex flex-col items-start gap-y-2">
                <span className="text-white text-lg">4358 445 0968 2323</span>
                <span className="text-white text-lg">08/24</span>
              </div>
              <div className="px-8 pb-2">
                <Separator className="text-white bg-white h-[1px]" />
              </div>
              <div className="flex flex-col text-white px-8">
                <div className="flex justify-between items-center font-mono">
                  <span className="text-xl">Transactions</span>
                  <span className="flex items-center gap-y-2">
                    View All <ChevronRight />
                  </span>
                </div>
                <div className="flex flex-col gap-y-2 py-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-8">
                      <span className="h-16 w-16 bg-red-800/50 flex items-center justify-center rounded-full">
                        <Image
                          src="./figma.svg"
                          alt="figma"
                          width="60"
                          height="60"
                        />
                      </span>
                      <span className="text-xl font-mono">Figma</span>
                    </div>
                    <span>-$ 15,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-8">
                      <span className="h-16 w-16 bg-red-800/50 flex items-center justify-center rounded-full">
                        <Image
                          src="./grammarly.svg"
                          alt="grammarly"
                          width="60"
                          height="60"
                        />
                      </span>
                      <span className="text-xl font-mono">Grammarly</span>
                    </div>
                    <span>-$ 10,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-8">
                      <span className="h-16 w-16 bg-red-800/50 flex items-center justify-center rounded-full">
                        <Image
                          src="./blender.svg"
                          alt="blender"
                          width="60"
                          height="60"
                        />
                      </span>
                      <span className="text-xl font-mono">Blender</span>
                    </div>
                    <span>-$ 15,00</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-4 px-8 ">
                <div className="flex flex-col w-1/2 gap-y-3 bg-primary/70 rounded-xl p-2">
                  <span className="text-white text-xl font-mono">Add friends</span>
                  <span className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                  <div className="flex items-center justify-center">
                    <Image
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                      alt="blender"
                      width="60"
                      height="60"
                      className="rounded-full bg-contain bg-center h-16 w-16 "                            
                    />
                    <Image
                    src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
                    alt="blender"
                    width="60"
                    height="60"
                    className="rounded-full bg-contain bg-center h-16 w-16 "                            
                     />
                    <Image
                    src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg"
                    alt="blender"
                    width="60"
                    height="60"
                    className="rounded-full bg-contain bg-center h-16 w-16 "                            
                     />
                  </div>
                </div>
                <div className="w-1/2 bg-primary/70 h-full rounded-xl p-2">
                  <span className="text-xl text-white font-mono">Spending</span>
                  <div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
