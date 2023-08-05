import { useTheme } from "./ThemeContext";
const About = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "AJAX" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "PHP" },
    { skill: "Symfony" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "SQL" },
    { skill: "Postman" },
    { skill: "React Native" },
    { skill: "jQuery" },
    { skill: "UML" },
    { skill: "Machine Learning" },
    { skill: "GitHub" },
  ];
  return (
    <section id="about">
      <h1
        className={`font-poppins text-center font-bold text-4xl ${
          isDarkMode ? "text-white" : "text-secondary"
        }`}
      >
        About me
        <hr className="w-6 h-1 mx-auto my-4 bg-[#f1bb2b] border-0 rounded"></hr>
      </h1>
      <div
        className={`flex flex-col px-14 justify-center gap-6 align-top md:flex-row md:text-left  ${
          isDarkMode ? " text-base " : "text-primary"
        } `}
      >
        <div className="md:w-1/2 m-4">
          <h1
            className={`text-center text-2xl font-bold mb-6 md:text-left ${
              isDarkMode ? "text-white" : "text-secondary"
            } `}
          >
            Get to know me!
          </h1>
          <p>
            Hi, my name is Takoua and I am a{" "}
            <span className="font-bold text-[#f1bb2b]">
              {"highly ambitious"}
            </span>
            ,
            <span className="font-bold text-[#f1bb2b]">
              {" self-motivated"}
            </span>
            , and
            <span className="font-bold text-[#f1bb2b]">{" driven"}</span>{" "}
            software engineer based in Tunis, Tunisia.
          </p>
          <br />
          <p>
            I graduated from the Higher Institute of Applied Science and
            Technology of Sousse, Sousse in 2023 with a Licence degree in
            Computer science and Information systems and have been working to
            improve my skill ever since.
          </p>
          <br />
          <p>
            I have a wide range of hobbies and passions that keep me busy. From
            reading, playing sports, playing video games, I am always seeking
            new experiences and love to keep myself engaged and learning new
            things.
          </p>
          <br />
          <p>
            I believe that you should{" "}
            <span className="font-bold text-[#f1bb2b]">never stop growing</span>{" "}
            and that&#39;s what I strive to do, I have a passion for technology
            and a desire to always push the limits of what is possible. I am
            excited to see where my career takes me and am always open to new
            opportunities. 🙂
          </p>
        </div>
        <div className="text-center md:w-1/2 md:text-left m-4">
          <h1
            className={`text-2xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-secondary"
            }`}
          >
            My Skills
          </h1>
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className={`bg-base px-4 py-2 mr-2 mt-2 rounded font-semibold ${
                    isDarkMode ? "text-secondary" : "text-primary"
                  }`}
                >
                  {item.skill}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
