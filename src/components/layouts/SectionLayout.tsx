import { motion, useInView } from "motion/react";
import { useRef } from "react";

type SectionLayoutProps = {
    id:string;
    title: string;
    description: string;
    children: (props: { isInView: boolean }) => React.ReactNode;
}

const SectionLayout = ({ id, title, description, children }: SectionLayoutProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.2, once: false });

  return (
    <section id={id} className="pb-14 text-center lg:max-w-[60rem] mx-auto overflow-hidden">
        <div ref={ref} className="space-y-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:text-5xl md:text-4xl text-3xl lg:leading-[3.5rem] font-bold">
                    {title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="whitespace-pre-wrap lg:leading-8 md:mx-0 mx-5 lg:text-xl text-base"
                >
                    {description}
                </motion.p>
                {children({ isInView })}
        </div>
    </section>
  )
}

export default SectionLayout