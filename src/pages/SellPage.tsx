import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  InputAdornment,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const SellPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const ImageUploadBox = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const categories = [
  'Sticks',
  'Protective Gear',
  'Skates',
  'Jerseys',
  'Accessories',
];

const conditions = ['New', 'Like New', 'Good', 'Fair'];

const SellPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    condition: '',
    price: '',
    description: '',
    images: [] as File[],
  });

  const [errors, setErrors] = useState({
    title: false,
    category: false,
    condition: false,
    price: false,
    description: false,
    images: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSelectChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages],
      }));
      setErrors((prev) => ({
        ...prev,
        images: false,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate form
    const newErrors = {
      title: !formData.title,
      category: !formData.category,
      condition: !formData.condition,
      price: !formData.price,
      description: !formData.description,
      images: formData.images.length === 0,
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        Sell Your Hockey Equipment
      </Typography>

      <SellPaper elevation={3}>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Product Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                error={errors.title}
                helperText={errors.title ? 'Title is required' : ''}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required error={errors.category}>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleSelectChange}
                  label="Category"
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
                {errors.category && (
                  <FormHelperText>Category is required</FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required error={errors.condition}>
                <InputLabel>Condition</InputLabel>
                <Select
                  name="condition"
                  value={formData.condition}
                  onChange={handleSelectChange}
                  label="Condition"
                >
                  {conditions.map((condition) => (
                    <MenuItem key={condition} value={condition}>
                      {condition}
                    </MenuItem>
                  ))}
                </Select>
                {errors.condition && (
                  <FormHelperText>Condition is required</FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                error={errors.price}
                helperText={errors.price ? 'Price is required' : ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                error={errors.description}
                helperText={errors.description ? 'Description is required' : ''}
              />
            </Grid>

            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                style={{ display: 'none' }}
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <ImageUploadBox>
                  <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                  <Typography variant="h6" gutterBottom>
                    Upload Images
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Click to upload or drag and drop
                    <br />
                    PNG, JPG up to 5MB
                  </Typography>
                  {formData.images.length > 0 && (
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      {formData.images.length} image(s) selected
                    </Typography>
                  )}
                </ImageUploadBox>
              </label>
              {errors.images && (
                <FormHelperText error>At least one image is required</FormHelperText>
              )}
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                List Item for Sale
              </Button>
            </Grid>
          </Grid>
        </Box>
      </SellPaper>
    </Container>
  );
};

export default SellPage; 