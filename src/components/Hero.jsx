import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profilepic from "../assets/avatar.png";
import {
	DiCss3,
	DiHtml5,
	DiNodejsSmall,
	DiReact,
	DiMysql,
	DiJavascript1,
} from "react-icons/di";
import {
	AiOutlineGithub,
	AiOutlineMail,
	AiOutlineLinkedin,
} from "react-icons/ai";
import ShinyEffect from "./ShinyEffect";

const Hero = () => {
	return (
		<div className="mt-24 max-w-[1200px] mx-auto relative" id="hero">
			<div className="grid md:grid-cols-2 place-items-center gap-8">
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<TypeAnimation
						sequence={["Frontend Developer", 1000, "Fullstack Developer", 1000]}
						speed={50}
						repeat={Infinity}
						className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
					/>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.5 }}
						className="text-gray-200 md:text-7xl text-5xl tracking-tighter mb-4"
					>
						HEY, I AM <br />
						<span className="text-purple-500">Aachal</span>
					</motion.p>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1 }}
						className="text-gray-200 md:text-lg text-base max-w-[300px]  md:max-w-[500px] mb-6"
					>
						Continuously improving my skills to build responsive and scalable
						web applications, blending both frontend and backend development.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1.5 }}
						className="flex flex-row items-center gap-6  my-4 md:mb-0"
					>
						<motion.button
							whileHover={{
								scale: 1.05,
								boxShadow: "0px 0px 8px rgba(0,0,0,0.3",
							}}
							className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
						>
							<a href="/cv.pdf" download="cv.pdf" className="flex items-center">
								Download CV
							</a>
						</motion.button>

						<div className="flex gap-6 flex-row text-4xl md:text-purple-400 z-20">
							<motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Aanchalll18"
							className="text-purple-400"
							>
								<AiOutlineGithub />
							</motion.a>

							<motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/aanchal-161b26270/"
							className="  text-purple-400"
							>
								<AiOutlineLinkedin />
							</motion.a>

							<motion.a whileHover={{ scale: 1.2 }} href="mailto:kumariaachal002@gmail.com"
							className="  text-purple-400"
							>
								<AiOutlineMail />
							</motion.a>
						</div>
					</motion.div>
				</motion.div>

				<motion.img
					src={profilepic}
					className="w-[1300px] md:w-[450px]"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				></motion.img>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1, delay: 2 }}
				className="flex flex-row text-4xl px-12 md:px-0 w-full justify-center items-center py-24 mt-10"
			>
				<p className="text-gray-200 mr-6">My Tech Stack</p>
				<DiHtml5 className="mx-2 text-red-600" />
				<DiCss3 className="mx-2  text-blue-600" />
				<DiJavascript1 className="mx-2  text-yellow-600" />
				<DiReact className="mx-2 text-teal-400" />
				<DiNodejsSmall className="mx-2  text-green-600" />
				<DiMysql className="mx-2  text-blue-400" />
			</motion.div>

			<div className="absolute insert-0 hidden md:block">
				<ShinyEffect left={0} top={0} size={1400} />
			</div>
		</div>
	);
};

export default Hero;
