import Section from "./Section";

export default function About() {
  const info = [
    {
      name: "Name:",
      value: "Trevor Oduol",
    },
    {
      name: "Phone:",
      value: "(+254) 748 092 687 ",
    },
    {
      name: "Experience:",
      value: "2+ years",
    },
    {
      name: "Instagram:",
      value: "@the_Bu_tch_er",
    },
    {
      name: "Nationality:",
      value: "Kenyan",
    },
    {
      name: "Email:",
      value: "trevor254oduol@gmail.com",
    },
    {
      name: "Freelance:",
      value: "English, Swahili",
    },
  ];
  return (
    <Section id="about">
      <div className="max-w-4xl mt-1  xl:mx-auto mx-5 ">
        <h2 className="text-3xl text-center  font-bold">About Me</h2>
        <p className="mt-2  xl:text-2xl text-left  text-gray-400">
          I am a Fullstack (MERN) developer with expertise in Next.js and
          Nest.js. I build scalable and modern web applications using React,
          Next.js and Node.js (
          <span className="text-[#00ff99]">Nest.js | Express.js </span>)
        </p>
        <div className="w-full text-left">
          <ul className="grid mt-2 xl:mt-4 grid-cols-1  xl:grid-cols-2 mx-6 gap-y-6">
            {info.map((item, index) => {
              return (
                <li
                  className=" justify-start gap-6 flex items-start "
                  key={index}
                >
                  <span className=" xl:text-xl text-white/60">{item.name}</span>
                  <span className="text-xl  ">{item.value} </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
