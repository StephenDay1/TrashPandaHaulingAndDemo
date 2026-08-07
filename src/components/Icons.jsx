function Icon({ children, className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function PhoneIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z" />
    </Icon>
  )
}

export function CalendarIcon({ className }) {
  return (
    <Icon className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </Icon>
  )
}

export function ChatIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </Icon>
  )
}

export function CheckIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M20 6 9 17l-5-5" />
    </Icon>
  )
}

export function TruckIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </Icon>
  )
}

export function HomeIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M10 20v-6h4v6" />
    </Icon>
  )
}

export function DemolitionIcon({ className }) {
  return (
    <svg
      viewBox="0 0 471.194 471.194"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m435.332,293.684v-74.847c0-6.904-5.597-12.5-12.5-12.5h-16.197v-55.5c0-6.904-5.596-12.5-12.5-12.5s-12.5,5.596-12.5,12.5v55.5h-51.185v-55.5c0-6.904-5.597-12.5-12.5-12.5h-73.884c-5.403,0-10.195,3.472-11.878,8.606l-3.278,9.999-178.158-81.425c-3.016-1.378-6.456-1.502-9.562-0.344-3.107,1.158-5.626,3.502-7.004,6.518l-19.3,42.24c-2.578,5.642-0.628,12.322 4.581,15.691l13.533,8.753v92.147c-19.028,5.446-33,22.986-33,43.74 0,25.089 20.411,45.5 45.5,45.5s45.5-20.412 45.5-45.5c0-20.754-13.972-38.294-33-43.74v-75.977l146.683,94.872v34.268c-20.836,7.139-35.862,26.908-35.862,50.133 0,29.219 23.771,52.99 52.99,52.99h196.392c29.219,0 52.99-23.771 52.99-52.99 0.001-23.226-15.025-42.995-35.861-50.134zm-369.332-9.422c0,11.304-9.196,20.5-20.5,20.5s-20.5-9.196-20.5-20.5 9.196-20.5 20.5-20.5 20.5,9.196 20.5,20.5zm251.949-52.925h92.382v59.49h-180.648v-45.49h41.917c6.903,0 12.5-5.596 12.5-12.5v-69.5h21.349v55.5c0,6.904 5.597,12.5 12.5,12.5zm-58.849-68v57h-24.665l18.687-57h5.978zm-207.371-59.886l169.343,77.397-15.767,48.095c-0.101,0.307-0.188,0.618-0.265,0.931l-162.926-105.378 9.615-21.045zm366.475,268.357h-196.392c-15.434,0-27.99-12.556-27.99-27.99 0-15.434 12.556-27.99 27.99-27.99h196.392c15.434,0 27.99,12.556 27.99,27.99 0,15.434-12.556,27.99-27.99,27.99z" />
    </svg>
  )
}

export function HotTubIcon({ className }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M 11.21875 4.375 C 10.390625 5.398438 10.007813 6.273438 10 7.125 C 9.992188 7.976563 10.371094 8.636719 10.625 9.0625 C 10.878906 9.488281 10.992188 9.703125 11 9.9375 C 11.007813 10.171875 10.929688 10.582031 10.3125 11.375 L 11.875 12.625 C 12.65625 11.617188 13.027344 10.710938 13 9.875 C 12.972656 9.039063 12.589844 8.441406 12.34375 8.03125 C 12.097656 7.621094 11.996094 7.402344 12 7.15625 C 12.003906 6.910156 12.109375 6.453125 12.78125 5.625 Z M 16.21875 4.375 C 15.390625 5.398438 15.007813 6.273438 15 7.125 C 14.992188 7.976563 15.371094 8.636719 15.625 9.0625 C 15.878906 9.488281 15.992188 9.703125 16 9.9375 C 16.007813 10.171875 15.929688 10.582031 15.3125 11.375 L 16.875 12.625 C 17.65625 11.617188 18.027344 10.710938 18 9.875 C 17.972656 9.039063 17.589844 8.441406 17.34375 8.03125 C 17.097656 7.621094 16.996094 7.402344 17 7.15625 C 17.003906 6.910156 17.109375 6.453125 17.78125 5.625 Z M 21.21875 4.375 C 20.390625 5.398438 20.007813 6.273438 20 7.125 C 19.992188 7.976563 20.371094 8.636719 20.625 9.0625 C 20.878906 9.488281 20.992188 9.703125 21 9.9375 C 21.007813 10.171875 20.929688 10.582031 20.3125 11.375 L 21.875 12.625 C 22.65625 11.617188 23.027344 10.710938 23 9.875 C 22.972656 9.039063 22.589844 8.441406 22.34375 8.03125 C 22.097656 7.621094 21.996094 7.402344 22 7.15625 C 22.003906 6.910156 22.109375 6.453125 22.78125 5.625 Z M 3 14 L 3 16 L 4.1875 16 L 5.71875 23.59375 L 5.71875 23.625 C 5.949219 24.65625 6.714844 25.503906 7.71875 25.84375 L 7 28 L 9 28 L 9.65625 26 L 22.34375 26 L 23 28 L 25 28 L 24.28125 25.84375 C 25.328125 25.523438 26.140625 24.683594 26.375 23.625 L 26.375 23.59375 L 27.8125 16 L 29 16 L 29 14 Z M 6.21875 16 L 25.8125 16 L 24.40625 23.21875 C 24.289063 23.652344 23.921875 24 23.40625 24 L 8.6875 24 C 8.152344 24 7.789063 23.644531 7.6875 23.1875 Z" />
    </svg>
  )
}

export function BroomIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M21 3L13.25 10.75M9.46072 11.0727L11 8.5L13.25 10.75M12.9273 14.5393L15.5 13L13.25 10.75M3 21L4.19847 15.0076C4.66453 12.6774 6.71058 11 9.087 11C9.35144 11 9.60505 11.105 9.79203 11.292L12.708 14.208C12.895 14.395 13 14.6486 13 14.913C13 17.2894 11.3226 19.3355 8.99237 19.8015L3 21Z" />
    </Icon>
  )
}

export function FenceIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M1.5 20V8l2.5-3.5L6.5 8v12" />
      <path d="M9.5 20V8l2.5-3.5L14.5 8v12" />
      <path d="M17.5 20V8l2.5-3.5L22.5 8v12" />
      <path d="M0.5 11h1" />
      <path d="M6.5 11h3" />
      <path d="M14.5 11h3" />
      <path d="M22.5 11h1" />
      <path d="M0.5 16h1" />
      <path d="M6.5 16h3" />
      <path d="M14.5 16h3" />
      <path d="M22.5 16h1" />
    </Icon>
  )
}

export function ArrowRightIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  )
}

export function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.5 14.9 9l6.6.6-5 4.4 1.5 6.5L12 17.5 6 20.5l1.5-6.5-5-4.4L9.1 9 12 2.5z" />
    </svg>
  )
}

export function MailIcon({ className }) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </Icon>
  )
}

export function GlobeIcon({ className }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </Icon>
  )
}

export function ShieldIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3z" />
    </Icon>
  )
}

export function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  )
}

export function InstagramIcon({ className }) {
  return (
    <Icon className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </Icon>
  )
}
