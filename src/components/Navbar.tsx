import { motion } from "motion/react";

export default function Navbar() {
  const navLinks = [
    { name: "Processus", href: "#process" },
    { name: "Avantages", href: "#benefits" },
    { name: "Avis", href: "#testimonials" },
    { name: "L'Expérience", href: "#transformation" },
  ];

  return (
    <nav className="absolute top-0 w-full flex justify-between items-center px-8 py-6 z-50 max-w-7xl left-1/2 -translate-x-1/2">
      <motion.div 
        initial={{ opacity: 10, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <img 
          src="https://cdn.coincarriere.com/wp-content/uploads/2025/11/1762829178875-w23oav1d4pb.png" 
          alt="CoinCarrière" 
          className="h-14 w-auto"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex space-x-8 font-medium text-white"
      >
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="hover:text-lime-green transition-colors"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </nav>
  );
}
