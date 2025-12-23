import Section from "./Section";

export default function About() {
  const info = [
    { name: "Name:", value: "Trevor Oduol" },
    { name: "Phone:", value: "(+254) 748 092 687" },
    { name: "Experience:", value: "2+ years" },
    { name: "Instagram:", value: "@the_Bu_tch_er" },
    { name: "Nationality:", value: "Kenyan" },
    { name: "Email:", value: "trevor254oduol@gmail.com" },
    { name: "Freelance:", value: "English, Swahili" },
  ];

  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-3xl text-center font-bold">About Me</h2>

        <p className="mt-4 text-gray-400 text-base xl:text-2xl">
          I am a Fullstack (MERN) developer with expertise in Next.js and
          Nest.js. I build scalable and modern web applications using React,
          Next.js and Node.js (
          <span className="text-[#00ff99]"> Nest.js | Express.js </span>)
        </p>

        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-10 mt-6">
          {info.map((item, index) => (
            <li
              key={index}
              className="
                flex flex-col
                sm:flex-row
                sm:items-center
                gap-2 sm:gap-4
                wrap-break-words
              "
            >
              <span className="text-white/60 text-sm xl:text-lg whitespace-nowrap">
                {item.name}
              </span>
              <span className="text-base xl:text-lg break-all">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
