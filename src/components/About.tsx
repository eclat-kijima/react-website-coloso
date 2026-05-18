import pkg from "lottie-react";
import aboutAnimation from "../assets/animations/aboutAnimation.json";
import { motion } from "motion/react";
import SectionLayout from "./layouts/SectionLayout";

const Lottie = pkg.default;

function About() {
  return (
    <SectionLayout id={"about"} title={"About Us"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio animi dignissimos sint magnam officiis quibusdam, provident minima ut ducimus. Impedit maiores id harum tempora quod, aut unde eos quos inventore?\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Id quae enim rerum, odio aliquam ad quasi autem possimus suscipit fuga voluptates, pariatur explicabo ea temporibus error facilis voluptate labore? Provident."}>
        {({isInView}) =>(
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="py-2">
                <div className="md:w-[640px] mx-auto">
                    <Lottie animationData={aboutAnimation} />
                </div>
            </motion.div>
        )}

    </SectionLayout>
  )
}

export default About