import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { styled } from '@mui/material/styles';

const FilterDrawer = styled(Drawer)(({ theme }) => ({
  width: 280,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 280,
    boxSizing: 'border-box',
    padding: theme.spacing(2),
  },
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

// Mock data for products
const products = [
  {
    id: 1,
    name: 'Professional Hockey Stick',
    price: 199.99,
    image: 'https://picsum.photos/400/300',
    category: 'Sticks',
    condition: 'New',
  },
  {
    id: 2,
    name: 'Goalie Pads',
    price: 499.99,
    image: 'https://picsum.photos/400/301',
    category: 'Protective Gear',
    condition: 'New',
  },
  {
    id: 3,
    name: 'Hockey Skates',
    price: 299.99,
    image: 'https://picsum.photos/400/302',
    category: 'Skates',
    condition: 'Like New',
  },
  // Add more products as needed
];

const categories = ['Sticks', 'Protective Gear', 'Skates', 'Jerseys', 'Accessories'];
const conditions = ['New', 'Like New', 'Good', 'Fair'];

const ShopPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleConditionChange = (condition: string) => {
    setSelectedConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    );
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesCondition =
      selectedConditions.length === 0 || selectedConditions.includes(product.condition);
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesCondition && matchesPrice && matchesSearch;
  });

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <FilterDrawer
        variant="permanent"
        anchor="left"
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      >
        <Typography variant="h6" gutterBottom>
          Filters
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>Categories</Typography>
          <FormGroup>
            {categories.map((category) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                }
                label={category}
              />
            ))}
          </FormGroup>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>Condition</Typography>
          <FormGroup>
            {conditions.map((condition) => (
              <FormControlLabel
                key={condition}
                control={
                  <Checkbox
                    checked={selectedConditions.includes(condition)}
                    onChange={() => handleConditionChange(condition)}
                  />
                }
                label={condition}
              />
            ))}
          </FormGroup>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>Price Range</Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>${priceRange[0]}</Typography>
            <Typography>${priceRange[1]}</Typography>
          </Box>
        </Box>
      </FilterDrawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%' }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              fullWidth
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton
              color="primary"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              sx={{ display: { sm: 'none' } }}
            >
              <FilterListIcon />
            </IconButton>
          </Box>

          <Grid container spacing={4}>
            {filteredProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard>
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
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {product.category} • {product.condition}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      ${product.price}
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth>
                      View Details
                    </Button>
                  </CardContent>
                </ProductCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ShopPage; 