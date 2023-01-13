import {React, useState, useEffect } from "react";
import{ mutants } from './MutantsData'
import Search from "../Assets/search.png";
import Striga from "../Assets/striga.png";


function Mutants() {
  

  const [image, setImage] = useState(Striga);
  const [mutantName, setMutantName] = useState("striga");
  const [filteredMutants, setFilteredMutants] = useState(mutants);
  const [mutantSearch, setMutantSearch] = useState("");
  const [occurence, setOccurence] = useState(
    "A striga may tolerate necrophages; she needs a hideout during the day, often choosing a sarcophagus in a forgotten branch of a crypt"
  );
  const [immunity, setImmunity] = useState("Resistant to steel");
  const [susceptibility, setSusceptibility] = useState(
    "Sensitive to silver; a striga may be freed from her curse by those who survive a night near her sarcophagus"
  );
  const [tactics, setTactics] = useState(
    "A striga is a very strong and agile creature, but not as resilient as she might seem; she attacks by surprise and tries to tear opponents to pieces without giving them a chance to fight back; near her sarcophagus, a striga is always stronger. The striga attacks use the blinding critical effect."
  );
  const [alchemy, setAlchemy] = useState("STRIGA HEART");

    const handleSearch = (e) => {
      const mutant = e.toLowerCase()
      setMutantSearch(mutant)
      console.log(mutant)
    }
    
  const handleClick = (
    name,
    img,
    occurence,
    immunity,
    susceptibility,
    tactics,
    alchemy
  ) => {
    setImage(img);
    setMutantName(name);
    setOccurence(occurence);
    setImmunity(immunity);
    setSusceptibility(susceptibility);
    setTactics(tactics);
    setAlchemy(alchemy);
  };

  useEffect(() => {
    if (mutantSearch !== ""){
      const res = mutants.filter((mutant) => {
        if (mutant.name.startsWith(mutantSearch)){
          return mutant.name.startsWith(mutantSearch);
        }
        return 0;
      })
      setFilteredMutants(res);
    } else setFilteredMutants(mutants)
  
  }, [mutantSearch])

  return (
    <div id="Mutants" className="px-6 md:px-36 lg:px-10  m-auto">
      <div className="flex justify-center text-[#ffffff] text-4xl lg:text-6xl">
        Mutants
      </div>
      <div className="flex p-4 items-center">
        <div className="grid gap-6 lg:gap-0 justify-center lg:grid-cols-3">
          <div className="order-3 px-6 max-h-[24rem] lg:max-h-[31rem] 2xl:max-h-[45rem] mt-6 overflow-y-scroll">
            <div className="flex bg-[#4c5a65] rounded-6xl">
              <img
                className="border-r-4 px-2 cursor-pointer border-black w-10 md:w-12 lg:w-14 xl:w-24 mr-2 my-2"
                src={Search}
                alt="search"
              />
              <input
                type="text"
                className="bg-[#4c5a65] pl-1 outline-none border-none rounded-6xl text-2xl lg:text-4xl w-full"
                name="searchbar"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            {filteredMutants.map(
              ({
                id,
                name,
                src,
                img,
                occurence,
                immunity,
                susceptibility,
                tactics,
                alchemy,
              }) => (
              <div
                  onClick={() =>
                    handleClick(
                      name,
                      img,
                      occurence,
                      immunity,
                      susceptibility,
                      tactics,
                      alchemy
                    )
                  }
                  key={id}
                  className="flex cursor-pointer py-4"
                >
                  <div className="w-2/3 flex justify-start px-6 text-2xl items-center rounded-l-6xl bg-gradient-to-r from-petrol-blue to-[#919699]">
                    {name}
                  </div>
                  <img
                    className="w-1/3 max-h-24 rounded-r-6xl"
                    src={src}
                    alt="Striga2"
                  />
                </div> 
              )
            )}
          </div>
          <div className="order-1 bg-gradient-to-b overflow-auto xl:overflow-hidden max-h-[24rem] lg:max-h-[32rem] 2xl:max-h-[46rem] p-4 rounded-5xl lg:rounded-r-none from-[#d4d0c7] to-[#354856]">
            <h1 className="flex justify-center text-black text-4xl lg:text-5xl">
              {mutantName}
            </h1>
            <div className="text-md lg:text-xl lg:py-4">
              <div className="p-2">
                <span className="text-xl lg:text-2xl pr-2">Occurance:</span>
                {occurence}
              </div>
              <div className="p-2">
                <span className="text-xl lg:text-2xl pr-2">IMMUNITY:</span>
                {immunity}
              </div>
              <div className="p-2">
                <span className="text-xl lg:text-2xl pr-2">
                  SUSCEPTIBILITY:
                </span>
                {susceptibility}
              </div>
              <div className="p-2">
                <span className="text-xl lg:text-2xl pr-2">Tactics:</span>
                {tactics}
              </div>
            </div>
            <span className="text-2xl text-white lg:pt-4 flex justify-center">
              ALCHEMY: {alchemy}
            </span>
          </div>
          <img
            className="order-2 lg:max-h-[32rem] 2xl:max-h-[46rem] w-full h-full rounded-5xl lg:rounded-l-none lg"
            src={image}
            alt="Striga"
          />
        </div>
      </div>
    </div>
  );
}

export default Mutants;
