import { profile } from "@/data/portfolio";

const About = () => {
  return (
    <section className="mt-5">
      <div className="max-w-4xl space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">About me</h2>
          <h4 className="font-medium text-gray-400 mb-2">{profile.heroSummary}</h4>
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
