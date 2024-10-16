const translations = {
    es: {
        home: "Inicio",
        aboutMe: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        profilePhoto: "Foto de perfil",
        webDeveloper: "-Desarrollador Web",
        intro: "Soy un desarrollador web apasionado por las computadoras y la programación.",
        downloadCV: "Descargar CV",
        aboutMeText: "Soy Jesús Narvaez, un desarrollador especializado en Java y desarrollo web, con una sólida base en el desarrollo de software y la educación. Me especializo en la creación de aplicaciones de escritorio en Java y soluciones web, además de enseñar inglés y español a estudiantes a través de plataformas virtuales. Actualmente estoy cursando mi Licenciatura en Ciencias de la Computación en la Universidad de la Gente, donde he adquirido valiosa experiencia técnica y desarrollado habilidades de comunicación y trabajo en equipo. Con una pasión por combinar tecnología y educación, siempre estoy dispuesto a enfrentar nuevos desafíos y colaborar en proyectos innovadores.",
        teachingOnline: "Enseñando en línea",
        workingAsDesigner: "Laborando como diseñador",
        teamwork: "Trabajando en equipo",
        skillsIntro: "Poseo un conjunto diverso de habilidades que mejoran mis capacidades como desarrollador y educador. Soy competente en el desarrollo en Java, donde me especializo en crear aplicaciones de escritorio y soluciones robustas. Mi experiencia en desarrollo web me permite crear aplicaciones dinámicas y responsivas. También tengo habilidades en el uso de Microsoft Office, incluidas la creación de macros para automatización. Con excelentes habilidades de comunicación en inglés y español, destaco en entornos colaborativos y me adapto rápidamente a nuevas tecnologías, lo que me convierte en un valioso miembro de cualquier equipo.",
        softSkills: "Habilidades Blandas",
        responsible: "Responsable",
        teamworkSkill: "Trabajo en equipo",
        creative: "Creativo",
        punctual: "Puntual",
        proactive: "Proactivo",
        selfTaught: "Autodidacta",
        projectsSection: "Proyectos",
        project1: "Proyecto 1",
        project2: "Proyecto 2",
        project3: "Proyecto 3",
        project4: "Proyecto 4",
        projectDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        viewDemo: "VER DEMO",
        viewCode: "VER CÓDIGO",
        contactInfo: "Información de contacto",
        contactDescription: "Puedes contactarme a través de cualquiera de los siguientes canales:",
        sendMessage: "Enviar mensaje",
        name: "Nombre",
        email: "Correo electrónico",
        affair: "Asunto",
        message: "Mensaje",
        send: "Enviar",
        socialMedia: "Redes sociales",
        copyright: ", Todos los derechos reservados",


        java: 'Desarrollo de aplicaciones de escritorio robustas que agilizan las interacciones de los usuarios. Aprovechó los principios de programación orientada a objetos para crear código que se puede mantener. Colaboré con equipos para integrar soluciones Java con sistemas de software existentes.'

    },
    en: {
        home: "Home",
        aboutMe: "About me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        profilePhoto: "Profile photo",
        webDeveloper: "-Web Developer",
        intro: "I'm a web developer passionate about computers and coding.",
        downloadCV: "Download CV",
        aboutMeText: "I’m Jesus Narvaez, a skilled Java and web developer with a strong foundation in both software development and education. I specialize in creating desktop applications in Java and web solutions, while also teaching English and Spanish to students through virtual platforms. Currently pursuing my Bachelor’s in Computer Science at the University of the People, I’ve gained valuable technical expertise and developed strong communication and teamwork skills. With a passion for blending technology and education, I’m always eager to tackle new challenges and collaborate on innovative projects.",
        teachingOnline: "Teaching online",
        workingAsDesigner: "Working as a designer",
        teamwork: "Working in a team",
        skillsIntro: "I possess a diverse set of skills that enhance my capabilities as a developer and educator. Proficient in Java development, I specialize in building desktop applications and implementing robust solutions. My experience in web development allows me to create dynamic and responsive applications. I am also skilled in using Microsoft Office, including creating macros for automation. With excellent communication skills in both English and Spanish, I excel in collaborative environments and adapt quickly to new technologies, making me a valuable asset in any team setting.",
        softSkills: "Soft Skills",
        responsible: "Responsible",
        teamworkSkill: "Teamwork",
        creative: "Creative",
        punctual: "Punctual",
        proactive: "Proactive",
        selfTaught: "Self-taught",
        projectsSection: "Projects",
        project1: "Project 1",
        project2: "Project 2",
        project3: "Project 3",
        project4: "Project 4",
        projectDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        viewDemo: "VIEW DEMO",
        viewCode: "VIEW CODE",
        contactInfo: "Contact information",
        contactDescription: "You can contact me through any of the following channels:",
        sendMessage: "Send message",
        name: "Name",
        email: "Email",
        affair: "Affair",
        message: "Message",
        send: "Send",
        socialMedia: "Social media",
        copyright: ", All rights reserved",


        java: 'Developed robust desktop applications that streamline user interactions. Leveraged object-oriented programming principles to create maintainable code. Collaborated with teams to integrate Java solutions with existing software systems.'
    }
};

//here I will do my code
document.getElementById("language-toggle").addEventListener("change", function() {
    const language = this.checked ? 'en' : 'es'; // Assume spanish when checked, unchecked when unchecked
    applyLanguage(language);
  });
  
  function applyLanguage(language) {
    document.querySelector('[href="#home"]').textContent = translations[language].home;
    document.querySelector('[href="#about"]').textContent = translations[language].aboutMe;
    document.querySelector('[href="#skills"]').textContent = translations[language].skills;
    document.querySelector('[href="#projects"]').textContent = translations[language].projects;
    document.querySelector('[href="#contact"]').textContent = translations[language].contact;
    
    document.querySelector('.home__title').textContent = translations[language].webDeveloper;
    document.querySelector('.home__description').textContent = translations[language].intro;
    document.querySelector('.btn--primary').textContent = translations[language].downloadCV;
    document.querySelector('.about__description').textContent = translations[language].aboutMeText;
  


    // Additional elements (assuming you have these on your site)
    document.querySelector('.section__title').textContent = translations[language].aboutMe;
    document.getElementById('SkillsO').textContent = translations[language].skills;
    document.querySelector('.skills__description').textContent = translations[language].skillsIntro;
    document.querySelector('#Java').textContent = translations[language].java;
    
    // Any other text content that needs translation
    document.querySelector('.skills__tags-title').textContent = translations[language].softSkills;
    document.querySelector('.Res').textContent = translations[language].responsible;
    document.querySelector('.Tea').textContent = translations[language].teamwork;
    document.querySelector('.Creat').textContent = translations[language].creative;
    document.querySelector('.Punc').textContent = translations[language].punctual;
    document.querySelector('.Proac').textContent = translations[language].proactive;
    document.querySelector('.Sel').textContent = translations[language].selfTaught;
    
    



    
    document.querySelector('.contact__info-description').textContent = translations[language].contactDescription
    document.querySelector('.footer__description').textContent = translations[language].intro;
    
    
    //The current year and all rights reserve

    const currentYear = new Date().getFullYear();
    
    document.querySelector('.footer__copy').textContent = `© ${currentYear}`+translations[language].copyright;
	

     

  }
  
  export default applyLanguage;