'use client';

import { useState, useEffect, useRef } from 'react';
import { RESTAURANT_INFO } from '@/lib/utils/constants';
import Image from "next/image";
import { ReactNode } from 'react';


interface ChatChannel {
  name: string;
  icon: ReactNode;
  url: string;
  color: string;
  label: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Chat channels configuration
  const channels: ChatChannel[] = [
    {
      name: 'Messenger',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.448 5.506 3.71 7.206V22l3.404-1.87c.908.252 1.868.387 2.886.387 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm.945 12.44l-2.557-2.73-4.992 2.73 5.49-5.827 2.62 2.73 4.927-2.73-5.488 5.827z"/>
        </svg>
      ),
      url: `https://m.me/${RESTAURANT_INFO.chat.messenger}`,
      color: 'bg-[#0084FF] hover:bg-[#006ED6]',
      label: 'Chat on Messenger'
    },
    {
      name: 'Zalo',
      icon: (
        <Image
      src="/icons/zalo.png"
      alt="Zalo"
      width={32}
      height={32}
      className="object-contain"
    />
      ),
      url: `https://zalo.me/${RESTAURANT_INFO.chat.zalo}`,
      color: 'bg-[#0068FF] hover:bg-[#0052CC]',
      label: 'Chat on Zalo'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      url: `https://wa.me/${RESTAURANT_INFO.chat.whatsapp}`,
      color: 'bg-[#25D366] hover:bg-[#1EBE57]',
      label: 'Chat on WhatsApp'
    }
  ];

  // Close widget when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Keyboard support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  // Track analytics (optional)
  const handleChannelClick = (channelName: string) => {
    // Add your analytics tracking here
    console.log(`Chat widget clicked: ${channelName}`);
    // Example: gtag('event', 'chat_click', { channel: channelName });
  };

  return (
    <div 
      ref={widgetRef}
      className="fixed bottom-6 right-6 z-[9999]"
      role="region"
      aria-label="Chat options"
    >
      {/* Sub-icons */}
      <div className="relative">
        {isOpen && channels.map((channel, index) => (
          <a
            key={channel.name}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleChannelClick(channel.name)}
            className={`
              absolute flex items-center justify-center
              w-12 h-12 md:w-14 md:h-14
              rounded-full shadow-lg text-white
              transition-all duration-300 ease-out
              ${channel.color}
              hover:scale-110 focus:scale-110
              focus:outline-none focus:ring-4 focus:ring-white/50
              group
              ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
            `}
            style={{
              // Desktop: diagonal positioning (45° up-left)
              // Mobile: vertical stacking
              bottom: `${(index + 1) * 72}px`,
              right: '0px',
              transitionDelay: `${index * 50}ms`,
            }}
            aria-label={channel.label}
          >
            {channel.icon}
            
            {/* Tooltip - hidden on mobile */}
            <span className="
              hidden md:block
              absolute right-full mr-3
              px-3 py-2 rounded-lg
              bg-gray-900 text-white text-sm font-medium
              whitespace-nowrap
              opacity-0 group-hover:opacity-100
              transition-opacity duration-200
              pointer-events-none
            ">
              {channel.name}
            </span>
          </a>
        ))}
      </div>

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`
          relative flex items-center justify-center
            w-14 h-14 md:w-16 md:h-16
            bg-ocean hover:bg-ocean-dark
            rounded-full shadow-xl border border-white/20
            backdrop-blur-sm
            text-white transition-all duration-300
            hover:scale-110 focus:scale-110
            focus:outline-none focus:ring-4 focus:ring-ocean/50
          ${isOpen ? 'rotate-90' : 'rotate-0'}
        `}
        aria-label={isOpen ? 'Close chat options' : 'Open chat options'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          // Close icon (X)
          <svg 
            className="w-7 h-7 md:w-8 md:h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        ) : (
          // Message icon
          <svg 
            className="w-7 h-7 md:w-8 md:h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
            />
          </svg>
        )}

        {/* Notification badge (optional) */}
        <span className="
          absolute -top-1 -right-1
          w-5 h-5
          bg-coral rounded-full
          flex items-center justify-center
          text-xs font-bold
          animate-pulse
          hidden
        ">
          1
        </span>
      </button>

      {/* Mobile-only: backdrop overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}