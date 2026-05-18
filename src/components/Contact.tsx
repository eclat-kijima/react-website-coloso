import { motion } from "motion/react"
import SectionLayout from "./layouts/SectionLayout"
import { useRef, useState, type FormEvent } from "react"

import emailjs from '@emailjs/browser';

const Contact = () => {

    const [inputTitle, setInputTitle] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputContent, setInputContent] = useState("");
    const [error, setError] = useState("");

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError("");

        if(inputTitle.trim() === "" || inputEmail.trim() === "" || inputContent.trim() === ""){
            setError("※全ての項目を入力してください。");
            return;
        }

        //メール送信機能
        if(formRef.current) {
            emailjs
                .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
                setError("");
                alert("メール送信に成功しました！返信までしばらくお待ちください。");
            }
    };

  return (
    <SectionLayout id="contact" title="Contact Me" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, corporis.">
        {({isInView}) =>(
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="px-2">
                <form className="text-left max-w-[40rem] mx-auto space-y-4" onSubmit={handleSubmit} ref={formRef}>
                    <div>
                        <label htmlFor="title" className="font-medium">
                            Title
                        </label>
                        <input type="text" name="title" placeholder="ex. Web development Advice" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" onChange={(e) => setInputTitle(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-medium">
                            Email
                        </label>
                        <input type="email" name="email" placeholder="ex. xxxxxx@gmail.com" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" onChange={(e) => setInputEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="message" className="font-medium">
                            Content
                        </label>
                        <textarea name="message" placeholder="ex. Please help me" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 h-[20rem]" onChange={(e) => setInputContent(e.target.value)} />
                    </div>
                    {error && (<span className="text-red-500 font-semibold">{error}</span>)}
                    <div>
                        <button type="submit" className="border-2 border-gray-500 px-5 py-2 rounded-md hover:border-blue-300 duration-150 transition">
                            send
                        </button>
                    </div>
                </form>
            </motion.div>
        )}
    </SectionLayout>
  )
}

export default Contact