import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import PageHero from '../components/layout/PageHero';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  { name: 'Rajesh Sharma', company: 'Sharma Seafood Distributors', country: 'India', flag: '🇮🇳', city: 'Delhi', rating: 5, text: 'SLV Marine Exports has been our trusted partner for over 5 years. Their shrimp quality is unmatched, and deliveries across North India are always on schedule.' },
  { name: 'Ankit Gupta', company: 'Fresh Catch Trading', country: 'India', flag: '🇮🇳', city: 'Mumbai', rating: 5, text: 'The freshness of their prawns and fish is incredible. Our restaurant clients constantly praise the quality. Excellent customer service as well.' },
  { name: 'Suresh Reddy', company: 'Hyderabad Fish Market', country: 'India', flag: '🇮🇳', city: 'Hyderabad', rating: 5, text: 'We rely on SLV for our premium seafood imports. The packaging is always secure, ensuring minimal loss during transit. Outstanding supplier.' },
  { name: 'Bikash Thapa', company: 'Kathmandu Fresh Foods', country: 'Nepal', flag: '🇳🇵', city: 'Kathmandu', rating: 5, text: 'Cross-border delivery from India to Nepal is seamless with SLV. The cold chain management is flawless and quality never drops.' },
  { name: 'Priya Nair', company: 'Kerala Coastal Foods', country: 'India', flag: '🇮🇳', city: 'Kochi', rating: 5, text: 'From order placement to delivery, the process is seamless. The quality of their frozen fish and prawns has helped us grow our business significantly.' },
  { name: 'Dinesh Shrestha', company: 'Pokhara Seafood Hub', country: 'Nepal', flag: '🇳🇵', city: 'Pokhara', rating: 5, text: 'Reliable supplier with a great variety of products. Their tiger prawns and value-added products are highly requested by our hotel clients. Good communication throughout.' },
  { name: 'Manoj Kumar', company: 'Kolkata Fish Exports', country: 'India', flag: '🇮🇳', city: 'Kolkata', rating: 5, text: 'We demand the best quality for our retail clients, and SLV delivers every single time. The cold chain management is flawless.' },
  { name: 'Arun Joshi', company: 'Chennai Seafood Mart', country: 'India', flag: '🇮🇳', city: 'Chennai', rating: 5, text: 'Excellent traceability and quality practices. It gives us peace of mind knowing we are sourcing responsibly without compromising on quality or freshness.' },
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="bg-[#F1FAFC] dark:bg-[#023047] min-h-screen font-sans relative overflow-hidden transition-colors duration-300">
      <Helmet>
        <title>Client Testimonials | SLV Marine Exports</title>
        <meta name="description" content="Read what our clients across India and Nepal say about SLV Marine Exports' premium seafood products and services." />
      </Helmet>

      <PageHero
        badge="Client Stories"
        title="What Our Clients"
        highlight="Say"
        subtitle="Trusted by distributors, restaurants, and retailers across India and Nepal."
      />

      {/* Background decorations */}
      <div className="absolute top-[30%] left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#0077B6] rounded-full mix-blend-screen filter blur-[100px] opacity-10 dark:opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#00B4D8] rounded-full mix-blend-screen filter blur-[100px] opacity-10 dark:opacity-20"></div>
      </div>

      <div className="relative z-10">
        {/* Carousel Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-14"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white dark:bg-white/5 backdrop-blur-md border border-slate-100 dark:border-white/10 p-8 rounded-2xl h-full flex flex-col text-slate-800 dark:text-white shadow-sm hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <FaQuoteLeft className="text-3xl text-[#0077B6] dark:text-[#48CAE4] opacity-60" />
                      <div className="flex text-[#D4AF37]">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < Math.floor(testimonial.rating) ? '' : 'opacity-30'} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-8 flex-grow italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center mt-auto pt-4 border-t border-slate-100 dark:border-white/10">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=005B96&color=fff&size=80`} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 border-2 border-[#00B4D8]"
                      />
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center mt-1">
                          <span className="mr-1">{testimonial.flag}</span> {testimonial.city}, {testimonial.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div 
              className="bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-100 dark:border-white/10 rounded-xl p-6 text-slate-800 dark:text-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#0077B6] dark:text-[#48CAE4] mb-2">4.9/5</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Average Client Rating</div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-100 dark:border-white/10 rounded-xl p-6 text-slate-800 dark:text-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-[#0077B6] dark:text-[#48CAE4] mb-2">200+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Active B2B Clients</div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-100 dark:border-white/10 rounded-xl p-6 text-slate-800 dark:text-white shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-[#0077B6] dark:text-[#48CAE4] mb-2">98%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Client Retention Rate</div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Mobile bottom nav spacer */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
};

export default TestimonialsPage;
