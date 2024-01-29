import React from "react";
import { motion } from "framer-motion";
import "./projects.css";

const MyComponent = ({ isFlexReverse, projectname, description, animationDuration, extraskils }) => {
  const flexDirection = isFlexReverse ? "row-reverse" : "row";

  return (
    <motion.div
      className="swap-wrapper"
      id="major-wrapping"
      style={{ flexDirection }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: animationDuration }}
    >
      
      <motion.div className="project-description " initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h4>{projectname}</h4>
       

        <p>{extraskils}</p>
      </motion.div>
      <motion.div className="image-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <p>{ description}</p>
      </motion.div>
    </motion.div>
  );
};

function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="project__text">
        <motion.div className="button-wrapper reveal fade-top" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <button className="about_me_button" id="projects">My work</button>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
          Some of the noteworthy projects I have managed
        </motion.h1>
      </div>

      <MyComponent isFlexReverse={true} projectname="Hatespeech campaign:
" description="In a commendable initiative, an advocate for equity and development has taken a bold step to address the pressing issue of hate speech in Bafoussam, Cameroon. This campaign is organized under the banner of the #defyhatenow initiative, a movement that actively engages in community-based and data-driven solutions to counteract hate speech, disinformation, and misinformation In summary, the hate speech campaign in Bafoussam organized by an advocate for equity and development, and sponsored by #defyhatenow, exemplifies a proactive and comprehensive approach to address the challenges posed by hate speech and misinformation. By mobilizing communities and fostering media and information literacy, the initiative not only combats hate speech but also contributes to the creation of a more informed and resilient society.
" animationDuration={0.5} extraskils="Combating Hate Speech in Bafoussam: #defyhatenow Advocacy for Equity and Development" />
      <MyComponent isFlexReverse={true} projectname="Gender equality advocacy campaign
" description="The overarching goal of the campaign is to address the multifaceted challenges faced by young girls, particularly between the ages of 13 to 25, by providing them with opportunities for education and personal development. The heart of the initiative lies in the commitment to increase the number of girls attaining university degrees, thereby breaking the cycle of poverty and cutting down on school dropout rates. 'No Girl Left Behind' has strategically aligned its efforts with the advocacy for equity and development, recognizing that achieving gender equality is pivotal for the overall progress of societies. The campaign operates on the principle that empowering young girls through education not only transforms individual lives but also contributes to building more inclusive and prosperous communities." animationDuration={0.5} extraskils="Empowering Girls: A Gender Equality Advocacy Campaign by Advocate for Equity and Development, Sponsored by No Girl Left Behind" />
      <MyComponent isFlexReverse={true} projectname="Youth empowerment Campaign on entrepreneurship and wealth creation
" description="The Youth Empowerment and Auto Employment Network (YEAEN) has embarked on a transformative mission to empower the youth by fostering innovation, entrepreneurship, leadership, and community engagement. With a vision of creating a network of exceptional entrepreneurs and leaders, YEAEN envisions a future where the boundless potential of youth drives positive change and contributes to the socio-economic growth of communities.
 YEAEN aspires to cultivate a thriving ecosystem of empowered young minds, equipped with the skills, knowledge, and resources to become the architects of their own success and catalysts of positive change. Envisioning a future empowered by youthful entrepreneurship, the organization aims to ignite the spark of innovation, nurture entrepreneurial spirit, cultivate leadership potential, and harness community engagement.
" animationDuration={0.5} extraskils="Igniting Futures: Youth Empowerment and Auto Employment Network's Entrepreneurship and Wealth Creation Campaign
" />

      <MyComponent isFlexReverse={true} projectname="TiC bootcamp
" description="The goals of the TiC bootcamp is to provide intensive, comprehensive technical training to equip 400-600 participants with the skills they need to work in tech jobs. And to also inspire younger participants to have useful holidays by engaging in interesting tech activities.
In addition, the program trained and provided access to both online and in person practical learning opportunities  in web development, graphic, UI/UX design, robotics and programming in 4 regions.
"/>
      <MyComponent projectname="Startup Accelerator program" isFlexReverse={true} description="The fellowship also featured a final pitching competition for the best startup founders. The winner of the competition was awarded a prize of 1 million Cameroonian francs. The TiC Startup Accelerator Program is a short-term intensive program for impact-driven and motivated tech startups in their early stages that are trying to drive growth as quickly as possible. The program is fast-paced, intensive, and hands-on. It aims to provide strategic support to advance the scaling of innovative Cameroonian startups.
The program was launched in the month of November and ran for 6 months. The first 5 months were all about an online incubator program for 100 tech impact-driven startups in Cameroon. After which 30 best projects were invited to Yaounde for a 3-day fellowship. The participants of the fellowship will then after the just ended fellowship have 2 months of mentorship on their various projects."/>
      
    </div>
  );
}

export default Projects;