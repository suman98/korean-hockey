import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSection = styled(Box)(({ theme }) => ({
  height: '60vh',
  width: '100%',
  marginBottom: theme.spacing(8),
  '& .swiper': {
    height: '100%',
  },
  '& .swiper-slide': {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
}));

const CategoryCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

// Temporary mock data
const heroSlides = [
  {
    id: 1,
    title: 'Welcome to Korean Hockey',
    subtitle: 'Your premier destination for hockey equipment in Korea',
    image: 'https://picsum.photos/1920/600',
  },
  {
    id: 2,
    title: 'Professional Grade Equipment',
    subtitle: 'Shop our selection of top-quality hockey gear',
    image: 'https://picsum.photos/1920/601',
  },
  {
    id: 3,
    title: 'New Arrivals',
    subtitle: 'Check out our latest hockey equipment and accessories',
    image: 'https://picsum.photos/1920/602',
  },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Professional Hockey Stick',
    price: '$199.99',
    image: 'https://picsum.photos/400/300',
    description: 'High-performance carbon fiber hockey stick',
  },
  {
    id: 2,
    name: 'Goalie Pads',
    price: '$499.99',
    image: 'https://picsum.photos/400/301',
    description: 'Professional grade goalie leg pads',
  },
  {
    id: 3,
    name: 'Hockey Skates',
    price: '$299.99',
    image: 'https://picsum.photos/400/302',
    description: 'Premium hockey skates with custom fit',
  },
];

const categories = [
  {
    id: 1,
    name: 'Sticks',
    image: 'https://picsum.photos/400/303',
    description: 'Find the perfect stick for your game',
  },
  {
    id: 2,
    name: 'Protective Gear',
    image: 'https://picsum.photos/400/304',
    description: 'Stay safe on the ice',
  },
  {
    id: 3,
    name: 'Skates',
    image: 'https://picsum.photos/400/305',
    description: 'Professional grade skates',
  },
];

const HomePage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <HeroSection>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {heroSlides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              }}
            >
              <Container maxWidth={false}>
                <Typography variant="h2" component="h1" gutterBottom>
                  {slide.title}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {slide.subtitle}
                </Typography>
                <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
                  Shop Now
                </Button>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
      </HeroSection>

      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Featured Products Section */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
          Featured Products
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Categories Section */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
          Shop by Category
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item key={category.id} xs={12} sm={6} md={4}>
              <CategoryCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </CategoryCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;