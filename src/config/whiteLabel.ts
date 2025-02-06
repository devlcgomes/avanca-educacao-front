interface WhiteLabelConfig {
  companyName: string;
  logoUrl: string;
  favicon: string;
  contactEmail: string;
  supportPhone: string;
  termsUrl: string;
  privacyUrl: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  certificateSignature?: {
    name: string;
    role: string;
    imageUrl: string;
  };
}

const whiteLabelConfig: WhiteLabelConfig = {
  companyName: import.meta.env.VITE_COMPANY_NAME || 'Nome Padrão',
  logoUrl: import.meta.env.VITE_LOGO_URL || '/default-logo.png',
  favicon: import.meta.env.VITE_FAVICON_URL || '/favicon.ico',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'contato@empresa.com',
  supportPhone: import.meta.env.VITE_SUPPORT_PHONE || '0800-000-0000',
  termsUrl: import.meta.env.VITE_TERMS_URL || '/terms',
  privacyUrl: import.meta.env.VITE_PRIVACY_URL || '/privacy',
  socialMedia: {
    facebook: import.meta.env.VITE_FACEBOOK_URL,
    instagram: import.meta.env.VITE_INSTAGRAM_URL,
    linkedin: import.meta.env.VITE_LINKEDIN_URL,
  },
  certificateSignature: {
    name: import.meta.env.VITE_SIGNATURE_NAME || 'Nome do Diretor',
    role: import.meta.env.VITE_SIGNATURE_ROLE || 'Diretor de Educação',
    imageUrl: import.meta.env.VITE_SIGNATURE_IMAGE || '/default-signature.png',
  }
};

export default whiteLabelConfig; 