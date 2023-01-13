import { React, useState } from "react";
import Slider from "react-slick";
import Bear from "../Assets/bear.png";
import Cat from "../Assets/cat.png";
import Griffin from "../Assets/griffin.png";
import Manticore from "../Assets/manticore.png";
import Wolf from "../Assets/wolf.png";
import Viper from "../Assets/viper.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


function Schools() {
  const schools = [
    {
      id: 0,
      name: "Wolf",
      img: Wolf,
      text: "is based out of kaer morhen in the kingdom of kaedwen. this is the witcher school to which geralt belongs",
      specialty: "medium armour",
    },
    {
      id: 1,
      name: "Griffin",
      img: Griffin,
      text: "IS A SCHOOL OF WITCHERS HEADQUARTERED IN KOUR AND POUISS, IN KAER SEREN LOCATED AT THE SEA END OF A MOUNTAIN RANDE LEO BONHART HAD REPORTEDLY SLAIN AT LEAST ONE OF ITS MEMBERS.",
      specialty: "medium armour",
    },
    {
      id: 2,
      name: "Viper",
      img: Viper,
      text: "THE SCHOOL OF THE UPER USE SCHOOL OF WITCHERS HEADQUARTERED IN Gorthur Gvaed, A KEEP SOMEWHERE IN THE DEEP CHASMS OF TIR TOCHAIR MOUNTAINS.",
      specialty: "light armour",
    },
    {
      id: 3,
      name: "Manticore",
      img: Manticore,
      text: "The School of the Manticore is a witcher school that was headquartered in the far east, on the edges of the Korath desert. They rarely venture on the other side of the Continent, and thus remain mostly an enigma to Nordlings.",
      specialty: "heavy armour",
    },
    {
      id: 4,
      name: "Cat",
      img: Cat,
      text: "IS SCHOOL OF RESTED WITCHERS FORMED AFTER A STUDENT MUTINY AGAINST THEIR FORMER MASTERS, HEADQUARTERED IN THE TRAVELING DYN MARU CARAVAN, THEY ARE APPARENTLY ONE OF THE FEW SCHOOLS TRAINING WOMEN AND NON-PUREBLOOD HUMANS",
      specialty: "light armour",
    },
    {
      id: 5,
      name: "Bear",
      img: Bear,
      text: "BY 1272, IT HAD LONE DISAPPEARED INTO THE ANNALS OF HISTORY THE WITCHER GERD WAS ONE OF THE FEW KNOWN MEMBERS OF THE SCHOOL",
      specialty: "heavy armour",
    },
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="bg-white h-10 w-10 flex justify-center items-center text-center right-0 top-1/2 bg-opacity-20 rounded-5xl cursor-pointer z-10 absolute"
        onClick={onClick}
      >
        <FaArrowRight size={30} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="bg-white h-10 w-10 flex justify-center items-center text-center left-0 top-1/2 bg-opacity-20 rounded-5xl cursor-pointer z-10 absolute"
        onClick={onClick}
      >
        <FaArrowLeft size={30} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const slider = (id) => {
    if (id === imageIndex) {
      return "scale-110 duration-300";
    } else if (
      id === imageIndex + 1 ||
      id === imageIndex - 1 ||
      id === imageIndex + 5 ||
      id === imageIndex - 5
    ) {
      return "scale-[95%] duration-300";
    } else {
      return "scale-[85%] duration-300";
    }
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-10/12 md:w-1/2 lg:w-full my-16 mx-auto" id="Schools">
      <div className="flex justify-center text-[#ffffff] text-4xl lg:text-6xl">
        Schools
      </div>
      <Slider {...settings}>
        {schools.map(({ img, id, name, text, specialty }) => (
          <div key={id} className={slider(id)}>
            <div className="px-12 rounded-5xl my-10 mx-6 flex bg-gradient-to-b from-school-gray to-school-petrol flex-col justify-around items-center text-center h-[32rem]">
              <img src={img} alt={img} />
              <div>
                <div className="text-2xl font-semibold to-[#000000]">
                  {name} school
                </div>
                <div className="text-white">{text}</div>
              </div>
              <div className="text-2xl">Specializes in {specialty}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Schools;
