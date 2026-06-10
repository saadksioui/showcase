const About = () => {
  return (
    <section id="about" className="rounded-[2rem] border border-white/10 bg-card/85 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
      <div className="max-w-4xl space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">About me</p>
          <h2 className="text-3xl font-heading font-semibold tracking-tight text-foreground sm:text-4xl">
            Passionate about building thoughtful, modern web experiences.
          </h2>
        </div>

        <div className="space-y-4 text-base leading-8 text-muted-foreground">
          <p>
            Hi, I'm Saad Ksioui, a software developer who loves creating useful programs. Web development is one of the best places for solving difficult problems and crafting interfaces that feel modern, polished, and efficient.
          </p>
          <p>
            Whether it's a community platform, a SaaS dashboard, or a portfolio experience, I enjoy turning ideas into products with strong design, clear architecture, and a people-first mindset.
          </p>
          <p>
            I study at 1337 Coding School to sharpen my problem solving skills and expand my understanding of software engineering, systems, and programming fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
