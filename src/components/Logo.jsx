import { BUSINESS_NAME } from '../constants'

const LOGO_SRC = '/trash-panda-logo.png'

/** Full brand mark (mascot + wordmark). Best on dark backgrounds. */
export default function Logo({ className = '', size = 56 }) {
  return (
    <img
      src={LOGO_SRC}
      alt={BUSINESS_NAME}
      width={size}
      height={size}
      className={`h-auto max-w-none object-contain ${className}`}
      style={{ height: size, width: 'auto' }}
      decoding="async"
    />
  )
}
