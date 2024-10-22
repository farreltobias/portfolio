import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const Sparkle: React.FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={63}
    height={64}
    viewBox="0 0 63 64"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_512_1696)">
      <path
        d="M31.6812 1.15643C30.3133 4.66787 30.7697 7.9234 30.9023 11.6305C31.0746 16.4442 31.2209 21.2275 31.5705 26.0327"
        stroke="#7DFFAF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M31.2878 34.6526C30.2862 39.4753 30.7367 44.1761 31.1538 49.0521C31.55 53.6827 32.1059 58.296 32.6527 62.9105"
        stroke="#7DFFAF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M0.864136 35.784C3.93677 34.4168 6.83342 34.3613 10.1404 34.1369C15.1437 33.7973 19.9638 33.151 24.8808 32.1933"
        stroke="#7DFFAF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M36.0099 30.7792C44.5059 30.2352 52.8682 28.8246 61.2932 27.6558"
        stroke="#7DFFAF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M37.5946 26.6305L40.3177 21.6902"
        stroke="#7DFFAF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M25.1265 38.5921L21.8199 41.8597"
        stroke="#7DFFAF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M40.1036 37.3085L43.3909 39.5258"
        stroke="#7DFFAF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24.0373 23.7325C20.4755 22.6545 17.3061 21.0713 13.9229 19.5508"
        stroke="#7DFFAF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_512_1696">
        <rect width="62.4762" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
export { Sparkle }
