import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import {
	AiOutlineGithub,
	AiOutlineMail,
	AiOutlineLinkedin,
} from "react-icons/ai";

const Contact = () => {
	return (
		<div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
			<Reveal>
				<div className="grid md:grid-cols-2 place-items-center">
					<div>
						<div className="text-gray-300 my-3">
							<h3 className="text-3xl font-semibold mb-5">
								About <span>Me</span>
							</h3>
							<p className="text-justify leading-7 w-10/11
							 mx-auto">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
								eos, quam vel quisquam, explicabo sit labore dignissimos optio
								ratione quibusdam doloribus pariatur consequuntur sint.
								Reprehenderit cupiditate possimus facere quasi voluptatem?
							</p>
							
						</div>
					</div>

					<form
						action="https://getform.io/f/ayvvdzeb"
						method="POST"
						className=" max-w-6xl p-5 md:p-12"
						id="form"
					>
						<p className="text-gray-100 font-bold text-xl mb-2">
							Let´s connect!
						</p>
						<input
							type="text"
							id="name"
							placeholder="Your Name ..."
							name="name"
							className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
						/>
						<input
							type="email"
							id="email"
							placeholder="Your Email ..."
							name="email"
							className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
						/>
						<textarea
							name="textarea"
							id="textarea"
							cols="30"
							rows="4"
							placeholder="Your Message ..."
							className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
						/>
						<button
							type="submit"
							className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-purple-900"
						>
							Send Message
						</button>
					</form>
				</div>
			</Reveal>
		</div>
	);
};

export default Contact;
