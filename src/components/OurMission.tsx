import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "motion/react";
import SectionLayout from './layouts/SectionLayout'
import { missions } from "../data/missions";

//const Lottie = pkg.default;

const OurMission = () => {
  return (
    <SectionLayout id='ourmission' title='Our Mission' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nesciunt!'>
        {({isInView}) => (
            <div className="md:flex md:pt-6 gap-5">
                {/* left side */}
                <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -150 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="md:my-auto md:w-1/2">
                    <div>
                        <Player
                            autoplay
                            loop
                            src="/animations/ourmissionAnimation.json"
                            style={{ width: "auto", height: "auto" }}
                        />
                    </div>
                </motion.div>

                {/* right side */}
                <motion.div className="sm:space-y-16 space-y-14 md:w-1/2">
                    {missions.map((mission, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 150 }}
                        transition={{ duration: 0.7, delay: index * 0.3 }}
                        className="text-left border-b-2 border-slate-500 pb-2">
                            <h4 className="font-medium md:text-2xl text-xl mb-2 lg:leading-8">{mission.title}</h4>
                            <p>{mission.content}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>


            </div>
        )}
    </SectionLayout>
  )
}

export default OurMission