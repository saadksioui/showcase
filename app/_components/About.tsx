import { profile } from "@/data/portfolio";

const About = () => {
  return (
    <section className="mt-5">
      <div className="max-w-4xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">About me</h1>
          <h3 className="text-lg font-medium text-gray-400">{profile.heroSummary}</h3>
        </div>

        <div className="text-gray-300 text-sm space-y-3">
          {profile.about.map((section, index) => (
            <p key={index}>{section}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
