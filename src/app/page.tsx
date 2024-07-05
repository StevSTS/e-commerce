import Image from "next/image";
import imgHome from './Images/shoppingFavIcon.png'
import card from './Images/card.jpg'
import store from './Images/store.jpg'
import keyBoeard from './Images/keyBoeard.jpg'
import Parag from "@/Components/whyUs/Parag";

export default function Home() {
  return (
    <main className="lg:px-8 max-lg:px-4 allCont">

      <section className="pb-[120px] mt-10">
        <div className="flex items-start justify-between max-lg:flex-col-reverse ">
          <div className="content mt-10 w-1/2 max-lg:w-full ">
            <h2 className="text-[42px] font-[600] max-sm:text-[30px] textGrad">Infinity Market</h2>
            <p className="mt-[18px] mb-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae harum numquam autem mollitia ipsam tempore aliquam placeat nihil minus veritatis, pariatur unde aspernatur, eos quisquam modi perspiciatis qui repellendus perferendis sit! Impedit, architecto?</p>
            <div className="flex items-center gap-5 text-white ">
              <button className="butn bg-gradient-to-l from-sky-500 to-indigo-500 py-[10px] rounded-tr-xl rounded-bl-xl px-8 duration-300 hover:translate-y-[-5px] ">Explore</button>
              <button className="butn py-[10px] rounded-tr-xl rounded-bl-xl px-8 duration-300 hover:translate-y-[-5px] ">Contact Us</button>
            </div>
          </div>
          <div className="img max-lg:w-[calc(100%-100px)] max-lg:mx-auto">
              <Image className="object-cover mx-auto" src={imgHome} alt="home"></Image>
          </div>
        </div>
      </section>


      <section>

          <div className="flex gap-16 max-lg:gap-5 max-lg:flex-col max-xl:items-center ">
              <div className="w-[50%] max-xl:h-[285px] max-lg:h-[310px] max-lg:w-full ">
                  <Image className="object-cover rounded-lg h-full w-full " src={store} alt="store"></Image>
              </div>
              <div className="info max-lg:w-full ">
                  <h3 className="text-[38px] font-[600] mb-5 textGrad">Why Us</h3>
                  <div className="flex flex-col gap-3 text-[18px] ms-5">
                    <Parag text="We have experience more than +10 years" />
                    <Parag text="We have branches all over the world" />
                    <Parag text="We have the best designers ( High Quality )" />
                    <Parag text="We have products for all categories" />
                    <Parag text="Your products will arrive within 2 days maximum" />
                  </div>
                    <button className="butn mt-6 text-white py-[10px] rounded-tr-xl rounded-bl-xl px-8 duration-300 hover:translate-y-[-5px] ">Contact Us</button>
              </div>
          </div>




      </section>




    </main>
  )
}
