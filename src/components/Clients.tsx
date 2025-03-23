import React from 'react';
import { Box, Container, Typography, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useTheme as useThemeMode } from '../context/ThemeContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Saatvik Nagpal",
    role: "Founder",
    company: "EazyGrad",
    content: "Nihar is a talented, committed individual who will leave no stone unturned in his pursuit to provide the best. His attention to detail and in-depth experience in web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up!",
    rating: 5
  },
  {
    name: "Kira Bragg",
    role: "English Mentor",
    company: "Web Dev English",
    content: "Nihar was a wonderful developer to work with! He anticipated everything I needed to consider for my website. He also went the extra mile and added details that I hadn't considered! He is helping my business grow, and I will definitely work with him again!",
    rating: 5
  },
  {
    name: "Srihari Kestur",
    role: "Founder",
    company: "Harigurus",
    content: "I worked with Nihar to make my website. I am speechless by looking at his work ethic and dedication. Working with him was the best decision I made. His technical expertise and creative approach brought my vision to life perfectly.",
    rating: 5
  },
  {
    name: "Alex Chen",
    role: "Tech Lead",
    company: "InnovateTech Solutions",
    content: "Working with Nihar was an exceptional experience. His deep understanding of modern web technologies and ability to deliver clean, efficient code sets him apart. He not only met our technical requirements but also brought innovative solutions to enhance our project's performance and user experience.",
    rating: 5
  }
];

const Clients: React.FC = () => {
  const { mode } = useThemeMode();

  return (
    <Box
      id="clients"
      sx={{
        py: 10,
        background: mode === 'dark'
          ? 'linear-gradient(180deg, #112240 0%, #0a192f 100%)'
          : 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: mode === 'dark'
            ? 'radial-gradient(circle at 50% 50%, rgba(100,255,218,0.03) 0%, rgba(10,25,47,0) 50%)'
            : 'radial-gradient(circle at 50% 50%, rgba(14,165,233,0.03) 0%, rgba(248,250,252,0) 50%)',
          pointerEvents: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 8,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              background: mode === 'dark'
                ? 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)'
                : 'linear-gradient(45deg, #0ea5e9 30%, #3b82f6 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: mode === 'dark'
                  ? 'linear-gradient(90deg, #64ffda 0%, rgba(100,255,218,0) 100%)'
                  : 'linear-gradient(90deg, #0ea5e9 0%, rgba(14,165,233,0) 100%)',
                borderRadius: '2px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }
            }}
          >
            Client Testimonials
          </Typography>
        </motion.div>

        <Box sx={{ 
          '.swiper': { 
            pb: 6,
            pt: 2,
            px: 2,
          },
          '.swiper-pagination': {
            bottom: '0 !important',
          },
          '.swiper-pagination-bullet': {
            background: mode === 'dark' ? '#64ffda' : '#0ea5e9',
            opacity: 0.3,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&-active': {
              opacity: 1,
            },
          },
          '.swiper-button-next, .swiper-button-prev': {
            color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'scale(1.2)',
            },
            '&::after': {
              fontSize: '24px',
            },
          },
        }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 4,
                      height: '100%',
                      minHeight: '300px',
                      background: mode === 'dark'
                        ? 'rgba(17, 34, 64, 0.5)'
                        : 'rgba(248, 250, 252, 0.5)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid',
                      borderColor: mode === 'dark'
                        ? 'rgba(100,255,218,0.1)'
                        : 'rgba(14,165,233,0.1)',
                      borderRadius: 4,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: 'perspective(1000px)',
                      '&:hover': {
                        transform: 'perspective(1000px) rotateX(5deg)',
                        boxShadow: mode === 'dark'
                          ? '0 20px 40px rgba(100,255,218,0.1)'
                          : '0 20px 40px rgba(14,165,233,0.1)',
                        borderColor: mode === 'dark'
                          ? 'rgba(100,255,218,0.2)'
                          : 'rgba(14,165,233,0.2)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: mode === 'dark'
                          ? 'linear-gradient(90deg, transparent, #64ffda, transparent)'
                          : 'linear-gradient(90deg, transparent, #0ea5e9, transparent)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      },
                    }}
                  >
                    <FormatQuoteIcon 
                      sx={{ 
                        fontSize: '3rem',
                        color: mode === 'dark'
                          ? 'rgba(100,255,218,0.1)'
                          : 'rgba(14,165,233,0.1)',
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                    
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: mode === 'dark' ? '#8892b0' : '#64748b',
                        lineHeight: 1.8,
                        fontStyle: 'italic',
                        position: 'relative',
                        zIndex: 1,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>

                    <Box sx={{ mt: 'auto' }}>
                      <Rating 
                        value={testimonial.rating} 
                        readOnly 
                        sx={{
                          mb: 2,
                          '& .MuiRating-iconFilled': {
                            color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          },
                        }}
                      />
                      
                      <Typography
                        variant="h6"
                        sx={{
                          color: mode === 'dark' ? '#e6f1ff' : '#1e293b',
                          fontWeight: 600,
                          mb: 0.5,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                          fontFamily: 'monospace',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        {testimonial.role} @ {testimonial.company}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Clients; 