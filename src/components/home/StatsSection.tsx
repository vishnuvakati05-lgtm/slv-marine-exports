import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiTruck, FiPackage, FiAward } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  icon: any;
  color: string;
}

const Counter = ({ value, suffix = '', label, icon: Icon, color }: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      className="relative p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-[#1E293B] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-slate-100 dark:border-white/10 group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgb(0,0,0,0.3)]"
    >
      <div 
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-black/5 dark:to-white/5 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `linear-gradient(to bottom right, transparent, ${color}20)` }}
      />
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-white/5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <div className="flex items-baseline gap-1 mb-2">
        <h4 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
          {count}
        </h4>
        <span className="text-2xl sm:text-3xl font-bold" style={{ color }}>{suffix}</span>
      </div>
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{label}</p>
    </motion.div>
  );
};

const stats: CounterProps[] = [
  { icon: FiGlobe,   value: 2,  suffix: '',  label: 'Primary Markets',    color: '#4A5568' },
  { icon: FiTruck,   value: 500, suffix: '+',  label: 'Successful Shipments', color: '#023047' },
  { icon: FiPackage, value: 100, suffix: '+',  label: 'Product Varieties',    color: '#48CAE4' },
  { icon: FiAward,   value: 15,  suffix: '+',  label: 'Years of Excellence',  color: '#0077B6' },
];

export const StatsSection = () => {
  return (
    <section className="relative py-20 sm:py-32 bg-[#F1FAFC] dark:bg-[#023047] z-10 transition-colors duration-300">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Cg/%3E%3C/svg%3E")' }} />
      
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-sm font-bold tracking-[0.2em] text-[#0077B6] dark:text-[#48CAE4] uppercase mb-3">Our Legacy</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Delivering Excellence <br className="sm:hidden" /> Across India & Nepal
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <Counter key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
