import FooterSection from "./layouts/FooterSection"
import { CONTACT_INFO, QUICK_LINKS, SOCIAL_ICONS } from "../data/footer"
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

  return (
    <footer className="mt-12" ref={ref}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto px-4">
            <div className="md:flex justify-between">
                <FooterSection title="React Website">
                    <p className="text-sm">
                        Making high impact investments that transform lives.
                    </p>
                </FooterSection>
                <FooterSection title="Quick Links">
                    <ul className="flex flex-col text-sm">
                        {QUICK_LINKS.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="hover:text-blue-700 duration-150">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </FooterSection>
                <FooterSection title="Contact Us">
                    {CONTACT_INFO.map((info, index) => (
                        <p className="text-sm" key={index}>{info.label}：{info.value}</p>
                    ))}
                </FooterSection>
                <FooterSection title="Follow Us">
                    <div className="flex gap-2 justify-center">
                        {SOCIAL_ICONS.map((icon, index) => (
                            <a key={index} href={icon.href}>{icon.icon}</a>
                        ))}
                    </div>
                </FooterSection>
            </div>

            <div className="mt-5 border-t border-blue-950 py-4 text-sm text-center">© {new Date().getFullYear()} React.Website. All right reserved.</div>
        </motion.div>
    </footer>
  )
}

export default Footer