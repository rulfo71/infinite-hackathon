
export default function Hopr (props) {
    return (
        <svg
        viewBox="0 0 256 256"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
          verticalAlign: "middle"
        }}
        {...props}
      >
        <circle
          cx={96}
          cy={106}
          r={79}
          style={{
            fill: "#fdffa0",
          }}
          transform="translate(-27.544 -43.747) scale(1.62025)"
        />
        <path
          d="M46.4 24.6c-.7-.1-1.3-.1-2-.1-4.9 0-9.7 2-14 5.8-2 1.8-3.9 4-5.6 6.4-.3-9.3-.8-19.2-1.8-29.3H10.5c2.7 28.4 2.4 53.2 1.9 75v.1h12.5c.4-21.8 5.8-35.8 13.9-43 2.2-1.9 4.3-2.8 6.2-2.6 9.9 1.1 8.3 31.9 7.6 45.6h12.5c.5-10.1 1.1-22.4-.3-33-2-15.5-8.3-23.8-18.4-24.9Z"
          style={{
            fill: "url(#a)",
            fillRule: "nonzero",
          }}
          transform="translate(46.149 31.39) scale(2.14926)"
        />
        <defs>
          <linearGradient
            id="a"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(-90 61.53 23.38) scale(62.8837)"
          >
            <stop
              offset={0}
              style={{
                stopColor: "#0000b4",
                stopOpacity: 1,
              }}
            />
            <stop
              offset={0.01}
              style={{
                stopColor: "#0000b4",
                stopOpacity: 1,
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "#000050",
                stopOpacity: 1,
              }}
            />
          </linearGradient>
        </defs>
      </svg>
    )
}


