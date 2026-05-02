import { motion } from "motion/react";

export default function Stats() {
  const stats = [
    { value: "+457", label: "Partenaires" },
    { value: "+4943", label: "Offres" },
    { value: "100%", label: "Gratuit" },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-6xl font-black mb-2 text-deep-blue">{stat.value}</div>
            <p className="font-bold uppercase text-gray-400 text-sm tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
