import { ClassType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    id: 'h973geu9qu',
    name: "Weight Training Classes",
    description: "Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Adipiscing commodo elit at imperdiet.",
    image: image1
  },
  {
    id: '0q9px7u6xz',
    name: "Ab Core Classes",
    description: "Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Adipiscing commodo elit at imperdiet.",
    image: image2
  },
  {
    id: 'eb3ha4el99',
    name: "Yoga Classes",
    description: "Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Adipiscing commodo elit at imperdiet.",
    image: image3
  },
  {
    id: 'w9n1xpbiih',
    name: "Fitness Classes",
    description: "Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Adipiscing commodo elit at imperdiet.",
    image: image4
  },
  {
    id: '6i8btbjfrp',
    name: "Training Classes",
    image: image5
  },
  {
    id: 'fqtvp6hb0o',
    name: "Adventure Classes",
    description: "Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Adipiscing commodo elit at imperdiet.",
    image: image6
  }
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div 
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Enim tortor at auctor urna nunc id. 
              Cras adipiscing enim eu turpis egestas pretium aenean. Sit amet massa vitae tortor condimentum lacinia.
              Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Elit scelerisque mauris pellentesque pulvinar.
            </p>
          </div>

        </motion.div>

        <div className="mt-10 h-[353px] w-full oveflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType) => (
              <Class key={item.id} description={item.description} name={item.name} image={item.image} />
            ))}
          </ul>
        </div>
        
      </motion.div>
    </section>
  )
};

export default OurClasses;