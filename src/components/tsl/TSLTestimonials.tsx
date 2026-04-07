interface TestimonialProps {
  name: string;
  quote: string;
}

const Testimonial = ({ name, quote }: TestimonialProps) => (
  <div className="tsl-testimony-card">
    <p className="tsl-gold-text text-sm uppercase tracking-widest mb-4">{name}</p>
    <p className="tsl-body italic leading-relaxed">"{quote}"</p>
  </div>
);

const TSLTestimonials = () => (
  <section className="tsl-section">
    <div className="tsl-divider" />
    <Testimonial
      name="David"
      quote="For eleven years I watched every opportunity fall through or go to someone else. I was $67,000 in debt and seriously considering walking away from everything I'd built. Three weeks after I started the prayer — one phone call changed everything. Within four months I had closed more business than in the previous three years combined. Within eight months I had to turn clients away for the first time in my life. I still can't explain it logically. I just know something shifted that eleven years of trying couldn't shift."
    />
    <Testimonial
      name="Carol"
      quote="When my husband passed he left me with $180,000 in debt. Two credit cards maxed. A second mortgage. A letter from the bank giving me 90 days. Within three weeks the calls from collectors slowed. Within six weeks they stopped completely. Within four months the debt had dissolved in ways I still can't fully account for. I kept the house. For the first time since I lost him — I feel like someone is providing for me again."
    />
    <Testimonial
      name="Anonymous"
      quote="I'd tithed faithfully for nineteen years. Never missed a Sunday. And watched my marriage fall apart anyway. I started the prayer on a Monday morning. By the end of the first week something had shifted in the house. My husband cancelled the lawyer appointment three weeks later. Six months later we renewed our vows. Nineteen years of faithful prayer couldn't do what seven minutes every morning did in six months."
    />
  </section>
);

export default TSLTestimonials;
