import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="max-w-6xl mt-10  mx-auto">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6 ">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Smart Harvest</h3>
            <p className="mt-2 text-gray-400">
              AI-powered agriculture platform
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
