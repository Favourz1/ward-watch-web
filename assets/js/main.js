// Custom elements components


class HeaderMain extends HTMLElement {

  constructor() {
    super();
  }


  connectedCallback() {
    this.innerHTML = `
    <header class="bg-white py-7 px-4 min-h-[var(--header-height)]">
    <nav class="flex items-center justify-between">
      <a class="logo nav-logo" href="/">
        <svg width="185" height="51" viewBox="0 0 243 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_7_723)">
            <path
              d="M48.7924 25.0351C48.7924 11.7506 38.0232 0.981323 24.7386 0.981323C11.4541 0.981323 0.684845 11.7506 0.684845 25.0351C0.684845 38.3197 11.4541 49.0889 24.7386 49.0889C38.0232 49.0889 48.7924 38.3197 48.7924 25.0351Z"
              fill="#858446" />
            <path
              d="M24.7387 18.4868C26.0338 19.782 26.9158 21.432 27.2731 23.2285C27.6304 25.0249 27.4471 26.8869 26.7462 28.5791C26.0453 30.2713 24.8582 31.7175 23.3353 32.7351C21.8124 33.7527 20.0219 34.2959 18.1903 34.2958C16.3588 34.2959 14.5683 33.7527 13.0454 32.7351C11.5224 31.7176 10.3354 30.2713 9.63451 28.5791C8.93358 26.8869 8.75031 25.0249 9.10758 23.2285C9.46493 21.4321 10.3469 19.782 11.642 18.4868L18.1903 25.0352L24.7387 18.4868Z"
              fill="white" />
            <path
              d="M37.8353 18.4868C39.1304 19.782 40.0124 21.432 40.3698 23.2285C40.727 25.0249 40.5438 26.8869 39.8428 28.5791C39.1419 30.2713 37.9549 31.7175 36.4319 32.7351C34.9091 33.7527 33.1186 34.2959 31.287 34.2958C29.4554 34.2959 27.6649 33.7527 26.1421 32.7351C24.619 31.7176 23.4321 30.2713 22.7312 28.5791C22.0302 26.8869 21.847 25.0249 22.2042 23.2285C22.5616 21.4321 23.4436 19.782 24.7387 18.4868L31.287 25.0352L37.8353 18.4868Z"
              fill="white" />
          </g>
          <path
            d="M62.7845 19.0352V2.23516H70.9925C73.1045 2.23516 74.6885 2.63516 75.7445 3.43516C76.8165 4.23516 77.3525 5.29116 77.3525 6.60316C77.3525 7.48316 77.1365 8.25116 76.7045 8.90716C76.2725 9.54716 75.6805 10.0432 74.9285 10.3952C74.1765 10.7472 73.3125 10.9232 72.3365 10.9232L72.7924 9.93916C73.8485 9.93916 74.7845 10.1152 75.6005 10.4672C76.4165 10.8032 77.0485 11.3072 77.4965 11.9792C77.9605 12.6512 78.1925 13.4752 78.1925 14.4512C78.1925 15.8912 77.6245 17.0192 76.4885 17.8352C75.3525 18.6352 73.6805 19.0352 71.4725 19.0352H62.7845ZM66.6485 16.1072H71.1845C72.1925 16.1072 72.9525 15.9472 73.4644 15.6272C73.9925 15.2912 74.2565 14.7632 74.2565 14.0432C74.2565 13.3392 73.9925 12.8192 73.4644 12.4832C72.9525 12.1312 72.1925 11.9552 71.1845 11.9552H66.3605V9.12316H70.5125C71.4565 9.12316 72.1765 8.96316 72.6725 8.64316C73.1845 8.30716 73.4405 7.80316 73.4405 7.13116C73.4405 6.47516 73.1845 5.98716 72.6725 5.66716C72.1765 5.33116 71.4565 5.16316 70.5125 5.16316H66.6485V16.1072ZM79.912 19.0352V6.12316H83.656V19.0352H79.912ZM81.784 4.32316C81.096 4.32316 80.536 4.12316 80.104 3.72316C79.672 3.32316 79.456 2.82716 79.456 2.23516C79.456 1.64316 79.672 1.14716 80.104 0.747156C80.536 0.347155 81.096 0.147155 81.784 0.147155C82.472 0.147155 83.032 0.339155 83.464 0.723156C83.896 1.09116 84.112 1.57116 84.112 2.16316C84.112 2.78716 83.896 3.30716 83.464 3.72316C83.048 4.12316 82.488 4.32316 81.784 4.32316ZM90.5148 19.2272C89.4108 19.2272 88.3468 19.0992 87.3228 18.8432C86.3148 18.5712 85.5148 18.2352 84.9228 17.8352L86.1708 15.1472C86.7628 15.5152 87.4588 15.8192 88.2588 16.0592C89.0748 16.2832 89.8748 16.3952 90.6588 16.3952C91.5228 16.3952 92.1308 16.2912 92.4828 16.0832C92.8508 15.8752 93.0348 15.5872 93.0348 15.2192C93.0348 14.9152 92.8908 14.6912 92.6028 14.5472C92.3308 14.3872 91.9628 14.2672 91.4988 14.1872C91.0348 14.1072 90.5228 14.0272 89.9628 13.9472C89.4188 13.8672 88.8668 13.7632 88.3068 13.6352C87.7468 13.4912 87.2348 13.2832 86.7708 13.0112C86.3068 12.7392 85.9308 12.3712 85.6428 11.9072C85.3708 11.4432 85.2348 10.8432 85.2348 10.1072C85.2348 9.29116 85.4668 8.57116 85.9308 7.94716C86.4108 7.32316 87.0988 6.83516 87.9948 6.48316C88.8908 6.11516 89.9628 5.93116 91.2108 5.93116C92.0908 5.93116 92.9868 6.02716 93.8988 6.21916C94.8108 6.41116 95.5708 6.69116 96.1788 7.05916L94.9308 9.72316C94.3068 9.35516 93.6748 9.10716 93.0348 8.97916C92.4108 8.83516 91.8028 8.76316 91.2108 8.76316C90.3788 8.76316 89.7708 8.87516 89.3868 9.09916C89.0028 9.32316 88.8108 9.61116 88.8108 9.96316C88.8108 10.2832 88.9468 10.5232 89.2188 10.6832C89.5068 10.8432 89.8828 10.9712 90.3468 11.0672C90.8108 11.1632 91.3148 11.2512 91.8588 11.3312C92.4188 11.3952 92.9788 11.4992 93.5388 11.6432C94.0988 11.7872 94.6028 11.9952 95.0508 12.2672C95.5148 12.5232 95.8908 12.8832 96.1788 13.3472C96.4668 13.7952 96.6108 14.3872 96.6108 15.1232C96.6108 15.9232 96.3708 16.6352 95.8908 17.2592C95.4108 17.8672 94.7148 18.3472 93.8028 18.6992C92.9068 19.0512 91.8108 19.2272 90.5148 19.2272ZM103.241 19.2272C101.721 19.2272 100.537 18.8432 99.6888 18.0752C98.8408 17.2912 98.4168 16.1312 98.4168 14.5952V3.26716H102.161V14.5472C102.161 15.0912 102.305 15.5152 102.593 15.8192C102.881 16.1072 103.273 16.2512 103.769 16.2512C104.361 16.2512 104.865 16.0912 105.281 15.7712L106.289 18.4112C105.905 18.6832 105.441 18.8912 104.897 19.0352C104.369 19.1632 103.817 19.2272 103.241 19.2272ZM96.4248 9.29116V6.41116H105.377V9.29116H96.4248ZM107.43 19.0352V6.12316H111.006V9.77116L110.502 8.71516C110.886 7.80316 111.502 7.11516 112.35 6.65116C113.198 6.17116 114.23 5.93116 115.446 5.93116V9.38716C115.286 9.37116 115.142 9.36316 115.014 9.36316C114.886 9.34716 114.75 9.33916 114.606 9.33916C113.582 9.33916 112.75 9.63516 112.11 10.2272C111.486 10.8032 111.174 11.7072 111.174 12.9392V19.0352H107.43ZM122.763 19.2272C121.387 19.2272 120.163 18.9392 119.091 18.3632C118.035 17.7872 117.195 17.0032 116.571 16.0112C115.963 15.0032 115.659 13.8592 115.659 12.5792C115.659 11.2832 115.963 10.1392 116.571 9.14716C117.195 8.13916 118.035 7.35516 119.091 6.79516C120.163 6.21916 121.387 5.93116 122.763 5.93116C124.123 5.93116 125.339 6.21916 126.411 6.79516C127.483 7.35516 128.323 8.13116 128.931 9.12316C129.539 10.1152 129.843 11.2672 129.843 12.5792C129.843 13.8592 129.539 15.0032 128.931 16.0112C128.323 17.0032 127.483 17.7872 126.411 18.3632C125.339 18.9392 124.123 19.2272 122.763 19.2272ZM122.763 16.1552C123.387 16.1552 123.947 16.0112 124.443 15.7232C124.939 15.4352 125.331 15.0272 125.619 14.4992C125.907 13.9552 126.051 13.3152 126.051 12.5792C126.051 11.8272 125.907 11.1872 125.619 10.6592C125.331 10.1312 124.939 9.72316 124.443 9.43516C123.947 9.14716 123.387 9.00316 122.763 9.00316C122.139 9.00316 121.579 9.14716 121.083 9.43516C120.587 9.72316 120.187 10.1312 119.883 10.6592C119.595 11.1872 119.451 11.8272 119.451 12.5792C119.451 13.3152 119.595 13.9552 119.883 14.4992C120.187 15.0272 120.587 15.4352 121.083 15.7232C121.579 16.0112 122.139 16.1552 122.763 16.1552ZM131.385 19.0352V1.22716H135.129V19.0352H131.385ZM151.785 19.3232C150.489 19.3232 149.281 19.1152 148.161 18.6992C147.057 18.2672 146.097 17.6592 145.281 16.8752C144.465 16.0912 143.825 15.1712 143.361 14.1152C142.913 13.0592 142.689 11.8992 142.689 10.6352C142.689 9.37116 142.913 8.21116 143.361 7.15516C143.825 6.09916 144.465 5.17916 145.281 4.39516C146.113 3.61116 147.081 3.01116 148.185 2.59515C149.289 2.16316 150.497 1.94716 151.809 1.94716C153.265 1.94716 154.577 2.20316 155.745 2.71516C156.929 3.21116 157.921 3.94716 158.721 4.92316L156.225 7.22716C155.649 6.57116 155.009 6.08316 154.305 5.76316C153.601 5.42716 152.833 5.25916 152.001 5.25916C151.217 5.25916 150.497 5.38716 149.841 5.64316C149.185 5.89916 148.617 6.26716 148.137 6.74716C147.657 7.22716 147.281 7.79516 147.009 8.45116C146.753 9.10716 146.625 9.83516 146.625 10.6352C146.625 11.4352 146.753 12.1632 147.009 12.8192C147.281 13.4752 147.657 14.0432 148.137 14.5232C148.617 15.0032 149.185 15.3712 149.841 15.6272C150.497 15.8832 151.217 16.0112 152.001 16.0112C152.833 16.0112 153.601 15.8512 154.305 15.5312C155.009 15.1952 155.649 14.6912 156.225 14.0192L158.721 16.3232C157.921 17.2992 156.929 18.0432 155.745 18.5552C154.577 19.0672 153.257 19.3232 151.785 19.3232ZM167.971 5.93116C168.995 5.93116 169.907 6.13916 170.707 6.55516C171.523 6.95516 172.163 7.57916 172.627 8.42716C173.091 9.25916 173.323 10.3312 173.323 11.6432V19.0352H169.579V12.2192C169.579 11.1792 169.347 10.4112 168.883 9.91516C168.435 9.41916 167.795 9.17116 166.963 9.17116C166.371 9.17116 165.835 9.29916 165.355 9.55516C164.891 9.79516 164.523 10.1712 164.251 10.6832C163.995 11.1952 163.867 11.8512 163.867 12.6512V19.0352H160.123V1.22716H163.867V9.69916L163.027 8.61916C163.491 7.75516 164.155 7.09116 165.019 6.62716C165.883 6.16316 166.867 5.93116 167.971 5.93116ZM175.756 19.0352V6.12316H179.5V19.0352H175.756ZM177.628 4.32316C176.94 4.32316 176.38 4.12316 175.948 3.72316C175.516 3.32316 175.3 2.82716 175.3 2.23516C175.3 1.64316 175.516 1.14716 175.948 0.747156C176.38 0.347155 176.94 0.147155 177.628 0.147155C178.316 0.147155 178.876 0.339155 179.308 0.723156C179.74 1.09116 179.956 1.57116 179.956 2.16316C179.956 2.78716 179.74 3.30716 179.308 3.72316C178.892 4.12316 178.332 4.32316 177.628 4.32316ZM182.015 19.0352V1.22716H185.759V19.0352H182.015ZM193.818 19.2272C192.602 19.2272 191.506 18.9552 190.53 18.4112C189.554 17.8512 188.778 17.0752 188.202 16.0832C187.642 15.0912 187.362 13.9232 187.362 12.5792C187.362 11.2192 187.642 10.0432 188.202 9.05116C188.778 8.05916 189.554 7.29116 190.53 6.74716C191.506 6.20316 192.602 5.93116 193.818 5.93116C194.906 5.93116 195.858 6.17116 196.674 6.65116C197.49 7.13116 198.122 7.85916 198.57 8.83516C199.018 9.81116 199.242 11.0592 199.242 12.5792C199.242 14.0832 199.026 15.3312 198.594 16.3232C198.162 17.2992 197.538 18.0272 196.722 18.5072C195.922 18.9872 194.954 19.2272 193.818 19.2272ZM194.466 16.1552C195.074 16.1552 195.626 16.0112 196.122 15.7232C196.618 15.4352 197.01 15.0272 197.298 14.4992C197.602 13.9552 197.754 13.3152 197.754 12.5792C197.754 11.8272 197.602 11.1872 197.298 10.6592C197.01 10.1312 196.618 9.72316 196.122 9.43516C195.626 9.14716 195.074 9.00316 194.466 9.00316C193.842 9.00316 193.282 9.14716 192.786 9.43516C192.29 9.72316 191.89 10.1312 191.586 10.6592C191.298 11.1872 191.154 11.8272 191.154 12.5792C191.154 13.3152 191.298 13.9552 191.586 14.4992C191.89 15.0272 192.29 15.4352 192.786 15.7232C193.282 16.0112 193.842 16.1552 194.466 16.1552ZM197.85 19.0352V16.3952L197.922 12.5552L197.682 8.73916V1.22716H201.426V19.0352H197.85ZM203.931 19.0352V6.12316H207.507V9.77116L207.003 8.71516C207.387 7.80316 208.003 7.11516 208.851 6.65116C209.699 6.17116 210.731 5.93116 211.947 5.93116V9.38716C211.787 9.37116 211.643 9.36316 211.515 9.36316C211.387 9.34716 211.251 9.33916 211.107 9.33916C210.083 9.33916 209.251 9.63516 208.611 10.2272C207.987 10.8032 207.675 11.7072 207.675 12.9392V19.0352H203.931ZM219.528 19.2272C218.056 19.2272 216.76 18.9392 215.64 18.3632C214.536 17.7872 213.68 17.0032 213.072 16.0112C212.464 15.0032 212.16 13.8592 212.16 12.5792C212.16 11.2832 212.456 10.1392 213.048 9.14716C213.656 8.13916 214.48 7.35516 215.52 6.79516C216.56 6.21916 217.736 5.93116 219.048 5.93116C220.312 5.93116 221.448 6.20316 222.456 6.74716C223.48 7.27516 224.288 8.04316 224.88 9.05116C225.472 10.0432 225.768 11.2352 225.768 12.6272C225.768 12.7712 225.76 12.9392 225.744 13.1312C225.728 13.3072 225.712 13.4752 225.696 13.6352H215.208V11.4512H223.728L222.288 12.0992C222.288 11.4272 222.152 10.8432 221.88 10.3472C221.608 9.85116 221.232 9.46716 220.752 9.19516C220.272 8.90716 219.712 8.76316 219.072 8.76316C218.432 8.76316 217.864 8.90716 217.368 9.19516C216.888 9.46716 216.512 9.85916 216.24 10.3712C215.968 10.8672 215.832 11.4592 215.832 12.1472V12.7232C215.832 13.4272 215.984 14.0512 216.288 14.5952C216.608 15.1232 217.048 15.5312 217.608 15.8192C218.184 16.0912 218.856 16.2272 219.624 16.2272C220.312 16.2272 220.912 16.1232 221.424 15.9152C221.952 15.7072 222.432 15.3952 222.864 14.9792L224.856 17.1392C224.264 17.8112 223.52 18.3312 222.624 18.6992C221.728 19.0512 220.696 19.2272 219.528 19.2272ZM235.148 5.93116C236.172 5.93116 237.084 6.13916 237.884 6.55516C238.7 6.95516 239.34 7.57916 239.804 8.42716C240.268 9.25916 240.5 10.3312 240.5 11.6432V19.0352H236.756V12.2192C236.756 11.1792 236.524 10.4112 236.06 9.91516C235.612 9.41916 234.972 9.17116 234.14 9.17116C233.548 9.17116 233.012 9.29916 232.532 9.55516C232.068 9.79516 231.7 10.1712 231.428 10.6832C231.172 11.1952 231.044 11.8512 231.044 12.6512V19.0352H227.3V6.12316H230.876V9.69916L230.204 8.61916C230.668 7.75516 231.332 7.09116 232.196 6.62716C233.06 6.16316 234.044 5.93116 235.148 5.93116Z"
            fill="#858446" />
          <path
            d="M66.8165 48.0352L61.3204 31.2352H65.3525L70.1285 46.1152H68.1125L73.1045 31.2352H76.7045L81.5045 46.1152H79.5605L84.4565 31.2352H88.1765L82.6805 48.0352H78.5045L74.2565 34.9792H75.3605L70.9925 48.0352H66.8165ZM96.082 48.0352V45.5152L95.842 44.9632V40.4512C95.842 39.6512 95.594 39.0272 95.098 38.5792C94.618 38.1312 93.874 37.9072 92.866 37.9072C92.178 37.9072 91.498 38.0192 90.826 38.2432C90.17 38.4512 89.61 38.7392 89.146 39.1072L87.802 36.4912C88.506 35.9952 89.354 35.6112 90.346 35.3392C91.338 35.0672 92.346 34.9312 93.37 34.9312C95.338 34.9312 96.866 35.3952 97.954 36.3232C99.042 37.2512 99.586 38.6992 99.586 40.6672V48.0352H96.082ZM92.146 48.2272C91.138 48.2272 90.274 48.0592 89.554 47.7232C88.834 47.3712 88.282 46.8992 87.898 46.3072C87.514 45.7152 87.322 45.0512 87.322 44.3152C87.322 43.5472 87.506 42.8752 87.874 42.2992C88.258 41.7232 88.858 41.2752 89.674 40.9552C90.49 40.6192 91.554 40.4512 92.866 40.4512H96.298V42.6352H93.274C92.394 42.6352 91.786 42.7792 91.45 43.0672C91.13 43.3552 90.97 43.7152 90.97 44.1472C90.97 44.6272 91.154 45.0112 91.522 45.2992C91.906 45.5712 92.426 45.7072 93.082 45.7072C93.706 45.7072 94.266 45.5632 94.762 45.2752C95.258 44.9712 95.618 44.5312 95.842 43.9552L96.418 45.6832C96.146 46.5152 95.65 47.1472 94.93 47.5792C94.21 48.0112 93.282 48.2272 92.146 48.2272ZM102.015 48.0352V35.1232H105.591V38.7712L105.087 37.7152C105.471 36.8032 106.087 36.1152 106.935 35.6512C107.783 35.1712 108.815 34.9312 110.031 34.9312V38.3872C109.871 38.3712 109.727 38.3632 109.599 38.3632C109.471 38.3472 109.335 38.3392 109.191 38.3392C108.167 38.3392 107.335 38.6352 106.695 39.2272C106.071 39.8032 105.759 40.7072 105.759 41.9392V48.0352H102.015ZM116.747 48.2272C115.531 48.2272 114.435 47.9552 113.459 47.4112C112.483 46.8512 111.707 46.0752 111.131 45.0832C110.571 44.0912 110.291 42.9232 110.291 41.5792C110.291 40.2192 110.571 39.0432 111.131 38.0512C111.707 37.0592 112.483 36.2912 113.459 35.7472C114.435 35.2032 115.531 34.9312 116.747 34.9312C117.835 34.9312 118.787 35.1712 119.603 35.6512C120.419 36.1312 121.051 36.8592 121.499 37.8352C121.947 38.8112 122.171 40.0592 122.171 41.5792C122.171 43.0832 121.955 44.3312 121.523 45.3232C121.091 46.2992 120.467 47.0272 119.651 47.5072C118.851 47.9872 117.883 48.2272 116.747 48.2272ZM117.395 45.1552C118.003 45.1552 118.555 45.0112 119.051 44.7232C119.547 44.4352 119.939 44.0272 120.227 43.4992C120.531 42.9552 120.683 42.3152 120.683 41.5792C120.683 40.8272 120.531 40.1872 120.227 39.6592C119.939 39.1312 119.547 38.7232 119.051 38.4352C118.555 38.1472 118.003 38.0032 117.395 38.0032C116.771 38.0032 116.211 38.1472 115.715 38.4352C115.219 38.7232 114.819 39.1312 114.515 39.6592C114.227 40.1872 114.083 40.8272 114.083 41.5792C114.083 42.3152 114.227 42.9552 114.515 43.4992C114.819 44.0272 115.219 44.4352 115.715 44.7232C116.211 45.0112 116.771 45.1552 117.395 45.1552ZM120.779 48.0352V45.3952L120.851 41.5552L120.611 37.7392V30.2272H124.355V48.0352H120.779ZM135.649 48.0352L130.993 35.1232H134.521L138.385 46.2352H136.705L140.737 35.1232H143.905L147.817 46.2352H146.137L150.121 35.1232H153.433L148.753 48.0352H145.129L141.697 38.5072H142.801L139.249 48.0352H135.649ZM161.712 48.0352V45.5152L161.472 44.9632V40.4512C161.472 39.6512 161.224 39.0272 160.728 38.5792C160.248 38.1312 159.504 37.9072 158.496 37.9072C157.808 37.9072 157.128 38.0192 156.456 38.2432C155.8 38.4512 155.24 38.7392 154.776 39.1072L153.432 36.4912C154.136 35.9952 154.984 35.6112 155.976 35.3392C156.968 35.0672 157.976 34.9312 159 34.9312C160.968 34.9312 162.496 35.3952 163.584 36.3232C164.672 37.2512 165.216 38.6992 165.216 40.6672V48.0352H161.712ZM157.776 48.2272C156.768 48.2272 155.904 48.0592 155.184 47.7232C154.464 47.3712 153.912 46.8992 153.528 46.3072C153.144 45.7152 152.952 45.0512 152.952 44.3152C152.952 43.5472 153.136 42.8752 153.504 42.2992C153.888 41.7232 154.488 41.2752 155.304 40.9552C156.12 40.6192 157.184 40.4512 158.496 40.4512H161.928V42.6352H158.904C158.024 42.6352 157.416 42.7792 157.08 43.0672C156.76 43.3552 156.6 43.7152 156.6 44.1472C156.6 44.6272 156.784 45.0112 157.152 45.2992C157.536 45.5712 158.056 45.7072 158.712 45.7072C159.336 45.7072 159.896 45.5632 160.392 45.2752C160.888 44.9712 161.248 44.5312 161.472 43.9552L162.048 45.6832C161.776 46.5152 161.28 47.1472 160.56 47.5792C159.84 48.0112 158.912 48.2272 157.776 48.2272ZM172.924 48.2272C171.404 48.2272 170.22 47.8432 169.372 47.0752C168.524 46.2912 168.1 45.1312 168.1 43.5952V32.2672H171.844V43.5472C171.844 44.0912 171.988 44.5152 172.276 44.8192C172.564 45.1072 172.956 45.2512 173.452 45.2512C174.044 45.2512 174.548 45.0912 174.964 44.7712L175.972 47.4112C175.588 47.6832 175.124 47.8912 174.58 48.0352C174.052 48.1632 173.5 48.2272 172.924 48.2272ZM166.108 38.2912V35.4112H175.06V38.2912H166.108ZM182.955 48.2272C181.563 48.2272 180.323 47.9472 179.235 47.3872C178.147 46.8112 177.291 46.0192 176.667 45.0112C176.059 44.0032 175.755 42.8592 175.755 41.5792C175.755 40.2832 176.059 39.1392 176.667 38.1472C177.291 37.1392 178.147 36.3552 179.235 35.7952C180.323 35.2192 181.563 34.9312 182.955 34.9312C184.315 34.9312 185.499 35.2192 186.507 35.7952C187.515 36.3552 188.259 37.1632 188.739 38.2192L185.835 39.7792C185.499 39.1712 185.075 38.7232 184.563 38.4352C184.067 38.1472 183.523 38.0032 182.931 38.0032C182.291 38.0032 181.715 38.1472 181.203 38.4352C180.691 38.7232 180.283 39.1312 179.979 39.6592C179.691 40.1872 179.547 40.8272 179.547 41.5792C179.547 42.3312 179.691 42.9712 179.979 43.4992C180.283 44.0272 180.691 44.4352 181.203 44.7232C181.715 45.0112 182.291 45.1552 182.931 45.1552C183.523 45.1552 184.067 45.0192 184.563 44.7472C185.075 44.4592 185.499 44.0032 185.835 43.3792L188.739 44.9632C188.259 46.0032 187.515 46.8112 186.507 47.3872C185.499 47.9472 184.315 48.2272 182.955 48.2272ZM197.713 34.9312C198.737 34.9312 199.649 35.1392 200.449 35.5552C201.265 35.9552 201.905 36.5792 202.369 37.4272C202.833 38.2592 203.065 39.3312 203.065 40.6432V48.0352H199.321V41.2192C199.321 40.1792 199.089 39.4112 198.625 38.9152C198.177 38.4192 197.537 38.1712 196.705 38.1712C196.113 38.1712 195.577 38.2992 195.097 38.5552C194.633 38.7952 194.265 39.1712 193.993 39.6832C193.737 40.1952 193.609 40.8512 193.609 41.6512V48.0352H189.865V30.2272H193.609V38.6992L192.769 37.6192C193.233 36.7552 193.897 36.0912 194.761 35.6272C195.625 35.1632 196.609 34.9312 197.713 34.9312Z"
            fill="#07090D" />
          <defs>
            <clipPath id="clip0_7_723">
              <rect width="48.1076" height="48.1076" fill="white" transform="translate(0.684845 0.981323)" />
            </clipPath>
          </defs>
        </svg>
      </a>

      <div class="hidden md:flex items-center gap-3 font-medium text-sm text-primary-gray">
        <a class="hover:text-black" href="/">Home</a>
        <a class="hover:text-black" href="">About</a>
        <a class="hover:text-black" href="">Services</a>
        <a class="hover:text-black" href="#">Resources</a>
        <a class="hover:text-black" href="#">Contact</a>
      </div>

      <button class="cta-btn hidden md:flex">
        Login</button>

      <div class="sidebar-toggle flex md:hidden items-center justify-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
          <path
            d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z">
          </path>
        </svg>
      </div>

    </nav>
  </header>
    `;

    document.querySelectorAll(".sidebar-toggle").forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelector("#sidebar").closest("section").classList.toggle("show-sidebar")
      })

    })
  }


};


customElements.define("header-main", HeaderMain)

