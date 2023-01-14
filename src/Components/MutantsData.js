import Striga from "../Assets/striga.png";
import Striga2 from "../Assets/strigasmall.png";
import Banshii from "../Assets/banshii.png";
import Banshii2 from "../Assets/banshiismall.png";
import Leshy from "../Assets/leshy.png";
import Leshy2 from "../Assets/leshysmall.png";
import Bruxa from "../Assets/bruxa.png";
import Bruxa2 from "../Assets/bruxasmall.png";
import Ghoul from "../Assets/ghoul.png";
import Ghoul2 from "../Assets/ghoulsmall.png";
import Alp from "../Assets/alp.png";
import Alp2 from "../Assets/alpsmall.png";
import Barghest from "../Assets/barghest.png";
import Barghest2 from "../Assets/barghestsmall.png";
import Dagon from "../Assets/dagon.png";
import Dagon2 from "../Assets/dagonsmall.png";
import Koshchey from "../Assets/koshchey.png";
import Koshchey2 from "../Assets/koshcheysmall.png";

export const mutants = [
    {
      id: 1,
      name: "striga",
      src: Striga2,
      img: Striga,
      occurence:
        "A striga may tolerate necrophages; she needs a hideout during the day, often choosing a sarcophagus in a forgotten branch of a crypt",
      immunity: "Resistant to steel",
      susceptibility:
        "Sensitive to silver; a striga may be freed from her curse by those who survive a night near her sarcophagus",
      tactics:
        "A striga is a very strong and agile creature, but not as resilient as she might seem; she attacks by surprise and tries to tear opponents to pieces without giving them a chance to fight back; near her sarcophagus, a striga is always stronger. The striga attacks use the blinding critical effect.",
      alchemy: "STRIGA HEART",
    },
    {
      id: 2,
      name: "beann'shie",
      src: Banshii2,
      img: Banshii,
      occurence: "Toussaint",
      immunity: "None",
      susceptibility: "Specter oil",
      tactics: "Scream which will stun and disorient",
      alchemy: "Lunar shards",
    },
    {
      id: 3,
      name: "leshen",
      src: Leshy2,
      img: Leshy,
      occurence: "Velen, SkelligeKaer, Morhen",
      immunity: "Axii",
      susceptibility: "Dimeritium bomb, Relict oil, Igni",
      tactics:
        "Controlling surrounding animals and plants; temporarily disappearing.",
      alchemy: "Leshen mutagen",
    },
    {
      id: 4,
      name: "bruxa",
      src: Bruxa2,
      img: Bruxa,
      occurence:
        "Bruxae choose to live in ruins and abandoned human settlements, more rarely in caves and grottos.",
      immunity: "They are fearless and resistant to stun attempts.",
      susceptibility: "Sensitive to silver and Vampire oil",
      tactics:
        "They attack by surprise, try to daze their victims and drink their blood",
      alchemy: "Bruxa blood",
    },
    {
      id: 5,
      name: "ghoul",
      src: Ghoul2,
      img: Ghoul,
      occurence:
        "Ghouls are encountered on battlefields, as well as in cemeteries and abandoned crypts",
      immunity: "Resistant to common poisons",
      susceptibility:
        "Sensitive to silver and Necrophage Oil; the Strong Style is most efficient against ghouls; experienced witchers use the Group Style while fighting multiple ghouls",
      tactics: "A group of ghouls will try to knock an opponent down, surround him and start eating him alive",
      alchemy: "Ghoul blood",
    },
    {
      id: 6,
      name: "alp",
      src: Alp2,
      img: Alp,
      occurence: "Elven ruins",
      immunity: "They are fearless and resistant to stun attempts.",
      susceptibility: "Sensitive to silver and Vampire Oil",
      tactics: "Alps attack by surprise, try to daze their victims and drink their blood",
      alchemy: "Alp fangs",
    },
    {
      id: 7,
      name: "barghest",
      src: Barghest2,
      img: Barghest,
      occurence: "Barghests are ghosts which come from the underworld only when summoned.",
      immunity: "Barghests are fearless and cannot be poisoned; coming from the underworld they acquire bodies, so they can be stunned and experience pain, although they are somewhat resistant to these effects.",
      susceptibility: "Barghests are sensitive to silver and very susceptible to knockdown attempts; the Fast Style is most efficient against barghests and experienced witchers use the Group Style while fighting multiple barghests.",
      tactics: "They try to surround their opponent and work as a group - where one barghest appears, more will follow.",
      alchemy: "Ectoplasm",
    },
    {
      id: 8,
      name: "dagon",
      src: Dagon2,
      img: Dagon,
      occurence: "Dagon is a mythical creature; according to the legend, it rests at the bottom of a lake near the village of Murky Waters.",
      immunity: "Dagon is a deity, so he can not be killed.",
      susceptibility: "The creature receives energy from its believers' faith, which might be his only weakness.",
      tactics: "When Dagon ventures out on land, destruction follows him.",
      alchemy: "Dagon secretions",
    },
    {
      id: 9,
      name: "koshchey",
      src: Koshchey2,
      img: Koshchey,
      occurence: "A mythical creature born of magic; only a mighty mage who knows Alzur's work can summon a koshchey.",
      immunity: "Resistant to most effects",
      susceptibility: "Susceptible to silver",
      tactics: "Critical effect is blinding",
      alchemy: "Koshchey heart",
    },
  ];