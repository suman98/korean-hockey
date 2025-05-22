import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

const ContactPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ContactPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Send us a Message
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="First Name"
                    name="firstName"
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    name="subject"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="Message"
                    name="message"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </ContactPaper>
        </Grid>

        <Grid item xs={12} md={6}>
          <ContactPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <ContactInfo>
              <LocationOnIcon />
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Address
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  123 Hockey Street
                  <br />
                  Seoul, South Korea 12345
                </Typography>
              </Box>
            </ContactInfo>
            <ContactInfo>
              <PhoneIcon />
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Phone
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  +82 2 1234 5678
                </Typography>
              </Box>
            </ContactInfo>
            <ContactInfo>
              <EmailIcon />
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Email
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  info@koreanhockey.com
                </Typography>
              </Box>
            </ContactInfo>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Business Hours
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </Typography>
            </Box>
          </ContactPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage; 