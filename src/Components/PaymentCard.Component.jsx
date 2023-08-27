export default function PaymentCard({ flipCard }) {
  return (
    <div className="w-full max-w-[400px] max-h-[250px] h-[54vw]">
      <div ref={flipCard} className="w-full max-w-[400px] creditcard">
        <div className="absolute w-full max-w[400px] card">
          <svg viewBox="0 0 750 471">
            <path
              className="fill-red-600"
              d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                            C0,17.9,17.9,0,40,0z"
            />
            <path d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z" />
            <text
              transform="matrix(1 0 0 1 65.1054 241.5)"
              className="fill-white font-semibold text-2xl"
            >
              Card Number
            </text>
            <text
              transform="matrix(1 0 0 1 60.106 295.0121)"
              className="fill-white font-semibold text-5xl"
            >
              0123 4567 8910 1112
            </text>
            <text
              transform="matrix(1 0 0 1 54.1074 389.8793)"
              className="fill-white font-semibold text-2xl"
            >
              Cardholder Name
            </text>
            <text
              transform="matrix(1 0 0 1 54.1064 428.1723)"
              className="fill-white font-semibold text-3xl"
            >
              JOHN DOE
            </text>
            <text
              transform="matrix(1 0 0 1 479.7754 388.8793)"
              className="fill-white font-semibold text-2xl"
            >
              Expiration
            </text>
            <text
              transform="matrix(1 0 0 1 479.4219 433.8095)"
              className="fill-white font-semibold text-4xl"
            >
              01/23
            </text>
            <path
              className="fill-white"
              d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                        c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"
            />
            <rect x="82" y="70" width="1.5" height="60" />
            <rect x="167.4" y="70" width="1.5" height="60" />
            <path
              d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                            c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                            C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                            c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                            c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"
            />
            <rect x="82.8" y="82.1" width="25.8" height="1.5" />
            <rect x="82.8" y="117.9" width="26.1" height="1.5" />
            <rect x="142.4" y="82.1" width="25.8" height="1.5" />
            <rect x="142" y="117.9" width="26.2" height="1.5" />
          </svg>
        </div>
        <div className="absolute w-full max-w[400px] card backside-card">
          <svg viewBox="0 0 750 471">
            <path
              className="fill-button"
              d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                        C0,17.9,17.9,0,40,0z"
            />
            <rect y="61.6" width="750" height="78" />
            <path
              d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                    C707.1,246.4,704.4,249.1,701.1,249.1z"
            />
            <path d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z" />
            <text
              transform="matrix(1 0 0 1 59.5073 228.6099)"
              className="fill-white font-semibold text-3xl"
            >
              John Doe
            </text>
            <text
              transform="matrix(1 0 0 1 621.999 227.2734)"
              className="fill-white font-semibold text-3xl"
            >
              985
            </text>
            <text
              transform="matrix(1 0 0 1 575.083 275.0879)"
              className="fill-white font-semibold text-xl"
            >
              security code
            </text>
            <rect x="58.1" y="378.6" width="375.5" height="13.5" />
            <rect x="58.1" y="405.6" width="421.7" height="13.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
