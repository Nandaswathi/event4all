import React from 'react';
import { Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';

interface CustomSocialShareProps {
  url: string;
  title: string;
}

export default function CustomSocialShare({ url, title }: CustomSocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodedTitle} ${encodedUrl}`, '_blank');
  };

  return (
    <div className="flex space-x-4">
      <button 
        onClick={shareOnFacebook}
        className="bg-[#3b5998] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook size={18} />
      </button>

      <button 
        onClick={shareOnTwitter}
        className="bg-[#1DA1F2] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter size={18} />
      </button>

      <button 
        onClick={shareOnLinkedIn}
        className="bg-[#0077b5] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={18} />
      </button>

      <button 
        onClick={shareOnWhatsApp}
        className="bg-[#25D366] text-white p-2 rounded-full hover:bg-opacity-90 transition-colors"
        aria-label="Share on WhatsApp"
      >
        <Share2 size={18} />
      </button>
    </div>
  );
}