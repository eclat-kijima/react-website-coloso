import { motion } from "motion/react";
import { services } from "../data/services";
import SectionLayout from "./layouts/SectionLayout";

function Service() {
  return (
    <SectionLayout id={"service"} title={"Service"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio animi dignissimos sint magnam officiis quibusdam, provident minima ut ducimus."}>
        {/* service card */}
        {({isInView}) =>(
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                        className="bg-slate-50 shadow px-6 py-4 rounded-md space-y-3">
                            <img src={service.url} alt={service.alt} width={120} height={120} className="mx-auto" />
                            <span className="font-semibold text-2xl">{service.title}</span>
                            <p>{service.content}</p>
                        </motion.div>
                    ))}

                </div>
            </motion.div>
        )}
    </SectionLayout>
  )
}

export default Service