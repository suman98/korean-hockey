import { Box, Container, CssBaseline } from '@mui/material';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import { styled } from '@mui/material/styles';

const MainContent = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
}));

const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
  borderTop: `1px solid ${theme.palette.divider}`,
  width: '100%',
}));

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainContent>
      <CssBaseline />
      <Header />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          width: '100%',
          maxWidth: '100vw',
          overflowX: 'hidden',
          py: { xs: 3, sm: 4, md: 6 }
        }}
      >
        {children}
      </Box>
      <ScrollToTop />
      <Footer>
        <Container 
          maxWidth={false} 
          sx={{ 
            px: { xs: 3, sm: 4, md: 6 },
            maxWidth: '100% !important'
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 6, md: 8 }
          }}>
            <Box sx={{ maxWidth: { xs: '100%', md: '300px' } }}>
              <Box component="img" 
                src="https://picsum.photos/200/50" 
                alt="Logo" 
                sx={{ height: 40, mb: 3 }}
              />
              <Box sx={{ 
                color: 'text.secondary',
                fontSize: '0.95rem',
                lineHeight: 1.6
              }}>
                Your premier destination for hockey equipment in Korea. Quality gear, competitive prices, and excellent service.
              </Box>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              gap: { xs: 6, md: 12 },
              flexDirection: { xs: 'column', sm: 'row' },
              width: { xs: '100%', md: 'auto' }
            }}>
              <Box>
                <Box sx={{ 
                  fontWeight: 600, 
                  mb: 2.5,
                  fontSize: '1.1rem'
                }}>Shop</Box>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 1.5, 
                  color: 'text.secondary',
                  fontSize: '0.95rem'
                }}>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Sticks</Box>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Protective Gear</Box>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Skates</Box>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Jerseys</Box>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Accessories</Box>
                </Box>
              </Box>
              <Box>
                <Box sx={{ 
                  fontWeight: 600, 
                  mb: 2.5,
                  fontSize: '1.1rem'
                }}>Support</Box>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 1.5, 
                  color: 'text.secondary',
                  fontSize: '0.95rem'
                }}>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Contact Us</Box>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Shipping Info</Box>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Returns</Box>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>FAQ</Box>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Size Guide</Box>
                </Box>
              </Box>
              <Box>
                <Box sx={{ 
                  fontWeight: 600, 
                  mb: 2.5,
                  fontSize: '1.1rem'
                }}>Company</Box>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 1.5, 
                  color: 'text.secondary',
                  fontSize: '0.95rem'
                }}>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>About Us</Box>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Careers</Box>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Terms & Conditions</Box>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Privacy Policy</Box>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Blog</Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ 
            mt: 6, 
            pt: 4, 
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: '0.9rem'
          }}>
            © {new Date().getFullYear()} Korean Hockey. All rights reserved.
          </Box>
        </Container>
      </Footer>
    </MainContent>
  );
};

export default MainLayout; 