import React from 'react'

const Logo = () =>
  <svg version="1.1" viewBox="20 20 280 270" id="paralogo">
    <defs>
      <filter id="off-svg" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feComponentTransfer in="SourceAlpha">
              <feFuncR type="discrete" tableValues="10"/>
              <feFuncG type="discrete" tableValues="10"/>
              <feFuncB type="discrete" tableValues="10"/>
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="2.5"/>
          <feOffset dx="0" dy="0" result="shadow"/>
          <feComposite in="SourceGraphic" in2="shadow" operator="over"/>
       </filter>

      <filter id="blue-glow" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feComponentTransfer in="SourceAlpha">
              <feFuncR type="discrete" tableValues="88"/>
              <feFuncG type="discrete" tableValues="164"/>
              <feFuncB type="discrete" tableValues="218"/>
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="2.5"/>
          <feOffset dx="0" dy="0" result="shadow"/>
          <feComposite in="SourceGraphic" in2="shadow" operator="over"/>
       </filter>

        <filter id="lib-glow" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feComponentTransfer in="SourceAlpha">
              <feFuncR type="discrete" tableValues="255"/>
              <feFuncG type="discrete" tableValues="230"/>
              <feFuncB type="discrete" tableValues="0"/>
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="3"/>
          <feOffset dx="0" dy="0" result="shadow"/>
          <feComposite in="SourceGraphic" in2="shadow" operator="over"/>
       </filter>
    </defs>
    <g id="arcs" className="arcs layer" data-depth="-0.01">
      <path id="arch1" className="arch-warp arch arch-activated" d="M45.5,164.9c-1.6,0-2.9-1.2-3-2.8c-0.3-3.3-0.4-6.6-0.4-9.9c-0.1-62.3,50.7-113,113-113
        c25.7,0,50.9,8.9,70.9,25c19.7,15.9,33.6,38.1,39.3,62.6c0.4,1.6-0.6,3.3-2.3,3.6c-1.6,0.4-3.3-0.6-3.6-2.3
        c-5.3-23.2-18.5-44.2-37.2-59.3c-18.9-15.2-42.7-23.6-67.1-23.6c-59,0-107,48-107,107c0,3.1,0.1,6.3,0.4,9.4
        c0.1,1.7-1.1,3.1-2.8,3.3C45.7,164.9,45.6,164.9,45.5,164.9"/>
      <path id="arch2" className="arch-warp arch stutter-2 arch-activated" d="M154.2,265.3c-25.9,0-50.3-8.5-70.5-24.6c-1.1-0.9-2.2-1.8-3.3-2.7c-1.3-1.1-1.4-3-0.3-4.3s3-1.4,4.3-0.3
        c1,0.9,2.1,1.7,3.1,2.6c19.1,15.3,42.2,23.3,66.7,23.3c41,0,77.7-22.8,95.9-59.6c0.7-1.5,2.6-2.1,4.1-1.4
        c1.5,0.7,2.1,2.6,1.4,4.1C236.3,241.2,197.5,265.3,154.2,265.3"/>
    </g>
    <g id="lib" className="lib layer">
      <g className="layer" id="life_is" data-depth="0.03">
        <g className="life_is-warp">
          <g id="life" className="life">
            <radialGradient id="SVGID_1_" cx="118.4311" cy="126.5861" r="30.6611" gradientUnits="userSpaceOnUse">
              <stop  offset="4.384566e-04" style={{stopColor:'#F2ECAF'}} />
              <stop  offset="1" style={{stopColor:'#F3EC5B'}} />
            </radialGradient>
            <path id="lfe" className="lfe-fill lib-activated" d="M74.5,157.5c0.1,0,0.2,0,0.3,0c5.1-0.5,10.5-1.2,16-1.9c1.4-0.2,2.3-1.5,2.2-2.8c-0.2-1.4-1.5-2.3-2.8-2.2
              c-4.4,0.6-8.8,1.1-13,1.6l1.9-42.4c0.1-1.4-1-2.6-2.4-2.6c-1.4-0.1-2.6,1-2.6,2.4l-2,45.3c0,0.7,0.3,1.4,0.8,1.9
              C73.2,157.2,73.8,157.5,74.5,157.5 M116.4,122.2L116.4,122.2c1.4,0,2.5-1.1,2.6-2.4l0.3-12.3c4.5-0.6,9.2-1.3,14.4-2.1
              c1.4-0.2,2.3-1.5,2.1-2.9s-1.5-2.3-2.9-2.1c-6,0.9-11.3,1.7-16.4,2.4c-1.2,0.2-2.1,1.2-2.2,2.4l-0.3,14.5
              C114,121.1,115.1,122.2,116.4,122.2 M115.7,151.6L115.7,151.6c1.4,0,2.5-1.1,2.6-2.4l0.5-19.9c3.8-0.6,7.8-1.2,12.1-2
              c1.4-0.2,2.3-1.5,2.1-2.9s-1.5-2.3-2.9-2.1c-5,0.8-9.7,1.6-14.1,2.3c-1.2,0.2-2.1,1.2-2.1,2.4l-0.5,22
              C113.2,150.4,114.3,151.6,115.7,151.6 M145.5,117.1L145.5,117.1c1.4,0,2.5-0.9,2.5-2.3l0.1-11.9c4.4-0.7,8.9-1.4,13.3-2.1l1.1-0.1
              c1.4-0.2,2.3-1.5,2.1-2.9s-1.5-2.3-2.9-2.1l-1.1,0.2c-5.1,0.8-10.3,1.7-15.4,2.5c-1.2,0.2-2.1,1.2-2.1,2.5l-0.1,13.9
              C143,116.2,144.1,117.1,145.5,117.1 M145.3,146.2c0.2,0,0.3,0,0.5,0c5.3-1,10.6-2.1,15.9-3.1l1-0.2c1.4-0.3,2.3-1.6,2-3
              s-1.6-2.2-3-2l-1,0.2c-4.3,0.8-8.6,1.7-12.9,2.5l0.1-16.3c4-0.7,8-1.4,12.1-2.2c1.4-0.2,2.3-1.6,2-2.9c-0.2-1.4-1.6-2.3-2.9-2
              c-4.7,0.8-9.4,1.7-14.1,2.5c-1.2,0.2-2.1,1.2-2.1,2.5l-0.2,21.5c0,0.8,0.3,1.5,0.9,2C144.1,146,144.7,146.2,145.3,146.2"/>
          </g>
          <g id="just_the_i" className="life">
            <radialGradient id="SVGID_2_" cx="102.0991" cy="129.35" r="13.7387" gradientUnits="userSpaceOnUse">
              <stop  offset="4.384566e-04" style={{stopColor:'#F2ECAF'}} />
              <stop  offset="1" style={{stopColor:'#F3EC5B'}} />
            </radialGradient>
            <path id="just_the_i" className="i-fill flicker lib-activated" d="M101.3,154.1L101.3,154.1c1.4,0,2.6-1.2,2.6-2.5l1.4-44.4c0-1.4-1-2.6-2.4-2.6s-2.5,1-2.6,2.4l-1.4,44.4
              C98.8,152.8,99.9,154.1,101.3,154.1"/>
          </g>
          <g id="is" className="is">
            <radialGradient id="SVGID_3_" cx="204.7058" cy="113.2239" r="17.5083" gradientUnits="userSpaceOnUse">
              <stop  offset="4.384566e-04" style={{stopColor:'#F2ECAF'}} />
              <stop  offset="1" style={{stopColor:'#F3EC5B'}} />
            </radialGradient>
            <path id="is_path" className="is-fill stutter lib-activated" d="M190.9,94c0-1.4-1.2-2.6-2.6-2.5c-1.4,0-2.5,1.2-2.5,2.6l0.6,41.7c0,1.4,1.1,3,2.5,3l0,0c1.4,0,2.5-1.7,2.5-3.1
              L190.9,94z M212,133.6c7.8-1.3,11.8-7,11.6-11.8c-0.1-4.4-1.1-8.5-10.9-14c-8-4.5-8.1-6.5-8.1-7.1v-0.1c-0.1-3.2,0.6-7.1,6.6-7.9
              c2.3-0.3,4,0,5.1,0.9c1.3,1.1,1.4,2.9,1.4,3l0,0c0,0.1,0,0.2,0,0.3c0,1.3,1.1,2.4,2.4,2.4c0.9,0,1.7-0.5,2.1-1.2
              c1.4-1.9-0.7-5.9-0.7-5.9c-1.1-2-4.1-5.3-10.9-4.4c-4.2,0.6-11.3,3-11,13.1c0.1,3.3,1.9,6.5,10.7,11.3c8.2,4.6,8.2,7.1,8.3,9.9
              c0.1,1.7-1.7,5.6-7.4,6.6c-1.8,0.3-4.2,0.4-5.5-0.7c-0.9-0.7-1.3-2-1.4-3.9c0-1.4-1.2-2.5-2.6-2.5c-1.4,0-2.5,1.2-2.5,2.6
              c0.1,3.4,1.2,6,3.2,7.7c1.6,1.4,3.8,2,6.4,2C209.9,133.9,210.9,133.8,212,133.6"/>
          </g>
        </g>
      </g>
      <g id="beautiful" className="beautiful layer" data-depth="0.08">
        <radialGradient id="SVGID_4_" cx="161.25" cy="183.2466" r="77.1777" gradientUnits="userSpaceOnUse">
          <stop  offset="4.384566e-04" style={{stopColor:'#F2ECAF'}} />
          <stop  offset="1" style={{stopColor:'#F3EC5B'}} />
        </radialGradient>
        <path id="btfl-path" className="btful-warp beautiful-fill lib-activated" d="M226.2,145.2c1.4-0.2,2.7,0.6,2.9,2c0.2,1.4-0.7,2.6-2.1,2.8c-4.8,0.8-9.7,1.4-14.8,2.4l0.3,10.8
          c0,1.4-1.1,1.9-2.4,1.9H210c-1.4,0-2.5-0.4-2.5-1.7l-0.4-12.6c0-1.2,0.8-2.3,2.1-2.5C215.2,147.1,220.8,146.1,226.2,145.2
           M291.6,176c-4.6,0.2-9.3,0.5-14,1l-2.4-35.6c-0.1-1.4-1.3-2.4-2.7-2.3c-1.4,0.1-2.4,1.3-2.3,2.7l2.6,38.1c0,0.7,0.4,1.3,0.9,1.7
          s1,0.6,1.6,0.6c0.1,0,0.2,0,0.2,0c5.6-0.5,11.1-0.9,16.4-1.2c1.4-0.1,2.5-1.2,2.4-2.6C294.2,177,293,175.9,291.6,176 M223.8,164.7
          c-4.7,0.8-9.5,1.8-14.6,2.8c-1.2,0.2-2.1,1.3-2,2.5l0.6,19.5c0,1.4,1.2,1.6,2.5,1.6h0.1c1.4,0,2.5-0.4,2.4-1.8l-0.5-17.8
          c4.3-0.9,8.4-1.4,12.5-2.2c1.4-0.2,2.3-1.5,2-2.8C226.5,165.3,225.2,164.5,223.8,164.7 M84.5,171.5c-5.8,0.8-11.5,1.5-16.9,2.1
          c-1.2,0.1-2.2,1.1-2.2,2.4l-0.7,15.1c-0.1,1.4,1,2.6,2.4,2.6h0.1c1.3,0,2.4-1,2.5-2.4l0.6-12.9c4.8-0.5,9.9-1.2,15-1.9
          c1.4-0.2,2.3-1.5,2.1-2.8C87.1,172.2,85.8,171.3,84.5,171.5 M193.9,150.3c-1.4,0-2.5,1.2-2.5,2.6l0.8,40.3c0,1.4,1.1,1.8,2.5,1.8
          l0,0c1.4,0,2.5-0.5,2.5-1.9l-0.8-40.6C196.4,151.1,195.2,150.2,193.9,150.3 M260,142.7L260,142.7c-0.3-1.1-1.3-2-2.5-2
          c-1.3,0-2.4,1-2.5,2.3c0,0.3,0,0.6,0.1,0.9c0,0,0,0,0,0.1l1.6,27.9c0.4,6.5-4.9,8.1-7.2,8.5c0,0,0,0-0.1,0c-0.9,0.1-3.8,0.4-5.7-1.2
          c-1.1-0.9-1.8-2.5-1.9-4.7l-1.3-29.4l0,0c-0.3-1.1-1.3-2-2.5-2c-1.3,0-2.3,1-2.5,2.2l0,0h-0.1l1.3,29.4c0.2,3.6,1.4,6.4,3.6,8.3
          c2.4,2,5.4,2.5,7.5,2.5c0.8,0,1.5-0.1,2-0.1c0.1,0,0.2,0,0.3,0c5.6-1,11.9-5.1,11.4-13.7L260,142.7z M171.1,163.1L171.1,163.1
          c-1.4,0-2.5,0.8-2.5,2.2l0.2,33.2c0,1.4,1.1,1.6,2.5,1.6l0,0c1.4,0,2.5-0.4,2.5-1.8l-0.2-33.4C173.7,163.5,172.5,163.1,171.1,163.1
           M39.5,198.3c-0.1,0-0.2,0-0.3,0c-1.4,0.2-2.4,1.4-2.2,2.8c0.2,1.3,1.4,2.3,2.7,2.2c2.8-0.1,6.6,0.4,8,2.3c2.6,3.6,1.7,9.8-2.1,13.8
          c-2.3,2.5-8.5,3-12.2,3.1l2.6-42c1.7-0.1,4.2-0.2,6.4,0c3.8,0.4,5.8,1.4,6.3,5.3c0.5,3.4-1.5,6.8-1.6,7c-0.4,0.6-0.5,1.4-0.2,2.1
          c0.4,1.3,1.9,2,3.2,1.6c2.1-0.7,4.2-7.2,3.6-11.4c-1.2-8.5-7.9-9.3-10.8-9.6c-3.8-0.4-8.2,0-9.5,0.1c-1.2,0.1-2.2,1.1-2.3,2.3
          l-2.9,46.7c-0.1,1.1,0.5,2,1.5,2.5c0.3,0.1,1.9,0.3,4.1,0.3c4.6,0,11.9-0.8,15.4-4.6c5.5-5.8,6.6-14.7,2.5-20.2
          C48.6,198.4,42.2,198.2,39.5,198.3 M111.5,169.1c-2.2-1.6-4.6-1.2-5.5-1.1c-4.1,0.7-6.7,3.7-7.7,8.8c-1.4,7.1-2.9,15.6-3,15.7
          c-0.2,1.4,0.7,2.7,2,2.9c1.4,0.2,2.7-0.7,2.9-2c0-0.1,1.5-8.5,2.9-15.5c0.9-4.3,2.8-4.7,3.7-4.8c0.5-0.1,1.1-0.2,1.5,0.1
          c0.3,0.2,0.9,0.9,1.1,3c0.5,4.5,1.9,15.2,2.6,21.2c0.5,4,1,7.8,1.4,10.6l0.4,3.3c0.2,1.7,0.4,3,2.1,3.4c0,0,1.7,0.3,2.6-1.3l0,0
          c0.4-0.6,0.4-1.6,0.4-1.6c-0.1-0.9-3.7-28.4-4.6-36.2C114.3,172.6,113.2,170.4,111.5,169.1 M149.4,159.7c-1.3,0-2.4,1.1-2.5,2.4l0,0
          l-0.2,31.9c0,8.6-7.4,10.5-8,10.6c-0.1,0-0.1,0-0.2,0c-0.2,0-3.1,0.7-4.9-0.7c-1.2-0.9-1.8-2.7-1.7-5.3l0.5-32
          c0-1.4-1.1-2.2-2.5-2.2l0,0c-1.4,0-2.5,0.7-2.5,2.1l-0.5,32.2c-0.1,6.1,2.5,8.8,4.8,10c1.7,0.9,3.6,1.2,5.2,1.2c1.1,0,2-0.2,2.7-0.3
          c0.8-0.1,1.9-0.5,3.6-1.3c3.2-1.6,8.5-5.6,8.5-14.2l0.2-31.6v-0.1C152,160.8,150.8,159.7,149.4,159.7 M180.4,154
          c-7,1.4-13.9,2.9-20.9,4.4c-1.4,0.3-2.2,1.6-1.9,3c0.2,1.2,1.3,2,2.5,2c0.2,0,0.3,0,0.5-0.1c7-1.5,13.9-2.9,20.9-4.4
          c1.4-0.3,2.2-1.6,2-3C183.1,154.6,181.8,153.7,180.4,154 M291.6,176c-4.6,0.2-9.3,0.5-14,1l-2.4-35.6c-0.1-1.4-1.3-2.4-2.7-2.3
          c-1.4,0.1-2.4,1.3-2.3,2.7l2.6,38.1c0,0.7,0.4,1.3,0.9,1.7s1,0.6,1.6,0.6c0.1,0,0.2,0,0.2,0c5.6-0.5,11.1-0.9,16.4-1.2
          c1.4-0.1,2.5-1.2,2.4-2.6C294.2,177,293,175.9,291.6,176 M223.8,164.7c-4.7,0.8-9.5,1.8-14.6,2.8c-1.2,0.2-2.1,1.3-2,2.5l0.6,19.5
          c0,1.4,1.2,1.6,2.5,1.6h0.1c1.4,0,2.5-0.4,2.4-1.8l-0.5-17.8c4.3-0.9,8.4-1.4,12.5-2.2c1.4-0.2,2.3-1.5,2-2.8
          C226.5,165.3,225.2,164.5,223.8,164.7 M84.5,171.5c-5.8,0.8-11.5,1.5-16.9,2.1c-1.2,0.1-2.2,1.1-2.2,2.4l-0.7,15.1
          c-0.1,1.4,1,2.6,2.4,2.6h0.1c1.3,0,2.4-1,2.5-2.4l0.6-12.9c4.8-0.5,9.9-1.2,15-1.9c1.4-0.2,2.3-1.5,2.1-2.8
          C87.1,172.2,85.8,171.3,84.5,171.5 M82.6,216.4c-4.9,0.9-9.7,1.6-14.4,2.3L69,201c4.1-0.5,8.3-1.1,12.6-1.8c1.4-0.2,2.3-1.5,2.1-2.9
          s-1.5-2.3-2.9-2.1c-5,0.8-9.9,1.4-14.6,2c-1.2,0.1-2.2,1.2-2.2,2.4l-1.1,22.9c0,0.7,0.3,1.5,0.8,2c0.5,0.4,1.1,0.7,1.7,0.7
          c0.1,0,0.2,0,0.3,0c5.6-0.8,11.6-1.7,17.6-2.7c1.4-0.2,2.3-1.5,2.1-2.9C85.3,217.1,84,216.2,82.6,216.4 M193.9,150.3
          c-1.4,0-2.5,1.2-2.5,2.6l0.8,40.3c0,1.4,1.1,1.8,2.5,1.8l0,0c1.4,0,2.5-0.5,2.5-1.9l-0.8-40.6C196.4,151.1,195.2,150.2,193.9,150.3
           M260,142.7L260,142.7c-0.3-1.1-1.3-2-2.5-2c-1.3,0-2.4,1-2.5,2.3c0,0.3,0,0.6,0.1,0.9c0,0,0,0,0,0.1l1.6,27.9
          c0.4,6.5-4.9,8.1-7.2,8.5c0,0,0,0-0.1,0c-0.9,0.1-3.8,0.4-5.7-1.2c-1.1-0.9-1.8-2.5-1.9-4.7l-1.3-29.4l0,0c-0.3-1.1-1.3-2-2.5-2
          c-1.3,0-2.3,1-2.5,2.2l0,0h-0.1l1.3,29.4c0.2,3.6,1.4,6.4,3.6,8.3c2.4,2,5.4,2.5,7.5,2.5c0.8,0,1.5-0.1,2-0.1c0.1,0,0.2,0,0.3,0
          c5.6-1,11.9-5.1,11.4-13.7L260,142.7z M171.1,163.1L171.1,163.1c-1.4,0-2.5,0.8-2.5,2.2l0.2,33.2c0,1.4,1.1,1.6,2.5,1.6l0,0
          c1.4,0,2.5-0.4,2.5-1.8l-0.2-33.4C173.7,163.5,172.5,163.1,171.1,163.1 M39.5,198.3c-0.1,0-0.2,0-0.3,0c-1.4,0.2-2.4,1.4-2.2,2.8
          c0.2,1.3,1.4,2.3,2.7,2.2c2.8-0.1,6.6,0.4,8,2.3c2.6,3.6,1.7,9.8-2.1,13.8c-2.3,2.5-8.5,3-12.2,3.1l2.6-42c1.7-0.1,4.2-0.2,6.4,0
          c3.8,0.4,5.8,1.4,6.3,5.3c0.5,3.4-1.5,6.8-1.6,7c-0.4,0.6-0.5,1.4-0.2,2.1c0.4,1.3,1.9,2,3.2,1.6c2.1-0.7,4.2-7.2,3.6-11.4
          c-1.2-8.5-7.9-9.3-10.8-9.6c-3.8-0.4-8.2,0-9.5,0.1c-1.2,0.1-2.2,1.1-2.3,2.3l-2.9,46.7c-0.1,1.1,0.5,2,1.5,2.5
          c0.3,0.1,1.9,0.3,4.1,0.3c4.6,0,11.9-0.8,15.4-4.6c5.5-5.8,6.6-14.7,2.5-20.2C48.6,198.4,42.2,198.2,39.5,198.3 M111.5,169.1
          c-2.2-1.6-4.6-1.2-5.5-1.1c-4.1,0.7-6.7,3.7-7.7,8.8c-1.4,7.1-2.9,15.6-3,15.7c-0.2,1.4,0.7,2.7,2,2.9c1.4,0.2,2.7-0.7,2.9-2
          c0-0.1,1.5-8.5,2.9-15.5c0.9-4.3,2.8-4.7,3.7-4.8c0.5-0.1,1.1-0.2,1.5,0.1c0.3,0.2,0.9,0.9,1.1,3c0.5,4.5,1.9,15.2,2.6,21.2
          c0.5,4,1,7.8,1.4,10.6l0.4,3.3c0.2,1.7,0.4,3,2.1,3.4c0,0,1.7,0.3,2.6-1.3l0,0c0.4-0.6,0.4-1.6,0.4-1.6c-0.1-0.9-3.7-28.4-4.6-36.2
          C114.3,172.6,113.2,170.4,111.5,169.1 M107.2,196c-3.8,0.8-7.6,1.5-11.3,2.2c-1,0.2-1.8,1-2,2c-1,5.4-2.1,10.9-3.1,16.4
          c-0.3,1.4,0.6,2.7,2,2.9c0.2,0,0.3,0,0.5,0c1.2,0,2.2-0.8,2.5-2c0.9-4.9,1.9-9.8,2.8-14.7c3.1-0.6,6.4-1.2,9.6-1.9
          c1.4-0.3,2.2-1.6,2-3C109.9,196.6,108.6,195.8,107.2,196 M149.4,159.7c-1.3,0-2.4,1.1-2.5,2.4l0,0l-0.2,31.9c0,8.6-7.4,10.5-8,10.6
          c-0.1,0-0.1,0-0.2,0c-0.2,0-3.1,0.7-4.9-0.7c-1.2-0.9-1.8-2.7-1.7-5.3l0.5-32c0-1.4-1.1-2.2-2.5-2.2l0,0c-1.4,0-2.5,0.7-2.5,2.1
          l-0.5,32.2c-0.1,6.1,2.5,8.8,4.8,10c1.7,0.9,3.6,1.2,5.2,1.2c1.1,0,2-0.2,2.7-0.3c0.8-0.1,1.9-0.5,3.6-1.3c3.2-1.6,8.5-5.6,8.5-14.2
          l0.2-31.6v-0.1C152,160.8,150.8,159.7,149.4,159.7"/>
      </g>
    </g>
    <g className="halo_top layer" id="halo_top" data-depth="-0.075">
      <radialGradient id="SVGID_5_" cx="153.55" cy="211.8" r="99.4734" gradientTransform="matrix(1 0 0 -1 0 304)" gradientUnits="userSpaceOnUse">
        <stop  offset="4.384566e-04" style={{stopColor:'#F2ECAF'}} />
        <stop  offset="1" style={{stopColor:'#F3EC5B'}} />
      </radialGradient>
      <path id="tw-arch" className="word-warp top-word-arch words-activated" d="M32.6,160.2c-0.3,0-0.5,0-0.8-0.1c-0.2-0.1-0.5-0.2-0.6-0.4c-0.2-0.2-0.3-0.4-0.5-0.6
        c-0.1-0.2-0.2-0.5-0.2-0.7c0-0.3,0-0.5,0.1-0.8c0.1-0.2,0.2-0.5,0.4-0.6s0.4-0.3,0.6-0.5c0.2-0.1,0.5-0.2,0.7-0.2
        c0.3,0,0.5,0,0.8,0.1c0.2,0.1,0.5,0.2,0.6,0.4c0.2,0.2,0.3,0.4,0.5,0.6c0.1,0.2,0.2,0.5,0.2,0.7c0,0.3,0,0.5-0.1,0.8
        c-0.1,0.2-0.2,0.5-0.4,0.6c-0.2,0.2-0.4,0.3-0.6,0.5C33.1,160.1,32.9,160.2,32.6,160.2 M32.3,148.4c0.3,0,0.5,0,0.8-0.1
        c0.2-0.1,0.4-0.2,0.6-0.4c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.5,0.2-0.8s0-0.5-0.1-0.8c-0.1-0.2-0.2-0.4-0.4-0.6
        c-0.2-0.2-0.4-0.3-0.6-0.4c-0.2-0.1-0.5-0.2-0.8-0.2s-0.5,0-0.8,0.1c-0.2,0.1-0.4,0.2-0.6,0.4s-0.3,0.4-0.4,0.6
        c-0.1,0.2-0.2,0.5-0.2,0.8s0,0.5,0.1,0.8c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.2,0.4,0.3,0.6,0.4C31.8,148.3,32,148.4,32.3,148.4
         M33.1,136.6c0.3,0,0.5,0,0.8-0.1c0.2-0.1,0.5-0.2,0.7-0.3c0.2-0.2,0.4-0.3,0.5-0.6c0.1-0.2,0.2-0.5,0.3-0.7c0-0.3,0-0.5-0.1-0.8
        c-0.1-0.2-0.2-0.5-0.3-0.7s-0.3-0.4-0.6-0.5c-0.2-0.1-0.5-0.2-0.7-0.3c-0.3,0-0.5,0-0.8,0.1c-0.2,0.1-0.5,0.2-0.7,0.3
        c-0.2,0.2-0.4,0.3-0.5,0.6c-0.1,0.2-0.2,0.5-0.3,0.7c0,0.3,0,0.5,0,0.8c0.1,0.2,0.2,0.5,0.3,0.7c0.2,0.2,0.3,0.4,0.6,0.5
        C32.6,136.5,32.8,136.6,33.1,136.6 M35.1,124.9c0.3,0.1,0.5,0.1,0.8,0c0.3,0,0.5-0.1,0.7-0.3c0.2-0.1,0.4-0.3,0.5-0.5
        c0.2-0.2,0.3-0.4,0.3-0.7c0.1-0.3,0.1-0.5,0-0.8c0-0.3-0.1-0.5-0.3-0.7c-0.1-0.2-0.3-0.4-0.5-0.5c-0.2-0.2-0.4-0.3-0.7-0.3
        c-0.3-0.1-0.5-0.1-0.8,0c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.1-0.4,0.3-0.5,0.5c-0.2,0.2-0.3,0.4-0.3,0.7c-0.1,0.3-0.1,0.5,0,0.8
        c0,0.3,0.1,0.5,0.3,0.7c0.1,0.2,0.3,0.4,0.5,0.5S34.8,124.9,35.1,124.9 M38.1,113.5c0.3,0.1,0.5,0.1,0.8,0.1s0.5-0.1,0.7-0.2
        s0.4-0.3,0.6-0.4c0.2-0.2,0.3-0.4,0.4-0.7c0.1-0.3,0.1-0.5,0.1-0.8s-0.1-0.5-0.2-0.7c-0.1-0.2-0.3-0.4-0.4-0.6
        c-0.2-0.2-0.4-0.3-0.7-0.4s-0.5-0.1-0.8-0.1s-0.5,0.1-0.7,0.2s-0.4,0.3-0.6,0.4c-0.2,0.2-0.3,0.4-0.4,0.7
        c-0.1,0.3-0.1,0.5-0.1,0.8s0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.4,0.4,0.6C37.7,113.3,37.9,113.4,38.1,113.5 M49.7,95.7l0.8-1.5l-5.2-3
        l0,0l6.1,1.3l0.6-1.1l-4.1-4.7l0,0l5.2,3l0.9-1.5l-6.7-3.9L46,86.5l3.5,4.1l0,0l-5.3-1L43,91.8L49.7,95.7z M55.6,72.5l-1,1.4
        l3.8,2.8c0.2,0.1,0.3,0.3,0.5,0.5c0.1,0.2,0.2,0.4,0.2,0.6s0,0.4,0,0.6S59,78.8,58.8,79c-0.1,0.2-0.3,0.3-0.5,0.4
        s-0.4,0.2-0.6,0.2c-0.2,0-0.4,0-0.6-0.1c-0.2-0.1-0.4-0.2-0.6-0.3l-3.8-2.8l-1,1.4l3.8,2.9c0.4,0.3,0.8,0.5,1.1,0.6
        c0.4,0.1,0.8,0.2,1.2,0.1c0.4,0,0.8-0.2,1.1-0.4c0.4-0.2,0.7-0.6,1-1s0.5-0.9,0.7-1.3c0.1-0.4,0.1-0.8,0.1-1.2
        c-0.1-0.4-0.2-0.8-0.4-1.1c-0.2-0.3-0.5-0.7-0.9-0.9L55.6,72.5z M64.4,63.3c-0.4,0-0.8,0.2-1.2,0.4c-0.4,0.2-0.7,0.5-1,0.8
        s-0.5,0.6-0.6,0.9c-0.2,0.3-0.3,0.7-0.3,1s0,0.7,0.1,1s0.3,0.6,0.6,0.9s0.6,0.5,0.9,0.5c0.3,0,0.6,0,0.9-0.1s0.6-0.2,0.9-0.4
        c0.3-0.2,0.6-0.3,0.8-0.5c0.3-0.1,0.5-0.2,0.7-0.3c0.2,0,0.4,0,0.6,0.2c0.1,0.1,0.2,0.2,0.2,0.3c0,0.1,0,0.2,0,0.4
        c0,0.1-0.1,0.3-0.2,0.4s-0.2,0.2-0.2,0.3c-0.2,0.2-0.4,0.4-0.7,0.5C65.7,70,65.4,70,65.1,70l0.2,1.8c0.5,0,1-0.2,1.4-0.4
        c0.4-0.2,0.8-0.5,1.1-0.9c0.3-0.3,0.5-0.6,0.7-0.9s0.3-0.7,0.3-1s0-0.7-0.1-1s-0.3-0.7-0.7-0.9c-0.3-0.3-0.7-0.5-1-0.5
        c-0.3-0.1-0.6,0-0.9,0c-0.3,0.1-0.6,0.2-0.9,0.4c-0.3,0.2-0.5,0.3-0.8,0.5c-0.2,0.1-0.5,0.2-0.7,0.3c-0.2,0-0.4,0-0.6-0.2
        c-0.1-0.1-0.2-0.2-0.2-0.3c0-0.1,0-0.2,0-0.4c0-0.1,0.1-0.2,0.2-0.4c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.2,0.3-0.3,0.5-0.4
        s0.4-0.2,0.7-0.2L64.4,63.3z M74.4,63.6l1.3-1.2l-5.2-5.7l-1.3,1.2L74.4,63.6z M81.8,48.7c-0.3-0.1-0.5-0.1-0.8-0.1
        s-0.5,0.1-0.7,0.1c-0.2,0.1-0.5,0.2-0.7,0.3s-0.4,0.2-0.6,0.4c-0.5,0.4-0.9,0.8-1.2,1.2c-0.3,0.5-0.5,0.9-0.6,1.5
        c-0.1,0.5-0.1,1,0.1,1.6c0.1,0.5,0.4,1,0.8,1.5s0.8,0.9,1.3,1.2s1,0.4,1.5,0.5s1,0,1.5-0.2s1-0.4,1.5-0.8c0.4-0.3,0.8-0.7,1-1.2
        c0.3-0.5,0.4-1,0.4-1.6h-1.8c0,0.3,0,0.6-0.2,0.9c-0.1,0.3-0.3,0.5-0.6,0.7c-0.2,0.2-0.5,0.3-0.8,0.4c-0.3,0.1-0.6,0.1-0.9,0
        s-0.6-0.2-0.8-0.3c-0.3-0.2-0.5-0.4-0.7-0.7s-0.4-0.6-0.5-0.9c0-0.4,0-0.7,0-1s0.1-0.6,0.3-0.8c0.1-0.3,0.3-0.5,0.6-0.7
        c0.3-0.2,0.5-0.3,0.8-0.4c0.3-0.1,0.5-0.1,0.8,0L81.8,48.7z M101.1,42.8c-0.1,0.2-0.2,0.4-0.3,0.6c-0.1,0.2-0.3,0.3-0.5,0.4
        C100.1,44,100,44,99.9,44s-0.3,0-0.4,0s-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.1,0-0.2,0.1-0.4
        c0-0.1,0.1-0.2,0.2-0.3s0.1-0.2,0.2-0.3L101.1,42.8z M98.7,38.8c0.2,0,0.3,0.2,0.4,0.4c0,0.1,0.1,0.2,0.1,0.3s0,0.2-0.1,0.3
        c0,0.1-0.1,0.2-0.2,0.3s-0.1,0.2-0.2,0.3c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.2
        c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4,0-0.6c0.1-0.2,0.2-0.3,0.4-0.4C98.3,38.8,98.5,38.8,98.7,38.8z M103.4,39.2l-1.7,0.9
        l-0.2,1.3l-1.4-0.5c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.2-0.4,0.2-0.6c0-0.2,0-0.4,0-0.6c0-0.2-0.1-0.4-0.2-0.6
        c-0.1-0.3-0.3-0.5-0.5-0.7s-0.5-0.3-0.7-0.3c-0.3,0-0.5,0-0.8,0c-0.3,0.1-0.5,0.1-0.8,0.3c-0.3,0.1-0.5,0.3-0.8,0.5
        c-0.2,0.2-0.4,0.4-0.5,0.7c-0.1,0.2-0.2,0.5-0.2,0.8s0.1,0.6,0.2,0.9c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.2,0.2,0.4,0.3
        c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0.1,0.3,0.1,0.5,0.2c-0.2,0.2-0.3,0.4-0.4,0.6c-0.1,0.2-0.2,0.4-0.3,0.7c-0.1,0.2-0.1,0.5,0,0.7
        c0,0.2,0.1,0.5,0.2,0.7c0.2,0.3,0.4,0.6,0.7,0.8c0.3,0.2,0.6,0.3,0.9,0.4c0.3,0.1,0.6,0.1,1,0c0.3-0.1,0.7-0.2,1-0.3
        c0.4-0.2,0.7-0.5,1-0.8s0.5-0.7,0.6-1.1l0.9,0.4l1.9-1L103,42L103.4,39.2z M122.1,33.3l-1.8,0.5l0.2-2.6L122.1,33.3z M118.2,37.7
        l1.8-0.5l0.2-1.8l2.9-0.8l1.1,1.4l1.9-0.5l-5.4-6.5l-1.4,0.4L118.2,37.7z M132.5,27.6l1.1-0.2c0.2,0,0.3,0,0.5-0.1
        c0.2,0,0.3,0,0.4,0.1c0.1,0,0.2,0.1,0.3,0.2s0.2,0.3,0.2,0.4c0,0.2,0,0.4,0,0.5s-0.2,0.2-0.3,0.3c-0.1,0.1-0.3,0.1-0.4,0.2
        c-0.2,0-0.3,0.1-0.5,0.1l-1,0.2L132.5,27.6z M131.9,34.1l1.7-0.3l-0.5-3.1l0.8-0.1l2.1,2.8l2-0.4l-2.5-2.9
        c0.5-0.2,0.9-0.5,1.1-0.9c0.2-0.4,0.3-0.9,0.2-1.5c-0.1-0.4-0.2-0.8-0.4-1.1c-0.2-0.3-0.5-0.5-0.8-0.6s-0.6-0.2-1-0.2
        s-0.7,0-1.1,0.1l-3,0.5L131.9,34.1z M149,24.2l-6.1,0.5l0.1,1.5l2.2-0.2l0.5,6.2l1.7-0.1l-0.5-6.2l2.2-0.2L149,24.2z M164.4,32.1
        l1.7,0.2l0.3-3l3.2,0.3l0.1-1.6l-3.2-0.3l0.1-1.6l3.5,0.3l0.2-1.6l-5.2-0.5L164.4,32.1z M176.1,33.6l5.4,1.1l0.3-1.6l-3.7-0.7
        l0.3-1.6l3.3,0.7L182,30l-3.3-0.7l0.3-1.4l3.5,0.7l0.3-1.6l-5.2-1L176.1,33.6z M194.8,31c-0.2-0.4-0.5-0.7-0.9-0.9
        c-0.4-0.2-0.7-0.4-1.2-0.6c-0.4-0.1-0.7-0.2-1.1-0.2c-0.4,0-0.7,0.1-1,0.2s-0.6,0.3-0.9,0.6c-0.2,0.3-0.4,0.6-0.6,1
        c-0.1,0.4-0.1,0.8,0,1.1s0.2,0.6,0.5,0.8c0.2,0.2,0.5,0.4,0.7,0.6c0.3,0.2,0.5,0.4,0.8,0.5c0.2,0.2,0.4,0.3,0.5,0.5
        s0.2,0.4,0.1,0.6c0,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4-0.1
        c-0.3-0.1-0.5-0.2-0.7-0.4s-0.4-0.4-0.5-0.7l-1.6,0.9c0.3,0.4,0.6,0.8,0.9,1.1c0.4,0.3,0.8,0.5,1.3,0.6c0.4,0.1,0.8,0.2,1.1,0.2
        c0.4,0,0.7,0,1.1-0.2c0.3-0.1,0.6-0.3,0.9-0.6c0.2-0.3,0.4-0.6,0.6-1c0.1-0.4,0.2-0.8,0.1-1.1c-0.1-0.3-0.2-0.6-0.4-0.8
        s-0.4-0.4-0.7-0.6c-0.3-0.2-0.5-0.3-0.7-0.5s-0.4-0.3-0.5-0.5s-0.2-0.4-0.1-0.6c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.3-0.2
        c0.1,0,0.3,0,0.4,0c0.1,0,0.3,0,0.4,0.1c0.2,0.1,0.4,0.2,0.6,0.3c0.2,0.2,0.3,0.3,0.4,0.5L194.8,31z M200.3,40.7l1.6,0.7l2.4-5.8
        l2,0.9l0.6-1.4l-5.7-2.4l-0.6,1.4l2,0.9L200.3,40.7z M209.4,44.9l1.5,0.8l3.6-6.9L213,38L209.4,44.9z M218.9,50.3l1.2,0.7l6.9-4.8
        l-1.5-1l-4.4,3.2l0,0l1.1-5.3l-1.6-1.1L218.9,50.3z M232.9,56.5l-1.5-1.2l2.2-1.3L232.9,56.5z M227.1,55.8l1.5,1.2l1.5-0.9
        l2.3,1.9l-0.5,1.7l1.5,1.2l2.3-8.2l-1.1-0.9L227.1,55.8z M237.9,65.1l3.5,3.4l1.1-1.1l-2.2-2.2l4.4-4.4l-1.2-1.2L237.9,65.1z
         M254.1,77.7c-0.2,0.2-0.4,0.3-0.5,0.6c-0.1,0.2-0.2,0.5-0.3,0.7c0,0.2,0,0.5,0,0.7c0.1,0.2,0.2,0.5,0.3,0.7
        c0.2,0.2,0.3,0.4,0.6,0.5c0.2,0.1,0.5,0.2,0.7,0.3c0.2,0,0.5,0,0.7,0c0.2-0.1,0.5-0.2,0.7-0.3c0.2-0.2,0.4-0.3,0.5-0.6
        c0.1-0.2,0.2-0.5,0.3-0.7c0-0.2,0-0.5,0-0.7c-0.1-0.2-0.2-0.5-0.3-0.7c-0.2-0.2-0.3-0.4-0.6-0.5c-0.2-0.1-0.5-0.2-0.7-0.3
        c-0.2,0-0.5,0-0.7,0C254.5,77.4,254.3,77.5,254.1,77.7 M260.7,87.5c-0.2,0.1-0.4,0.3-0.6,0.5s-0.3,0.4-0.3,0.7
        c-0.1,0.2-0.1,0.5-0.1,0.7c0,0.3,0.1,0.5,0.2,0.7s0.3,0.4,0.5,0.6s0.4,0.3,0.7,0.3c0.2,0.1,0.5,0.1,0.7,0.1c0.3,0,0.5-0.1,0.7-0.2
        s0.4-0.3,0.6-0.5c0.1-0.2,0.3-0.4,0.3-0.7c0.1-0.2,0.1-0.5,0.1-0.7c0-0.3-0.1-0.5-0.2-0.7s-0.3-0.4-0.5-0.6s-0.4-0.3-0.7-0.3
        c-0.2-0.1-0.5-0.1-0.7-0.1C261.1,87.3,260.9,87.3,260.7,87.5 M266.3,97.9c-0.2,0.1-0.5,0.3-0.6,0.5c-0.2,0.2-0.3,0.4-0.4,0.6
        s-0.1,0.5-0.1,0.7c0,0.3,0.1,0.5,0.2,0.8c0.1,0.2,0.3,0.5,0.5,0.6c0.2,0.2,0.4,0.3,0.6,0.4s0.5,0.1,0.7,0.1c0.3,0,0.5-0.1,0.8-0.2
        c0.2-0.1,0.5-0.3,0.6-0.5c0.2-0.2,0.3-0.4,0.4-0.6s0.1-0.5,0.1-0.7c0-0.3-0.1-0.5-0.2-0.8c-0.1-0.2-0.3-0.5-0.5-0.6
        c-0.2-0.2-0.4-0.3-0.6-0.4s-0.5-0.1-0.7-0.1C266.8,97.7,266.5,97.8,266.3,97.9 M270.9,108.8c-0.3,0.1-0.5,0.2-0.7,0.4
        c-0.2,0.2-0.3,0.4-0.4,0.6s-0.2,0.5-0.2,0.7c0,0.3,0,0.5,0.1,0.8s0.2,0.5,0.4,0.7c0.2,0.2,0.4,0.3,0.6,0.4s0.5,0.2,0.7,0.2
        c0.3,0,0.5,0,0.8-0.1s0.5-0.2,0.7-0.4c0.2-0.2,0.3-0.4,0.4-0.6s0.2-0.5,0.2-0.7c0-0.3,0-0.5-0.1-0.8s-0.2-0.5-0.4-0.7
        c-0.2-0.2-0.4-0.3-0.6-0.4s-0.5-0.2-0.7-0.2C271.4,108.7,271.1,108.7,270.9,108.8 M274.4,120.1c-0.3,0.1-0.5,0.2-0.7,0.3
        c-0.2,0.2-0.4,0.3-0.5,0.6c-0.1,0.2-0.2,0.4-0.3,0.7c0,0.3,0,0.5,0,0.8c0.1,0.3,0.2,0.5,0.3,0.7c0.2,0.2,0.3,0.4,0.5,0.5
        s0.4,0.2,0.7,0.3c0.3,0,0.5,0,0.8,0c0.3-0.1,0.5-0.2,0.7-0.3c0.2-0.2,0.4-0.3,0.5-0.6c0.1-0.2,0.2-0.4,0.3-0.7c0-0.3,0-0.5,0-0.8
        c-0.1-0.3-0.2-0.5-0.3-0.7c-0.2-0.2-0.3-0.4-0.5-0.5s-0.4-0.2-0.7-0.3C274.9,120,274.6,120,274.4,120.1"/>
    </g>

    <g className="halo_bottom layer" id="halo_bottom" data-depth="-0.075">
      <radialGradient id="SVGID_6_" cx="170.25" cy="59.5083" r="75.3764" gradientTransform="matrix(1 0 0 -1 0 304)" gradientUnits="userSpaceOnUse">
        <stop  offset="4.384566e-04" style={{stopColor:'#F2ECAF'}} />
        <stop  offset="1" style={{stopColor:'#F3EC5B'}} />
      </radialGradient>
      <path id="bw-arch" className="word-warp bottom-word-arch words-activated" d="M71,246c0.2-0.2,0.4-0.4,0.6-0.5s0.5-0.2,0.7-0.2s0.5,0,0.7,0.1s0.5,0.2,0.7,0.4s0.4,0.4,0.5,0.6
        c0.1,0.2,0.2,0.5,0.2,0.7s0,0.5-0.1,0.7s-0.2,0.5-0.4,0.7c-0.2,0.2-0.4,0.4-0.6,0.5s-0.5,0.2-0.7,0.2s-0.5,0-0.7-0.1
        s-0.5-0.2-0.7-0.4s-0.4-0.4-0.5-0.6c-0.1-0.2-0.2-0.5-0.2-0.7s0-0.5,0.1-0.7C70.7,246.4,70.8,246.2,71,246 M82.3,252.1l0.8,0.6
        c0.3,0.2,0.5,0.4,0.8,0.7c0.2,0.3,0.4,0.5,0.5,0.8s0.1,0.6,0.1,0.9s-0.2,0.6-0.4,0.9c-0.3,0.4-0.5,0.6-0.8,0.8
        c-0.3,0.2-0.6,0.3-0.9,0.3s-0.6-0.1-1-0.2c-0.3-0.1-0.6-0.3-1-0.5l-0.7-0.5L82.3,252.1z M77.3,256.2l2.3,1.6
        c0.5,0.3,1,0.6,1.5,0.7c0.5,0.2,1,0.2,1.6,0.2c0.5,0,1-0.2,1.5-0.4c0.5-0.3,0.9-0.6,1.2-1.2c0.4-0.6,0.7-1.1,0.7-1.7
        c0.1-0.5,0-1.1-0.1-1.6c-0.2-0.5-0.4-1-0.8-1.4s-0.8-0.8-1.3-1.2l-2.1-1.5L77.3,256.2z M91.4,260.8c0.2-0.3,0.4-0.6,0.6-0.8
        c0.2-0.2,0.5-0.4,0.8-0.5s0.6-0.1,0.9-0.1s0.6,0.1,1,0.3c0.3,0.2,0.6,0.4,0.8,0.6c0.2,0.3,0.3,0.5,0.4,0.8s0.1,0.6,0,0.9
        s-0.2,0.6-0.3,1c-0.2,0.3-0.4,0.6-0.6,0.8c-0.2,0.2-0.5,0.4-0.8,0.5s-0.6,0.1-0.9,0.1s-0.6-0.1-1-0.3c-0.3-0.2-0.6-0.4-0.8-0.6
        c-0.2-0.3-0.3-0.5-0.4-0.8s-0.1-0.6,0-0.9C91.1,261.4,91.2,261.1,91.4,260.8 M89.8,259.9c-0.3,0.5-0.5,1.1-0.6,1.6s0,1.1,0.1,1.6
        c0.2,0.5,0.4,0.9,0.8,1.4c0.4,0.4,0.8,0.8,1.3,1.1c0.5,0.3,1.1,0.5,1.6,0.6s1.1,0.1,1.6-0.1c0.5-0.1,1-0.4,1.4-0.7
        c0.4-0.3,0.8-0.8,1.1-1.3c0.3-0.5,0.5-1.1,0.6-1.6s0-1.1-0.1-1.6c-0.2-0.5-0.4-0.9-0.8-1.4c-0.4-0.4-0.8-0.8-1.3-1.1
        c-0.5-0.3-1.1-0.5-1.6-0.6s-1.1-0.1-1.6,0.1c-0.5,0.1-1,0.4-1.4,0.7C90.5,258.9,90.1,259.4,89.8,259.9 M102.1,270.7l1.4,0.6
        l3.6-4.3l0,0l-0.5,5.6l1.4,0.6l5.1-6.3l-1.6-0.7l-3.2,4.2l0,0l0.5-5.3l-1.5-0.6l-3.4,4l0,0l0.8-5.1l-1.7-0.7L102.1,270.7z
         M115.5,275.8l1.6,0.5l1.5-5.3l0,0l1.7,6.3l2.1,0.6l2.2-7.5l-1.6-0.5l-1.5,5.2l0,0l-1.7-6.1l-2.2-0.6L115.5,275.8z M130.3,279.6
        l1.7,0.3l1.2-6.2l2.2,0.4l0.3-1.5l-6-1.1l-0.3,1.5l2.2,0.4L130.3,279.6z M141.5,277.4c0-0.4,0.1-0.7,0.3-1
        c0.1-0.3,0.3-0.5,0.6-0.7c0.2-0.2,0.5-0.4,0.8-0.5s0.6-0.1,1-0.1s0.7,0.1,1,0.3c0.3,0.2,0.5,0.3,0.7,0.6c0.2,0.2,0.3,0.5,0.4,0.8
        c0.1,0.3,0.1,0.7,0.1,1c0,0.4-0.1,0.7-0.3,1c-0.1,0.3-0.3,0.5-0.6,0.7c-0.2,0.2-0.5,0.4-0.8,0.5s-0.6,0.1-1,0.1s-0.7-0.1-1-0.3
        c-0.3-0.2-0.5-0.3-0.7-0.6c-0.2-0.2-0.3-0.5-0.4-0.8C141.5,278.1,141.5,277.8,141.5,277.4 M139.8,277.2c-0.1,0.6,0,1.2,0.2,1.7
        s0.4,1,0.8,1.4c0.3,0.4,0.8,0.7,1.2,0.9c0.5,0.2,1,0.4,1.6,0.4c0.6,0.1,1.2,0,1.7-0.1s1-0.4,1.4-0.7c0.4-0.3,0.7-0.7,1-1.2
        s0.4-1,0.5-1.7c0.1-0.6,0-1.2-0.2-1.7s-0.4-1-0.8-1.4c-0.3-0.4-0.8-0.7-1.2-0.9c-0.5-0.2-1-0.4-1.6-0.4c-0.6-0.1-1.2,0-1.7,0.1
        s-1,0.4-1.4,0.7c-0.4,0.3-0.7,0.7-1,1.2C140,276.1,139.8,276.6,139.8,277.2 M162.1,274.1l-1.2,5.1l0,0l-1.7-5.1h-1.6l-1.5,5l0,0
        l-1.4-5h-1.9l2.5,7.7h1.5l1.6-5.4l0,0l1.8,5.3h1.5l2.1-7.8L162.1,274.1z M169.7,281.3l1.7-0.2l-0.8-5.5l0,0l4.1,5l2.2-0.3
        l-1.1-7.7l-1.7,0.2l0.8,5.4l0,0l-4-4.9l-2.3,0.3L169.7,281.3z M191,277l4.7-1.4l-0.5-1.5l-3,0.9l-1.8-5.9l-1.6,0.5L191,277z
         M203.8,269.3L202,270v-2.6L203.8,269.3z M200.4,274l1.7-0.7v-1.8l2.8-1.1l1.2,1.3l1.8-0.7l-6-6l-1.3,0.5L200.4,274z M214.2,259.9
        c-0.4-0.1-0.8-0.1-1.3-0.1c-0.4,0.1-0.8,0.2-1.2,0.4c-0.3,0.2-0.6,0.4-0.9,0.6c-0.3,0.3-0.5,0.5-0.6,0.9c-0.1,0.3-0.2,0.6-0.2,1
        s0.1,0.7,0.3,1.1s0.4,0.7,0.7,0.8c0.3,0.2,0.6,0.2,0.9,0.3c0.3,0,0.6,0,1-0.1c0.3-0.1,0.6-0.1,0.9-0.1c0.3,0,0.5,0,0.8,0
        c0.2,0,0.4,0.2,0.5,0.4c0.1,0.1,0.1,0.2,0.1,0.4c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.2,0.2-0.4,0.2
        c-0.3,0.1-0.5,0.2-0.8,0.2s-0.6-0.1-0.8-0.2l-0.5,1.7c0.5,0.1,1,0.2,1.4,0.1c0.5-0.1,0.9-0.2,1.4-0.4c0.4-0.2,0.7-0.4,0.9-0.7
        c0.3-0.3,0.5-0.5,0.6-0.9c0.1-0.3,0.2-0.7,0.2-1c0-0.4-0.1-0.7-0.3-1.1s-0.5-0.7-0.7-0.8c-0.3-0.2-0.6-0.3-0.9-0.3
        c-0.3,0-0.6,0-0.9,0.1c-0.3,0.1-0.6,0.1-0.9,0.2c-0.3,0-0.5,0.1-0.7,0c-0.2,0-0.4-0.2-0.5-0.4c-0.1-0.1-0.1-0.3-0.1-0.4
        s0.1-0.2,0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0.2-0.1,0.4-0.2,0.7-0.2c0.2,0,0.5,0,0.7,0.1L214.2,259.9z
         M231.3,257.6l1.1-0.8l-2-8.2l-1.5,1.1l1.4,5.3l0,0l-4.5-3l-1.6,1.1L231.3,257.6z M239.4,251.3l4.1-3.6l-1-1.2l-2.8,2.5l-1-1.2
        l2.5-2.2l-1-1.2l-2.5,2.2l-1-1.1l2.7-2.4l-1-1.2l-4,3.5L239.4,251.3z M249.5,235.1l-2.1,2.2l1.2,1.1l1-1l0.9,0.9
        c0,0.2-0.1,0.4-0.3,0.6c-0.1,0.3-0.3,0.5-0.6,0.8s-0.5,0.5-0.8,0.6s-0.6,0.2-0.9,0.2c-0.3,0-0.6-0.1-0.9-0.2
        c-0.3-0.1-0.6-0.3-0.8-0.6c-0.3-0.2-0.5-0.5-0.6-0.8s-0.2-0.6-0.2-0.9c0-0.3,0-0.6,0.1-0.9c0.1-0.3,0.3-0.6,0.5-0.9
        c0.3-0.3,0.6-0.5,0.9-0.7c0.3-0.1,0.6-0.2,0.9-0.2l-0.1-1.8c-0.5,0-1,0.2-1.5,0.5s-0.9,0.6-1.3,1.1c-0.4,0.4-0.7,0.9-0.9,1.4
        s-0.3,1-0.3,1.5s0.1,1,0.3,1.5s0.6,1,1,1.4c0.5,0.4,0.9,0.7,1.4,0.9s1,0.3,1.5,0.2c0.5,0,1-0.2,1.5-0.4s0.9-0.6,1.4-1
        c0.4-0.4,0.7-0.9,1-1.3c0.3-0.5,0.5-1,0.7-1.5L249.5,235.1z M257,228.2l-1.2,1.5l-1.3-2.2L257,228.2z M256.5,234l1.1-1.5l-0.9-1.5
        l1.8-2.4l1.7,0.5l1.2-1.5l-8.2-2l-0.9,1.1L256.5,234z M261.2,214.8c-0.4,0.1-0.8,0.3-1.1,0.6c-0.3,0.3-0.6,0.6-0.8,1
        c-0.2,0.3-0.4,0.7-0.5,1c-0.1,0.4-0.1,0.7-0.1,1.1c0,0.3,0.1,0.7,0.3,1c0.2,0.3,0.4,0.6,0.8,0.8s0.7,0.3,1,0.3s0.6-0.1,0.9-0.2
        c0.3-0.1,0.5-0.3,0.8-0.5c0.2-0.2,0.5-0.4,0.7-0.6c0.2-0.2,0.4-0.3,0.7-0.4c0.2-0.1,0.4-0.1,0.6,0.1c0.1,0.1,0.2,0.2,0.3,0.3
        c0,0.1,0.1,0.2,0.1,0.4c0,0.1,0,0.3-0.1,0.4c0,0.1-0.1,0.3-0.2,0.4c-0.2,0.2-0.4,0.4-0.6,0.6c-0.3,0.2-0.5,0.2-0.8,0.3l0.5,1.7
        c0.5-0.1,0.9-0.3,1.3-0.6s0.7-0.6,0.9-1.1c0.2-0.3,0.4-0.7,0.5-1.1c0.1-0.4,0.1-0.7,0.1-1.1c0-0.3-0.1-0.7-0.3-1
        c-0.2-0.3-0.5-0.6-0.8-0.8c-0.4-0.2-0.7-0.4-1.1-0.4c-0.3,0-0.6,0.1-0.9,0.2c-0.3,0.1-0.5,0.3-0.8,0.5c-0.2,0.2-0.5,0.4-0.7,0.6
        c-0.2,0.2-0.4,0.3-0.6,0.4c-0.2,0.1-0.4,0.1-0.6-0.1c-0.1-0.1-0.2-0.2-0.3-0.3c0-0.1-0.1-0.2-0.1-0.4c0-0.1,0-0.3,0.1-0.4
        c0-0.1,0.1-0.2,0.2-0.3c0.1-0.2,0.3-0.3,0.5-0.5s0.4-0.2,0.6-0.3L261.2,214.8z M267.3,210.6c0.2,0.1,0.5,0.2,0.7,0.2
        c0.3,0,0.5,0,0.7-0.1s0.5-0.2,0.6-0.4c0.2-0.2,0.4-0.4,0.5-0.6c0.1-0.2,0.2-0.5,0.2-0.7c0-0.3,0-0.5-0.1-0.7s-0.2-0.5-0.4-0.7
        c-0.2-0.2-0.4-0.4-0.6-0.5s-0.5-0.2-0.7-0.2c-0.3,0-0.5,0-0.7,0.1s-0.5,0.2-0.6,0.4c-0.2,0.2-0.4,0.4-0.5,0.6
        c-0.1,0.2-0.2,0.5-0.2,0.7c0,0.3,0,0.5,0.1,0.7s0.2,0.5,0.4,0.7C266.8,210.3,267,210.5,267.3,210.6"/>
    </g>
  </svg>

export default Logo
